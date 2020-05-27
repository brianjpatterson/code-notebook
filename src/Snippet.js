import React from "react";
import { Card, CardBody, CardTitle, Button, ButtonGroup } from "reactstrap";

class Snippet extends React.Component {
  snippetAction = (action, snippetUUID) =>
    this.props.onSnippetAction(action, snippetUUID);

  render() {
    return (
      <Card>
        <CardBody
          onClick={(e) => this.snippetAction("view", e.currentTarget.id)}
          id={this.props.snippet.id}
        >
          <CardTitle>{this.props.snippet.title}</CardTitle>
        </CardBody>
        <ButtonGroup>
          <Button
            id={this.props.snippet.id}
            onClick={(e) => this.snippetAction("edit", e.currentTarget.id)}
            color="primary"
            size="xs"
          >
            Edit
          </Button>

          <Button
            id={this.props.snippet.id}
            onClick={(e) => this.snippetAction("delete", e.currentTarget.id)}
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
