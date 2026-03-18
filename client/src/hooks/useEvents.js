import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API = "http://localhost:8082/api";

// =======================
// FETCH EVENTS
// =======================
const fetchEvents = async () => {
  const response = await axios.get(`${API}/events`);
  return response.data;
};

// =======================
// BOOK EVENT
// =======================
const bookEvent = async (data) => {
  const response = await axios.post(`${API}/book`, data);
  return response.data;
};

// =======================
// CUSTOM HOOK
// =======================
export const useEvents = () => {
  const queryClient = useQueryClient();

  // GET EVENTS
  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  // BOOK EVENT
  const mutation = useMutation({
    mutationFn: bookEvent,
    onSuccess: () => {
      // refresh events after booking
      queryClient.invalidateQueries(["events"]);
    },
  });

  return {
    events,
    isLoading,
    isError,
    error,
    bookEvent: mutation.mutate,
    bookingLoading: mutation.isPending,
  };
};