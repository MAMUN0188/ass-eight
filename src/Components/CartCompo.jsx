import React from 'react';
import Cart from './Cart';

const CartCompo = ({ gadgets, HandleRemove }) => {

    return (
        <div>
            <div>
                Hello
            </div>
            <div>
                {
                    gadgets.map(gad => <Cart HandleRemove={HandleRemove} gad={gad}></Cart>)
                }
            </div>
        </div>
    );
};

export default CartCompo;