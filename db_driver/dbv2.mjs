export default class DBDriver {
    constructor(drivers = {}) {
        this.drivers = drivers
    }

    async connect(driverName, config = {}) {

        switch (driverName) {

            case "sqlite3":
                return await this._sqlite3Driver(this.drivers["sqlite3"], config)

            case "better-sqlite3":
                return await this._bettersqlite3(this.drivers["better-sqlite3"], config)

            case "pg":
                return await this._pgDriver(this.drivers["pg"], config)

            default:
                throw new Error("Driver de banco inválido")
        }
    }

    async _sqlite3Driver(driver, config) {

        const db = new driver.Database(config.file)

        return {
            raw: db,
            serialize: (func) => db.serialize(func),
            run: (sql) => db.run(sql),
            get: (sql) => db.get(sql),
            all: (sql) => db.all(sql),
            each: (sql, callback) => db.each(sql, callback),
            close: () => db.close(),
        }

    }

    async _bettersqlite3 (driver, config = {}) {

        const { file, options } = config

        const db = new driver(file, options)

        return {
            raw: db,
            exec: (sql) => db.exec(sql),
            prepare: (sql) => db.prepare(sql),
            transaction: (fn) => db.transaction(fn),
            all: (sql) => db.prepare(sql).all(),
            get: (sql, params) => db.prepare(sql).get(params ?? null),
        }

    }

    async _pgDriver(driver, config) {

        const { Client, Pool } = driver

        const conection = config.url ? config.url : `postgresql://${config.user}:${config.password}@${config.host}:${config.port}/${config.database}`

        const client = await new Client({
            connectionString: conection
        }).connect()

        const pool = new Pool({
            connectionString: conection
        })

        return { 
            client, 
            pool,
        }
    }

}

/*
    https://www.sqlitetutorial.net/sqlite-nodejs/create-tables/
*/