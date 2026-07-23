import {test as baseTest} from "@playwright/test";
interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;
}
export const customTest = baseTest.extend<{ testDataForOrder: TestDataForOrder }>({
    testDataForOrder: {
        username : "deardear25443@gmail.com",
        password : "Pyn_6344",
        productName : "ZARA COAT 3"
    }
});