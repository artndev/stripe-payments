import '../styles/css/app.css'
import { useReduxSelector } from '../hooks'

const App = () => {
  const store = useReduxSelector(state => state.products)

  return (
    <>
      {store.products.map((val, i) => {
        return (
          <div key={i}>
            <h3>{val.title}</h3>
            <ul>
              <li>{val.brand}</li>
              <li>{val.cost}</li>
              <li>
                {val.sizes.map((size, i) => {
                  return <span key={i}>{size}</span>
                })}
              </li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default App
