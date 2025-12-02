import AmazonMainPage from "../pages/AmazonMainPage";

describe('Amazon Product Search E2E', () => {
  let productTitle, productPrice;

  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('ResizeObserver loop completed with undelivered notifications') ||
          err.message.includes('Network Error') || 
          err.message.includes('Script error') ||
          err.message.includes('ChunkLoadError') ||
          err.message.includes('Non-Error promise rejection captured')) {
        return false
      }
      return true
    })
  })

  beforeEach(() => {
    cy.viewport(1920, 1080);
  })

  it('Search for chair, sort by highest price, and verify product details', () => {
    cy.visit('https://www.amazon.com');
    
    cy.get('body').then(($body) => {
      if ($body.find('#sp-cc-accept').length > 0) {
        cy.get('#sp-cc-accept').click();
      }
    });

    AmazonMainPage.searchForItem('chair');
    
    cy.wait(3000);

    AmazonMainPage.sortByPriceHighToLow();
    
    cy.wait(3000);

    AmazonMainPage.getProductInfoFromSearchResults().then((info) => {
      productTitle = info.title;
      productPrice = info.price;
      cy.log(`Product Title from search: ${productTitle}`);
      cy.log(`Product Price from search: $${productPrice}`);
    });

    AmazonMainPage.selectRightmostFirstRowItem();

    cy.wait(3000);

    cy.get('#productTitle')
      .invoke('text')
      .then((detailTitle) => {
        const cleanDetailTitle = detailTitle.trim();
        const isMatch = cleanDetailTitle.includes(productTitle) || productTitle.includes(cleanDetailTitle);
        expect(isMatch).to.be.true;
        cy.log(`Title verification passed - Search: "${productTitle}" vs Detail: "${cleanDetailTitle}"`);
      });

    cy.get('.a-price-whole')
      .first()
      .invoke('text')
      .then((detailPrice) => {
        const cleanDetailPrice = detailPrice.replace(/[^\d]/g, '');
        expect(cleanDetailPrice).to.equal(productPrice);
        cy.log(`Price verification passed - Search: $${productPrice} vs Detail: $${cleanDetailPrice}`);
      });

  })
})