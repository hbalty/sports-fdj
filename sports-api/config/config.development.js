var exports = module.exports = {
    isTest: true,
    server: {
      port: process.env.SPORTS_API || 3000,
      host: 'localhost'
    },
    bodyParser: {
      extended: true
    },
    consign: {
      verbose: false
    }
  };