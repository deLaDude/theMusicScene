(function () {
  /**
   * Turntable Websocket Utitlity. 
   *
   * Credit for this code goes to IZZMO
   * https://github.com/Izzmo/AutoAwesomer
   */ 
  tms.utils.socket = function (req, handler) {
    if (req.api == "room.now") {
      return;
    }
    
    req.msgid = turntable.messageId;
    turntable.messageId += 1;
    
    req.clientid = turntable.clientId;
    
    if (turntable.user.id && !req.userid) {
      req.userid = turntable.user.id;
      req.userauth = turntable.user.auth;
    }
    
    var d = JSON.stringify(req);
    // if (turntable.socketVerbose) {
    //   console.log(util.nowStr() + " Preparing message " + d);
    // }

    var b = $.Deferred();
    turntable.whenSocketConnected(function () {
      // if (turntable.socketVerbose) {
      //   console.log(util.nowStr() + " Sending message " + req.msgid + " to " + turntable.socket.host);
      // }
      if (turntable.socket.transport.type == "websocket") {
        turntable.socketLog(turntable.socket.transport.sockets[0].id + ":<" + req.msgid);
      }
      turntable.socket.send(d);
      turntable.socketKeepAlive(true);
      turntable.pendingCalls.push({
        msgid: req.msgid,
        handler: handler,
        deferred: b,
        time: util.now()
      });
    });

    return b.promise();
  };
}());