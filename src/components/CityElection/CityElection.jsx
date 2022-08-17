import "./CityElection.css";

const CityElection = ({ dataProcessed, filter }) => {
  console.log(filter);
  return (
    <>
      {dataProcessed &&
        dataProcessed.map((city) => {
          console.log(city);
          if (filter == city.cityName)
            return (
              <div className="electionWrapper" key={city.cityName}>
                <h3>Eleições em {city.cityName}</h3>
                <div className="voters">
                  <p>Total de eleitores: {city.global.totalVoters}</p>
                  <p>Abstenção: {city.global.absence}</p>
                  <p>Comparecimento: {city.global.presence}</p>
                </div>
                <p>Candidatos: {city.candidates.length}</p>
                <div className="cards">
                  <div></div>
                </div>
              </div>
            );
        })}
    </>
  );
};

export default CityElection;
