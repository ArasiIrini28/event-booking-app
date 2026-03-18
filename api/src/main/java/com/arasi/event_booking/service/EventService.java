package com.arasi.event_booking.service;

import com.arasi.event_booking.model.Event;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EventService {

    private List<Event> events = new ArrayList<>();

    public EventService() {

        events.add(new Event(1L, "Tech Conference", "2026-04-01", 10));
        events.add(new Event(2L, "Music Festival", "2026-04-05", 5));
        events.add(new Event(3L, "Startup Meetup", "2026-04-10", 8));
    }

    // GET ALL EVENTS
    public List<Event> getAllEvents() {
        return events;
    }

    // BOOK EVENT
    public Event bookEvent(Long eventId, String name, String email) {

        // VALIDATION
        if (name == null || name.isEmpty() || email == null || email.isEmpty()) {
            throw new RuntimeException("Name and Email required");
        }

        for (Event event : events) {

            if (event.getId().equals(eventId)) {

                if (event.getAvailableSeats() <= 0) {
                    throw new RuntimeException("Sold Out");
                }

                event.setAvailableSeats(event.getAvailableSeats() - 1);

                return event;
            }
        }

        throw new RuntimeException("Event not found");
    }
}