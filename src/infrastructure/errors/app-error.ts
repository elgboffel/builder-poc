import { BaseError } from "@infrastructure/errors/types";

export class AppError extends Error {
  public readonly error: BaseError;

  constructor(error: Error) {
    super();

    this.error = error.;
  }

  serialize = (): BaseError => {
    const { error } = this;
    return {
      statusCode: error?.statusCode ?? null,
      url: error?.url ?? null,
      isSuccess: error?.isSuccess ?? null,
      errors: error?.errors ?? null,
      responseContent: error?.responseContent ?? null,
    };
  };
}
