# Project Overview - Feed Reader Testing

In this project, I explored using Jasmine to write a test suite for the Feed Reader program.
I was able to make sure each of the expected outcomes actually occurred. This gave me confidence the code works as expected.

I used a walkthrough by Matthew Cranford and Udacity as reference with help figuring out how to setup the tests. The links are in the Udacity walkthrough page: https://www.diigo.com/outliner/fjsk23/Udacity-Feed-Reader-Testing-(project-%234)?key=i5xqspbzvg

# Which tests did I run?

1. Return the `allFeeds` variable to a passing state.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
3. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
4. Write a new test suite named `"The menu"`.
5. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
6. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
7. Write a test suite named `"Initial Entries"`.
8. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
9. Write a test suite named `"New Feed Selection"`.
10. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

All tests are independent of each other.

All tests pass with no errors.

# How to run the project

After downloading the files to your local computer, navigate to the root directory and double click on: index.html

This will open the Udacity feed reader. If Chrome is the browser that opened up, then press F12 to open the Developer Tools.
In the console, you will notice there are 0 errors.

In the Feed Reader section, scroll down the bottom and you will see the Jasmine tests. You will notice there are 8 specs and 0 failures.

The Jasmine__TopLevel__Suite is where all the tests reside

This is all you need to run the project and see all the passing tests.

