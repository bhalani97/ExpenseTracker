module.exports={
    userWiseSocketIds(userIds) {
        let clients = sails.io.sockets.clients();
        let userWiseSocketId = {};
        _.each(clients.connected, function (soc, socketId) {
          if (userIds.indexOf(soc.handshake.headers.userId) > -1) {
            if (!userWiseSocketId[soc.handshake.headers.userId]) {
              userWiseSocketId[soc.handshake.headers.userId] = [];
            }
            userWiseSocketId[soc.handshake.headers.userId].push(socketId);
          }
        });
        return userWiseSocketId;
      },
}