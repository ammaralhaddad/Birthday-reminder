import React, { useState } from "react";
import dataBase from "./dataBase";
import List from "./component/List";

export default function app() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [people, setPeople] = useState(dataBase);

  return (
    <main>
      <div className="container">
        <h2>{people.length} Birthday Today</h2>
        <List people={people} />
        <button onClick={() => setPeople([])}>Claer all</button>
      </div>
    </main>
  );
}
