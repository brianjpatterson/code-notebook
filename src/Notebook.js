import React from "react";
import { Row, Col, Button } from "reactstrap";
import Snippet from "./Snippet";

class Notebook extends React.Component {
  snippetAction = (action, snippetUUID) =>
    this.props.onSnippetAction(action, snippetUUID);

  render() {
    return (
      <Row>
        <Col>
          <div className="Main">
            <div className="main-menu">
              {this.props.activeSnippetUUID ? (
                <Button
                  color="success"
                  onClick={(e) => this.props.onSnippetAction("view", null)}
                >
                  &lt;&nbsp;BACK
                </Button>
              ) : (
                <div>&nbsp;</div>
              )}
            </div>
            <div className="viewList">
              {this.props.activeSnippetIndex ? (
                <Snippet
                  onSnippetAction={this.snippetAction}
                  snippet={this.props.snippets[this.props.activeSnippetIndex]}
                />
              ) : (
                this.props.snippets.map((snippet) => (
                  <Snippet
                    onSnippetAction={this.snippetAction}
                    key={snippet.id}
                    snippet={snippet}
                  />
                ))
              )}
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Notebook;
