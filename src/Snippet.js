import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ButtonGroup,
} from "reactstrap";

class Snippet extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteSnippet = (event) => {
    this.props.onDeleteSnippet(event.currentTarget.id);
  };

  editSnippet = (event) => {
    this.props.onEditSnippet(event.currentTarget.id);
  };

  handleClick = (event) => {
    this.props.onClickSnippet(event.currentTarget.id);
  };

  render() {
    return (
      <Card>
        <CardBody onClick={this.handleClick} id={this.props.snippet.id}>
          <CardTitle>{this.props.snippet.title}</CardTitle>
          <CardSubtitle>{this.props.snippet.id}</CardSubtitle>
          <CardText>{this.props.snippet.content}</CardText>
        </CardBody>
        <ButtonGroup>
          <Button
            id={this.props.snippet.id}
            onClick={this.editSnippet}
            color="primary"
            size="sm"
          >
            Edit
          </Button>

          <Button
            id={this.props.snippet.id}
            onClick={this.deleteSnippet}
            color="danger"
            size="sm"
          >
            Delete
          </Button>
        </ButtonGroup>
      </Card>
    );
  }
}

export default Snippet;
