import axios from "axios";
import { useQuery } from "react-query";
import { EventList } from "../types/types.d";

export const fetchevent = async () => {
  const res = await axios.get(
    "https://next.json-generator.com/api/json/get/E12TK9oJ9"
  );
  const response = res.data;
  return response;
};

export const Loadevents = () => {
  const { data, status, ...rest } = useQuery("events", fetchevent);
  const Data: EventList = data;
  return { Data, status, ...rest };
};
