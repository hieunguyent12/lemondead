import { ApolloServer, gql } from "apollo-server-micro";
import cors from "cors";
import type { NextApiRequest, NextApiResponse } from "next";
/*
  TODO

  - Move graphql types to separate file
  - Generate typescript types from schema
  - Connect to prisma
  - Think about file structure

*/

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
      return [{ name: "Nextjs" }];
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

const ALLOWED_ORIGINS = [
  "https://studio.apollographql.com",
  "http://localhost:3000",
];

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const origin = req.headers.origin;

  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
