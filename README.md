What is this?
Looking to build up an e-commerce store to sell sneakers?!
A mock ecommerce fullstack web application made with React, Redux, Node, Express, PostgreSQL, Google oAuth, and Sequelize meant to flesh out our understanding of CRUD applications and the unique constraints in building them. Also implemented Materialize for some basic design assistance, it was particularly useful when working with buttons and nav bar visual design.

Setup:

* `npm install`
* ‘createdb sneaks’
* `npm start`
* Open another terminal window; from there, `npm run seed` to seed the database

Where is it?
We are deployed at https://sneaks-shopper.herokuapp.com/

Challenges & Feats
One of the biggest challenges was representing our data through our schema, and how best to do so. Ultimately, we decided on 3 models and a custom join table. This eliminated redundancies in the database when we were originally deciding to use a ‘cart’ model which was just as easy to implement as an order instance that was ‘not placed’ yet.

Another large challenge was the implementation of a guest cart. We chose to do this through session storage, but only after we had built out our logged-in user functionality. In hindsight, this may not have been our best approach as integrating from frontend storage when logged out, to a stored cart once logged in caused some messy overlap, especially when trying to avoid unnecessary API calls. Ultimately we reached a working solution where a guest cart, if a user signs up, will merge with that user’s associated cart thereafter.

Follow along with these instructions to get your online store up and running in no time.
