Feature: User Authentication

  Scenario: As a user, I can log into the secure area
    When I am on the login page
    Then I login with email and password and I should see success or error