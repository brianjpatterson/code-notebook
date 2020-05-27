import React from "react";
import { Card, CardBody, CardTitle, Button, ButtonGroup } from "reactstrap";

class Snippet extends React.Component {
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
        </CardBody>
        <ButtonGroup>
          <Button
            id={this.props.snippet.id}
            onClick={this.editSnippet}
            color="primary"
            size="xs"
          >
            Edit
          </Button>

          <Button
            id={this.props.snippet.id}
            onClick={this.deleteSnippet}
            color="danger"
            size="xs"
          >
            Delete
          </Button>
        </ButtonGroup>
      </Card>
    );
  }
}

export default Snippet;
