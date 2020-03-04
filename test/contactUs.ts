import HomePage from "src/pages/HomePage"
import ContactUs from "src/pages/ContactUs"
import { expect } from "chai";



describe("required fields on contact us form", () => {
    it("clicks submit and checks that error messages show", () => {
        HomePage.open;
        browser.pause(1000);
        HomePage.contactUsTab.click();
        browser.pause(1000);
        expect(ContactUs.h1).to.eq("Contact Us")
        //TODO Submit and see all fields that are required
        ContactUs.submit.click();
        console.log(ContactUs.getTextofErrorMessages);
        // expect(ContactUs.yourNameError.getText()).to.eq("The field is required.")
        // expect(ContactUs.yourPhoneError.getText()).to.eq("The field is required.")
        // expect(ContactUs.yourEmailError.getText()).to.eq("The field is required.")
        // expect(ContactUs.yourMessageError.getText()).to.eq("The field is required.")
        expect(ContactUs.theFormError.getText()).to.eq("One or more fields have an error. Please check and try again.")

        //TODO Validation on incorrect email address

        //TODO Validation on phone number

        //Submits and sucess message?
        //clearValue()

    });
});