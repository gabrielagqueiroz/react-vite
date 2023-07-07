import React from 'react'
/* import './App.css' */

function App() {
  const [sobrenome, setSobrenome] = React.useState('Queiroz')

  const morfar = () => {
    setSobrenome(sobrenome.toUpperCase())
  }

  const 

  /* let sobrenome = 'Queiroz' */

  return (
    <>
    <h1>Gabriela</h1>
    <div>{sobrenome}</div>
    <br />
    <button onClick={morfar}>Morfar</button>
    </>
  )
}

export default App
