import React from "react";
import { Row, Col, Button } from "reactstrap";
import Snippet from "./Snippet";

class Notebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { snipId: null };
    this.updateViewSnippet = this.updateViewSnippet.bind(this);
    this.viewAllClick = this.viewAllClick.bind(this);
    this.removeSnippet = this.removeSnippet.bind(this);
    this.updateSnippet = this.updateSnippet.bind(this);
    //    this.onClick = this.onClick.bind(this);
  }
  findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }
  updateViewSnippet(snippetId) {
    this.props.updateViewSnippetId(snippetId);
    var snip = this.findWithAttr(this.props.snippets, "id", snippetId);
    this.setState({ snipId: snip });
  }

  viewAllClick() {
    this.props.updateViewSnippetId(null);
  }

  updateSnippet(sid) {
    var snippetIndex = this.findWithAttr(this.props.snippets, "id", sid);
    console.dir(this.props.snippets[snippetIndex]);
  }

  removeSnippet(sid) {
    var snippetIndex = this.findWithAttr(this.props.snippets, "id", sid);
    this.props.snippets.splice(snippetIndex, 1);
    this.viewAllClick();
  }
  render() {
    return (
      <Row>
        <Col>
          <div className="Main">
            <div className="main-menu">
              {this.props.vsnipid ? (
                <Button color="success" onClick={this.viewAllClick}>
                  View All
                </Button>
              ) : (
                <Button color="secondary" disabled={true}>
                  View All
                </Button>
              )}
            </div>
            <div className="viewList">
              {this.props.vsnipid ? (
                <Snippet
                  onDeleteSnippet={this.removeSnippet}
                  onEditSnippet={this.updateSnippet}
                  onClickSnippet={this.updateViewSnippet}
                  snippet={this.props.snippets[this.state.snipId]}
                />
              ) : (
                this.props.snippets.map((snippet) => (
                  <Snippet
                    onDeleteSnippet={this.removeSnippet}
                    onEditSnippet={this.updateSnippet}
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
