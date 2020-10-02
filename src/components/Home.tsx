import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'

import {
     Container,
     TitleForm,
     DescForm,
     ContainerForm,
     LabelForm,
     Input,
     Button
} from '../styles/pages/Home';

const Components: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios.post("./api/createUser", { name  })

    .then((response) => {
      const { user: { ops } } = response.data

      localStorage.setItem("infos", JSON.stringify(ops))

      router.push("Hello")
    })
    .catch((err) => console.log(err))
  }

  return (
      <Container>
          <TitleForm>Cadastre-se</TitleForm>
          <DescForm>A criação de aplicativos sem servidor significa que os desenvolvedores podem se concentrar no principal produto, sem se preocupar com o gerenciamento e a operação de servidores nem tempos de execução, seja na nuvem ou no ambiente local.</DescForm>
          <ContainerForm>
            <LabelForm>Nome Completo</LabelForm>
            <Input onChange={(e) => setName(e.target.value)} placeholder="Nome Completo"/>
            <Button onClick={handleSubmit}>Enviar</Button>
          </ContainerForm>
      </Container>
  );
}

export default Components;