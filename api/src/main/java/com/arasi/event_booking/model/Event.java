package com.arasi.event_booking.model;

public class Event {

    private Long id;
    private String title;
    private String date;
    private int availableSeats;

    public Event() {}

    public Event(Long id, String title, String date, int availableSeats) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.availableSeats = availableSeats;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }
}