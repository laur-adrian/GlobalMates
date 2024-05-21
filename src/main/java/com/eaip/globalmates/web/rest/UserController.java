package com.eaip.globalmates.web.rest;

import com.eaip.globalmates.domain.User;
import com.eaip.globalmates.repository.UserRepository;
import com.eaip.globalmates.service.UserService;
import com.eaip.globalmates.service.dto.UserProfileDetailsDTO;
import javax.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping("/currUserDetails")
    public ResponseEntity<UserProfileDetailsDTO> getCurrentUser() {
        User u = userService.getCurrUser();
        UserProfileDetailsDTO userProfileDetailsDTO = new UserProfileDetailsDTO();
        userProfileDetailsDTO.setFirstName(u.getFirstName());
        userProfileDetailsDTO.setUsername(u.getLogin());
        if (u.getCity() != null) {
            userProfileDetailsDTO.setCity(u.getCity().getName());
        } else {
            userProfileDetailsDTO.setCity("");
        }
        userProfileDetailsDTO.setPersonalityTraits(u.getPersonalityTraits());
        userProfileDetailsDTO.setBudget(u.getBudget());
        userProfileDetailsDTO.setRoommatesPreferences(u.getRoommatesPreferences());
        return ResponseEntity.ok(userProfileDetailsDTO);
    }

    @PostMapping("/details")
    public void updateUserDetails(@RequestBody @Valid UserProfileDetailsDTO userProfileDetailsDTO) {
        userService.updateUserDetails(userProfileDetailsDTO);
    }
}
