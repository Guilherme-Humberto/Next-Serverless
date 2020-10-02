import React, { useState, useEffect } from 'react';
import { Container } from '../styles/pages/Hello'

const Hello: React.FC = () => {
  const [state, setState] = useState([])
  useEffect(() => {
    const getUser = () => {
      const user = localStorage.getItem("infos")
      setState(JSON.parse(user))
    }
    getUser()
  }, [])
  return (
      <>
        {state.map((item) => (
          <Container key={item._id}>
            <h1>Olá {item.name}</h1>
            <h3>Seja bem vindo(a)</h3>
          </Container>
        ))}
      </>
  );
}

export default Hello;