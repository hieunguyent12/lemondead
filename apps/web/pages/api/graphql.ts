import { ApolloServer, gql } from "apollo-server-micro";
import corsPackage from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
/*
  TODO

  - Move graphql types to separate file
  - Generate typescript types from schema
  - Connect to prisma
  - Think about file structure

*/
const ALLOWED_ORIGINS = [
  "https://studio.apollographql.com",
  "http://localhost:3000",
];

const cors = corsPackage({
  origins: ALLOWED_ORIGINS,
});

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: "Next js" }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export default cors(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};
