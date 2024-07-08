const Dropdown = ({ regions, onSelect }) => {
  const handleChange = (e) => {
    const selectedRegion = e.target.value;
    console.log("Selected Region:", selectedRegion);
    onSelect(selectedRegion);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Dropdown;
