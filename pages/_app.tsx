/* eslint-disable @typescript-eslint/camelcase */
import App from 'next/app';
import React from 'react';

import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import configureStore from '../src/stores/rootStore';

import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';

import NProgress from 'nprogress';
import Router from 'next/router';
import Layout from 'src/layout';

NProgress.configure({
  showSpinner: true,
});
const startProgress = () => NProgress.start();
const stopProgress = (timer) => {
  clearTimeout(timer);
  NProgress.done();
};

const showProgressBar = (delay) => {
  const timer = setTimeout(startProgress, delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

Router.events.on('routeChangeStart', () => showProgressBar(1));

Router.events.on('routeChangeComplete', (_url: string) => {
  console.log('Change Route');
});

const { store, persistor } = configureStore();

const makeStore = () => {
  return store;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class MyApp extends App<any, any> {
  render() {
    const { Component } = this.props;

    return (
      <>
        <Head>
          <title>간단 테스트 앱</title>
          <meta name="description" content="달력 수정 앱" />
        </Head>

        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout persistor={persistor}>
              <Component />
            </Layout>
          </PersistGate>
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore)(withReduxSaga(MyApp));
