"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * What is Object Type?
 * Answer:
 * A Blueprint that tells Typescript what an object should have as Required and Optionally.
 */
const book = {
    title: "Ponniyin selva",
    price: 200,
    isSelling: true,
    offer: 0,
};
const book2States = {
    title: "2 States",
    price: 100,
    isSelling: true,
    offer: 5,
};
const idhalinOram = {
    title: "Idhalin Oram",
    duration: 300,
    album: "3",
};
// Album property is read-only
// idhalinOram.album = "Anirudh";
const VishnuData = {
    name: "Vishnu Vardhan B",
    dob: new Date("16/03/2000"),
    address: {
        addressLine1: "Test 1",
        addressLine2: "Test 2",
        addressLine3: "Test 3",
        city: "Pollachi",
        town: "MK",
        pincode: 64003,
    },
    songPreferences: [],
    bookPreferences: [],
};
