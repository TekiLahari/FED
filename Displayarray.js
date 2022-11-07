Display data.js


import React, { Component } from "react";
import { products } from "../data";
export class DisplayData extends Component {
 render() {
 return (
 <div>
 <table border={1}>
 <tr>
 <th>id</th>
 <th>Title</th>
 <th>Price</th>
 <th>Quantity</th>
 </tr>
 {products.map((item) => {
 return (
 <tr key={item.id}>
 <td>{item.id}</td>
 <td>{item.title}</td>
 <td>{item.price}</td>
 <td>{item.quantity}</td>
 </tr>
 );
 })}
 </table>
 </div>
 );
 }
}
export default DisplayData;

Data.js
export const products = [
 {
 id: 1,
 title: "Spring and summershoes",
 price: 20,
 quantity: 3,
 total: 60,
 discountPercentage: 8.71,
 discountedPrice: 55,
 },
 {
 id: 2,
 title: "TC Reusable Silicone Magic Washing Gloves",
 price: 29,quantity: 2,
 total: 58,
 discountPercentage: 3.19,
 discountedPrice: 56,
 },
 {
 id: 3,
 title: "Oil Free Moisturizer 100ml",
 price: 40,
 quantity: 2,
 total: 80,
 discountPercentage: 13.1,
 discountedPrice: 70,
 },
 {
 id: 4,
 title: "Wholesale cargo lashing Belt",
 price: 930,
 quantity: 1,
 total: 930,
 discountPercentage: 17.67,
 discountedPrice: 766,
 },
 {
 id: 5,
 title: "Women Sweaters Wool",
 price: 600,
 quantity: 2,
 total: 1200,
 discountPercentage: 17.2,
 discountedPrice: 994,
 },
 ];


App.js
import './App.css';
import DisplayData from './components/DisplayData';
function App() {
 return (
 <div>
 <DisplayData />
 </div>
 );
}
export default App;


