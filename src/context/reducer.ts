import { initialState } from "../types/types.d";

export type UpdateAction = { type: "SET_ACTIVE"; payload: { id: string } };

export const EventReducer = (state = initialState, action: UpdateAction) => {
  switch (action.type) {
    case "SET_ACTIVE": {
      const id = action.payload.id;
      let isFavorite = state.CheckedEvent.includes(id);
      if (isFavorite) {
        return {
          ...state,
          CheckedEvent: state.CheckedEvent.filter(
            repoId => repoId !== action.payload?.id
          ),
        };
      } else {
        return {
          ...state,
          CheckedEvent: [...state.CheckedEvent, action.payload.id],
        };
      }
    }
    default:
      return state;
  }
};
