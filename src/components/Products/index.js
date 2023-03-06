import {Component} from 'react'

// import Cookies from 'js-cookie'

import './index.css'






class Products extends Component {
  state = {
    productsList: [],
    }

  componentDidMount() {
    this.getProducts()
  }

  getFormattedData = data => ({
    
    description: data.description,
    id: data.id,
    image: data.image,
    price: data.price,
   
    title: data.title,
    
  })

  getProducts = async() => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl=`https://fakestoreapi.com/products/${id}`
    const res=await fetch(apiUrl)
    
      if (res.ok) {
      const fetchedData = await res.json()

      const updatedData = this.getFormattedData(fetchedData)
      
      this.setState({
        productsList:updatedData
      })
    }
  
 

}
      
      
      render() {
   
      const {productsList} = this.state
      const {
        description,
        image,
        price,
        title,
        category,
      } = productsList
  
    return(
        <div className="product-container">
        <img src={image} alt="product" className="product-image" />
      <div className="item-container">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
       <p className="price">{price} Rs/-</p>
       <p className="category">{category}</p>
        
      </div>
      </div>
    )
       }

  

  

  
}

export default Products 

