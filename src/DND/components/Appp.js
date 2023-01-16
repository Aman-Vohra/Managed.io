import React, { Component } from "react";
import TaskboardList from "./TaskboardList";
import { connect } from "react-redux";
import { DragDropContext } from "@hello-pangea/dnd";
import { sort } from "../actions";
import Typography from '@mui/material/Typography';
import Nv from "./Nv";
import '../../styles/Common.css'

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
        <div style={{ margin: "auto" }} className='nav-card'>
        <Typography variant="h6" noWrap component="div" sx={{ fontFamily: "Poppins, sans-serif", fontSize: "3rem", color: "#3f3d56", textAlign: "center"}}>
            TASKS
          </Typography>
          <div style={{ display: "flex"}} className="dnd">
            {lists.map(list => ( 
              <TaskboardList
                listID={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}

          </div>
        <footer className="w-100 text-center footer" style={{ justifyContent: "center"}}>
        <p>&copy; 2023 All Rights Reserved | Made by Aman Vohra </p>
        </footer>
        </div>

      </DragDropContext>
      </>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(Appp);
