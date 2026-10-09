import river from './assets/river.jpg'
import riverVertical from './assets/riverVertical.jpg'
import './App.css'

function App() {

  return (
    <div className="container">
      <picture>
        <source media="(max-width: 600px)" srcSet={riverVertical} />
        <img src={river} alt="project3" className="img-river" />
      </picture>
    </div>
  )
}

export default App