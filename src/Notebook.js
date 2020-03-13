import React from "react";
import { Row, Col } from "reactstrap";
import Snippet from "./Snippet";

class Notebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewSnippetId: null };

    //    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <Row>
        <Col>
          <div className="Main">
            <div className="viewList">
              {this.state.viewSnippetId ? (
                <Snippet
                  snippet={this.props.snippets[this.state.viewSnippetId]}
                />
              ) : (
                this.props.snippets.map(snippet => (
                  <Snippet key={snippet.id} snippet={snippet} />
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
