import React from "react";
import ReactDOM from "react-dom";

const name = "Mahesh";
const no = "6";
const fname = "Mahesh";
const Sname = "Bhagat";

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Biryani</li>
      <li>Chicken Tikka</li>
      <li>Shawarma</li>
      <p>MY favorite number is {no}.</p>
      <p>MY full name is {fname + " " + Sname} --> 1st method.</p>
      <p>
        MY full name is {name} {Sname} --> 2nd method.
      </p>
      <p>
        MY full name is {`${fname} ${Sname}`} --> 3rd method. - ES6 template
        literals
      </p>
    </ul>
  </div>,
  document.getElementById("root")
);
//render = it takes only one html element at a time.

//if the above code written in pure js will be like this
// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello World!";
// document.getElementById("root").appendChild(h1);
