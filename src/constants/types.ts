/**
 * Type Alias
 */

type Book = {
  title: string;
  price: number;
  isSelling: boolean;
  offer: number;
};

type Song = {
  title: string;
  duration: number;
  readonly album: string;
  singer?: string[];
};

type User = {
  name: string;
  dob: Date;
  address: Address;
  songPreferences: Song[];
  bookPreferences: Book[];
};

type Address = {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  city: string;
  town: string;
  pincode: number;
};

type dummy = {
  name: string;
};

/**
 * Extending = Helps to create a new types by extending existing type
 */
type dummyExtended = dummy & {
  age: number;
};

/**
 * When do i need Type?
 * 1. Defining simple datatype
 * 2. Complex type definitions
 * 3. Union Types
 * 4. Tuple Types
 * 5. Function Types
 * 6. Conditional Types
 */

type AddFn = (a: number, b: number) => number;

export { Book, Song, User, dummy, dummyExtended, AddFn };
