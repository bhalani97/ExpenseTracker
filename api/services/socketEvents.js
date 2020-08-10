const router = require("socket.io-events")();

module.exports={
    socketEvents(){
        console.log('Hi')
        router.on("*", async function (socket, args, next) {

            console.log('hi'+args)
            let name = args.shift(),
            data = args.shift();
            console.log(name)
            next()
        })
    }
}