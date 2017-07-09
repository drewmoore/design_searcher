import React, { Component } from 'react';
import deepEqual            from 'deep-equal';
import DesignsItemContainer from '../../containers/designs/item';

export default class DesignsList extends Component {
  render() {
    return (
      <div>
        {this.props.isFetching &&
          <strong>Please wait while we find designs ...</strong>
        }
        {this.props.error &&
          <em>We're sorry, but there was an error retrieving designs.</em>
        }
        {this.props.designs.map(design =>(
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
