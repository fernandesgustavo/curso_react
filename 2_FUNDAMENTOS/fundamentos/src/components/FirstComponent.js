// importando outro componente
import MyComponent from "./MyComponent";

// arquivo de estilo

const FirstComponent = () => {
  // essa função faz isso

  /*
    multi line
  */

  return (
    <div>
      {/* Algum comentário */}
      <h1>Meu primeiro componente</h1>
      <p className="teste">Meu Texto</p>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
