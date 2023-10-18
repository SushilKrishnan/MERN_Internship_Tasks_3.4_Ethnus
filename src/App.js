import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/users`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Dummy data</h1>
      <div className="tab">
        <tbody>
          <tr>
            <th className="headRow">Sno</th>
            <th className="headRow">Profile Pic</th>
            <th className="headRow">First Name</th>
            <th className="headRow">Last Name</th>
            <th className="headRow">Gender</th>
            <th className="headRow">E-mail</th>
            <th className="headRow">Username</th>
            <th className="headRow">Domain</th>
            <th className="headRow">IP</th>
            <th className="headRow">University</th>
          </tr>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td><img src={item.image}height={50}/></td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.gender}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.domain}</td>
              <td>{item.ip}</td>
              <td>{item.university}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}

export default App;