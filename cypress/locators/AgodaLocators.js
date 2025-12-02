class AgodaLocators {
    flightsTab = '#tab-flight-tab';
    flyingFromInput = '#flight-origin-text-search';
    flyingToInput = '#flight-destination-text-search';
    flightDepartureButton = '#flight-departure';
    flyingFromFirstOption = '#autocompleteSearch-origin > div > div > ul > li:nth-child(1)';
    flyingToFirstOption = '#autocompleteSearch-destination > div > div > ul > li:nth-child(1)';
    
    flightDepartureContainer = '#flight-departure';
    october24Date = ':nth-child(1) > :nth-child(3) > :nth-child(4) > :nth-child(5) > .a9696-box > .PriceSurgePicker-Day__container > .PriceSurgePicker-Day__circle';
    departureDate = '[data-selenium="flight-departure-date"]';
    tomorrowDate = '[data-cy="tomorrow-date"]';
    dateCalendar = '[data-testid="date-picker-calendar"]';
    
    searchFlightButton = '[data-test="SearchButtonBox"]';
    searchFlightButtonOld = '[data-selenium="flight-search-button"]';
    
    flightResultsList = '[data-testid="flight-result-item"]';
    showFilterButton = '[data-testid="show-filter-btn"]';
    showAllAirlineFilter = '[data-testid="show-all-flight-filter-item-airline"] > .sc-dmqHEX';
    uncheckAllAirlines = '.a8780-select-none';
    malaysiaAirlinesCheckbox = '#MH';
    filterApplyButton = '[data-testid="mspa-filter-overlay-apply-button"]';
    malaysiaAirlinesFilter = '[data-testid="airline-filter-MH"]';
    earliestFlightOption = '[data-testid="flight-option"]:first';
    selectFlightButton = '[data-testid="select-flight-button"]';
    flightPrice = '[data-testid="flight-price"]';
    departureTime = '[data-testid="departure-time"]';
    arrivalTime = '[data-testid="arrival-time"]';
    
    adultsTravelers = '[data-test="occupancy-adults"]';
    doneButton = '[data-test="occupancy-done"]';
    
    airlineBrandFilter = '[data-test="filter-airlineBrand"]';
    malaysiaBrandBox = '[data-brand="Malaysia Airlines"]';
    malaysiaBrandCheckbox = '[data-brand="Malaysia Airlines"] input[type="checkbox"]';
    
    firstFlightOption = '[data-testid="flight-result"]:first-child';
    firstFlightResult = '[data-testid="flight-result"]:first()';
    firstSelectButton = '[data-test="searchResultCard-selectFlight"]:first()';
    
    firstNameInput = '[name="firstName0"]';
    lastNameInput = '[name="lastName0"]';
    
    continueAsGuestButton = '[data-cy="ContinueAsGuest"]';
    continueButton = '[data-cy="Continue"]';
}

module.exports = AgodaLocators;