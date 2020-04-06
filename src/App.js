import React from "react";
import Mainmenu from "./Mainmenu.js";
import Notebook from "./Notebook.js";
import { Container, Row, Col } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewSnippetId: null,
      title: "",
      content: "",
      snippets: [],
    };

    this.addSnippet = this.addSnippet.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.updateView = this.updateView.bind(this);
  }

  updateView(sid) {
    this.setState({ viewSnippetId: sid });
  }

  inputChange(inputId, inputValue) {
    this.setState({ [inputId]: inputValue });
  }

  addSnippet(newSnippet) {
    this.setState((previousState) => {
      return {
        snippets: [...previousState.snippets, newSnippet],
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="3">
              <Mainmenu
                thisTitle={this.state.title}
                thisContent={this.state.content}
                onInputChange={this.inputChange}
                onAddSnippet={this.addSnippet}
                updateViewSnippetId={this.updateView}
              />
            </Col>
            <Col xs="9">
              <Notebook
                vsnipid={this.state.viewSnippetId}
                updateViewSnippetId={this.updateView}
                snippets={this.state.snippets}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
