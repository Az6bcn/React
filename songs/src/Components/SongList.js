import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectSongActionCreator } from '../Actions';
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.SelectSongActionCreator(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// its going to be called with state object from the store and maps it to the whatever
// we want according to what we return from this method. The returned object that will
// show up as a prop inside of this component.
const mapStateToProps = (state) => {
  // state: all the data in our Redux store
  console.log('state', state);
  return { songs: state.songs }; // the props in this component will be == to the object returned here.
};

// Define and configure Connect Component that will communicate with Provider to tell it
// the specific data we want from the Redux store and everytime the state changes the Provider will
// automatically notify our Connect
// The Connect is going to pass the state down to this Component as a prop.
// The Connect wired up the Action Creator we need, and pass it down to our Component as prop.
// The connect automatically calls the Dispatch(our_ActionCreators) for us with the Action Creators we configuring it with
// And when we call the Action Creator in this Component through the props, Connect will automatically call the Dispatch(our_ActionCreator) for us with that Action Creator
export default connect(
  mapStateToProps,
  // pass the Action Creators to connect
  { SelectSongActionCreator }
)(SongList);

// function connect() {
//     return function() {
//         return 'Hi There!'
//     }
// };

// connect() => returns a function
// connect() () => returns a function, and invokes the inner function
