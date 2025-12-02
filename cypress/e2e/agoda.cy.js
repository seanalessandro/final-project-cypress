import AgodaMainPage from "../pages/AgodaMainPage";

describe('Agoda Flight Booking E2E', () => {
  let flightPrice, departureTime, arrivalTime;
  
  const passengerData = {
    firstName: Cypress.env('passenger_first_name') || 'John',
    lastName: Cypress.env('passenger_last_name') || 'Doe',
    email: Cypress.env('passenger_email') || 'john.doe@example.com',
    phone: Cypress.env('passenger_phone') || '8123456789',
    gender: 'Male',
    birthDay: '15',
    birthMonth: 'January',
    birthYear: '1990'
  };

  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
        return false
      }
      if (err.message.includes('Network Error') || 
          err.message.includes('Script error') ||
          err.message.includes('ChunkLoadError')) {
        return false
      }
      return true
    })
  })

  it('Complete flight booking from Jakarta to Singapore with Malaysia Airlines', () => {
    cy.visit(Cypress.env('agoda_url') || '/');
    AgodaMainPage.clickFlightsTab();

    AgodaMainPage.clickFlyingFrom();
    AgodaMainPage.enterFlyingFrom('Jakarta');

    AgodaMainPage.clickFlyingTo();
    AgodaMainPage.enterFlyingTo('Singapore');

    AgodaMainPage.selectTomorrowDate();

    AgodaMainPage.clickSearchFlight();
    cy.wait(3000);

    AgodaMainPage.filterByMalaysiaAirlines();
    
    AgodaMainPage.getFlightPrice().then((price) => {
      flightPrice = price;
    });
    
    AgodaMainPage.getDepartureTime().then((depTime) => {
      departureTime = depTime;
    });
    
    AgodaMainPage.getArrivalTime().then((arrTime) => {
      arrivalTime = arrTime;
    });

    AgodaMainPage.selectEarliestFlight();
    AgodaMainPage.clickSelectFlight();

    cy.wait(2000);
    AgodaMainPage.fillPassengerDetails(passengerData);
    
    AgodaMainPage.clickContinueToPayment();
    
    cy.wait(2000);
    
    AgodaMainPage.verifyTotalPrice(flightPrice);
    
    AgodaMainPage.verifyPassengerDetails(passengerData);
    
    AgodaMainPage.verifyFlightTimes(departureTime, arrivalTime);
    
    cy.get('[data-testid="booking-summary"]').should('be.visible');
    cy.get('[data-testid="payment-options"]').should('be.visible');
    
    cy.log('Flight booking flow completed successfully');
    cy.log(`Flight: Jakarta to Singapore`);
    cy.log(`Airline: Malaysia Airlines`);
    cy.log(`Passenger: ${passengerData.firstName} ${passengerData.lastName}`);
    cy.log(`Price: ${flightPrice}`);
  })
})