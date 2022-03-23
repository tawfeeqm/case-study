class ErrorResponse extends Error {
  constructor(code, msg) {
    super();
    this.code = code;
    this.msg = msg;
  }
};

exports.throwError = function(code, msg) {
  throw new ErrorResponse(code, msg);
} 