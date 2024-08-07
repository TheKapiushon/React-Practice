import { useEffect, useRef, useState } from 'react';
import './index.css'

function Card() {

  // Hooks
  const [get, setGet] = useState([])
  const [comp, setComp] = useState([])
  const search = useRef()
  useEffect(() => {
    fetch("https://mocki.io/v1/0e5e5ac8-5c85-4147-bb63-af2693a9ace8")
      .then(res => res.json())
      .then(data => setGet(data))
  }, [])
  useEffect(() => {
    fetch("https://mocki.io/v1/0e5e5ac8-5c85-4147-bb63-af2693a9ace8")
      .then(res => res.json())
      .then(data => setComp(data))
  }, [])

  // Variables
  let FILTERS = []
  let comps = comp.map((item) => item.brand)
  const companies = [...new Set(comps)]

  // Functions
  const handleFilter = () => {
    const { name, checked } = event.target;

    if (checked) {
      FILTERS.push(name);
    } else {
      FILTERS = FILTERS.filter((product) => product !== name);
    }

    if (FILTERS.length) {
      const filtered = get.filter((product) =>
        FILTERS.includes(product.brand)
      );
      setGet(filtered);
    }
  }
  const handleSearch = () => {
    const value = search.current.value;
    const brands = get.map((product) => {
      return product.model;
    })
    const searchedProducts = brands.filter((product) => {
      return product.search(value) > -1;
    })

    if (searchedProducts.length) {
      const searched = get.filter((product) =>
        searchedProducts.includes(product.model)
      );
      setGet(searched);
    }
  }

  return (
    <>
      <h1>Mobile world 🌐</h1>
      <div className="features--container">
        <div className="search--container">
          <input ref={search} type="text" placeholder='Search For Somthing...' />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="filter--container">
          <ul className="check--container">
            {
              companies.map((item, i) => {
                return (
                  <>
                    <input onChange={handleFilter} type="checkbox" key={i} name={item} id={i} />{item}
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="card-content--container">
        {
          get.map((item, i) => {
            return (
              <div key={i} className="card--container">
                <img src={item.image} />
                <h2>{item.model}</h2>
                <span>{item.brand}</span>
                <p>{item.rating}</p>
                <button>Add</button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Card;