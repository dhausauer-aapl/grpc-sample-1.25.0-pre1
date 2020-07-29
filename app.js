var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync('./service.proto');
var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var service = protoDescriptor.service;

var server = new grpc.Server();

server.bind('0.0.0.0:tcp://192.168.78.96:8080',
  grpc.ServerCredentials.createInsecure());

server.start();
