package com.eaip.globalmates.service.dto;

import com.eaip.globalmates.domain.City;

public class UserProfileDetailsDTO {

    private String firstName;
    private String username;
    private String city;
    private String personalityTraits;
    private Double budget;
    private String roommatesPreferences;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPersonalityTraits() {
        return personalityTraits;
    }

    public void setPersonalityTraits(String personalityTraits) {
        this.personalityTraits = personalityTraits;
    }

    public Double getBudget() {
        return budget;
    }

    public void setBudget(Double budget) {
        this.budget = budget;
    }

    public String getRoommatesPreferences() {
        return roommatesPreferences;
    }

    public void setRoommatesPreferences(String roommatesPreferences) {
        this.roommatesPreferences = roommatesPreferences;
    }
}
