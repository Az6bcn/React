import React, { Component } from 'react';
import { Jumbotron, Form } from 'react-bootstrap';
import { ISearchBarState } from '../../../src/Models/SearchBar/ISearchBarState';
import { ISearchBarProps } from '../../Models/SearchBar/ISearchBarProps';

export default class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  state = { criteria: '' };

  render() {
    return (
      <Jumbotron>
        <Form onSubmit={(event) => this.onSearchInputSubmit(event)}>
          <Form.Group controlId="searchBarInput">
            <Form.Control
              type="text"
              placeholder="Search video"
              value={this.state.criteria}
              onChange={(event) => this.setState({ criteria: event.target.value })}
            />
          </Form.Group>
        </Form>
      </Jumbotron>
    );
  }

  onSearchInputSubmit(event) {
    event.preventDefault();

    //  send to Parent to make request with the criteria
    this.props.whenSearchCriteriaSubmitted(this.state.criteria);
  }
}
