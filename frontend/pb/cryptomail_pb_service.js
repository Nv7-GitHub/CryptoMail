// package: cryptomail
// file: cryptomail.proto

var cryptomail_pb = require("./cryptomail_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CryptoMail = (function () {
  function CryptoMail() {}
  CryptoMail.serviceName = "cryptomail.CryptoMail";
  return CryptoMail;
}());

CryptoMail.Add = {
  methodName: "Add",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.AddRequest,
  responseType: cryptomail_pb.AddResponse
};

exports.CryptoMail = CryptoMail;

function CryptoMailClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CryptoMailClient.prototype.add = function add(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.Add, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CryptoMailClient = CryptoMailClient;

