import './filterBar.css'

const FilterBar = () => {
  return (
    <>
      <header className="filter-bar-container">
        <h2>Products (18)</h2>
        <div className="filter-bar">
          <div className="filter">
            <button className="filter-btn">
              <span className="material-symbols-outlined">filter_list</span>
              <span>Filter</span>
            </button>
            <hr
              style={{
                background: '#707070',
                height: '100%',
                width: '1px',
              }}
            />
            <span className="material-symbols-outlined">grid_4x4</span>
            <span className="material-symbols-outlined">grid_3x3</span>
          </div>
          <div className="sort">
            <label>
              <p>Sort By:</p>
            </label>
            <select name="" id="" className="sort-options">
              <option value="cat1" selected>
                Alphabetically, A-Z
              </option>
              <option value="cat2">Alphabetically, Z-A</option>
              <option value="cat2">Price, low to high</option>
              <option value="cat2">Price, high to low</option>
            </select>
          </div>
        </div>
      </header>
      <hr
        style={{
          background: '#707070',
          height: '1px',
          marginBottom: '2%',
        }}
      />
    </>
  )
}
export default FilterBar
