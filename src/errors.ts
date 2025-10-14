// Custom error classes for the DivinePride API wrapper

/**
 * Base error for all DivinePride API wrapper errors.
 */
export class DivinePrideError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DivinePrideError';
  }
}

/**
 * Error thrown when an invalid ID is provided.
 */
export class InvalidIdError extends DivinePrideError {
  constructor(id: unknown, message: string) {
    super(`Invalid ID: ${id}. ${message}.`);
    this.name = 'InvalidIdError';
  }
}

/**
 * Error thrown when an HTTP error occurs.
 */
export class HttpError extends DivinePrideError {
  status: number;
  constructor(status: number, message: string) {
    super(`HTTP error! status: ${status}. ${message}`);
    this.name = 'HttpError';
    this.status = status;
  }
}

/**
 * Error thrown when the API key is missing.
 */
export class MissingApiKeyError extends DivinePrideError {
  constructor() {
    super(
      'Please provide DivinePride API key. You can get one here: https://www.divine-pride.net/account'
    );
    this.name = 'MissingApiKeyError';
  }
}
