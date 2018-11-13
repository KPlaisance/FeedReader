/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        
        // Tests to make sure that the 'allFeeds' variable has been defined
        // and not empty

        it('"allFeeds" Variable Defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test that loops through each feed and ensures it has a URL defined 
        // and URL not empty

         it('URL Defined', function() {
             for(let feed of allFeeds) {
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).not.toBe(0);
             }
         });


        // Test that loops through each feed and ensures it has a name defined
        // and name not empty

        it('Name Defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });

    });

   // Test suite titled "The Menu"

    describe('The Menu', function() {
        
        // Tests that menu element is hidden by default

        it('Is Hidden', function() {
             const body = document.querySelector('body');
             expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        // Tests to see if the menu changes when menu icon is clicked
        it('Toggles On and Off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');

            // clicks the menu (hamburger) button
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            // clicks the menu (hamburger) button
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

    });

    // Test suite titled "Initial Entries"

    describe('Initial Entries', function() {

        const feedEntries = [];

        // Tests to make sure when the loadFeed() is called, it completes its work

         beforeEach(function(done) {
             loadFeed(0, done);
         });

         it('Async Work Completes', function() {
             const feed = document.querySelector('.feed');
             Array.from(feed.children).forEach(function(entry) {
                feedEntries.push(entry.innerText);
            });

             expect(feedEntries.length > 0).toBe(true);
         });
    });

describe('New Feed Selection', function () {
    const feed = document.querySelector('.feed');
    const firstFeed = [];
    const otherFeed = [];

    beforeEach(function (done) {
        // Loads firstFeed
        loadFeed(0, function () {
            Array.from(feed.children).forEach(function(entry) {
                firstFeed.push(entry.innerText);
            });

            // Loads otherFeed
            loadFeed(1, function () {
                done();
            });
        });
    });
    
    it('Content Changes', function (done) {
        Array.from(feed.children).forEach(function(entry) {
            otherFeed.push(entry.innerText);
        });

        expect(otherFeed).not.toBe(firstFeed);
        done();
    });
});
}());
