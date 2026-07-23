Feature: Ecommerce validations
  @Validation
  @foo

  Scenario Outline: Placing the Order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
    | username                | password          |
    | deardear25443@gmail.com | Pyn_6344          |
    | rahulshettyacademy      | Learning@830$3mK2 |
    
    #Parameretization, Parallel, html, rerun failed test


