import browser from 'webextension-polyfill';

export default value => {
  const rtf = new Intl.RelativeTimeFormat(browser.i18n.getUILanguage(), {
    style: 'long',
    numeric: 'auto',
  });
  const date = new Date(value);
  const now = new Date();

  if (date.getFullYear() === now.getFullYear()) {
    if (date.getMonth() === now.getMonth()) {
      const days = now.getDate() - date.getDate();

      if (days < 7) {
        return rtf.format(-days, 'day');
      }

      return rtf.format(-(days / 7), 'week');
    }

    const months = now - date / 1000 / 60 / 60 / 24 / 30;

    return rtf.format(-months, 'month');
  }

  return rtf.format(-(now.getFullYear() - date.getFullYear()), 'year');
};
