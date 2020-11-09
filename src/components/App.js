import { useState ,useEffect } from "react";
// import { SqliteConnector } from "../connectors";
import sqlite3 from "sqlite3"
import { open } from 'sqlite'

function App() {
  const [result, setResult] = useState(null);

  useEffect(()=>{
    readFromSqlite();
  },[])

  async function readFromSqlite(){
    const db = await open({
      filename: '/home/jccari/code/visaf/Parlamentaries.db',
      driver: sqlite3.Database
    })
    
    const res = await db.all("select * from tweets limit 10;")
    console.log(res);
  }

  return (
    <div className="App">
      <h2>hello</h2>
    </div>
  );
}

export default App;
