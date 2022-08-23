import './App.css'
import Container from './components/Container/Container'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import { ListaDeProdutos } from './components/ListaDeProdutos/ListaDeProdutos'
import TextLine from './components/TextLine/TextLine'

function App() {

  return (
    <div className="App">
      <Header />
      <Container>
        <Form/>
        <TextLine text='Sua seleção especial'/>
        <ListaDeProdutos/>
      </Container>

    </div>
  )
}

export default App
