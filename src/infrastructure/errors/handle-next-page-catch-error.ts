import { AppError } from "@infrastructure/errors/app-error";

export const handleNextPageCatchError = (e: unknown) => {
  if (e instanceof AppError) {
    console.warn(`Api Error while requesting data: ${JSON.stringify(e.serialize())}`);
    return e.serialize();
  }

  throw new Error(`Unknown Api Error while requesting data: ${JSON.stringify(e)}`);
};
