import sqlite3 from "sqlite3"
import Database from "better-sqlite3"

import DBDriver from "../dbv2.mjs"

const db = new DBDriver({
    sqlite3,
    "better-sqlite3": Database
})

export default db