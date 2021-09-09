const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                "COM": path.join(__dirname, 'client/src/components/'),
            }
        }
    },
    devServer: {
        proxy: {
            "^/api/": {
                target: "http://127.0.0.1:8000/"
            }
        }

    }
}