// package: cryptomail
// file: cryptomail.proto

var cryptomail_pb = require("./cryptomail_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CryptoMail = (function () {
  function CryptoMail() {}
  CryptoMail.serviceName = "cryptomail.CryptoMail";
  return CryptoMail;
}());

CryptoMail.GetProfiles = {
  methodName: "GetProfiles",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.Null,
  responseType: cryptomail_pb.StringArray
};

CryptoMail.NewProfile = {
  methodName: "NewProfile",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.String,
  responseType: cryptomail_pb.Null
};

CryptoMail.LoadProfile = {
  methodName: "LoadProfile",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.String,
  responseType: cryptomail_pb.Null
};

CryptoMail.GetCurrentProfile = {
  methodName: "GetCurrentProfile",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.Null,
  responseType: cryptomail_pb.String
};

CryptoMail.IsLoggedIn = {
  methodName: "IsLoggedIn",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.Null,
  responseType: cryptomail_pb.Bool
};

CryptoMail.AuthURL = {
  methodName: "AuthURL",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.Null,
  responseType: cryptomail_pb.String
};

CryptoMail.MakeService = {
  methodName: "MakeService",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.Null,
  responseType: cryptomail_pb.Null
};

CryptoMail.RefreshMails = {
  methodName: "RefreshMails",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.Null,
  responseType: cryptomail_pb.Null
};

CryptoMail.NewFriendRequest = {
  methodName: "NewFriendRequest",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.String,
  responseType: cryptomail_pb.Null
};

CryptoMail.GetFriendRequests = {
  methodName: "GetFriendRequests",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.Null,
  responseType: cryptomail_pb.FriendRequestArray
};

CryptoMail.GetFriends = {
  methodName: "GetFriends",
  service: CryptoMail,
  requestStream: false,
  responseStream: false,
  requestType: cryptomail_pb.Null,
  responseType: cryptomail_pb.StringArray
};

exports.CryptoMail = CryptoMail;

function CryptoMailClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CryptoMailClient.prototype.getProfiles = function getProfiles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.GetProfiles, {
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

CryptoMailClient.prototype.newProfile = function newProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.NewProfile, {
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

CryptoMailClient.prototype.loadProfile = function loadProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.LoadProfile, {
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

CryptoMailClient.prototype.getCurrentProfile = function getCurrentProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.GetCurrentProfile, {
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

CryptoMailClient.prototype.isLoggedIn = function isLoggedIn(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.IsLoggedIn, {
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

CryptoMailClient.prototype.authURL = function authURL(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.AuthURL, {
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

CryptoMailClient.prototype.makeService = function makeService(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.MakeService, {
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

CryptoMailClient.prototype.refreshMails = function refreshMails(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.RefreshMails, {
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

CryptoMailClient.prototype.newFriendRequest = function newFriendRequest(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.NewFriendRequest, {
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

CryptoMailClient.prototype.getFriendRequests = function getFriendRequests(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.GetFriendRequests, {
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

CryptoMailClient.prototype.getFriends = function getFriends(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CryptoMail.GetFriends, {
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

