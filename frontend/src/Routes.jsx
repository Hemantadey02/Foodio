import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Menu from "./pages/Menu";
import Aboutus from "./pages/Aboutus";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Orderonline from "./pages/Orderonline";
import Checkout from "./pages/Checkout";
import Homepage from "./pages/Homepage";
// import CancelReservation from "modals/CancelReservation";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
// import EnterDetailsReservation from "modals/EnterDetailsReservation";
// import Reservationhasbeenconfirmed from "modals/ReservationHasBeenConfirmed";
import Shippingaddress from "modals/ShippingAddress";
import CartPage from "pages/Cartpage";
import ProfilePage from "pages/Profilepage";
import FoodItemPage from "pages/FoodItemPage";

const mockCartItems = [
  { id: 1, name: 'Burger', price: 10, quantity: 2, image: 'images/img_pngitem_1447549.png' },
  { id: 2, name: 'Fries', price: 5, quantity: 1, image: 'images/img_pngitem_5290903.png' },
];

const ProjectRoutes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const handleRemove = (id) => {
    console.log("Remove item with ID:", id);
    // Your logic to remove item from the cart
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout");
    // Your logic to handle the checkout process
  };

  const handleCloseCart = () => {
    console.log("Close cart");
    // Your logic to close the cart modal
  };

  let element = useRoutes([
    // { path: "/", element: <Home /> },
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    { path: "menu", element: <Menu /> },
    { path: "aboutus", element: <Aboutus /> },
    { path: "reservation", element: <Reservation /> },
    { path: "contact", element: <Contact /> },
    // { path: "orderonline", element: <Orderonline /> },
    { path: "checkout", element: <Checkout /> },
    { path: "homepage", element: <Homepage /> },
    { path: "login", element: <LoginPage /> },
    { path: "signup", element: <SignUpPage /> },
    { path: "profile", element: <ProfilePage /> },
    { path: "cart", element: <CartPage isOpen={true} cartItems={mockCartItems} onRemove={handleRemove} onCheckout={handleCheckout} onClose={handleCloseCart} /> },
    {path: "fooditempreview", element: <FoodItemPage />},
    // {
    //   path: "cancel", element: <CancelReservation
    //     isOpen={modalIsOpen}
    //     onRequestClose={() => setModalIsOpen(false)} // Add this to allow closing the modal
    //   />
    // },
    // {
    //   path: "enterdtls", element: <EnterDetailsReservation
    //     isOpen={modalIsOpen}
    //     onRequestClose={() => setModalIsOpen(false)} // Add this to allow closing the modal
    //   />
    // },
    // {
    //   path: "reservationhbc", element: <Reservationhasbeenconfirmed
    //     isOpen={modalIsOpen}
    //     onRequestClose={() => setModalIsOpen(false)} // Add this to allow closing the modal
    //   />
    // },
    {
      path: "shippingad", element: <Shippingaddress
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)} // Add this to allow closing the modal
      />
    },
  ]);

  return element;
};

export default ProjectRoutes;
