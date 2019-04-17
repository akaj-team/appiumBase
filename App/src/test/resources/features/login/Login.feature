Feature: Test user login flow
  Flow when login a new account in the 1st times (input nickname, choose avatar and see "book setting popup")
  Login success with valid account
  Login fail with invalid account

  Background:
    Given Open screen ログイン Login screen

  Scenario Outline: Login button is not displayed when no input username or password
    When I input username with "<userName>"
    And I input password with "<passWord>"
    Then Button ログイン Login button is not displayed

    Examples:
      | userName                | passWord |
      | khangtm92+062@gmail.com |          |
#      |                         | 12345678 |
#      |                         |          |
