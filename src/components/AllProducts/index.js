import {Component} from 'react'

// import Cookies from 'js-cookie'
import ProductItem from '../ProductItem'

import './index.css'






class AllProducts extends Component {
  state = {
    productsList: [],
    }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async() => {
    const res=await fetch('https://fakestoreapi.com/products')
  
      if (res.ok) {
      const fetchedData = await res.json()
      const updatedData = fetchedData.map(product1 => ({
       
        id: product1.id,
        image: product1.image,
        
      }))
      this.setState({
        productsList:updatedData
      })
    }
  
 

}
      
      
      render() {
    const {productsList} = this.state
    return(
        <div className="all-products-container">
        <h1>All Products</h1>
        <ul className="products-list">
          {productsList.map(product1 => (
            <ProductItem productData={product1} key={product1.id} />
          ))}
        </ul>
      </div>
    )
       }
    }

  

  export default AllProducts

