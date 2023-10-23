import { useState } from "react";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nombre: null,
    apellido: null,
    email: null,
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ACA IRIA TODO LO QUE QUIERAN HACER
    // axios.post( "http-----", {nombre, apellido, email})

    if (!userInfo.email.includes("@")) {
      setErrors({ ...errors, email: "No corresponde a un email valido" });
    }

    console.log(userInfo);
  };

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
