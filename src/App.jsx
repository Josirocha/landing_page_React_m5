import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Container from './components/Container/Container'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import TextLine from './components/TextLine/TextLine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Container>
        <Form/>
        <TextLine text='Sua seleção especial'/>
        {/* <Card name="Nome do produto"
          description="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata."
          oldPrice="R$23,99"
          price="R$19,99"
          installments={{
            count: "12x",
            value: "12,30"
          }}
        /> */}
      </Container>

    </div>
  )
}

export default App
