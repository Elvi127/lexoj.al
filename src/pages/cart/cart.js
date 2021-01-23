import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as cartActions from '../../store/actions/cart';
import './cart.css';

const CartItem = props => {
    // const [quantity, setQuantity] = useState(props.quantity)
    const dispatch = useDispatch();
    const removeBook = () => {
        dispatch(cartActions.removeFromCart(props.id));
    } 
    // const changeQuantity = (quantity) => {
    //     dispatch(cartActions.changeQuantity(props.id, quantity))
    //     setQuantity(quantity)
    // }
    return(
        <div className="cartItemCard">
            <div className="cartItemInfo">
                <img alt="bookImage" src={props.img} />
                <div>
                    <p className="cartItemTitle">Titulli: {props.title}</p>
                    <p className="cartItemPrice">Cmimi: 500 AL</p>
                    <p className="cartItemQuantity">
                        Sasia: {props.quantity} 
                    </p>
                </div>
            </div>
            <div className="cartItemDelete">
                <ion-icon 
                    onClick={removeBook} 
                    name="trash-outline">
                </ion-icon>
            </div>
        </div>
    )
}


const Cart = props => {
    const [isCheckoutOpen, setCheckoutOpen] = useState(false);
    const books = useSelector(state => state.cartItems.cartItems);
    let totalAmount = 0;
    books.map(book => totalAmount += book.quantity * 500);
    console.log(books)
    return(
        <div>
            <div className="cartPage">
                <div className="cartItems">
                {
                    books.map(book => 
                        <CartItem
                            img={book.img} 
                            title={book.title}
                            quantity={book.quantity}
                            id={book.id}
                        />
                    )
                }
                </div>
                <div className="checkoutContainer">
                    <p className="checkoutAmount">Shuma totale: {totalAmount} AL</p>
                    <p onClick={()=>setCheckoutOpen(true)} className="checkoutAction">Vazhdo me porosine</p>
                </div>
            </div>
            {
                isCheckoutOpen?
                <div className="checkoutFormContainer">
                    <p className="info">*Ju nuk jeni i kycur! Ju lutem plotesoni format e meposhtme per te kryer porosine ose nese keni nje llogari ne lexoj.al kycuni <span>ketu</span></p>
                    <div className="checkoutDetailsContainer">
                        <div className="orderDetail">
                            <label>Emri</label>
                            <input type="text"/>
                        </div>
                        <div className="orderDetail">
                            <label>Mbiemri</label>
                            <input type="text"/>
                        </div>
                        <div className="orderDetail">
                            <label>Qyteti</label>
                            <input type="text"/>
                        </div>
                        <div className="orderDetail">
                            <label>Adresa</label>
                            <input type="text"/>
                        </div>
                        <div className="orderDetail">
                            <label>Email</label>
                            <input type="text"/>
                        </div>
                        <div className="orderDetail">
                            <label>Nr Cel</label>
                            <input type="text"/>
                        </div>
                    </div>
                    <fieldset>
                        <legend>Informacion Shtese</legend>
                        <textarea></textarea>
                    </fieldset>
                    <p className="orderAction">Perfundo Porosine</p>
                </div>
                :null
            }
        </div>
    )
}



export default Cart;