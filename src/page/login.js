import React from "react";
import '../components/css/login.css'
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import { Link } from 'react-router-dom';


const login = () => (
  <Formik
    initialValues={{ correo: "", contraseña: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Iniciando sesión", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    validate={values => {
      let errors = {};
      if (!values.correo) {
        errors.correo = "Requerido";
      } else if (!EmailValidator.validate(values.correo)) {
        errors.correo = "Correo inválido";
      }

      const passwordRegex = /(?=.*[0-9])/;
      if (!values.contraseña) {
        errors.contraseña = "Requerido";
      } else if (values.contraseña.length < 8) {
        errors.contraseña = "La contraseña debe tener 8 caracteres de logitud.";
      } else if (!passwordRegex.test(values.contraseña)) {
        errors.contraseña = "Contraseña invalida. Debe tener almenos 1 numero";
      }

      return errors;
    }}
    //********Using Yum for validation********/
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
          <React.Fragment>
            <div>
            <h1>LOGO</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="correo">Correo</label>
            <input
                name="correo"
                type="text"
                placeholder="Ingrese correo"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.correo && touched.correo && "error"}
            />
            {errors.correo && touched.correo && (
                <div className="input-feedback">{errors.correo}</div>
            )}
            <label htmlFor="contraseña">Contraseña</label>
            <input
                name="contraseña"
                type="password"
                placeholder="Ingrese contraseña"
                value={values.contraseña}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.contraseña && touched.contraseña && "error"}
            />
            {errors.contraseña && touched.contraseña && (
                <div className="input-feedback">{errors.contraseña}</div>
            )}
            <Link to="/userPage" type="submit" className="btn btn-dark" disabled={isSubmitting}>
                Ingresar
            </Link>
            </form>
            </div>
            </React.Fragment>
      );
    }}
  </Formik>
);

export default login;