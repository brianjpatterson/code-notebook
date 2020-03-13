import React from "react";
import uuid from "uuid";
import Notebook from "./Notebook";
import { Container } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      snippets: []
    };
  }

  handleChange = event => {
    this.setState({ [event.target.getAttribute("id")]: event.target.value });
  };

  handleSubmit = event => {
    let newSnippet = {
      id: uuid.v4(),
      title: this.state.title,
      content: this.state.content
    };

    this.setState(previousState => {
      return { snippets: [...previousState.snippets, newSnippet] };
    });

    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Notebook snippets={this.state.snippets} />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <input
              type="text"
              id="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <input type="submit" />
          </form>
        </Container>
      </div>
    );
  }
}

export default App;
