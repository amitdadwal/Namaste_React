import React from "react";
import  ReactDOM from "react-dom";
const parent = React.createElement("div", 
{id:"parent"},
[React.createElement("div",
 {id:"child1"},
 [React.createElement("h1", {}, "This is Nmaste React"),
    React.createElement("h2",{}, "By Akshay Saini" )
]
 ),
React.createElement("div",
 {id:"child2"},
 [React.createElement("h1", {}, "This is h1"),
    React.createElement("h2",{}, "This is h2" )
]
 )
])


console.log(parent); // react element is nothing but a javascript object that describes a dom node with its type , attributes and children
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

console.log(root.render(parent));