import express from "express";
import { createYoga, createSchema } from "graphql-yoga";
import mongoose from "mongoose";
import { typeDefs } from "./schema/typeDefs.js";
import { resolvers } from "./schema/resolvers.js";

const app = express();

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
  graphqlEndpoint: "/graphql",
});

app.use("/graphql", yoga);

await mongoose.connect("mongodb://127.0.0.1:27017/graphql_yoga_demo");
console.log("✅ Connected to MongoDB");

app.listen(4000, () => {
  console.log("🚀 Server running at http://localhost:4000/graphql");
});
