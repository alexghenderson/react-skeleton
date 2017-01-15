/* global navigator */
import {createElement} from 'react';
import {Provider} from 'react-redux';
import {IntlProvider, addLocaleData} from 'react-intl';

import en from 'react-intl/locale-data/en';

import * as localeData from 'data/locale';

import Routes from './routes';

export default ({store}) => {
  addLocaleData([...en]);

  const locale = (navigator.languages && navigator.languages[0])
    || navigator.language || navigator.userLanguage || 'en';

  const lang = locale.toLowerCase().split(/[_-]+/)[0];

  const messages = localeData[lang] || localeData[locale] || localeData.en;

  return (
    <IntlProvider locale={lang} messages={messages}>
      <Provider store={store}>
        <Routes store={store}/>
      </Provider>
    </IntlProvider>
  );
};
