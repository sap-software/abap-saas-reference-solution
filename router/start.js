const approuter = require('@sap/approuter');
const fs = require('fs');
const path = require('path');

const ar = approuter();

const xsappPath = path.join(__dirname, 'xs-app.json');
const xsappConfig = JSON.parse(fs.readFileSync(xsappPath, 'utf8'));

if (process.env.HANDLE_WEBSOCKET_EXT === 'async') {
  xsappConfig.websockets = { enabled: true };
}

ar.start({
  xsappConfig,
  extensions: [ require('@sap/asp-middleware') ]
});
