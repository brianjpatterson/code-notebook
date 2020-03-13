import React from "react";

export class Content extends React.Component {
  state = {
    content: "I wanna replace that guy!"
  };

  handleClick = () => {
    this.props.replace(this.state.content);
  };

  render() {
    return (
      <div onClick={this.handleClick} className="text_color">
        {this.state.content}
      </div>
    );
  }
}

export default Content;
