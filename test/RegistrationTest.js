import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import customerpage from '../pages/CustomerPage';
import Config from '../config';
import homePageValidations from '../ui-services/homePageValidations'

const dataSet = require('../data/data.json')

var randomNumber = Math.floor(Math.random() * 10000);
const URL = Config.getApplicationURL();

fixture`Registration Fixture`
    .page(URL)
    .beforeEach(async t => {
        await t.maximizeWindow();
    });

test.only('Verify you are on home page', async t => {
    await homePageValidations.verifyOnHomePage();
});

dataSet.forEach(data => {
    test('User Registration and Login Test', async t => {
        await t
            .click(homepage.RegisterLink)
            .expect(getURL()).contains('register')
            .click(registerpage.GenderOption)
            .typeText(registerpage.FirstName, data.firstname)
            .typeText(registerpage.LastName, data.lastname);
        await registerpage.selectDay(data.birthday);
        await registerpage.selectMonth(data.birthmonth);
        await registerpage.selectYear(data.birthyear);
        await t
            .typeText(registerpage.Email, data.email + randomNumber + '@test.com')
            .typeText(registerpage.Password, data.password)
            .typeText(registerpage.ConfirmPassword, data.password)
            .click(registerpage.RegisterButton)
            .expect(registerpage.SuccessfullMessage.exists).ok()
            .click(homepage.LogoutLink)
            .click(homepage.LoginLink)
            .expect(loginpage.accountHeader.exists).ok()
            .typeText(loginpage.emailInput, data.email + randomNumber + '@test.com')
            .typeText(loginpage.passwordInput, data.password)
            .click(loginpage.submitButton)
            .click(homepage.MyAccountLink)
            .expect(customerpage.ordersLink.exists).ok()
            .click(customerpage.ordersLink)
            .expect(customerpage.noOrdersLabel.exists).ok();
    });
});