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
    //TODO Submit and see all fields that are required
    it("clicks submit to activate error messages", () => {
        ContactUs.submit.click();
    });
    it("it checks that error messages show", () => {
        expect(ContactUs.yourNameError.getText()).to.eq("The field is required.")
        console.log(ContactUs.yourPhoneError)
        expect(ContactUs.yourPhoneError).to.eq("The field is required.")
        expect(ContactUs.yourEmailError).to.eq("The field is required.")
        expect(ContactUs.yourMessageError).to.eq("The field is required.")
        expect(ContactUs.theFormError.getText()).to.eq("One or more fields have an error. Please check and try again.")

        //Submits and sucess message?
        //clearValue()

    });
});