export class FootballPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('football-app h1')).getText();
  }
}
