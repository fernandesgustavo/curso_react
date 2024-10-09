import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

  const [users] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 123451347, name: "João", age: 28 },
    { id: 575362343, name: "Pedro", age: 44 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
