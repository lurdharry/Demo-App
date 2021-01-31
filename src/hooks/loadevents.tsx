import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { EventItems } from "./types";
import { data } from "../screen/types";

const fetchevent = async () => {
  const res = await axios.get(
    "https://next.json-generator.com/api/json/get/E12TK9oJ9"
  );
  const response: EventItems = res.data;
  return response;
};

export const Loadevents = () => {
  const { data, status, ...rest } = useQuery("events", fetchevent);
  console.log(data);
  return { data, status, ...rest };
};

// export const AcknowledgeEvent = ({ event }: { event: data }) => {
//   const queryCache = useQueryClient();
//   queryCache.setQueryData("favorites", prevData => {
//     if (prevData !== undefined) {
//       if (
//         prevData?.some(
//           ({ data }: { data: data }) => data.eventId === event.eventId
//         )
//       ) {
//         return "nnn";
//       } else [...prevData, event];
//     } else {
//       return [event];
//     }
//   });
// };
