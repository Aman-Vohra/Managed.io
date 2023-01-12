import React from "react";
import Textarea from "react-textarea-autosize";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class TaskboardActionButton extends React.Component {
  state = {
    formOpen: false,
    text: ""
  };

  openForm = () => {
    this.setState({
      formOpen: true
    });
  };

  closeForm = () => {
    this.setState({
      formOpen: false
    });
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });
      dispatch(addList(text));
    }
    return;
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      });

      dispatch(addCard(listID, text));
    }
  };

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "+Add another list" : "+Add another card";

    return (
      <div
        style={{
          display: "flex",
          paddingLeft: "1.5rem",
          alignItems: "center",
          fontSize: "1.5rem",
          cursor: "pointer",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem"
        }}
        onClick={this.openForm}
      >
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list
      ? "Enter the list Title..."
      : "Enter a title for this Card...";

    const buttonTitle = list ? "Add list" : "Add Card";

    return (
      <div>
        <Card
          style={{
            minHeight: 85,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <Textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            style={{
              resize: "none",
              width: "90%",
              outline: "none",
              border: "none",
              overflow: "hidden"
            }}
          />
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <Button
            onMouseDown={list ? this.handleAddList : this.handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#77bae7", marginTop: "10px", marginBottom: "10px"}}
          >
            {buttonTitle}
          </Button>
          {/* <Icon style={{ marginLeft: 8, cursor: "pointer" }}>X</Icon> */}
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default connect()(TaskboardActionButton);
