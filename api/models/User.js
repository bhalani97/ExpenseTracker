/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

primaryKey:'id',
    attrbutes: {
      username: {
        type: "string",
      },
      password: {
        type: "string",
      },
      firstname: {
        type: "string",
      },
      lastname: {
        type: "string",
      },
      email: {
        type: "string",
      },
      password: {
        type: "string",
      },
     accounts:{
       collection:'account',
       via:'owner'
     }
    },

};

