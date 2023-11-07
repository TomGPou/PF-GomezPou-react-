import Checkout from "./Checkout";
import { useFormik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, cleanCart } = useContext(CartContext);

  const total = getTotalPrice();

  const navigate = useNavigate();

  const createOrder = (data) => {
    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    Swal.fire({
      title: "Quieres confirmar la compra?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar compra",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        // Crear OC
        addDoc(ordersCollection, order).then((res) => {
          Swal.fire({
            title: "Gracias por su compra",
            text: `Su número de orden es: ${res.id}`,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Volver a la tienda",
          }).then((result) => {
            if (result.isConfirmed) {
              // Actualizar stock
              cart.forEach((element) => {
                updateDoc(doc(db, "products", element.id), {
                  stock: element.stock - element.quantity,
                });
              });

              // Vaciar carrito
              cleanCart();

              navigate("/");
            }
          });
        });
      }
    });
  };

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      // password: "",
      // repeatPassword: "",
    },

    onSubmit: (data) => {
      createOrder(data);
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
      emailRepeat: Yup.string()
        .required("Campo obligatorio")
        .oneOf([Yup.ref("email")], "Los emails no coinciden"),
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

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      cart={cart}
      total={total}
    />
  );
};

export default CheckoutContainer;
