package com.eaip.globalmates.service;

import com.eaip.globalmates.domain.User;
import com.eaip.globalmates.repository.CityRepository;
import com.eaip.globalmates.repository.UserRepository;
import com.eaip.globalmates.security.SecurityUtils;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class MatchingService {

    private final UserRepository userRepository;
    private final CityRepository cityRepository;

    public MatchingService(UserRepository userRepository, CityRepository cityRepository) {
        this.userRepository = userRepository;
        this.cityRepository = cityRepository;
    }

    public List<User> getMatchingUsersForCurrentUser() {
        List<User> matchingUsers = new ArrayList<>();
        User currUser = getUser();
        matchingUsers =
            userRepository.findAllByCityAndBudgetAndPersonalityTraits(
                cityRepository.findByName(currUser.getCity().getName()).get(),
                currUser.getBudget(),
                currUser.getPersonalityTraits()
            );
        return matchingUsers;
    }

    private User getUser() {
        return SecurityUtils.getCurrentUserLogin().flatMap(userRepository::findOneByLogin).orElseThrow(); //TODO change behaviour
    }
}
