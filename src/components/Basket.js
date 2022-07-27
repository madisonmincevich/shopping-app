import React from "react";
import "../style/Basket.css";
import confetti from "canvas-confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApplePay,
  faCcAmazonPay,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice >= 200 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  function myConfetti() {
    var duration = 15 * 500;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  }

  return (
    <div id="basket">
      <h1 className="cartTitle mt-5">Your Cart</h1>
      <div>
        {cartItems.length === 0 && (
          <div className="text-start">Cart is empty</div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="row mb-3">
            <div className="itemname col-2 fw-bold text-start fs-5">
              {item.name}
            </div>
            <div className="addRemoveBtn col-2">
              <button onClick={() => onAdd(item)}>+</button>{" "}
              <button onClick={() => onRemove(item)}>-</button>
            </div>
            <div className="quantity col-3 text-start fs-5">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <div className="row text-start mt-5">
            <div className="price row mb-1">
              <div className="col-2">Items Price</div>
              <div className="col-1">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="price row mb-1">
              <div className="col-2">Tax Price</div>
              <div className="col-1">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="price row mb-1">
              <div className="col-2">Shipping Price</div>
              <div className="col-1">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="price row mb-1">
              <div className="col-2 fw-bold">Total Price</div>
              <div className="col-1 fw-bold">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="col-5 mt-3 mb-5">
              <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex="-1"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalToggleLabel">
                        Your Cart
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <p className="fs-5">Contact Information</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <input type="text" placeholder="Email" />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                              placeholder="Phone number"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6">
                            <input type="text" placeholder="First Name" />
                          </div>
                          <div className="col-6">
                            <input type="text" placeholder="Last Name" />
                          </div>
                        </div>
                        <p className="fs-5">Shipping Information</p>

                        <div className="shipping-address ms-2 me-2">
                          <div className="row">
                            <input type="text" placeholder="Street Address" />
                          </div>
                          <div className="row">
                            <input type="text" placeholder="Apt/Unit #" />
                          </div>
                          <div className="row">
                            <input type="text" placeholder="City" />
                          </div>
                          <div className="row">
                            <input type="text" placeholder="State" />
                          </div>
                          <div className="row">
                            <input type="text" placeholder="Zipcode" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
                data-bs-backdrop="false"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalToggleLabel2">
                        Payment
                      </h5>

                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>Enter Your Payment Details Below</p>
                      <form>
                        <div className="row p-3">
                          <input
                            type="text"
                            placeholder="Name on Card"
                            className="mb-2"
                          />
                          <input
                            type="text"
                            inputmode="numeric"
                            pattern="\d*"
                            placeholder="Credit Card Number"
                            className="mb-2"
                          />
                          <div className="row mb-2">
                            <div className="col-sm-6 p-0">
                              <input
                                type="text"
                                inputmode="numeric"
                                placeholder="Expiration Date (MM / YY)"
                              />
                            </div>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                inputmode="numeric"
                                placeholder="Security Code"
                              />
                            </div>
                          </div>
                        </div>
                        <div className=" row fs-2 ms-3">
                          <div className="paymentIcons col-sm-3">
                            <FontAwesomeIcon icon={faCcVisa} />
                          </div>
                          <div className="paymentIcons col-sm-3">
                            <FontAwesomeIcon icon={faApplePay} />
                          </div>
                          <div className="paymentIcons col-sm-3">
                            <FontAwesomeIcon icon={faCcPaypal} />
                          </div>
                          <div className="paymentIcons col-sm-3">
                            <FontAwesomeIcon icon={faCcAmazonPay} />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasTop"
                        aria-controls="offcanvasTop"
                        onClick={() => myConfetti()}
                      >
                        Finalize Purchase
                      </button>

                      <div
                        className="offcanvas offcanvas-top"
                        tabIndex="-1"
                        id="offcanvasTop"
                        aria-labelledby="offcanvasTopLabel"
                        data-bs-backdrop="false"
                      >
                        <div className="offcanvas-header">
                          <div className="row">
                            <div className="col-sm-11">
                              <h5 id="offcanvasTopLabel" className="thankyou">
                                Thank you for your order!
                              </h5>
                            </div>
                            <div className="col-sm-1">
                              <span className="dumbell">
                                <FontAwesomeIcon icon={faDumbbell} />
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="offcanvas-body">
                          <div className="row fs-3">
                            <p>
                              Your order will ship within 7-10 business days!
                            </p>
                          </div>
                          <div className="row">
                            <small>
                              This is a mock website no real orders are placed
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="checkout btn btn-primary"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
              >
                Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
