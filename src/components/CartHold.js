import React from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart';
import CartPageFaq from './CartPageFaq';
// import CartPageFooter from './CartPageFooter';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import SPFooter from './SPFooter';
import YouMayAlsoLike from './YouMayAlsoLike';
import "../styles/BestSellers.css";

const CartHold = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const cartLen = cartItems.length;

    const totalPrice = cartItems.map(item => {
        return item.quantity * item.price;
    }).reduce((totalPrice, singleItemPrice) => totalPrice + singleItemPrice, 0);


    return (
        <div>
            {/*<p className=' font-bold text-2xl fof'>CART TOAL ${totalPrice} </p>*/}
            {cartLen === 0 ? <EmptyCart /> : <>
                <div className='cart-items wrapper'>
                    <div className='cart-items-list'>
                        <div className=' flex justify-between'>
                            <p className=' text-2xl'> Your Cart </p>
                            <p className=' font-semibold fof lin text-xl'> {cartLen} items </p>
                        </div>
                        <hr />
                        <div className=''>
                            {cartItems.map((item) => (

                                <div className=''>

                                    <Cart
                                        key={item.id}
                                        item={{
                                            id: item.id,
                                            title: item.name,
                                            quantity: item.quantity,
                                            total: item.totalPrice,
                                            price: item.price,
                                            image: item.picture,
                                            cartLength: cartItems.length,
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='cart-items-price flex justify-center'>
                        <CartTotal totalPr={totalPrice} />
                    </div>
                </div>



                <p className='fof text-4xl italic mb-10 text-center'> YOU MAY ALSO LIKE </p>
                <YouMayAlsoLike className="" />
                <CartPageFaq />

                <SPFooter />
            </>}





        </div>
    )
}

export default CartHold