import React from "react";

// importando o formulario
import { Formik, Form, Field, ErrorMessage } from "formik";
// importando as validações
import * as yup from "yup";

// inportando estilo
import "../styles/reset.css";
import "../styles/app.css";
const Senha = () => {
  const handClikRecuperar = (values) => console.log(values);
  // validação com yup
  const validationRecuperar = yup.object().shape({
    newPassword: yup
      .string()
      .min(4, "A senha deve conter no minimo 4 caracteres")
      .required("O campo da senha é obrigatório."),
    // oneOf para confirmar a senha
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null, "As Senhas não confere"])
      .required("O campo da confirme sua senha é obrigatório."),
  });
  return (
    <div className="container">
      <h1>Recuperar Senha</h1>
      <Formik
        initialValues={{}}
        onSubmit={handClikRecuperar}
        validationSchema={validationRecuperar}
      >
        <Form className="login-fomr">
          <div class="half-box spacing">
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
            <label htmlFor="confirmPassword"> Confirme sua Senha:</label>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Digite novamente sua senha"
            ></Field>
            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error-senha"
            />
          </div>
          <button type="submit"> Salvar </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Senha;
