const UserDetails = ({ id, name, age, profession }) => {
  return (
    <div>
      <h2>
        {name} ({id})
      </h2>
      <p>Idade: {age}</p>
      <p>Profissão: {profession}</p>
      {age >= 18 ? (
        <p>
          <strong style={{ color: "green" }}>Pode</strong> tirar carteira de
          motorista.
        </p>
      ) : (
        <p>
          <strong style={{ color: "red" }}>Não pode</strong> tirar carteira de
          motorista.
        </p>
      )}
    </div>
  );
};

export default UserDetails;
