import { Eventdata } from "../screen/types";

export type InitialStateType = {
  EventList: Eventdata[];
  status?: string;
};

export const initialState: InitialStateType = {
  EventList: [],
  status: "",
};
