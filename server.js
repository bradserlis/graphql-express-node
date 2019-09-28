const express = require('express');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');

// Graphql Schema
let schema = buildSchema(`
    type Query {
        message: String        
    }
`);

let root = {
  message: () => 'Hello World'
};

// Create an express server and a Graphql endpoint

let app = express();
app.use(
  '/graphql',
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000, () =>
  console.log('express graphql server is running...on 4000/graphql')
);
