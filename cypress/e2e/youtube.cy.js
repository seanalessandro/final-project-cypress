import YoutubeMainPage from "../pages/YoutubeMainPage";

describe('YouTube Trending Gaming E2E', () => {
  let videoTitle, videoChannel;

  before(() => {
    // Handle common YouTube errors
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('ResizeObserver loop completed with undelivered notifications') ||
          err.message.includes('Network Error') || 
          err.message.includes('Script error') ||
          err.message.includes('ChunkLoadError') ||
          err.message.includes('Non-Error promise rejection captured') ||
          err.message.includes('Cannot read properties of null') ||
          err.message.includes('ytInitialData')) {
        return false
      }
      return true
    })
  })

  it('Navigate to trending gaming and verify third video details', () => {
    cy.visit('https://www.youtube.com', { failOnStatusCode: false });
    
    cy.wait(3000);

    YoutubeMainPage.goToTrendingPage();

    YoutubeMainPage.selectGamingCategory();

    YoutubeMainPage.getThirdVideoInfo().then((info) => {
      videoTitle = info.title;
      videoChannel = info.channel;
      cy.log(`Video Title from trending: ${videoTitle}`);
      cy.log(`Video Channel from trending: ${videoChannel}`);
      
      expect(videoTitle).to.not.be.empty;
      expect(videoChannel).to.not.be.empty;

      YoutubeMainPage.selectThirdVideo();

      // Wait for video page to fully load
      cy.wait(5000);

      YoutubeMainPage.verifyVideoTitle(videoTitle);

      YoutubeMainPage.verifyVideoChannel(videoChannel);

      
      cy.url().should('include', '/watch?v=');
      
      cy.get('#movie_player, .html5-video-player', { timeout: 10000 }).should('be.visible');
    });
  })
})