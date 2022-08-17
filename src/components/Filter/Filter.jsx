import "./Filter.css";

const Filter = ({ dataCities, setFilter }) => {
  return (
    <div className="filterCities">
      <label id="labelCities" htmlFor="cities">
        <p>Escolha o município:</p>
        <select
          name="cities"
          id="cities"
          onChange={(e) => setFilter(e.target.value)}
        >
          {dataCities.map((city) => (
            <option value={city.name} key={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Filter;
