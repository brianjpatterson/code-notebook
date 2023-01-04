import React from "react";
import uuid from "uuid";
import {
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Row,
} from "reactstrap";
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
      <Form
        className="form"
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
            <FormGroup>
              <h4>Notebook Entry</h4>
            </FormGroup>
            <FormGroup>
              <FormText>
                Create a title for your notebook entry. (Up to 255 characters)
              </FormText>
              <Input
                style={{ width: "80%" }}
                placeholder="Snippet Title"
                className="titleInput"
                type="text"
                id="title"
                value={this.props.title}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <FormText style={{ marginTop: "20px" }}>Snippet Code:</FormText>

              <Input
                rows={12}
                placeholder="Type or paste the code for your notebook entry."
                className="contentInput"
                type="textarea"
                id="content"
                value={this.props.content}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button color="primary" type="submit">
              {this.props.currentAction === "edit"
                ? "Update Snippet"
                : "Save Snippet"}
            </Button>
          </div>
        )}
      </Form>
    );
  }
}

export default Mainmenu;
