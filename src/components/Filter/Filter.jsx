import "./Filter.css";

const Filter = ({ dataCities, setFilter }) => {
  return (
    <div className="filterCities">
      <label htmlFor="cities">Escolha o município</label>
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
    </div>
  );
};

export default Filter;
