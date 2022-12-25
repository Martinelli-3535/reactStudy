const initialState = {
    text:"",
    todoList: []
};

const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

export const changeText =(text) => ({
    type : CHANGE_TEXT,
    text
});

export const addToList = (text) => ({
    type: ADD_TO_LIST,
    text
  });

  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text
        };
      case ADD_TO_LIST:
        console.log(action.text);
        return {
          ...state,
          todoList: state.todoList.concat(action.text)
        };
      // 액션이 없을 경우 현재 state를 반환해야 한다.
      default:
        return state;
    }
  }