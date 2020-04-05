import React from "react";
import { Row, Col, Button } from "reactstrap";
import Snippet from "./Snippet";

class Notebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewSnippetId: null, snipId: null };
    this.updateViewSnippet = this.updateViewSnippet.bind(this);
    this.viewAllClick = this.viewAllClick.bind(this);
    //    this.onClick = this.onClick.bind(this);
  }

  updateViewSnippet(snippetId) {
    function findWithAttr(array, attr, value) {
      for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    }
    this.setState({ viewSnippetId: snippetId });
    var snip = findWithAttr(this.props.snippets, "id", snippetId);
    this.setState({ snipId: snip });
  }

  viewAllClick() {
    this.setState({ viewSnippetId: null });
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="Main">
            <div className="main-menu">
              {this.state.viewSnippetId ? (
                <Button variant="primary" onClick={this.viewAllClick}>
                  View All
                </Button>
              ) : (
                <Button variant="primary" disabled>
                  View All
                </Button>
              )}
            </div>
            <div className="viewList">
              {this.state.viewSnippetId ? (
                <Snippet snippet={this.props.snippets[this.state.snipId]} />
              ) : (
                this.props.snippets.map((snippet) => (
                  <Snippet
                    onClickSnippet={this.updateViewSnippet}
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
