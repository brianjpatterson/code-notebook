import React from "react";
import uuid from "uuid";
import { Row, Button } from "reactstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Mainmenu.css";

class Mainmenu extends React.Component {
  handleUpdateSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveSnippet(this.props.activeSnippetUUID);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newSnippet = {
      id: uuid.v4(),
      title: this.props.title,
      content: this.props.content,
    };

    this.props.onAddSnippet(newSnippet);
  };

  handleChange = (e) =>
    this.props.onInputChange(e.currentTarget.id, e.currentTarget.value);

  render() {
    return (
      <form
        onSubmit={
          this.props.currentAction === "edit"
            ? this.handleUpdateSubmit
            : this.handleSubmit
        }
      >
        {this.props.currentAction === "view" ? (
          <div>
            {" "}
            <Row>
              <h3>
                {" "}
                {this.props.snippets[this.props.activeSnippetIndex].title}
              </h3>
            </Row>
            <Row>
              <SyntaxHighlighter
                showLineNumbers={true}
                language="jsx"
                style={dark}
              >
                {this.props.snippets[this.props.activeSnippetIndex].content}
              </SyntaxHighlighter>
            </Row>
          </div>
        ) : (
          <div>
            <Button color="primary" type="submit">
              {this.props.currentAction === "edit"
                ? "Update Snippet"
                : "Add Snippet"}
            </Button>
            <input
              placeholder="title"
              className="titleInput"
              type="text"
              id="title"
              value={this.props.title}
              onChange={this.handleChange}
            />
            <textarea
              rows="22"
              placeholder="Paste or Input your Code Here"
              className="contentInput"
              type="text"
              id="content"
              value={this.props.content}
              onChange={this.handleChange}
            />
          </div>
        )}
      </form>
    );
  }
}

export default Mainmenu;
