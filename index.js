'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
};

exports.httpTest = (request, response) => {
  response.status(200).send('Hello World! TESTS');
};

exports.event = (event, callback) => {
  callback();
};
