import "./CityElection.css";

const CityElection = ({ dataProcessed, filter, children }) => {
  return (
    <>
      {dataProcessed &&
        dataProcessed.map((city) => {
          if (filter == city.cityName)
            return (
              <div className="electionWrapper" key={city.cityName}>
                <h3>Eleições em {city.cityName}</h3>
                <div className="voters">
                  <p>
                    <strong>Total de eleitores:</strong>{" "}
                    {city.global.totalVoters.toLocaleString("pt-br")}
                  </p>
                  <p>
                    <strong>Abstenção:</strong>{" "}
                    {city.global.absence.toLocaleString("pt-br")}
                  </p>
                  <p>
                    <strong>Comparecimento:</strong>{" "}
                    {city.global.presence.toLocaleString("pt-br")}
                  </p>
                  <p>
                    <strong>Candidatos: </strong> {city.candidates.length}
                  </p>
                </div>
                <div className="cards">{children}</div>
              </div>
            );
        })}
    </>
  );
};

export default CityElection;
