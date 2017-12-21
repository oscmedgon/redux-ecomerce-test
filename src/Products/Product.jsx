import React, {PropTypes} from 'react'
import {Link} from 'react-router'

const Product = ({
  _id,
  name,
  description,
  image,
  price,
  deliberyStimate,
  category,
  onAddItem
}) => (
  <div className='col-xs-12 col-sm-6 col-lg-4'>
    <div className='card'>
      <Link to={`/detail/${_id}`}>
        <img className='card-img-top' width='100%' src={image} alt={description} />
      </Link>
      <div className='card-block'>
        <Link to={`/detail/${_id}`}>
          <h4 className='card-title'>{name}</h4>
        </Link>
        <p className='card-text'>
          {description}
        </p>
      </div>
      <ul className='list-group list-gorop-flux'>
        <li className='list-group-item'>
          <strong>
            {price} &euro;
          </strong>
        </li>
        <li className='list-group-item'>
          <strong>
            Entrega:
          </strong>
          {deliberyStimate}
        </li>
        <li className='list-group-item'>
          <strong>
            {price} &euro;
          </strong>
        </li>
        <li className='list-group-item'>
          <span className='badge badge-pill barge-info'>
            {category}
          </span>
        </li>
      </ul>
      <div className='card-block'>
        <button
          className='btn btn-primary'
          type='button'
          onClick={() => onAddItem({_id, name, description, image, price, deliberyStimate, category})}>
          <span className='fa fa-cart-plus'> Añadir al carrito</span>
        </button>
      </div>
    </div>
  </div>
)

Product.PropTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  deliberyStimate: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default Product
