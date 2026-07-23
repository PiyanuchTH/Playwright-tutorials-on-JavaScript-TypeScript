Feature: Ecommerce validations
  @Regression
  Scenario: Placing the Order
    Given a login to Ecommerce application with "deardear25443@gmail.com" and "Pyn_6344"
    When Add "ZARA COAT 3" to Cart
    Then Verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and place the Order
    Then Verify order in present in the OrderHistory

  @Validation
  Scenario Outline: Placing the Order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
    | username                | password          |
    | rahulshettyacademy      | Learning@830$3mK2 |
    | deardear25443@gmail.com | Pyn_6344          |
