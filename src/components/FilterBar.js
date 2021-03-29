const FilterBar = ({keyword, setKeyword}) => {
    return (
        <input
            className="filterBar"
            type="text"
            keyword={keyword}
            placeholder={"Filtrar por username..."}
            onChange={(e) => setKeyword(e.target.value)}>
        </input>
    )
}

export default FilterBar;