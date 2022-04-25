# Jumiahussein

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.
To run the project, ensure you have the latest version of TypeScript and Angular.

## Get the project

I have two options for you to view my project

1. I have deployed this application online via Netlify. You can simply access it by navigating to this link: https://roaring-gnome-58f57f.netlify.app/

2. Clone this repository and launch the application locally.

## Start project locally

To start the application, run `ng serve` from the Angular CLI. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Project features and notes

Done: Using the randomuser.me1 API, create a SPA2 with a view showing the list of users, with at least this information...
Done: Should be possible to filter by gender and by nationality.
Done: Should be possible to export current list by CSV or XML.

Required topics to take into account:

Done: Focus on design (feel free to use component libraries, p.e. Angular Material)
Done: Code standards / clean code
Done: Unit Testing
Done: Responsiveness
Done: Docker with the necessary configs to serve the SPA

Bonus topics:
Done: Infinite/Virtual Scrolling
Done: Possibility to add or remove columns
Done: Only request the fields that really need (based on the columns selected)
Not Done: E2E tests

I have commented out the 'seed' parameter from being sent to the Randomuser API.
This is because when included, it stops the gender filter from working.
I believe this is an issue with the randomuser API and not my application.

With more time, I would do more unit tests and E2E tests

It was fun working on this exercise and I hope you like my design and overall code!
