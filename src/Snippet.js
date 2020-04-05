import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

class Snippet extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
    this.props.onClickSnippet(event.currentTarget.id);
  };

  render() {
    // console.log(
    //  "snippet comp render -> this.props.snippet.id: " + this.props.snippet.id
    //   );
    return (
      <Card onClick={this.handleClick} id={this.props.snippet.id}>
        <CardBody>
          <CardTitle>Static Title</CardTitle>
          <CardSubtitle>{this.props.snippet.id}</CardSubtitle>
          <CardText>Static Content</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Snippet;
