class AmazonLocators {
    searchInput = '.nav-search-field';
    searchButton = '#nav-search-submit-button';
    
    searchResultsContainer = '[data-component-type="s-search-result"]';
    sortDropdown = '#s-result-sort-select';
    sortByPriceHighToLow = '[data-value="price-desc-rank"]';
    
    productTitle = '[data-cy="title-recipe-title"]';
    productPrice = '.a-price-whole';
    productPriceRange = '.a-price-range';
    productLink = 'h2 a, a[href*="/dp/"], .s-link-style a';
    
    // First row non-sponsored items
    firstRowItems = '[data-component-type="s-search-result"]:not([data-component-id*="sponsored"])';
    rightmostFirstRowItem = '[data-component-type="s-search-result"]:not([data-component-id*="sponsored"]):nth-child(4)';
    
    productLinkAlternatives = [
        'h2 a',
        'a[href*="/dp/"]',
        '.s-link-style a',
        '.a-link-normal',
        '[data-testid="product-title-link"]'
    ];
    
    productDetailTitle = '#productTitle';
    productDetailPrice = '.a-price-whole';
    productDetailPriceRange = '.a-price-range .a-offscreen';
    
    alternativeProductTitle = '[data-testid="product-title"]';
    alternativeProductPrice = '[data-testid="price-whole"]';
    alternativeFirstRowItems = '.s-result-item:not(.AdHolder)';
}

module.exports = AmazonLocators;