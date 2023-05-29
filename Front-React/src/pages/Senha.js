import React from "react";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// importando o formulario
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
// importando estilo
import "../styles/reset.css";
import "../styles/App.css";
// importando as validações
import * as yup from "yup";
import Axios from "axios";
const Senha = () => {
  const handClikRecuperar = (values) => {
    Axios.post("http://localhost:9000/senha", {
      newPassword: values.newPassword,
      confirmNewPassword: values.confirmNewPassword,
    }).then((response) => {
      console.log(response);
    });
  };
  // validação com yup
  const validationRecuperar = yup.object().shape({
    newPassword: yup
      .string()
      .min(4, "A senha deve conter no minimo 4 caracteres")
      .required("O campo da senha é obrigatório."),
    // oneOf para confirmar a senha
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null, "As Senhas não confere"])
      .required("O campo da confirme sua senha é obrigatório."),
  });
  return (
    <div className="container">
      <HelmetProvider>
        <Helmet title="Recuperar Senha" />
      </HelmetProvider>

      <h1>Recuperar Senha</h1>
      <Formik
        initialValues={{}}
        onSubmit={handClikRecuperar}
        validationSchema={validationRecuperar}
      >
        <Form className="login-fomr">
          <div className="half-box spacing">
            <label htmlFor="newPassword"> Nova Senha:</label>
            <Field
              name="newPassword"
              type="password"
              placeholder="Digite sua Nova Senha"
            ></Field>
            <ErrorMessage
              component="span"
              name="newPassword"
              className="form-error-senha"
            />
          </div>

          <div className="box-confirme">
            <label htmlFor="confirmNewPassword"> Confirme sua Senha:</label>
            <Field
              type="password"
              name="confirmNewPassword"
              placeholder="Digite novamente sua senha"
            ></Field>
            <ErrorMessage
              component="span"
              name="confirmNewPassword"
              className="form-error-senha"
            />
          </div>
          <button type="submit"> Salvar </button>
        </Form>
      </Formik>

      <p>
        Não possui conta?
        <Link to="../cadastro" className="telalogin">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
};

export default Senha;
