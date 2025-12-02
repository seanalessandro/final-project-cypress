class YoutubeLocators {
    trendingMenuButton = '#guide-item-trending, [title="Trending"], [aria-label="Trending"]';
    trendingLink = 'a[href="/feed/trending"]';
    
    categoryTabs = '#chips-wrapper, ytd-feed-filter-chip-bar-renderer, .ytd-feed-filter-chip-bar-renderer';
    moviesCategoryTab = 'yt-chip-cloud-chip-renderer:contains("Movies"), [chip-style="STYLE_DEFAULT"]:contains("Movies")';
    gamingCategoryTab = 'yt-chip-cloud-chip-renderer:contains("Gaming"), [chip-style="STYLE_DEFAULT"]:contains("Gaming")';
    moviesCategoryButton = '#chips-wrapper yt-chip-cloud-chip-renderer[chip-style="STYLE_DEFAULT"]';
    
    categoryAlternative = [
        'yt-chip-cloud-chip-renderer',
        '#chips-wrapper paper-button',
        'ytd-feed-filter-chip-bar-renderer yt-chip-cloud-chip-renderer',
        '.ytd-feed-filter-chip-bar-renderer yt-chip-cloud-chip-renderer',
        '[role="tab"]'
    ];
    
    // Video elements on trending/gaming page
    trendingVideosList = '#contents ytd-video-renderer, #contents ytd-rich-item-renderer, ytd-video-renderer, ytd-rich-item-renderer, .ytd-video-renderer, .ytd-rich-item-renderer';
    gamingVideosList = '#contents ytd-video-renderer, ytd-video-renderer, .ytd-video-renderer, #dismissible, .ytd-grid-video-renderer, ytd-grid-video-renderer';
    videoTitleTrending = '#video-title, .ytd-video-meta-block #video-title';
    videoChannelTrending = '#channel-info #text, .ytd-channel-name #text';
    videoThumbnail = '#thumbnail';
    
    // Third video specifically
    thirdVideoContainer = '#contents ytd-video-renderer:nth-child(3), #contents ytd-rich-item-renderer:nth-child(3)';
    thirdVideoTitle = '#contents ytd-video-renderer:nth-child(3) #video-title, #contents ytd-rich-item-renderer:nth-child(3) #video-title';
    thirdVideoChannel = '#contents ytd-video-renderer:nth-child(3) #channel-info #text, #contents ytd-rich-item-renderer:nth-child(3) .ytd-channel-name #text';
    thirdVideoLink = '#contents ytd-video-renderer:nth-child(3) #video-title, #contents ytd-rich-item-renderer:nth-child(3) #video-title';
    
    // Video watch page elements
    videoPageTitle = '#title h1, .ytd-watch-metadata #title h1';
    videoPageChannel = '#channel-name #container #text, .ytd-channel-name #text';
    videoPageChannelLink = '#channel-name #container #text a, .ytd-channel-name a';
    
    // Alternative selectors for different layouts
    alternativeVideoTitle = '.ytd-video-primary-info-renderer #title h1';
    alternativeChannelName = '.ytd-video-owner-renderer .ytd-channel-name #text';
    
    // Cookie consent and popup handling
    cookieAcceptButton = '[aria-label="Accept all"], #yDmH0d button:contains("Accept"), button:contains("Accept all")';
    signInCloseButton = '#dismiss-button button, [aria-label="No thanks"], [aria-label="Close"]';
}

export default new YoutubeLocators();