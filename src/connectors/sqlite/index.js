import sqlite3 from "sqlite3"
import { open } from 'sqlite'

export default async function openSqliteDB() {
    const db = await open({
        filename: '/home/jccari/code/visaf/Parlamentaries.db',
        driver: sqlite3.Database
      })
    return db; 
}

