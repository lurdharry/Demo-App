import axios from "axios";
import { EventList } from "../types/types.d";

export const fetchEvents = async (): Promise<EventList> => {
  const res = await axios.get(
    "https://next.json-generator.com/api/json/get/E12TK9oJ9"
  );
  const response: EventList = res.data;
  return response.map(item => ({ ...item, checked: false }));
};

export const updateEvent = (previousEvents: EventList, id: string) => {
  return previousEvents?.map(item => {
    if (item.eventId === id) {
      return {
        ...item,
        checked: item.checked ? false : true,
      };
    }
    return item;
  });
};
