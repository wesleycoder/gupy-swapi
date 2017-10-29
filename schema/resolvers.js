const resolvers = {
  Query: {
    tests () {
      return [];
    },
  },
  Test: {
    title () {
      return 'title';
    },
  },
};

export default resolvers;
