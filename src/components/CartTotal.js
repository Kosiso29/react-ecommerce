import React from 'react'
import GooglePayButton from "@google-pay/button-react";
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useEffect } from 'react';
import CartAdditonalFeatures from './CartAdditonalFeatures';
import CartPageFaq from './CartPageFaq';
import Features2 from './Features2';
import Benefits from "./Benefits";
import { useSelector } from 'react-redux';

const CartTotal = (props) => {

    let finapPr = props.totalPr + 20 + 15;

    let cartItems = useSelector((state) => state.cart.items);

    let cartLen = cartItems.length;

    const formatter = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
      });

    return (
        <div className='cartTotalMainParent p-3 mt-24'>
            <div className='flex justify-center gap-36 font-semibold text-2xl mt-8 mobTextSize gap6rem'>
                <p> SUBTOTAL </p>
                <p> {formatter.format(Math.round(props.totalPr))} </p>
            </div>
            <div className='flex justify-center gap-48 font-medium text-xl mt-8 mobTextSize2 gap6rem'>
                <p> SHIPPING </p>
                <p> ₦20 </p>
            </div>
            <div className='flex justify-center gap-48 font-medium text-xl mt-8 mobTextSize2 gap6rem mb-6'>
                <p> INCL, TAX  </p>
                <p> ₦15 </p>
            </div>

            <hr />

            <div className='ctActualToatal fof text-xl text-center font-medium my-3'>
                <p> TOTAL:  {formatter.format(Math.round(props.totalPr + 20 + 15))}</p>
            </div>

            <hr />



            <div className='mt-12 mb-3'>


                <GooglePayButton environment='TEST' paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: "CARD",
                            parameters: {
                                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"]
                            },

                            tokenizationSpecification: {
                                type: "PAYMENT_GATEWAY",
                                parameters: {
                                    gateway: "example",
                                    gatewayMerchantId: "exampleGatewayMerchantId",


                                },
                            },

                        },
                    ],
                    merchantInfo: {
                        merchantId: "17613812255336763067",
                        merchantName: "Demo Only"
                    },

                    transactionInfo: {

                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: "Total",
                        totalPrice: "500",
                        currencyCode: "USD",
                        countryCode: "US",
                    },
                }}
                    onLoadPaymentData={paymentData => {
                        console.log(paymentData.paymentMethodData);
                    }}

                />
            </div>

            <div>
                <PayPalScriptProvider>
                    <PayPalButtons aria-label='BUY WITH PAYPAL' createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "100",
                                    },
                                },
                            ],
                        });
                    }}>

                    </PayPalButtons>
                </PayPalScriptProvider>
            </div>

            {cartLen > 1 ? <div className=''>

                <p className='fof text-2xl text-center top-9'> SECURELY CHCECKOUT WITH </p>

                <CartAdditonalFeatures />

                {cartLen > 2 ? <Benefits /> : ""}

            </div>
                :
                ""
            }

        </div>
    )
}

export default CartTotal

