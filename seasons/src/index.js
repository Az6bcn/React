import React from 'react';
import reactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  // React says we have to define render!!
  render() {
    return <div className="solid red">{this.renderContent()}</div>;
  }

  // good place to do data loading/fetching
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const lat = position.coords.latitude;
        // we call setState to update our component!!
        this.setState({ lat });
      },
      (error) => {
        console.log(error);
        const errorMessage = error.message;
        this.setState({ errorMessage });
      }
    );
  }

  // good place to do data loading/fetching every single time that a user interact with our UI
  componentDidUpdate() {
    console.log('My compoent was just updated - it rerendered');
  }

  componentWillMount() {}
}

reactDOM.render(<App />, document.querySelector('#root'));
