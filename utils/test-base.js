const base = require("@playwright/test");

exports.customtest = base.test.extend({
    testDataForOrder:{
        username : "deardear25443@gmail.com",
        password : "Pyn_6344",
        productName : "ZARA COAT 3"
    }
});