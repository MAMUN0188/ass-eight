import React from 'react';
import Wish from './Wish';

const WishCompo = ({ wishData, HandleWishRemove }) => {
    return (
        <div>
            <div>
                <h1 className='font-black text-xl mt-4'>Wishlist</h1>
            </div>
            <div>
                {
                    wishData.map(wishD => <Wish HandleWishRemove={HandleWishRemove} wishD={wishD}></Wish>)
                }
            </div>
        </div>
    );
};

export default WishCompo;