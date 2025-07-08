export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('157141945d030dffa7d5af42b1afedd84e139b5199390a919bcac637f4e8cb04'),
  },
});
