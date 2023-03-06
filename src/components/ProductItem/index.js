import {Link } from "react-router-dom";
import './index.css'

const ProductItem = props => {
  const {productData} = props
  const {image,id} = productData

  return (
    <li>
    <Link to={`/products/${id}`} className="link-item">
       <img src={image} alt="product" className="product-image" />
   </Link>
    </li>
  )
}
export default ProductItem
