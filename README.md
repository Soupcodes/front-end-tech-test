This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run the webapp

`git clone https://github.com/Soupcodes/front-end-tech-test.git` into a folder through a terminal<br>
`cd front-end-tech-test` to access the folder<br>
Open in your preferred IDE

## Run Scripts

Once open in your IDE, run:

### `npm i`

This will download and install all relevant dependencies required to run the webapp

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### With extra time:

(CSS Styled Components have been incorporated into the layout, but with extra time, I would have liked to try building the pages in TypeScript).

As the premise is a front end test, there are numerous issues I would have liked to have addressed:<br>

- **Core aspect that I would have done differently if building out a full site would be to build a wireframe for each page as a target outline to aim to build. This will help determine what functionality would be required on the pages, whether they should be extracted further, whether more is required and when design changes, it will be easier to spot where deviations may affect other aspects of the website. It's also important to understand where props need to be passed around and which pages may require state etc.**

- Spike out potential frameworks that may be usable to quickly generate SPA's (such as Gatsby.js) and whether they would compliment React if that is to be the chosen front end tech

- (Generally) Carry out UX research to understand the branding and style the company intends to implement and try to build to that basis

- Removing the border that appears around all buttons on click

- Add more product cards (preferably from a request to the backend) to ensure mapping through product info. functionality works as intended

- Build the site from mobile view first to ensure the site is responsive, building upwards rather than downwards, and ensure the product carousel images scale as well

In terms of functionality and the code itself, I would have spent more time understanding how the carousel component is rendered, to be able to render a full product, description alongside the images in one component / card as opposed to splitting the logic which I am aware currently causes issues when trying to add a second object into products page.

It would have also been fun to determine what types of authentication may be required to resolve a checkout situation as I have not come across dealing with live payments before.
