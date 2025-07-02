const normalizeField = (field: string): string => {
  return field.trim().toLowerCase();
};

export const validationMessages = {
  required: (field: string) =>
    `The ${normalizeField(field)} field is required.`,
  type: {
    string: (field: string) =>
      `The ${normalizeField(field)} must be a valid string.`,
    number: (field: string) =>
      `The ${normalizeField(field)} must be a valid number.`,
    boolean: (field: string) =>
      `The ${normalizeField(field)} must be true or false.`,
    method: (field: string) =>
      `The ${normalizeField(field)} must be a function.`,
    regexp: (field: string) =>
      `The ${normalizeField(field)} must be a valid pattern.`,
    integer: (field: string) =>
      `The ${normalizeField(field)} must be an integer.`,
    float: (field: string) => `The ${normalizeField(field)} must be a float.`,
    array: (field: string) => `The ${normalizeField(field)} must be an array.`,
    object: (field: string) =>
      `The ${normalizeField(field)} must be an object.`,
    enum: (field: string) =>
      `The ${normalizeField(field)} must be one of the allowed values.`,
    date: (field: string) =>
      `The ${normalizeField(field)} must be a valid date.`,
    url: (field: string) => `The ${normalizeField(field)} must be a valid URL.`,
    email: (field: string) =>
      `The ${normalizeField(field)} must be a valid email address.`,
  },
  len: (field: string, length: number) =>
    `The ${normalizeField(field)} must be exactly ${length} characters.`,
  min: (field: string, min: number) =>
    `The ${normalizeField(field)} must be at least ${min}.`,
  max: (field: string, max: number) =>
    `The ${normalizeField(field)} must be at most ${max}.`,
  range: (field: string, min: number, max: number) =>
    `The ${normalizeField(field)} must be between ${min} and ${max}.`,
  minLength: (field: string, length: number) =>
    `The ${normalizeField(field)} must be at least ${length} characters.`,
  maxLength: (field: string, length: number) =>
    `The ${normalizeField(field)} must be at most ${length} characters.`,
  rangeLength: (field: string, min: number, max: number) =>
    `The ${normalizeField(
      field
    )} length must be between ${min} and ${max} characters.`,
  pattern: (field: string) => `The ${normalizeField(field)} format is invalid.`,
  whitespace: (field: string) =>
    `The ${normalizeField(field)} cannot be empty.`,
  default: (field: string) => `Invalid ${normalizeField(field)}.`,
};
