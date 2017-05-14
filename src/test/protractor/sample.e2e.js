"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Login Flow', function () {
    xit('should add a Name as GURU99', function () {
        protractor_1.browser.get('https://angularjs.org');
        expect(protractor_1.browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
        // element(by.model('yourName')).sendKeys('GURU99');
        // let guru = element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h3'));
        // let gurup = element(by.class('ng-bind'));
        // expect(guru.getText()).toEqual('Hello GURU99!');
    });
    it('should get the login screen', function () {
        protractor_1.browser.get('http://localhost:9999/sample.html', 150000);
        // expect(browser.getTitle()).toEqual('NetX360 - Welcome to NetX');
        expect($('md-input-container')).toBeDefined();
    });
});
//# sourceMappingURL=sample.e2e.js.map