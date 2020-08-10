const _ = require('lodash');
const SocketService = require("../../services/socketEvents");

module.exports = sails => {
    return {
        initialize(cb) {
            // let hook = sails.hooks.swagger;
            sails.after('lifted', () => {
                /** Seed Data **/
                //SeederService.seedData();
                /** listen to the socket events, they are good **/
                console.log('listening')
                SocketService.socketEvents();
            });
            cb();
        },
    }
};
