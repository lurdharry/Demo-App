import axios from "axios";
import { useCallback, useMemo } from "react";
import { useQuery, useQueryClient } from "react-query";
import { EventList } from "../types/types.d";
import { fetchEvents, updateEvent } from "../utils";

export const useEvents = () => {
  const queryClient = useQueryClient();

  const { data, status, ...rest } = useQuery("events", fetchEvents, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const markEvent = useCallback((id: string) => {
    queryClient.cancelQueries("events"); // cancel any ongoing query

    const previousEvents = queryClient.getQueryData<EventList>("events");
    const updatedEvent = previousEvents && updateEvent(previousEvents, id);

    queryClient.setQueryData("events", updatedEvent);
  }, []);

  const checkedEventStatus = useCallback(
    (id: string) => {
      return data?.find(({ eventId }) => eventId === id)?.checked;
    },
    [data]
  );

  return { eventsData: data, status, markEvent, checkedEventStatus, ...rest };
};
