import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 3;

const initialState = [
  {
    title: "TODO",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Add Todo's here"
      }
    ]
  },
  {
    title: "DOING",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${1}`,
        text: "Move the Tasks over here, which are currently being implemented"
      }
    ]
  },
  {
    title: "DONE",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${2}`,
        text: "Move the completed tasks over here"
      }
    ]
  },
  {
    title: "REJECTED",
    id: `list-${3}`,
    cards: [
      {
        id: `card-${3}`,
        text: "This section contains the tasks which are rejected, but not deleted for future purpose"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    //delete added
    case CONSTANTS.DELETE_CARD: {
      return state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: list.cards.filter(({ id }) => id !== action.payload.cardId)
          };
        }

        return list;
      });
    }
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload.text, ///here
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text, ///here
        id: `card-${cardID}`
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          ////here
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd
      } = action.payload;
      const newState = [...state];
      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // not in the same list
      if (droppableIdStart !== droppableIdEnd) {
        // list where drag happened
        const listStart = state.find(list => droppableIdStart === list.id);
        //pulling out the card from the list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        //finiding list where drag ended
        const listEnd = state.find(list => droppableIdEnd === list.id);

        //put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listReducer;
