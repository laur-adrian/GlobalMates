package com.eaip.globalmates.repository;

import com.eaip.globalmates.domain.Messages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessagesRepository extends JpaRepository<Messages, Long> {}
