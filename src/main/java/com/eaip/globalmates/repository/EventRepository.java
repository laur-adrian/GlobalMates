package com.eaip.globalmates.repository;

import com.eaip.globalmates.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
