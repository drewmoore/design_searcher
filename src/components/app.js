import React                from 'react';
import FiltersFormContainer from '../containers/filters/form';
import DesignsListContainer from '../containers/designs/list';
import '../style.scss';

const App = () => (
  <div className="container">
    <section className="row pad-top">
      <div className="col-xs-12">
        <FiltersFormContainer />
        <hr />
        <DesignsListContainer />
      </div>
    </section>
  </div>
);

export default App;
