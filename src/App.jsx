
import './App.css'
import Welcome from './components/Welcome'
import Employee from './components/Employee'
import  ProductCategary from './components/ProductCategary'
import ProductList from './components/ProductList'
function App() {
  const categaries = ["Electronics","Books","Clothing","Kitchen Tools"]
  const ProductDetails = {productName:"Laptop-iMac",price:40000,isAvailable:false}

  return (
    <>
    {/* <h1>my first-app</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium corporis eaque cupiditate ess.</p>
      <h2>app component</h2>*/}

     {/*<Welcome />*/}

     {/*<Employee />*/}

     {/*<  ProductCategary categariesArr={categaries} productdetails={productdetails} />*/}
      < ProductList />
    </>
  )
}
export default App
