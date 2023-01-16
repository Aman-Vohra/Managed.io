import React from "react";
import TaskboardCard from "./TaskboardCard";
import TaskboardActionButton from "./TaskboardActionButton";
import { Droppable } from "@hello-pangea/dnd";
import '../../styles/Common.css'

const TaskboardList = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div
          className="taskboardlist_container"
          {...provided.droppableProps}
          ref={provided.innerRef}
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


export default TaskboardList;
