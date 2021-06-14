const fs = require('fs');
const YAML = require('yaml');
const http = require('http');
const { resolve } = require('path');
const express = require('express');
const handlers = require('./index');

const app = express();
const PORT = process.env.PORT || 3030;
const file = fs.readFileSync(resolve(process.cwd(), 'serverless.yml'), 'utf8')
const conf = YAML.parse(file);

const getRoutes = (sls) => {
  const {functions} = sls;

  console.log(functions);

  return Object.keys(functions).reduce((routeMap, func) => {
    const isHTTP = functions[func].events.reduce((r, e) => r || e.http, false);

    if (isHTTP) {
      routeMap[func] = {
        path: func,
        handler: functions[func].handler
      }
    }

    return routeMap;
  }, {});
}

const setupListeners = function (routes) {
  Object.keys(routes).forEach((route) => {
    console.log(`Handler added for ${route}`);
    app.all(`/${route}`, handlers[routes[route].handler]);
    app.all(`/${route}/*`, handlers[routes[route].handler]);
  });
}

setupListeners(getRoutes(conf));

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});