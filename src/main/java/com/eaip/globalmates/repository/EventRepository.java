package com.eaip.globalmates.repository;

import com.eaip.globalmates.domain.City;
import com.eaip.globalmates.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {
    List<Event> findAllByCity(City city);
}
