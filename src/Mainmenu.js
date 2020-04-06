import React from "react";
import uuid from "uuid";

class Mainmenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    let newSnippet = {
      id: uuid.v4(),
      title: this.props.thisTitle,
      content: this.props.thisContent,
    };

    this.props.updateViewSnippetId(null);
    this.props.onAddSnippet(newSnippet);
  }

  handleChange(event) {
    this.props.onInputChange(event.currentTarget.id, event.currentTarget.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="title"
          value={this.props.title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="content"
          value={this.props.content}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Mainmenu;
