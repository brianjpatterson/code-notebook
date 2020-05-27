import React from "react";
import Mainmenu from "./Mainmenu.js";
import Notebook from "./Notebook.js";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSnippetUUID: null,
      activeSnippetIndex: null,
      currentAction: "viewAll",
      title: "",
      content: "",
      snippets: [],
    };
  }

  inputClear = () => this.setState({ title: "", content: "" });

  inputChange = (inputId, inputValue) =>
    this.setState({ [inputId]: inputValue });

  setInputFields = (snippetUUID) =>
    this.setState({
      title: this.getSnippetProperty(
        this.getSnippetIndexFromUUID(snippetUUID),
        "title"
      ),
      content: this.getSnippetProperty(
        this.getSnippetIndexFromUUID(snippetUUID),
        "content"
      ),
      activeSnippetUUID: snippetUUID,
      activeSnippetIndex: this.getSnippetIndexFromUUID(snippetUUID),
    });

  getSnippetIndexFromUUID = (snippetUUID) => {
    for (var i = 0; i < this.state.snippets.length; i += 1)
      if (this.state.snippets[i]["id"] === snippetUUID) return i;
    return -1;
  };

  getSnippetProperty = (snippetIndex, snippetProperty) => {
    return this.state.snippets[snippetIndex][snippetProperty];
  };

  setActiveSnippet = (snippetUUID) => {
    if (snippetUUID) {
      let index = this.getSnippetIndexFromUUID(snippetUUID);
      let viewTitle = this.state.snippets[index].title;
      let viewContent = this.state.snippets[index].content;
      this.setState({
        activeSnippetUUID: snippetUUID,
        activeSnippetIndex: index,
        currentAction: "view",
        title: viewTitle,
        content: viewContent,
      });
    } else {
      this.setState({
        activeSnippetUUID: null,
        activeSnippetIndex: null,
        title: "",
        content: "",
        currentAction: "viewAll",
      });
    }
  };

  updateActiveSnippet = (snippetUUID) => {
    this.setActiveSnippet(snippetUUID);
    let index = this.getSnippetIndexFromUUID(snippetUUID);
    let tmpSnippetArray = [...this.state.snippets];
    let tmpSnippet = tmpSnippetArray[index];

    tmpSnippet.title = this.state.title;
    tmpSnippet.content = this.state.content;
    tmpSnippetArray.splice(index, 1);
    tmpSnippetArray.push(tmpSnippet);

    this.setState({
      snippets: tmpSnippetArray,
      currentAction: "view",
    });
  };

  snippetAction = (action, snippetUUID) => {
    if (action === "view") this.setActiveSnippet(snippetUUID);
    if (action === "edit") this.editSnippet(snippetUUID);
    if (action === "delete") this.deleteSnippet(snippetUUID);
  };

  deleteSnippet = (snippetUUID) => {
    this.setActiveSnippet(snippetUUID);
    this.state.snippets.splice(this.state.activeSnippetIndex, 1);
    this.setActiveSnippet(null);
  };

  editSnippet = (snippetUUID) => {
    this.setActiveSnippet(snippetUUID);
    let index = this.getSnippetIndexFromUUID(snippetUUID);
    let title = this.state.snippets[index].title;
    let content = this.state.snippets[index].content;
    this.setState({ currentAction: "edit", title: title, content: content });
  };

  addSnippet = (newSnippet) => {
    this.setState((previousState) => {
      return {
        snippets: [...previousState.snippets, newSnippet],
      };
    });
    this.setActiveSnippet(null);
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="3">
              <Notebook
                onSnippetAction={this.snippetAction}
                activeSnippetIndex={this.state.activeSnippetIndex}
                activeSnippetUUID={this.state.activeSnippetUUID}
                snippets={this.state.snippets}
              />
            </Col>
            <Col xs="9">
              <Mainmenu
                onViewSnippet={this.setActiveSnippet}
                onInputChange={this.inputChange}
                onAddSnippet={this.addSnippet}
                onSaveSnippet={this.updateActiveSnippet}
                activeSnippetUUID={this.state.activeSnippetUUID}
                activeSnippetIndex={this.state.activeSnippetIndex}
                title={this.state.title}
                content={this.state.content}
                snippets={this.state.snippets}
                currentAction={this.state.currentAction}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
