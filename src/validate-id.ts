import { InvalidIdError } from './errors';

export function validateID(id: any): number {
  if (id === undefined || id === null) {
    throw new InvalidIdError(id, 'ID cannot be undefined or null.');
  }

  const numericId = typeof id === 'string' ? Number(id) : id;

  if (Number.isNaN(numericId)) {
    throw new InvalidIdError(id, 'Expected a number or string.');
  }

  if (numericId < 0) {
    throw new InvalidIdError(
      id,
      'Expected a number greater than or equal to zero.'
    );
  }

  if (!Number.isInteger(numericId)) {
    throw new InvalidIdError(id, 'Expected a number without decimals.');
  }

  return numericId;
}
