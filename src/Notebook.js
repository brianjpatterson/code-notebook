import React from "react";
import { Row, Col } from "reactstrap";
import Snippet from "./Snippet";

class Notebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewSnippetId: null, snipId: null };
    this.updateViewSnippet = this.updateViewSnippet.bind(this);
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
    console.log("view snippet -> snippetId: " + snippetId);
    this.setState({ viewSnippetId: snippetId });
    var snip = findWithAttr(this.props.snippets, "id", snippetId);
    console.log(snip);
    this.setState({ snipId: snip });
  }

  render() {
    //  console.log("snipid: " + this.state.snipId);
    // console.log("notebook comp render -> this.props.snippets: ");
    // console.log(this.props.snippets);
    // console.log(
    //   "notbook comp render -> this.props.snippets[this.state.viewSnippetId]: "
    //  );
    //  console.log(this.props.snippets[this.state.viewSnippetId]);
    //  console.log(
    ///   "notebook comp render -> this.state.viewSnippetId: " +
    //   this.state.viewSnippetId
    // );
    return (
      <Row>
        <Col>
          <div className="Main">
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
