import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("João");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      <h1>IF Ternário</h1>
      {name === "Gustavo" ? (
        <div>
          <p>O nome é Gustavo!</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}

      <button onClick={() => setName("Gustavo")}>Clica aqui!</button>
    </div>
  );
};

export default ConditionalRender;
