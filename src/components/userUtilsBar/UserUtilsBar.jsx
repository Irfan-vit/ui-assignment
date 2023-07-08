import './userUtilsBar.css'
const UserUtilsBar = () => {
  return (
    <>
      <section className="user-utils-bar">
        <div className="utils">
          <ul className="utils-list">
            <li>
              <select name="currency" id="currency" className="currency">
                <option value="cat1" selected>
                  USD
                </option>
                <option value="cat2">INR</option>
              </select>
            </li>
            <li>
              <span className="material-symbols-outlined filled">
                location_on
              </span>
              <span>Stores</span>
            </li>
          </ul>
        </div>
        <div className="user">
          <span>Login/Register</span>
        </div>
      </section>
    </>
  )
}

export default UserUtilsBar
