import 'libs/polyfills';
import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener(async msg => {
  if (msg.greeting === 'updateBadge') {
    browser.browserAction.setBadgeText({ text: msg.text });
  } else if (msg.greeting === 'showOptionsPage') {
    browser.runtime.openOptionsPage();
  }
});
