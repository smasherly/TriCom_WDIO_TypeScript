import BasePage from 'src/pages/BasePage';

class ContactUs extends BasePage {
    get boxNames() {
        return
    }
    get submit() {
        return $('input[type="submit"]')
    }
    get yourName() {
        return $('input[name="your-name"]')
    }
    get yourPhone() {
        return $('input[name="your-phone"]')
    }
    get yourEmail() {
        return $('input[name="your-email"]')
    }
    get yourMessage() {
        return $('input[name="your-mesage"]')
    }
    get theForm() {
        return $('div[role="form"]')
    }
    // get yourNameError() {
    //     return $('span.wpcf7-not-valid-tip:nth-of-type(1)')
    // }
    // get yourPhoneError() {
    //     return $('span.wpcf7-not-valid-tip:nth-of-type(2)')
    // }
    // get yourEmailError() {
    //     return $('span.wpcf7-not-valid-tip:nth-of-type(3)')
    // }
    // get yourMessageError() {
    //     return $('span.wpcf7-not-valid-tip:nth-of-type(4)')
    // }
    get theFormError() {
        return $('div.wpcf7-validation-errors')
    }
    get validationMessages() {
        return $$("span.wpcf7-not-valid-tip:nth-of-type")
    }
    getTextofErrorMessages() {
        let message = this.validationMessages
        return message.forEach(
            message => message.getText()
        )
    }

}

export default new ContactUs();

