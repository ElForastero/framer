import { css } from 'styled-components';
import browser from 'webextension-polyfill';

const robotoRegular = browser.extension.getURL('assets/fonts/Roboto-Regular.ttf');
const robotoMedium = browser.extension.getURL('assets/fonts/Roboto-Medium.ttf');

const styles = css`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.font.primary};

  @font-face {
    font-family: Roboto;
    src: url(${robotoRegular}) url(${robotoMedium});
  }
`;

export default styles;
