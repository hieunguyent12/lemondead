const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: "Next js" }];
    },
  },
};

export default resolvers;
