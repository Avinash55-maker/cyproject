Feature: Sign In

  Scenario: User signs in successfully
    Given I visit the sign-in page
    When I enter valid credentials
    And I submit the login form
    Then I should be redirected to my account dashboard