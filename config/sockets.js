/**
 * WebSocket Server Settings
 * (sails.config.sockets)
 *
 * Use the settings below to configure realtime functionality in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/sockets
 */

const cipher = require("../api/services/cipher");

module.exports.sockets = {

  /***************************************************************************
  *                                                                          *
  * `transports`                                                             *
  *                                                                          *
  * The protocols or "transports" that socket clients are permitted to       *
  * use when connecting and communicating with this Sails application.       *
  *                                                                          *
  * > Never change this here without also configuring `io.sails.transports`  *
  * > in your client-side code.  If the client and the server are not using  *
  * > the same array of transports, sockets will not work properly.          *
  * >                                                                        *
  * > For more info, see:                                                    *
  * > https://sailsjs.com/docs/reference/web-sockets/socket-client           *
  *                                                                          *
  ***************************************************************************/

  // transports: [ 'websocket' ],


  /***************************************************************************
  *                                                                          *
  * `beforeConnect`                                                          *
  *                                                                          *
  * This custom beforeConnect function will be run each time BEFORE a new    *
  * socket is allowed to connect, when the initial socket.io handshake is    *
  * performed with the server.                                               *
  *                                                                          *
  * https://sailsjs.com/config/sockets#?beforeconnect                        *
  *                                                                          *
  ***************************************************************************/
 transports: ["polling", "websocket"],
  beforeConnect: function(handshake, proceed) {
    
  try{
console.log("getting Req not connected yet")
    let token = "";
    if (handshake._query && handshake._query.token) {
      token = handshake._query.token;
    }
    if (
      handshake.headers &&
      (handshake.headers.authorization || handshake.headers.Authorization)
    ) {
      token = handshake.headers.authorization || handshake.headers.Authorization;
    }
    const userData = cipher.verifyToken(token)
    handshake.headers.userId = userData.id
    return proceed(undefined, true);

  }catch(error){
    return proceed(undefined, false);
  }
  
  },


  /***************************************************************************
  *                                                                          *
  * `afterDisconnect`                                                        *
  *                                                                          *
  * This custom afterDisconnect function will be run each time a socket      *
  * disconnects                                                              *
  *                                                                          *
  ***************************************************************************/

  // afterDisconnect: function(session, socket, done) {
  //
  //   // By default: do nothing.
  //   // (but always trigger the callback)
  //   return done();
  //
  // },


  /***************************************************************************
  *                                                                          *
  * Whether to expose a 'GET /__getcookie' route that sets an HTTP-only      *
  * session cookie.                                                          *
  *                                                                          *
  ***************************************************************************/

  // grant3rdPartyCookie: true,


};
