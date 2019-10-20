import React, { Fragment, useContext } from 'react';
import browser from 'webextension-polyfill';
import Box from 'components/Box';
import Switch from 'components/Switch';
import Radio from 'components/Radio';
import { OptionsContext } from 'context/Options';

const OptionsForm = () => {
  const [options, update] = useContext(OptionsContext);

  const updateButtonSize = ({ target: { value } }) => update({ ...options, buttonSize: value });

  return (
    <Fragment>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        {browser.i18n.getMessage('darkMode')}:
        <Switch
          onChange={darkMode => update({ ...options, darkMode })}
          checked={options.darkMode}
        />
      </Box>
      <Box display="flex" flexDirection="column" mt={3}>
        {browser.i18n.getMessage('buttonSize')}:
        <Box as="label" display="flex" mt={2} ml={2} mb={1}>
          <Box display="flex" alignItems="center" mr={2}>
            <Radio
              name="button-size"
              value="small"
              defaultChecked={options.buttonSize === 'small'}
              onChange={updateButtonSize}
            />
          </Box>
          {browser.i18n.getMessage('small')}
        </Box>
        <Box as="label" display="flex" ml={2} mb={1}>
          <Box display="flex" alignItems="center" mr={2}>
            <Radio
              name="button-size"
              value="medium"
              defaultChecked={options.buttonSize === 'medium'}
              onChange={updateButtonSize}
            />
          </Box>
          {browser.i18n.getMessage('medium')}
        </Box>
        <Box as="label" display="flex" ml={2} mb={1}>
          <Box display="flex" alignItems="center" mr={2}>
            <Radio
              name="button-size"
              value="large"
              defaultChecked={options.buttonSize === 'large'}
              onChange={updateButtonSize}
            />
          </Box>
          {browser.i18n.getMessage('large')}
        </Box>
      </Box>
    </Fragment>
  );
};

export default OptionsForm;
