import "reflect-metadata";
import Express from "express";
import cors from "cors";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { SignupResolver } from "./modules/user/Signup";
import { AppDataSource } from "./app-data-source";
import { LoginResolver } from "./modules/user/Login";

const main = async () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("--------- DataSource ready to use ---------");
    })
    .catch((error) => console.log(error));

  const schema = await buildSchema({
    resolvers: [SignupResolver, LoginResolver],
  });

  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();

  const app = await Express();
  app.use(
    cors()
    // cors({
    //    origin: "http://localhost:3000",
    // })
  );

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000");
  });
};

main();
