const Challenge = () => {
  const NumberOne = 10;
  const NumberTwo = 5;

  const AddValues = (a, b) => {
    console.log("Soma dos valores: " + (a + b));
  };

  return (
    <div>
      <p>
        Valores: {NumberOne} e {NumberTwo}
      </p>
      <button onClick={() => AddValues(NumberOne, NumberTwo)}>
        Somar valores!
      </button>
    </div>
  );
};

export default Challenge;
