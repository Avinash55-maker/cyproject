Feature: Create Account

  Scenario: User creates an account successfully
    Given I visit the create account page
    When I fill in my account details with valid information
    And I submit the form
    Then I should see a success message