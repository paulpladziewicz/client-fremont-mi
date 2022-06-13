import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'redux-toolkit/store';
import { Auth } from 'components';
import 'styles/tailwind.css';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </Provider>
  );
}

export default MyApp;
