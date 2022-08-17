import "./CityElection.css";

const CityElection = ({ children }) => {
  return (
    <div className="electionWrapper">
      <h3>Eleições em Asgard</h3>
      <div className="voters">
        <p>Total de eleitores: 15.000</p>
        <p>Abstenção: 10.000</p>
        <p>Comparecimento: 5.000 </p>
      </div>
      <p>Candidatos: 6</p>
      <div className="cards">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default CityElection;
