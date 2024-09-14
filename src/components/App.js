// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', description: 'Description for Item 3' },
  // Add more items here
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList items={items} />} />
        <Route path="/items/:itemId" element={<ItemDetail items={items} />} />
      </Routes>
    </Router>
  );
}

export default App;

// import React from "react";
// import './../styles/App.css';
// import { BrowserRouter as Router,Route,Link,Routes } from "react-router-dom";
// import Item1 from "./Item1";
// import Item2 from "./Item2";
// import Item3 from "./Item3";

// const App = () => {
//   return (
//     <Router>
//     <div>
//      <h1>Item List</h1>
//      <nav>
//       <ul>
//         <li>
//           <Link to = "/">Item1</Link>
//         </li>
//         <li>
//           <Link to = "/item2">Item2</Link>
//         </li>
//         <li>
//         <Link to = "/item3">Item3</Link>
//         </li>
//       </ul>
//      </nav>


//      <Routes>
//       <Route path="/" element = {<Item1 />}/>
//       <Route path="/item2" element = {<Item2 />}/>
//       <Route path="/item3" element = {<Item3 />}/>
//      </Routes>
//     </div>
//     </Router>
//   )
// }

// export default App
