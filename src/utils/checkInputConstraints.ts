import { checkEmail } from './checkEmail';

export enum Constraint {
  MIN_LENGTH,
  CONTAINS_NUMBER,
  IS_POSITIVE_NUMBER,
  CANNOT_BE_EMPTY,
  EMAIL,
}

// Function to check constraints
export function checkConstraints(
  value: string,
  constraints: Constraint[]
): string | null {
  for (const constraint of constraints) {
    switch (constraint) {
      case Constraint.MIN_LENGTH:
        if (value.length < 8) {
          return 'Error: Must be at least 8 characters';
        }
        break;
      case Constraint.CONTAINS_NUMBER:
        if (!/\d/.test(value)) {
          return 'Error: Must contain at least one number';
        }
        break;
      case Constraint.IS_POSITIVE_NUMBER: {
        const number = Number(value);
        if (isNaN(number) || number <= 0) {
          return 'Error: Must be a positive number';
        }
        break;
      }
      case Constraint.CANNOT_BE_EMPTY:
        if (!value.trim()) {
          return 'Error: Cannot be empty';
        }
        break;
      case Constraint.EMAIL:
        if (!checkEmail(value)) {
          return 'Email format is incorrect';
        }
    }
  }

  // If no error found, return null
  return null;
}
