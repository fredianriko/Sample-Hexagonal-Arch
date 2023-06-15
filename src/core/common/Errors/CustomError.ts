// Custome Error class here

class CustomError extends Error {
  public readonly statusCode: number;
  public readonly message: string;
  public readonly data: any;

  constructor(statusCode: number, message: string, data?: any) {
    super(message);
    this.statusCode = statusCode;
    this.message = message || null;
    this.data = data || null;
  }
  toJSON() {
    return {
      statusCode: this.statusCode,
      message: this.message,
      data: this.data,
    };
  }
}

export { CustomError };
