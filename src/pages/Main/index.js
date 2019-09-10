import React from 'react';
//import { Title } from './styles';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  /*return <Title error={true}>
    Main
    <small>menor</small>
  </Title>;*/
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
    </h1>

      <Form onSubmit={() => { }}>
        <input type="text"
          placeholder="Adicionar repositório"
        />

        <SubmitButton disabled>
          <FaPlus color="#fff" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  )
}


