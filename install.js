// jrdap install script
// usage: curl -s https://raw.githubusercontent.com/gbxyz/jrdap/main/install.js | sudo node

const fs = require('node:fs');

const file = '/usr/local/bin/jrdap';

fetch("https://raw.githubusercontent.com/gbxyz/jrdap/main/jrdap").then(
    r => r.text().then(install, fail),
    fail,
);

function fail(error) {
    process.stderr.write("Error: " + error + "\n");
    process.exit(1);
}

function install(data) {
    try {
        fs.writeFileSync(file, data, {mode:0o755});
        process.stderr.write("jrdap successfully installed to " + file + "!\n");

    } catch (e) {
        fail(e);

    }
}
