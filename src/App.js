import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [casos, setCasos] = useState([]);
  const url = "https://covid19-brazil-api.now.sh/api/report/v1";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setCasos(result.data);
        },
        (error) => {
          console.log("Erros:", error);
        }
      );
  }, []);
  return (
    <div className="container">
      <div className="App">
        <h1>Lista de Casos Covid</h1>
        <table className="table">
          <tbody>
            <th>Estado </th>
            <th>Casos </th>
            <th>Mortes </th>
            {casos.map(function (item, index) {
              return (
                <tr key={index}>
                  <td>{item.uf}</td>
                  <td>{item.cases}</td>
                  <td>{item.deaths}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
