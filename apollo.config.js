module.exports = {
  client: {
    excludes: ["src/types.tsx"],
    service: {
      name: "gql",
      url: "http://gql-load-balancer-108251365.us-east-2.elb.amazonaws.com",
      skipSSLValidation: true,
    },
  },
};
