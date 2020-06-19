import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // listen to the event thats emitted when an image has finished load i.e appearing on the screen
    // this will prevent us from getting null/0 values when trying to access the image properties before its loaded
    this.imageRef.current.addEventListener('load', (event) =>
      this.setSpans(event)
    );
  }

  setSpans(event) {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  }

  render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
