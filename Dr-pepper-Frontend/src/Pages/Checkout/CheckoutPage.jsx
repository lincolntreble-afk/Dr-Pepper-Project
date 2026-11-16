import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header";
import MainFooter from "../../Components/Footer/Footer";

import { getTotalQuantity, formatCurrency} from "../../data/cart";
import products from "../../data/products";

import "../Checkout/CheckoutPage.css";

function CheckoutPage({ cart = {} }) {

    const totalItems = getTotalQuantity(cart);

    
    const cartEntries = Object.entries(cart);

    
    const grandTotal = cartEntries.reduce((sum, [id, quantity]) => {
        const product = products.find((item) => String(item.id) === String(id));
        if (!product) return sum;
        return sum + Number(product.pricePennies) * Number(quantity);
    }, 0);

    return (
        <>
            <Helmet>
                <title>Checkout</title>
            </Helmet>

            <Header cart={cart} />

            <div className="page-title">
                <p className="checkout-title">Checkout ({totalItems})</p>
            </div>

            {cartEntries.length === 0 ? (
                <div className="checkout-page-main-flex">
                    <p>Your cart is empty.</p>
                </div>
            ) : (
                <div className="checkout-page-main-flex">
                    <section className="checkout-page-product-section">
                        {cartEntries.map(([id, quantity]) => {
                            const product = products.find(
                                (item) => String(item.id) === String(id)
                            );

                            if (!product) return null;

                            return (
                                <div key={id} className="product-container">
                                    <div className="product-info-left-section">
                                        <div className="product-info-img-container">
                                            <img
                                                className="product-info-img"
                                                src={product.image}
                                                alt={product.name}
                                            />
                                        </div>

                                        <div className="product-info-right-section">
                                            <div className="product-name-container">
                                                <p className="product-name">
                                                    {product.name}
                                                </p>
                                            </div>

                                            <div className="quantity-container">
                                                <p className="checkout-quantity">
                                                    Quantity: {quantity}
                                                </p>

                                                <div className="update-button-container">
                                                    <button className="update-button">
                                                        Update
                                                    </button>
                                                </div>

                                                <div className="Delete-button-container">
                                                    <button className="delete-button">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="product-info-price">
                                                <p className="price">
                                                    {formatCurrency(product.pricePennies)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    
                    <section className="checkout-page-total-section">
                        <div className="checkout-page-info-container">
                            {cartEntries.map(([id, quantity]) => {
                                const product = products.find(
                                    (item) => String(item.id) === String(id)
                                );

                                if (!product) return null;

                                const itemSubtotal = (
                                    Number(product.pricePennies) * Number(quantity)
                                ).toFixed(2);

                                return (
                                    <div key={id} className="summary-row">
                                        <div className="total-info">
                                            <div className="total-quantity-product">
                                                <span className="product-num">
                                                    {quantity}x
                                                </span>{" "}
                                                <p className="total-name">
                                                    {product.name}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="total-container">
                                            <p className="total">{formatCurrency(itemSubtotal)}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="Total-price-container">
                            <span className="Total">Total:</span>
                            <p className="Total-price">
                                {formatCurrency(grandTotal)}
                            </p>
                        </div>
                    </section>
                </div>
            )}

            <MainFooter />
        </>
    );
}

export default CheckoutPage;