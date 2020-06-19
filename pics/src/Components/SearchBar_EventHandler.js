import React from 'react';

export class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClicked(event) {
    console.log('I was clicked');
  }

  onFormSubmit = (event) => {
    console.log('I was clicked');
  }

  render() {
    return (
      <div className="ui segment">
        <form
        onSubmit = {this.onFormSubmit} // this will be preserved in the callback beacuse we're assigning an arrow function to the callback, 
        // even tho we are passing in the callback function reference
        className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onClick={(event) => this.onInputClicked(event)} // this context is preserved bcos we passing in a arrow function
              onChange={this.onInputChange} //this context will be lost in the callback (passing the callback function reference)
            />
          </div>
        </form>
      </div>
    );
  }
}

//onChange = { this.onInputChange } :
// we pass a callback function to be called when onChange event is triggered on the input element
// onInputChange(event) when called will receive the event object that contains info about the event that just occurred
