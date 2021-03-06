import _ from "lodash";
import { FETCH_PODCASTS } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PODCASTS:
      return action.payload;
    default:
      return state;
  }
}
