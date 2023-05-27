import React from "react";
// importando o titulo
import Helmet from "react-helmet";
// rotas
// linkando paginas
import { Link } from "react-router-dom";
// importando o formulario
import { Formik, Form, Field, ErrorMessage } from "formik";
// importando as validações
import * as yup from "yup";

const Cadastro = () => {
  const handClikCadastro = (values) => console.log(values);
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
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null, "As Senhas não confere"]),
  });

  //   parte da web
  return (
    <main className="container">
      <Helmet title="Cadastro de Usuário" />

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
            <label htmlFor="confirmpassword"> Confirme sua Senha:</label>
            <Field
              type="password"
              name="confirmpassword"
              placeholder="Digite novamente sua senha"
            ></Field>
            <ErrorMessage
              component="span"
              name="confirmpassword"
              className="form-error"
            />
          </div>

          <label htmlFor="agreement" className="agreement-label">
            <Field
              type="checkbox"
              name="agreement"
              className="agreement"
              required
              checked
            ></Field>
            Eu li e aceito os <Link to="#">Termos de uso</Link>
          </label>

          <button className="registrar" type="submit">
            Registrar
          </button>
        </Form>
      </Formik>
      {/* <!-- recuperação de senha --> */}
    </main>
  );
};

export default Cadastro;
