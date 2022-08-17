import "./Card.css";

const Card = ({ dataProcessed, filter }) => {
  const cityFiltered = dataProcessed.filter((city) => city.cityName == filter);

  return (
    <>
      {cityFiltered &&
        cityFiltered[0].candidates.map((candidate) => {
          return (
            <div className="cardWrapper" key={candidate.id}>
              <div className="cardHeader">
                <img
                  className="profilePhoto"
                  src={`../../public/img/${candidate.name}.png`}
                  alt=""
                />
                <div className="cardVotes">
                  <p>{candidate.percentage}%</p>
                  <p>{candidate.votes} votos</p>
                </div>
              </div>
              <div className="cardMain">
                <h3>{candidate.name}</h3>
                <p>
                  {cityFiltered[0].candidates[0] === candidate
                    ? "Eleito"
                    : "Não eleito"}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Card;
