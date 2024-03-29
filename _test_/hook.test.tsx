import React, { ReactNode } from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useEvents } from "../src/hooks/useEvents";
import { QueryClient, QueryClientProvider } from "react-query";
import { renderHook } from "@testing-library/react-hooks";
import { fetchEvents } from "../src/utils";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Fetch EventList from server", () => {
  var mock = new MockAdapter(axios);

  const data = [
    {
      eventId: "601422295698cfc9b81f9ff4",
      type: "abornalActivity",
      date: "2021-01-20T14:56:41+00:00",
    },
    {
      eventId: "60142229244ba40852283d66",
      type: "upAtNight",
      date: "2021-01-19T14:56:41+00:00",
    },
  ];

  mock
    .onGet("https://next.json-generator.com/api/json/get/E12TK9oJ9")
    .reply(200, data);

  it("return data when fetchEvents is called", done => {
    fetchEvents().then(response => {
      expect(response).toEqual(data);
      done();
    });
  });

  it("test useEvents hook", async () => {
    const { result, waitFor } = renderHook(() => useEvents(), { wrapper });
    await waitFor(() => {
      return result.current.isSuccess;
    });
    expect(result.current.eventsData).toEqual(data);
  });
});
