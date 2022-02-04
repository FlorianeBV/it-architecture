'use strict'

module.exports.helloWorld = function helloWorld(req, res, next) {
  console.log(req.data.value.name)
  res.send({
    message: 'Hello ' + req.data.value.name
  });
};