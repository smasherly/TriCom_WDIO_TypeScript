import HomePage from "src/pages/HomePage"
import ContactUs from "src/pages/ContactUs"
import { expect } from "chai";



describe("required fields on contact us form", () => {
    it("goes to home page and clicks contact us", () => {
        HomePage.open;
        browser.pause(1000);
        HomePage.contactUsTab.click();
        browser.pause(1000);
    });
    it("checks that page name is Contact Us", () => {
        expect(ContactUs.h1).to.eq("Contact Us")
    });
    //TODO enter text in to every field except your name
    it("enters text into every field except your name and checks error messagese", () => {
        ContactUs.yourPhone.setValue('19132370002')
        ContactUs.yourEmail.setValue('test@test.com')
        ContactUs.yourMessage.setValue('This is a test!')
        ContactUs.submit.click();
        browser.pause(1000);
        expect(ContactUs.yourNameError.getText()).to.eq("The field is required.")
        expect(ContactUs.theFormError.getText()).to.eq("One or more fields have an error. Please check and try again.")
        ContactUs.yourPhone.clearValue()
        ContactUs.yourEmail.clearValue()
        ContactUs.yourMessage.clearValue()
        browser.pause(1000);
        browser.refresh();
        browser.pause(3000);
    });
    it("enters text into every field except your phone and checks error messages", () => {
        ContactUs.yourName.setValue('Mr. Test Person')
        ContactUs.yourEmail.setValue('test@test.com')
        ContactUs.yourMessage.setValue('This is a test!')
        ContactUs.submit.click();
        browser.pause(1000);
        expect(ContactUs.yourPhoneError).to.eq("The field is required.")
        expect(ContactUs.theFormError.getText()).to.eq("One or more fields have an error. Please check and try again.")
        browser.pause(1000);
        ContactUs.yourName.clearValue()
        ContactUs.yourEmail.clearValue()
        ContactUs.yourMessage.clearValue()
        browser.refresh();
        browser.pause(3000);
    });
    it("enters invalid email address and checks for appropriate error message", () => {
        ContactUs.yourEmail.setValue('test234324')
        ContactUs.submit.click();
        browser.pause(1000);
        expect(ContactUs.yourEmailError).to.eq("The e-mail address entered is invalid.")
        expect(ContactUs.theFormError.getText()).to.eq("One or more fields have an error. Please check and try again.")
        browser.pause(3000);
    });
    //Submits and sucess message?
    //clearValue()
});