package com.arasi.event_booking.service;

import org.springframework.stereotype.Service;

@Service

public class EmailService {
	
	public void sendBookingEmail(String toEmail, String name, String eventTitle) {

        System.out.println("====== NOTIFICATION ======");
        System.out.println("To: " + toEmail);
        System.out.println("Hello " + name);
        System.out.println("Your booking for '" + eventTitle + "' is confirmed.");
        System.out.println("==========================");
    }

}
