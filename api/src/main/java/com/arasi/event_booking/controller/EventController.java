package com.arasi.event_booking.controller;

import com.arasi.event_booking.dto.BookingRequest;
import com.arasi.event_booking.model.Event;
import com.arasi.event_booking.service.EventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class EventController {

    @Autowired
    private EventService service;

    // GET EVENTS
    @GetMapping("/events")
    public List<Event> getEvents() {
        return service.getAllEvents();
    }

    // BOOK EVENT
    @PostMapping("/book")
    public ResponseEntity<?> bookEvent(@RequestBody BookingRequest request) {

        try {
            Event event = service.bookEvent(
                    request.getEventId(),
                    request.getName(),
                    request.getEmail()
            );

            return ResponseEntity.ok(event);

        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}