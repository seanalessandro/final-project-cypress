import amazonLocators from "../locators/AmazonLocators";

class AmazonMainPage {
    clickItem(locator) {
        cy.get(locator).click();
    }

    fillForm(locator, text) {
        cy.get(locator).clear().type(text);
    }

    fillFormWithoutClear(locator, text) {
        cy.get(locator).type(text);
    }

    selectDropdown(locator, value) {
        cy.get(locator).select(value);
    }

    searchForItem(searchTerm) {
        this.fillFormWithoutClear(amazonLocators.searchInput, searchTerm);
        this.clickItem(amazonLocators.searchButton);
    }

    sortByPriceHighToLow() {
        cy.get(amazonLocators.sortDropdown)
            .should('be.visible')
            .select('price-desc-rank', { force: true, waitForAnimations: false });
        cy.wait(2000); // Wait for results to reload
    }

    selectRightmostFirstRowNonAdItem() {
        cy.get(amazonLocators.searchResultsContainer).should('have.length.greaterThan', 0);
        
        cy.get(amazonLocators.firstRowItems)
            .first()
            .within(() => {
                cy.get('[data-component-type="s-search-result"]')
                    .not('[data-component-id*="sponsored"]')
                    .last()
                    .find(amazonLocators.productLink)
                    .click();
            });
    }

    selectRightmostFirstRowItem() {
        cy.get('[data-component-type="s-search-result"]').should('have.length.greaterThan', 0);
        
        cy.get('[data-component-type="s-search-result"]')
            .not('[data-component-id*="sponsored"]')
            .eq(3)
            .scrollIntoView()
            .within(() => {
                // Try different selectors for product links in order of preference
                cy.get('h2 a, a[href*="/dp/"], .s-link-style a, .a-link-normal, a')
                    .first()
                    .click({ force: true });
            });
    }

    // Helper method to extract whole dollar amount only
    extractWholeDollarAmount(priceText) {
        // Remove all non-digits and decimal points first
        let cleanPrice = priceText.replace(/[^\d.]/g, '');
        // Split by decimal point and take only the whole number part
        let wholeDollar = cleanPrice.split('.')[0];
        return wholeDollar;
    }

    // New method to get product info with better selectors
    getProductInfoFromSearchResults() {
        let productInfo = {};
        
        return cy.get('[data-component-type="s-search-result"]')
            .not('[data-component-id*="sponsored"]')
            .eq(3)
            .within(() => {
                // Get title with fallback selectors
                cy.get('h2 span, h2 a span, h2')
                    .first()
                    .invoke('text')
                    .then((title) => {
                        productInfo.title = title.trim();
                    });
                
                // Get price with fallback selectors
                cy.get('.a-price-whole, .a-price .a-offscreen')
                    .first()
                    .invoke('text')
                    .then((price) => {
                        productInfo.price = this.extractWholeDollarAmount(price);
                    });
            })
            .then(() => {
                return cy.wrap(productInfo);
            });
    }

    // Get product information from search results
    getRightmostProductInfo() {
        return cy.get('[data-component-type="s-search-result"]')
            .not('[data-component-id*="sponsored"]')
            .eq(3) // Get the 4th item (rightmost in first row)
            .within(() => {
                // Get product title
                const title = cy.get('h2 span').invoke('text');
                
                // Get product price (handle different price formats)
                const price = cy.get('.a-price-whole').first().invoke('text')
                    .then(priceText => {
                        // Extract only the dollar amount without cents
                        return priceText.replace(/[^\d]/g, '');
                    });
                
                return { title, price };
            });
    }

    // Get product info from search page before clicking
    getProductInfoBeforeClick() {
        let productInfo = {};
        
        // Get product title and price from the rightmost first row item
        cy.get('[data-component-type="s-search-result"]')
            .not('[data-component-id*="sponsored"]')
            .eq(3)
            .within(() => {
                // Get title
                cy.get('h2 span').invoke('text').then((title) => {
                    productInfo.title = title.trim();
                });
                
                // Get price
                cy.get('.a-price-whole').first().invoke('text').then((price) => {
                    productInfo.price = this.extractWholeDollarAmount(price); // Use consistent extraction
                });
            });
        
        return cy.wrap(productInfo);
    }

    // Product detail page methods
    getProductDetailTitle() {
        return cy.get(amazonLocators.productDetailTitle).invoke('text');
    }

    getProductDetailPrice() {
        return cy.get(amazonLocators.productDetailPrice).first().invoke('text')
            .then(priceText => {
                return this.extractWholeDollarAmount(priceText); // Use consistent extraction
            });
    }

    // Verification methods
    verifyProductTitle(expectedTitle) {
        cy.get(amazonLocators.productDetailTitle)
            .invoke('text')
            .should('contain', expectedTitle.trim());
    }

    verifyProductPrice(expectedPrice) {
        cy.get(amazonLocators.productDetailPrice)
            .first()
            .invoke('text')
            .then(actualPrice => {
                const cleanActualPrice = this.extractWholeDollarAmount(actualPrice);
                const cleanExpectedPrice = this.extractWholeDollarAmount(expectedPrice.toString());
                expect(cleanActualPrice).to.equal(cleanExpectedPrice);
            });
    }
}

export default new AmazonMainPage();