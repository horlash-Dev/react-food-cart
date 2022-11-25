import { Fragment } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Product from "./components/Product/Products";
import CardSec from "./components/UI/Card";
import SG from "./components/UI/SectionGr";

function App() {

  return( 
  <Fragment>
    <Header />

    <SG>
    <CardSec>
      <Product/>
      </CardSec>
    </SG>
  </Fragment>
  )
}

export default App;
