import React, { Component } from 'react';
import deepEqual            from 'deep-equal';
import DesignsItemContainer from '../../containers/designs/item';

export default class DesignsList extends Component {
  render() {
    return (
      <div className="row pad-top">
        {this.props.isFetching &&
          <div className="col-xs-12 well text-center">
            <strong>Please wait while we find designs ...</strong>
          </div>
        }
        {this.props.error &&
          <div className="col-xs-12 well text-center">
            <em className="alert">We're sorry, but there was an error retrieving designs.</em>
          </div>
        }
        {!this.props.isFetching && this.props.designs.map(design =>(
          <DesignsItemContainer key={design.id} {...design} />
        ))}
      </div>
    );
  }

  componentWillMount() {
    if (!this.props.designs.length && !this.props.isFetching) {
      this.props.fetch(this.props.filters);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!deepEqual(this.props.filters, prevProps.filters)) {
      this.props.fetch(this.props.filters);
    }
  }
};
