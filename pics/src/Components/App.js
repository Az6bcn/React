import React from 'react';
// ../ : go up one out of the current directory
import unsplash from '../Api/unsplash';
import { SearchBar } from './SearchBar';
import ImageList from './ImageList';

// root component
export default class App extends React.Component {
  state = { images: [] };
  async onSearchSubmit(criteria) {
    // make http request to search for photos
    const response = await unsplash.get('https://api.unsplash.com/search/photos', {
      params: { query: criteria },
    });

    this.setState({
      images: response.data.results,
    });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar
          // we pass in a callback method we want run when the prop ('whenSearchCriteriaSubmit') is called.
          whenSearchCriteriaSubmit={(criteria) => this.onSearchSubmit(criteria)}
        />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
