import fetch from 'isomorphic-fetch';

// Module for wrapping isomorphic-fetch. This allows stubbing in tests.
export default class Fetcher {
  static fetch(url, options) {
    return fetch(url, options);
  }
};
