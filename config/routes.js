/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
"POST /register":"UserController.register",
"POST /login":"UserController.login",
"POST /account":"AccountController.create",
"POST /accounts":"AccountController.getAccount",
"POST /transcation":"TranscationController.create",
"POST /transcations":"TranscationController.getTranscation"




};
