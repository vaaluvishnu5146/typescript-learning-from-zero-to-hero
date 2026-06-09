type Book = {
  title: string;
  price: number;
  isSelling: boolean;
  offer: number;
};

type Song = {
  title: string;
  duration: number;
  album: string;
  singer: string[];
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

export { Book, Song, User };
