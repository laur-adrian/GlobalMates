package com.eaip.globalmates.web.rest;

import com.eaip.globalmates.domain.Event;
import com.eaip.globalmates.service.EventsService;
import com.eaip.globalmates.service.dto.CreateEventDto;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/events")
public class EventResource {

    private final EventsService eventsService;

    public EventResource(EventsService eventsService) {
        this.eventsService = eventsService;
    }

    @PostMapping
    public void createEvent(@RequestBody @Valid CreateEventDto dto) {
        eventsService.createEvent(dto);
    }

    @GetMapping
    public List<Event> getEvents(@RequestParam(name = "forCurrentUser", required = false) Boolean forCurrentUser) {
        if (forCurrentUser == null || !forCurrentUser) {
            return eventsService.getAllEvents();
        }
        return eventsService.getEventsForCurrentUser();
    }
}
