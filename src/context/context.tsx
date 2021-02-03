import React, { createContext } from "react";
import { EventReducer, UpdateAction } from "./reducer";
import { InitialStateType, initialState } from "../types/types.d";

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<UpdateAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// export const AppConsumer = AppContext.Consumer;

export function AppProvider(props: any) {
  const [state, dispatch] = React.useReducer(EventReducer, initialState);
  const value = { state, dispatch };
  console.log(value);
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
