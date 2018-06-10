const express = require("express");
const { buildSchema } = require('graphql');
const graphqlHTTP = require('express-graphql');

const getSavings = require('./getSavings');

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// GraphQL schema
const schema = buildSchema(`
  type MonthValue {
    month: Int
    amount: Int
  }

  type Query {
    getSavings(initial: Int!, monthly: Int!, interestRate: Int!): [MonthValue]
  }
`);

// Root resolver
const rootValue = {
  getSavings,
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}));

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
