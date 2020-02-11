const handlers = {};

handlers.ping = (data, cb) => {
    setTimeout(() => {
        cb(200);
    }, 3000);
};

handlers.health = (data, cb) => {
    cb(200);
};

handlers.hello = (data, cb) => {
    cb(200, {'message': 'welcome!'});
};

module.exports = handlers;