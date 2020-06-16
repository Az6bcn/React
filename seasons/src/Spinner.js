import React from 'react';

const Spinner = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}</div>
    </div>
  );
};

// if we use our spinner and don't pass in a message prop,
//it'll be provided a default message prop and use the deafult mmessage prop
Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
