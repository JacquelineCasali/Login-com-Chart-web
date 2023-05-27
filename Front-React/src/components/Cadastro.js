import React from "react";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// rotas

// importando o formulario
import { Formik, Form, Field, ErrorMessage } from "formik";
// importando as validações
import * as yup from "yup";

// conectando  banco de dados
import Axios from "axios";

function Cadastro() {
  const handClikCadastro = (values) => {
    Axios.post("http://localhost:9000/cadastro", {
      name: values.name,
      cpf: values.cpf,
      telefone: values.telefone,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    }).then((response) => {
      console.log(response);
    });
  };
  // validação com yup
  const validationCadastro = yup.object().shape({
    email: yup
      .string()
      .email("Não é um email valido")
      .required("O campo é obrigatório."),

    cpf: yup
      .string()
      .min(11, "Não é um CPF valido")
      .required("O campo é obrigatório."),
    password: yup
      .string()
      .min(4, "A senha deve conter no minimo 4 caracteres")
      .required("O campo da senha é obrigatório."),
    // oneOf para confirmar a senha
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null, "As Senhas não confere"]),
  });

  //   parte da web
  return (
    <main className="container">
      <HelmetProvider>
        <Helmet title="Cadastro de Usuário" />
      </HelmetProvider>

      <h1>Cadastro</h1>

      <Formik
        initialValues={{}}
        onSubmit={handClikCadastro}
        validationSchema={validationCadastro}
      >
        <Form className="login-fomr">
          <div className="full-box">
            <label htmlFor="name">Nome Completo:</label>
            {/* Field cria campo input do html  */}
            <Field
              type="text"
              name="name"
              placeholder="Digite seu nome e Sobrenome"
              required
            ></Field>
          </div>
          {/* menssagem de error */}
          <ErrorMessage
            component="span"
            name="name"
            className="form-error-email"
          />

          {/* email */}
          <label htmlFor="email">E-mail:</label>
          <Field
            type="email"
            name="email"
            placeholder="usuario12@host.com.br"
          ></Field>
          <ErrorMessage
            component="span"
            name="email"
            className="form-error-email"
          />
          <div className="half-box spacing">
            <label htmlFor="cpf">CPF:</label>
            <Field type="text" name="cpf" placeholder="Digite seu CPF"></Field>
            {/* menssagem de error */}
            <ErrorMessage component="span" name="cpf" className="form-error" />
          </div>
          <div className="half-box">
            <label htmlFor="telefone">Telefone:</label>
            <Field
              type="tel"
              name="telefone"
              placeholder="(xx) xxxxx-xxxx"
            ></Field>
            <ErrorMessage component="span" name="name" className="form-error" />
          </div>
          <div className="half-box spacing">
            <label htmlFor="password">Senha:</label>
            <Field
              name="password"
              type="password"
              placeholder="Digite sua Senha"
            ></Field>
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="half-box">
            <label htmlFor="confirmPassword"> Confirme sua Senha:</label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Digite novamente sua senha"
            ></Field>
            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"
            />
          </div>
          {/* 
          <label htmlFor="agreement" className="agreement-label">
            <Field
              type="checkbox"
              name="agreement"
              className="agreement"
              required
              checked
            ></Field>
            Eu li e aceito os <a href="#">Termos de uso</a>
          </label> */}

          <button className="registrar" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
      {/* <!-- recuperação de senha --> */}
    </main>
  );
}

export default Cadastro;
