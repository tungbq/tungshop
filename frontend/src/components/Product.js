import React from 'react'
import products from '../products'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card class='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>

            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                    <strong>{product.name}</strong>  
                    </Card.Title>
                </a>
            </Card.Body>

            <Card.Text as='div'>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                />
            </Card.Text>

            <Card.Text as='h3'>
                ${product.prices}
            </Card.Text>
        </Card>
    )
}

export default Product
