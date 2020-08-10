module.exports = {
    datastores: {
        default: {
            adapter:'sails-mongo',
      url:'mongodb://root:1234@cluster0-shard-00-00.wo3a5.mongodb.net:27017,cluster0-shard-00-01.wo3a5.mongodb.net:27017,cluster0-shard-00-02.wo3a5.mongodb.net:27017/tracker',
      ssl:true,
      authSource:'admin',
      replicaSet:'atlas-csi7gk-shard-0',
        },

    },
    models: {
        migrate: 'safe',
    },
    blueprints: {
        shortcuts: false,
    },
    security: {
        cors: {
            allRoutes: true,
  allowOrigins: '*',
  allowCredentials: false,
  allowRequestHeaders: 'content-type,accept,authorization,access-token',
  allowRequestMethods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD',
  allowAnyOriginWithCredentialsUnsafe: true
        },
    },
    log: {
        level: 'debug'
    },
    http: {
        cache: 365.25 * 24 * 60 * 60 * 1000, // One year
        //trustProxy: true,
    },
    port: 1376,
   
    // ssl: undefined,
   
};
