import React from 'react';

export class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit(event) {
    // prevent browser from trying to submit the form automatically
    event.preventDefault();

    // access the props, reference to the function passed into this component as props 
    // i.e when prop('whenSearchCriteriaSubmit') is called the callback function assigned to it is ran
    this.props.whenSearchCriteriaSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className="ui form"
        >
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}
