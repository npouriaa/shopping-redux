import React from "react";
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

const Cart = () => {

  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 37, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  // ];

  return (
    <div className="cart">
      <Header />
      <TableContainer className="table-con">
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Products</TableCell>
              <TableCell className="table-header">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="row">
              <TableCell className="">
                <div className="product-con">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shopping-redux-5ad57.appspot.com/o/tshirt.png?alt=media&token=04208888-5fb1-41ce-9618-be6c3d684255"
                    alt="product-image"
                  />
                  <div className="text">
                    <h3>Nike blazer</h3>
                    <h3>$125.00</h3>
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
                  <button className="remove-btn">
                    <DeleteIcon className="remove-icon"/>
                    Remove
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h2 className="total">Total Price : </h2>
    </div>
  );
};

export default Cart;
