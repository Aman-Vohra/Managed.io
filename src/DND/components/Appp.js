import React, { Component } from "react";
import TaskboardList from "./TaskboardList";
import { connect } from "react-redux";
import { DragDropContext } from "@hello-pangea/dnd";
import { sort } from "../actions";
import Typography from '@mui/material/Typography';
import '../../styles/Login.css'
import Nv from "./Nv";

class Appp extends Component {

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <>
      <Nv />
      <DragDropContext onDragEnd={this.onDragEnd} >
        <div style={{ width: "1270px", height: "auto", marginLeft: "220px"}}>
        <Typography variant="h6" noWrap component="div" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "4rem", justifyContent: "center", marginLeft: "550px", color: "#3f3d56"}}>
            TASKS
          </Typography>
          <div style={{ display: "flex"}}>
            {lists.map(list => ( 
              <TaskboardList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}

          </div>
        </div>
        <footer className="w-100 text-center" style={{ justifyContent: "center", marginBottom: "-10px"}}>
        <p>&copy; 2023 All Rights Reserved | Made by Aman Vohra </p>
        </footer>
      </DragDropContext>
      </>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(Appp);
