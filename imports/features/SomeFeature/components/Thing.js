import React, { Component, PropTypes } from 'react';
import prebind from 'meteor-react-prebind';

import { someAction } from '/imports/redux/actions';

class Thing extends Component {
  constructor(props) {
    super(props);
    prebind(this);
  }

  showProps() {
    console.log(this.props);
  }

  render() {
    return <div style={{ display: 'inline' }}>
      <button onClick={this.showProps}>Dump props</button>
    </div>
  }
}

Thing.propTypes = {};

export default Thing;
