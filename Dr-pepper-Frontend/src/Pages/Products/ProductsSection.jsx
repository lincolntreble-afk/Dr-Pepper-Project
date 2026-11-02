import products from "../../data/products";

import {Link} from 'react-router-dom'

import "../Products/ProductsSection.css";

function ProductSection() {
    return (
        <Link to = '/product-info'>
            <section className="products-section">
                <div className="our-products-grid">
                    {products.map((product) => {
                        return (
                            <>
                                <div
                                    key={product.id}
                                    className="our-products-column"
                                >
                                    <div className="our-products-img-container">
                                        <img
                                            className="our-products-img"
                                            src={product.image}
                                        />

                                        <div className="our-products-text">
                                            <p className="our-products-text-light">
                                                {" "}
                                                {product.name}{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </section>
        </Link>
    );
}

export default ProductSection;
