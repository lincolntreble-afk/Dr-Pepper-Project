import { Helmet } from "react-helmet-async";

import Header from "../../Components/Header/Header";
import MainFooter from "../../Components/Footer/Footer";
import CheckoutItemRow from "./CheckoutItemRow";

import { getTotalQuantity, formatCurrency } from "../../data/cart";
import products from "../../data/products";

import "../Checkout/CheckoutPage.css";

function CheckoutPage({
  cart = {},
  handleUpdateQuantity,
  handleDeleteItem,
}) {
  const totalItems = getTotalQuantity(cart);
  const cartEntries = Object.entries(cart);

  const grandTotalPennies = cartEntries.reduce((sum, [id, quantity]) => {
    const product = products.find((item) => String(item.id) === String(id));
    if (!product) return sum;
    return sum + product.pricePennies * Number(quantity);
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
                <CheckoutItemRow
                  key={id}
                  product={product}
                  quantity={quantity}
                  handleUpdateQuantity={handleUpdateQuantity}
                  handleDeleteItem={handleDeleteItem}
                />
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

                return (
                  <div key={id} className="summary-row">
                    <div className="total-info">
                      <div className="total-quantity-product">
                        <span className="product-num">{quantity}x</span>{" "}
                        <p className="total-name">{product.name}</p>
                      </div>
                    </div>

                    <div className="total-container">
                      <p className="total">
                        {formatCurrency(product.pricePennies * Number(quantity))}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="Total-price-container">
              <span className="Total">Total:</span>
              <p className="Total-price">
                {formatCurrency(grandTotalPennies)}
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