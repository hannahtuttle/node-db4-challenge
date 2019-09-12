const express = requires('express');

const server = express();

server.use(express.json());

module.exports = server;