import {createElement} from 'react';
import {injectIntl} from 'react-intl';
import Helmet from 'react-helmet';

import styles from './app.css';

const App = ({intl}) => {
  const title = intl.formatMessage({
    id: 'app/document/title',
    defaultMessage: 'Sample Page',
  });

  return (
    <div className={styles.app}>
      <Helmet htmlAttributes={{lang: intl.locale}} title={title}/>
    </div>
  );
};

export default injectIntl(App);
