import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Card name="name"
        description="description"
        oldPrice="oldPrice"
        price="price"
        installments={{
          count: "12",
          value: "12,30"
        }}
      />
    </div>
  )
}

export default App
