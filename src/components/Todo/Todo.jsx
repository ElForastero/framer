import React, { Fragment, useContext, useState } from 'react';
import browser from 'webextension-polyfill';
import { ThemeProvider } from 'styled-components';
import invertTheme from 'theme/invertTheme';
import Input from 'components/Input';
import Checkbox from 'components/Checkbox';
import DateLabel from 'components/DateLabel';
import Button from 'components/Button';
import Control from 'components/Control';
import Box from 'components/Box';
import Dialog from 'components/Dialog';
import { TodoContext, ADD_TODO, REMOVE_TODO, REMOVE_ALL, TOGGLE_DONE } from 'context/Todo';
import TrashIcon from 'assets/icons/trash.svg';
import TrashIcon2 from 'assets/icons/trash-2.svg';
import EyeIcon from 'assets/icons/eye.svg';
import EyeOffIcon from 'assets/icons/eye-off.svg';
import SettingsIcon from 'assets/icons/sliders.svg';
import Item from './Item';
import Text from './Text';
import groupItemsByDate from './groupItemsByDate';

export default () => {
  const [value, setValue] = useState('');
  const [items, dispatch] = useContext(TodoContext);
  const [hideDone, toggleDone] = useState(false);
  const [showDialog, toggleDialog] = useState(false);

  const handleInputChange = ({ target: { value } }) => setValue(value);
  const markAsDone = id => () => dispatch({ type: TOGGLE_DONE, payload: id });
  const removeItem = id => () => dispatch({ type: REMOVE_TODO, payload: id });
  const removeAllItems = () => {
    dispatch({ type: REMOVE_ALL });
    toggleDialog(false);
  };
  const addItem = ({ target: { value }, key }) => {
    if (key.toLowerCase() === 'enter' && value.trim().length > 0) {
      dispatch({ type: ADD_TODO, payload: value.trim() });
      setValue('');
    }
  };

  const groupedItems = groupItemsByDate(items, hideDone);

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box flexShrink="0" mb={4}>
        <Input
          autoFocus
          placeholder={browser.i18n.getMessage('placeholder')}
          onKeyPress={addItem}
          value={value}
          onChange={handleInputChange}
        />
      </Box>
      <Box overflowY="auto" flexGrow="1">
        {Object.keys(groupedItems).map(date => (
          <Fragment>
            <Box mb={2}>
              <DateLabel>{date}</DateLabel>
            </Box>
            {groupedItems[date].map(({ id, text, isDone }) => (
              <Item key={id} done={isDone}>
                <Box flexShrink="0" height="100%" mr={2}>
                  <Checkbox checked={isDone} onChange={markAsDone(id)} />
                </Box>
                <Text title={text}>{text}</Text>
                <Control onClick={removeItem(id)}>
                  <TrashIcon />
                </Control>
              </Item>
            ))}
          </Fragment>
        ))}
      </Box>
      {items.length > 0 && (
        <Box display="flex" flexShrink="0" mt={2}>
          <Button onClick={() => toggleDialog(true)}>
            <TrashIcon2 />
          </Button>
          <Box width={3} flexShrink={0} />
          <Button onClick={() => toggleDone(!hideDone)}>
            {hideDone ? <EyeOffIcon /> : <EyeIcon />}
          </Button>
          <Box width={3} flexShrink={0} />
          <Button onClick={() => browser.runtime.sendMessage({ greeting: 'showOptionsPage' })}>
            <SettingsIcon />
          </Button>
        </Box>
      )}
      {showDialog && (
        <Dialog open={showDialog}>
          {browser.i18n.getMessage('deleteConfirmation')}
          <Box display="flex" mt={3}>
            <ThemeProvider theme={invertTheme}>
              <Button onClick={removeAllItems}>{browser.i18n.getMessage('deleteAll')}</Button>
              <Box width={3} flexShrink={0} />
              <Button onClick={() => toggleDialog(false)}>
                {browser.i18n.getMessage('cancel')}
              </Button>
            </ThemeProvider>
          </Box>
        </Dialog>
      )}
    </Box>
  );
};
