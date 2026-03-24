import db from "../drivers/load2.mjs";

const { raw: testdb, serialize, run, all, close } = await db.connect("sqlite3", { file: "teste.db" })

serialize(() => {

    testdb.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")

    const stmt = testdb.prepare("INSERT INTO users (name) VALUES (?)")

    stmt.run("Alice")
    stmt.run("Bob")
    stmt.run("Charlie")

    stmt.finalize()

    testdb.each("SELECT id, name FROM users", (err, row) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(`${row.id}: ${row.name}`)
    })

})

serialize(() => {
    run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)`);

    // Insert a user
    run(`INSERT INTO users (name) VALUES (?)`, 'Alice');

    // Query users
    all(`SELECT * FROM users`, (err, rows) => {
        if (err) throw err;
        console.log(rows);
    });

    close();
});
