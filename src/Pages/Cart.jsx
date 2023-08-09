import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import "../scss/cart.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, deleteField } from "firebase/firestore";
import { cartActions } from "../redux/cartSlice";
import { notificationActions } from "../redux/notificationSlice";
import Notification from "../Components/Notification";
import { loaderActions } from "../redux/loaderSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { currentUser } = useContext(AuthContext);

  const getUserCartProducts = async () => {
    try {
      const docRef = doc(db, "usersCarts", currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        dispatch(cartActions.setCart(docSnap.data().cart));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (productTitle) => {
    const documentRef = doc(db, "usersCarts", currentUser.uid);
    dispatch(loaderActions.setLoading(true));
    try {
      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        const data = documentSnapshot.data();
        const modifiedArray = data?.cart.filter(
          (item) => item.title !== productTitle
        );

        await updateDoc(documentRef, {
          cart: modifiedArray,
        });
        dispatch(notificationActions.setOpen(true));
        dispatch(notificationActions.setSeverity("success"));
        dispatch(notificationActions.setMessage("Removed successfuly"));
      }
    } catch (err) {
      dispatch(notificationActions.setOpen(true));
      dispatch(notificationActions.setSeverity("error"));
      dispatch(notificationActions.setMessage(err.message));
    }
    dispatch(loaderActions.setLoading(false));
  };

  const array = [];

  useEffect(() => {
    getUserCartProducts();
    console.log(cart);
  }, []);

  return (
    <div className="cart">
      <Notification />
      <Header />
      {cart.length > 0 ? (
        <TableContainer className="table-con">
          <Table className="table" aria-label="simple table">
            <TableHead className="table-header-con">
              <TableRow>
                <TableCell className="table-header">Products</TableCell>
                <TableCell className="table-header">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tbody">
              {cart.map((product) => (
                <TableRow key={product.id} className="row">
                  <TableCell className="">
                    <div className="product-con">
                      <img src={product.imageSrc} alt="product-image" />
                      <div className="text">
                        <h3>{product.title}</h3>
                        <h3>{product.price}</h3>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="quantity-con">
                      <div className="counter-con">
                        <button className="counter-btn">
                          <RemoveIcon className="counter-icon" />
                        </button>
                        <h3>0</h3>
                        <button className="counter-btn">
                          <AddIcon className="counter-icon" />
                        </button>
                      </div>
                      <button
                        onClick={() => deleteProduct(product.title)}
                        className="remove-btn"
                      >
                        <DeleteIcon className="remove-icon" />
                        Remove
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h2 className="total">Total Price : </h2>
        </TableContainer>
      ) : (
        <h4>Your cart is empty !</h4>
      )}
    </div>
  );
};

export default Cart;
