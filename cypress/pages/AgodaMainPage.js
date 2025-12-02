import agodaLocators from "../locators/agodaLocators";
class AgodaMainPage {
    clickItem(locator) {
        cy.get(locator).click();
    }
    fillForm(locator, text) {
        cy.get(locator).clear().type(text);
    }
    selectDropdown(locator, value) {
        cy.get(locator).select(value);
    }
    clickFlightsTab() {
        this.clickItem(agodaLocators.flightsTab);
    }
    clickFlyingFrom() {
        this.clickItem(agodaLocators.flyingFromInput);
    }
    clickFlyingTo() {
        this.clickItem(agodaLocators.flyingToInput);
    }
    clickFlyingFromFirstOption() {
        cy.get('body').then(($body) => {
            if ($body.find(agodaLocators.flyingFromFirstOption).length > 0) {
                cy.get(agodaLocators.flyingFromFirstOption).click();
            } else if ($body.find('[data-selenium="autocomplete-item"]:first').length > 0) {
                cy.get('[data-selenium="autocomplete-item"]:first').click();
            } else if ($body.find('.autocomplete-item:first').length > 0) {
                cy.get('.autocomplete-item:first').click();
            } else {
                cy.get(agodaLocators.flyingFromInput).type('{enter}');
            }
        });
    }
    clickFlyingToFirstOption() {
        cy.get('body').then(($body) => {
            if ($body.find(agodaLocators.flyingToFirstOption).length > 0) {
                cy.get(agodaLocators.flyingToFirstOption).click();
            } else if ($body.find('[data-selenium="autocomplete-item"]:first').length > 0) {
                cy.get('[data-selenium="autocomplete-item"]:first').click();
            } else if ($body.find('.autocomplete-item:first').length > 0) {
                cy.get('.autocomplete-item:first').click();
            } else {
                cy.get(agodaLocators.flyingToInput).type('{enter}');
            }
        });
    }
    enterFlyingFrom(location) {
        this.fillForm(agodaLocators.flyingFromInput, location);
        cy.wait(2000);
        this.clickFlyingFromFirstOption();
    }
    enterFlyingTo(location) {
        this.fillForm(agodaLocators.flyingToInput, location);
        cy.wait(2000);
        this.clickFlyingToFirstOption();
    }
    selectTomorrowDate() {
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(3) > :nth-child(4) > :nth-child(5) > .a9696-box > .PriceSurgePicker-Day__container > .PriceSurgePicker-Day__circle').click();
    }
    clickSearchFlight() {
        cy.get('[data-test="SearchButtonBox"]').click();
    }
    filterByMalaysiaAirlines() {
        cy.get('[data-testid="show-filter-btn"]').click();
        cy.wait(1000);
        cy.get('[data-testid="show-all-flight-filter-item-airline"] > .sc-dmqHEX').click();
        cy.wait(1000);
        cy.scrollTo(0, 200);
        cy.wait(500);
        cy.get('#MH').click();
        cy.wait(1000);
        cy.get('[data-testid="mspa-filter-overlay-apply-button"]').click();
        cy.wait(2000);
    }
    selectEarliestFlight() {
        cy.get('body').then(($body) => {
            if ($body.find('[data-testid="web-refresh-flights-card"]').length > 0) {
                cy.get('[data-testid="web-refresh-flights-card"]').first().click();
            } else if ($body.find('[data-testid="flight-option"]').length > 0) {
                cy.get('[data-testid="flight-option"]').first().click();
            } else if ($body.find('button').filter(':contains("Select")').length > 0) {
                cy.get('button').contains('Select').first().click();
            } else {
                cy.get('[data-testid*="flight"], [class*="flight"]').first().click();
            }
        });
    }
    clickSelectFlight() {
        cy.get('body').then(($body) => {
            if ($body.find('[data-component="flight-card-bookButton"]').length > 0) {
                cy.get('[data-component="flight-card-bookButton"]').first().click();
            } else if ($body.find('[data-element-name="flight-detail-select-button"]').length > 0) {
                cy.get('[data-element-name="flight-detail-select-button"]').first().click();
            } else if ($body.find('button').contains('Select').length > 0) {
                cy.get('button').contains('Select').first().click();
            } else if ($body.find('[data-testid="select-flight-button"]').length > 0) {
                cy.get('[data-testid="select-flight-button"]').first().click();
            } else {
                cy.contains('Select').click();
            }
        });
    }
    getFlightPrice() {
        return cy.get('body').then(($body) => {
            const improvedPriceSelector = ':nth-child(1) > [data-testid="web-refresh-flights-card"] > .a8780-bg-generic-base-transparent > [data-testid="flightCard-flight-detail"] > .a8780-w-full.a8780-flex-col > .a8780-justify-end > :nth-child(3) > :nth-child(1) > span.a8780-items-end > .a8780-items-end > :nth-child(3) > .czWcZb';
            if ($body.find(improvedPriceSelector).length > 0) {
                return cy.get(improvedPriceSelector).invoke('text');
            } else if ($body.find('span.czWcZb.gPcWqz').length > 0) {
                return cy.get('span.czWcZb.gPcWqz').first().invoke('text');
            } else if ($body.find('.czWcZb').length > 0) {
                return cy.get('.czWcZb').first().invoke('text');
            } else {
                return cy.get('*[class*="price"], *[data*="price"]').first().invoke('text');
            }
        });
    }
    getDepartureTime() {
        return cy.get('body').then(($body) => {
            const improvedDepartureSelector = ':nth-child(1) > [data-testid="web-refresh-flights-card"] > .a8780-bg-generic-base-transparent > [data-testid="flightCard-flight-detail"] > .a8780-w-full.a8780-flex-col > .a8780-justify-end > .a8780-grow > [style="max-width: 250px;"] > .a8780-w-full > [style="min-width: 50px;"] > [data-testid="departure-time"] > .a8780-flex > .sc-dmqHEX';
            if ($body.find(improvedDepartureSelector).length > 0) {
                return cy.get(improvedDepartureSelector).invoke('text');
            } else if ($body.find('[data-testid="departure-time"]').length > 0) {
                return cy.get('[data-testid="departure-time"]').first().invoke('text');
            } else {
                return cy.get('h3').contains(/\d{2}:\d{2}/).first().invoke('text');
            }
        });
    }
    getArrivalTime() {
        return cy.get('body').then(($body) => {
            const improvedArrivalSelector = ':nth-child(1) > [data-testid="web-refresh-flights-card"] > .a8780-bg-generic-base-transparent > [data-testid="flightCard-flight-detail"] > .a8780-w-full.a8780-flex-col > .a8780-justify-end > .a8780-grow > [style="max-width: 250px;"] > .a8780-w-full > :nth-child(3) > [data-testid="arrival-time"] > .a8780-flex > .sc-dmqHEX';
            if ($body.find(improvedArrivalSelector).length > 0) {
                return cy.get(improvedArrivalSelector).invoke('text');
            } else if ($body.find('[data-testid="arrival-time"]').length > 0) {
                return cy.get('[data-testid="arrival-time"]').first().invoke('text');
            } else {
                return cy.get('h3').contains(/\d{2}:\d{2}/).eq(1).invoke('text');
            }
        });
    }
    fillPassengerDetails(passengerData) {
        cy.get('[data-testid="contact.contactFirstName"]').clear().type(passengerData.firstName);
        cy.get('[data-testid="contact.contactLastName"]').clear().type(passengerData.lastName);
        cy.get('[data-testid="contact.contactEmail"]').clear().type(passengerData.email);
        cy.get('[data-testid="contact.contactPhoneNumber-PhoneNumberDataTestId"]').clear().type(passengerData.phone);
        cy.get('[data-testid="0"]').click();
        cy.get('[data-testid="flight.forms.i0.units.i0.passengerFirstName"]').clear().type(passengerData.firstName);
        cy.get('[data-testid="flight.forms.i0.units.i0.passengerLastName"]').clear().type(passengerData.lastName);
        cy.get('[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-DateInputDataTestId"]').clear().type(passengerData.birthDay);
        cy.get('[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth"] > .Grid__GridStyled-sc-30ivvs-0 > :nth-child(2)').click();
        cy.get(':nth-child(2) > label > .a8780-bg-generic-base-transparent').click();
        cy.get('[data-testid="flight.forms.i0.units.i0.passengerDateOfBirth-YearInputDataTestId"]').clear().type(passengerData.birthYear);
        cy.get('[data-testid="field-wrapper"][data-element-name="passenger-nationality-input"]').first().click();
        cy.get(':nth-child(1) > label > .a8780-bg-generic-base-transparent').click();
        cy.get('[data-testid="flight.forms.i0.units.i0.passportNumber"]').clear().type('A12345678');
        cy.get('[data-element-name="passenger-passport-issue-country-input"]').click();
        cy.get(':nth-child(1) > label > .a8780-bg-generic-base-transparent').click();
        cy.get('[data-testid="flight.forms.i0.units.i0.passportExpiryDate-DateInputDataTestId"]').clear().type('31');
        cy.get('[data-testid="flight.forms.i0.units.i0.passportExpiryDate"] > .Grid__GridStyled-sc-30ivvs-0 > :nth-child(2)').click();
        cy.get(':nth-child(12) > label > .a8780-bg-generic-base-transparent').click();
        cy.get('[data-testid="flight.forms.i0.units.i0.passportExpiryDate-YearInputDataTestId"]').clear().type('2030');
    }
    clickContinueToPayment() {
        cy.get('[data-testid="continue-to-payment-button"]').click();
    }
    verifyTotalPrice(expectedPrice) {
        cy.get(agodaLocators.totalPricePayment).should('contain', expectedPrice);
    }
    verifyPassengerDetails(passengerData) {
        cy.get(agodaLocators.passengerDetailsPayment).should('contain', passengerData.firstName);
        cy.get(agodaLocators.passengerDetailsPayment).should('contain', passengerData.lastName);
        cy.get(agodaLocators.passengerDetailsPayment).should('contain', passengerData.email);
    }
    verifyFlightTimes(departureTime, arrivalTime) {
        cy.get(agodaLocators.departureTimePayment).should('contain', departureTime);
        cy.get(agodaLocators.arrivalTimePayment).should('contain', arrivalTime);
    }
}
export default new AgodaMainPage();
