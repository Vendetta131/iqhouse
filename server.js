let mosca = require('mosca');

let settings = {
    port: 1883,
};

let server = new mosca.Server(settings);
server.on('ready', function () {
    console.log('Server running')
});

server.published = function (packet, client, cb) {
    if (packet.topic.indexOf('echo') === 0) {
        return cb;
    }

    let newPacket = {
        topic: 'echo/' + packet.topic,
        payload: packet.payload,
        retain: packet.retain,
        qos: packet.qos
    };

    server.publish(newPacket, cb);
};

server.on('clientConnected', function (client) {
    console.log('Client connected: ', client.id);
});

server.on('unsubscribed', function (topic, client) {
    console.log('Unsubscribed: ', topic);
});

server.on('clientDisconnecting', function (client) {
    console.log('Client disconnecting: ', client.id);
});

server.on('clientDisconnected', function (client) {
    console.log('Client disconnected: ', client.id);
});

module.exports = server;