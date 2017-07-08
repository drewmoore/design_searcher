import sinon   from 'sinon';
import path    from 'path';
import fs      from 'fs';
import Fetcher from '../helpers/fetcher';

// Stub all requests for designs from API. Read sample response
// stored on disk in json. Have fetch return this data in a promise.
export const stubFetch = () => {
  sinon.stub(Fetcher, 'fetch');
  const sampleDataPath = path.join(__dirname, 'sample_response.json');
  const response = new window.Response(
    fs.readFileSync(sampleDataPath, 'utf8'),
    {
      status:  200,
      headers: { 'Content-type': 'application/json' }
    }
  );
  Fetcher.fetch.returns(Promise.resolve(response));
};

// Restore fetch's original functionality.
export const restoreFetch = () => {
  Fetcher.fetch.restore();
};
