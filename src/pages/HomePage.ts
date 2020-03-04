import BasePage from 'src/pages/BasePage';

class HomePage extends BasePage {
    get open() {
        return browser.url("/");
      }
      get contactUsTab(){
          //The $ command is a short way to call the findElement command in order to fetch a single element on the page. 
        return $('#menu-item-14')
    }
}

export default new HomePage();