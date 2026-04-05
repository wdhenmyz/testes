import db from "../drivers/load2.mjs";

const { raw, exec, prepare, all, get } = await db.connect("photostructure-sqlite",
    { file: "teste.db" }
)

// Create a table
exec(`
  CREATE TABLE IF NOT EXISTS person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE
  )
`);

// Insert data
/*
const insert = prepare("INSERT INTO person (name, email) VALUES (?, ?)");
insert.run("eu", "eu@example.com");
insert.run("nan", "nan@example.com");*/


// Query data
const person = all("SELECT * FROM person");
console.log(person);
// Output: [
//   { id: 1, name: 'eu', email: 'eu@example.com' },
//   { id: 2, name: 'nan', email: 'nan@example.com' }
// ]

const singlePerson = get("SELECT * FROM person WHERE name = ?", "eu");
console.log(singlePerson);

const oneperson = get("SELECT * FROM person WHERE id = ?", 1);
console.log(oneperson);

// Always close the database when done
raw.close();