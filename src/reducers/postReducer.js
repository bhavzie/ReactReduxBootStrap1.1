import { FETCH_POSTS, NEW_POST, DEL_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    case DEL_POST:
      return {
        items : state.items.filter(item =>
            item.title !== action.payload
          )
      }
    default:
      return state;
  }
}
