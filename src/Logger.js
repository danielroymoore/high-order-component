import React from "react";

const withLogger = WrappedComponent => {
  class HocLogger extends React.Component {
    log = message => {
      console.log(message);
    };

    render() {
      return <WrappedComponent log={this.log} {...this.props} />;
    }
  }

  return HocLogger;
};

export default withLogger;
