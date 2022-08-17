import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import CityElection from "./components/CityElection/CityElection";
import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

function App() {
  const [cities, setCities] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [election, setElection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cities")
      .then((response) => response.json())
      .then((data) => {
        setCities(data);
      });

    fetch("http://localhost:3001/candidates")
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data);
      });

    fetch("http://localhost:3001/election")
      .then((response) => response.json())
      .then((data) => {
        setElection(data);
      });
  }, []);

  // console.log(cities);
  // console.log(candidates);
  // console.log(election);

  function electionsProcessed(cities, candidates, election) {
    if (
      cities.length === 0 ||
      candidates.length === 0 ||
      election.length === 0
    ) {
      return;
    }

    let arrayProcessed = [];

    for (let city of cities) {
      let arrayCandidates = [];
      let objectProcessed = {};
      for (let item of election) {
        let objectCandidate = {};
        let objectGlobal = {};
        for (let candidate of candidates) {
          if (item.cityId === city.id && item.candidateId === candidate.id) {
            objectGlobal.totalVoters = city.votingPopulation;
            objectGlobal.absence = city.absence;
            objectGlobal.presence = city.presence;

            objectProcessed.cityName = city.name;
            objectProcessed.global = objectGlobal;

            objectCandidate.name = candidate.name;
            objectCandidate.votes = item.votes;
            objectCandidate.id = item.id;
            objectCandidate.percentage = Number(
              ((item.votes / objectGlobal.presence) * 100).toFixed(2)
            );

            arrayCandidates.push(objectCandidate);
            arrayCandidates.sort((a, b) => b.votes - a.votes);
            objectProcessed.candidates = arrayCandidates;
          }
        }
      }
      arrayProcessed.push(objectProcessed);
    }
    return arrayProcessed;
  }

  const dataProcessed = electionsProcessed(cities, candidates, election);
  console.log(dataProcessed);

  const [filter, setFilter] = useState("Gotham");

  return (
    <div>
      <Header />
      <Filter dataCities={cities} setFilter={setFilter} />
      <CityElection dataProcessed={dataProcessed} filter={filter}>
        <Card />
      </CityElection>
    </div>
  );
}

export default App;
