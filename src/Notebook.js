import React from "react";
import { Row, Col, Button } from "reactstrap";
import Snippet from "./Snippet";

class Notebook extends React.Component {
  viewAllSnippets = () => {
    this.props.onSetActiveSnippet(null);
    this.props.onClearInputs();
  };

  viewSnippet = (snippetUUID) => this.props.onSetActiveSnippet(snippetUUID);

  editSnippet = (snippetUUID) => this.props.onEditSnippet(snippetUUID);

  removeSnippet = (snippetUUID) => {
    this.props.onSetActiveSnippet(snippetUUID);
    let index = this.props.activeSnippetIndex;
    this.props.snippets.splice(index, 1);
    this.viewAllSnippets();
  };
  render() {
    return (
      <Row>
        <Col>
          <div className="Main">
            <div className="main-menu">
              {this.props.activeSnippetUUID ? (
                <Button color="success" onClick={this.viewAllSnippets}>
                  &lt;&nbsp;BACK
                </Button>
              ) : (
                <div>&nbsp;</div>
              )}
            </div>
            <div className="viewList">
              {this.props.activeSnippetIndex ? (
                <Snippet
                  onDeleteSnippet={this.removeSnippet}
                  onEditSnippet={this.editSnippet}
                  onClickSnippet={this.viewSnippet}
                  snippet={this.props.snippets[this.props.activeSnippetIndex]}
                />
              ) : (
                this.props.snippets.map((snippet) => (
                  <Snippet
                    onDeleteSnippet={this.removeSnippet}
                    onEditSnippet={this.editSnippet}
                    onClickSnippet={this.viewSnippet}
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
