import React from "react";

// qual link ele vai chamar
import { Link } from "react-router-dom";
// importando o formulario
import { Formik, Form, Field, ErrorMessage } from "formik";
// importando as validações
import * as yup from "yup";
// importando icones
import * as Icon from "react-bootstrap-icons";

const Login = () => {
  const handClikLogin = (values) => console.log(values);
  // validação com yup
  const validationLogin = yup.object().shape({
    cpf: yup
      .string()
      .min(11, "Não é um CPF valido")
      .required("O campo é obrigatório."),
    password: yup
      .string()
      .min(4, "A senha deve conter no minimo 4 caracteres")
      .required("O campo é obrigatório."),
  });
  return (
    <div className="login-container">
      <h1>Login</h1>

      <Formik
        initialValues={{}}
        onSubmit={handClikLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-fomr">
          <label htmlFor="cpf">CPF:</label>
          <Field type="text" name="cpf" placeholder="Digite seu CPF"></Field>
          {/* Field cria campo input do html  */}
          <ErrorMessage component="span" name="cpf" className="form-error" />
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
          <button type="submit"> Login </button>
        </Form>
      </Formik>
      {/* <!-- recuperação de senha --> */}
      <section>
        <Link to="./senha" className="forgot-pass">
          Esqueceu a senha?
        </Link>

        <div id="social-container">
          <p>Ou entre pelas suas redes sociais</p>
          {/* icones da rede social com o link */}
          <a href="https://www.facebook.com/">
            <Icon.Facebook
              color="royalblue"
              size={40}
              cursor="pointer"
              className="redesocial"
            />
          </a>
          <a href="https://www.linkedin.com/home">
            <Icon.Linkedin
              color="#0077b5"
              size={40}
              cursor="pointer"
              className="redesocial"
            />
          </a>
          <a href="https://www.google.com/intl/pt-BR/gmail/about/">
            <Icon.Google
              color="red"
              size={40}
              cursor="pointer"
              className="redesocial"
            />
          </a>
        </div>
        <div id="cadastro-container">
          <p>Não possui conta?</p>
          <Link to="./cadastro">Cadastre-se</Link>

          {/* <a href="./Cadastro">Cadastre-se</a> */}
        </div>
      </section>
    </div>
  );
};

export default Login;
