import db from "../drivers/load2.mjs";

const { exec, prepare, transaction, all, get } = await db.connect("better-sqlite3", 
    { file: "teste.db", 
        options: { verbose: console.log } 
    })

/*
exec(`
    CREATE TABLE IF NOT EXISTS cats (
        id INTEGER PRIMARY KEY,
        name TEXT,
        age INTEGER
    )
`)

const info = stmt.run('Joey', 2);

console.log(info.changes); // => 1
*/

const stmt = prepare('INSERT INTO cats (name, age) VALUES (@name, @age)');

const insertcats = transaction((cats) => {
    for (const cat of cats) stmt.run(cat)
});

insertcats([
    { name: 'Mittens', age: 3 },
    { name: 'Whiskers', age: 5 },
    { name: 'Fluffy', age: 1 }
])

console.log(all('SELECT * FROM cats'))

console.log(get('SELECT * FROM cats WHERE name = ?', ['Mittens']))