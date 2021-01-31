import { InitialStateType, initialState } from "./types";

export type UpdateAction = { type: "SET_ACTIVE"; id?: string };
export type FetchAction = { type: "FETCH"; payload: InitialStateType };

export const EventReducer = (
  state = initialState,
  action: UpdateAction | FetchAction
) => {
  switch (action.type) {
    case "FETCH": {
      return {
        ...state,
        EventList: action.payload.EventList,
        status: action.payload.status,
      };
    }
    case "SET_ACTIVE": {
      const label = action.id;
      return {
        ...state,
        EventList: state.EventList.map(item =>
          item.eventId === label ? { ...item, checked: true } : item
        ),
      };
    }

    default:
      return state;
  }
};
