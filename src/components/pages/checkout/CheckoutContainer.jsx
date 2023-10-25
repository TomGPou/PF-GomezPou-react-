// import { useState } from "react";
import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      // password: "",
      // repeatPassword: "",
    },

    onSubmit: (data) => {
      console.log("se envio");
      console.log(data);
    },

    validateOnChange: false,

    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Campo obligatorio")
        .min(3, "Debe tener al menos 3 caracteres")
        .max(20, "Debe tener un máximo de 20 caracteres"),
      apellido: Yup.string().required("Campo obligatorio"),
      email: Yup.string()
        .required("Campo obligatorio")
        .email("No es un email válido"),
      // password: Yup.string()
      //   .required("Campo obligatorio")
      //   .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/, {
      //     message: "La contraseña debe tener...",
      //   }),
      // repeatPassword: Yup.string()
      //   .required("Campo obligatorio")
      //   .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });

  console.log("err:", errors);

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
