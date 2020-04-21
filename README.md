## HypeSneaks

Looking to build an online store to sell sneakers? Here's an e-commerce site developed by Fullstack Academy students!

HypeSneaks is a mock e-commerce fullstack web application made with React, Redux, Node, Express, PostgreSQL, Google oAuth, and Sequelize meant to flesh out our understanding of CRUD applications and the unique constraints in building them. Also implemented Materialize for some basic design assistance, which was particularly useful when working with buttons and nav bar visual design.

`Backend` - Express, Sequelize

`Frontend` - React, Redux

`style` - Materialize

`Deployment` - Continuous deployment with Travis CI

`Deployed Link`: https://sneaks-shopper.herokuapp.com/

## Start MacOS/Linux

First clone
Start with `npm install` to get install the proper dependencies

Running `npm run start-dev` will start the application on a local server

Running `createdb sneaks` will create your database.

Running `npm run seed` will fill your store with sneakers!

Visit `http://localhost:8080` to start shopping on a local server

If you want to run the server and/or `webpack` separately, you can also
`npm run start-server` and `npm run build-client`.

## Testing

`createdb sneak-test` will create the test db

`npm test` will run mocha and chai testing

## Customize

* Create a file called secrets.js in the project root
* This file is listed in .gitignore, and will only be required in your development environment
* Its purpose is to attach the secret environment variables that you will use while developing
* However, it's very important that you not push it to Github! Otherwise, prying eyes will find your secret API keys!
* It might look like this:
  ```javascript
  process.env.GOOGLE_CLIENT_ID = 'Your Google Client ID here'
  process.env.GOOGLE_CLIENT_SECRET = 'Your Google Client Secret here'
  process.env.GOOGLE_CALLBACK = '/auth/google/callback'
  ```

## OAuth

* To use OAuth with Google, complete the steps above with a real client ID and client secret supplied from Google
* You can get them from the [Google APIs dashboard](https://console.developers.google.com/apis/credentials).

## Challenges & Feats

One of the biggest challenges was representing our data through our schema, and how best to do so. Ultimately, we decided on 3 models and a custom join table. This eliminated redundancies in the database when we were originally deciding to use a ‘cart’ model which was just as easy to implement as an order instance that was ‘not placed’ yet.

Another large challenge was the implementation of a guest cart. We chose to do this through session storage, but only after we had built out our logged-in user functionality. In hindsight, this may not have been our best approach as integrating from frontend storage when logged out, to a stored cart once logged in caused some messy overlap, especially when trying to avoid unnecessary API calls. Ultimately we reached a working solution where a guest cart, if a user signs up, will merge with that user’s associated cart thereafter.
