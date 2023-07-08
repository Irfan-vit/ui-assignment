import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import './productCard.css'
const ProductCard = ({ product }) => {
  return (
    <>
      <figure className="product-card">
        <div className="product-image-container">
          <img src={product.imgSrc} alt="" />
        </div>
        <figcaption className="product-details-container">
          <div className="product-primary-data">
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <Link to={`/product/${product._id}/description`}>
              <button>Add to Cart</button>
            </Link>
          </div>
          <hr
            style={{
              background: '#707070',
              height: '1px',
            }}
          />
          <div className="product-secondary-data">
            <Rating
              fillColor="#FF8636"
              initialValue={product.rating}
              transition
              size={30}
            />
            <hr
              style={{
                background: '#707070',
                height: '180%',
                width: '1px',
                margin: '0',
                padding: '0',
              }}
            />
            <p>24 Reviews</p>
          </div>
        </figcaption>
      </figure>
    </>
  )
}
export default ProductCard
