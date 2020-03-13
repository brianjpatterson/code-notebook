import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class Snippet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = event => {
    let snippetId = event.currentTarget.querySelector(".card-subtitle")
      .innerText;
    this.setState({ viewSnippetId: snippetId });
  };

  render() {
    return (
      <Card id={this.props.snippet.id}>
        <CardBody onClick={this.handleClick}>
          <CardTitle>Static Title</CardTitle>
          <CardSubtitle>{this.props.snippet.id}</CardSubtitle>
          <CardText>Static Content</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Snippet;
