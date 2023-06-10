class ApiError extends Error {
  constructor(status, message, source) {
    super();
    this.status = status;
    this.message = message;
    this.source_error = source;
  }

  static badRequest(message, source) {
    return new ApiError(400, message, source);
  }

  static notAuthorized(source, message = "Not authorized") {
    return new ApiError(401, message, source);
  }

  static requestDataAreNotDefined(details, source) {
    return new ApiError(
      404,
      `The request data were not defined${details ? `: ${details}` : ""}`,
      source
    );
  }

  static duplicate(value, source) {
    return new ApiError(409, `The current ${value} is already in use`, source);
  }

  static idIsNotANumber(source) {
    return new ApiError(400, "The id is in the wrong format", source);
  }

  static unexpectedError(err, source) {
    return new ApiError(500, `Unexpected error: ${err.message}`, source);
  }
}

module.exports = ApiError;
