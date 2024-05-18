package com.eaip.globalmates.web.rest;

import com.eaip.globalmates.service.EventsService;
import com.eaip.globalmates.service.dto.CreateEventDto;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
