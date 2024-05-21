package com.eaip.globalmates.web.rest;

import com.eaip.globalmates.domain.User;
import com.eaip.globalmates.service.MatchingService;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/matches")
public class MatchResource {

    private final MatchingService matchingService;

    public MatchResource(MatchingService matchingService) {
        this.matchingService = matchingService;
    }

    @GetMapping("/getMatchingUsers")
    public List<User> getMatchingUsers() {
        return matchingService.getMatchingUsersForCurrentUser();
    }
}
