import React from "react";
import TaskboardCard from "./TaskboardCard";
import TaskboardActionButton from "./TaskboardActionButton";
import { Droppable } from "@hello-pangea/dnd";
import '../CSS/taskboardlist.css'

const TaskboardList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          className="taskboardlist_container"
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <div className="sub-heading">{title}</div>
          <TaskboardActionButton listID={listID} />
          {cards.map((card, index) => (
            <TaskboardCard
              key={card.id}
              index={index}
              text={card.text}
              id={card.id}
              listID={listID}
            />
          ))}
          
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#eee",
    width: 300,
    padding: "0.5rem",
    marginRight: "1rem",
    height: "100%"
  }
};

export default TaskboardList;
