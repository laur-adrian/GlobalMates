package com.eaip.globalmates.service;

import com.eaip.globalmates.domain.City;
import com.eaip.globalmates.domain.Event;
import com.eaip.globalmates.domain.User;
import com.eaip.globalmates.repository.CityRepository;
import com.eaip.globalmates.repository.EventRepository;
import com.eaip.globalmates.repository.UserRepository;
import com.eaip.globalmates.security.SecurityUtils;
import com.eaip.globalmates.service.dto.CreateEventDto;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventsService {
    private final EventRepository eventRepository;
    private final UserRepository userRepository;
    private final CityRepository cityRepository;

    public EventsService(EventRepository eventRepository, UserRepository userRepository, CityRepository cityRepository) {
        this.eventRepository = eventRepository;
        this.userRepository = userRepository;
        this.cityRepository = cityRepository;
    }

    public Event createEvent(CreateEventDto dto) {
        Event event = new Event();
        event.setName(dto.getName());
        event.setDescription(dto.getDescription());
        event.setDate(dto.getDate());
        City city = cityRepository.findByName(dto.getCity())
            .orElseThrow(); //TODO change behaviour
        event.setCity(city);
        System.out.println(SecurityUtils.getCurrentUserLogin());
        User user = getUser();
        event.setOrganizer(user);
        Event saved = eventRepository.save(event);
        return saved;
    }

    private @NotNull User getUser() {
        return SecurityUtils.getCurrentUserLogin()
            .flatMap(userRepository::findOneByLogin)
            .orElseThrow(); //TODO change behaviour
    }

    public List<Event> getEventsForCurrentUser() {
        User user = getUser();
        return eventRepository.findAllByCity(user.getCity());
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
}
