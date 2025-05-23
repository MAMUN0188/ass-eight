import Cart from './Cart';
import { BsSortDownAlt } from "react-icons/bs";

const CartCompo = ({ gadgets, HandleCartRemove }) => {

    return (
        <div>
            <div className='flex justify-between items-center my-3'>
                <div>
                    <h1 className='font-black text-xl'>Cart</h1>
                </div>
                <div className='flex gap-8 items-center'>
                    <div className='text-xl font-bold'>Total Cost: </div>
                    <div className='border border-[#9538E2] rounded-2xl p-1'>
                        <button className='flex items-center gap-2 text-[#9538E2] font-bold'>Sort by Price <BsSortDownAlt className='text-xl' /></button>
                    </div>
                    <div>
                        <button className="btn rounded-2xl text-white bg-[#9538E2]" onClick={() => document.getElementById('my_modal_1').showModal()}>Purchase</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h1></h1>
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">Press ESC key or click the button below to close</p>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
            <div>
                {
                    gadgets.map(gad => <Cart HandleCartRemove={HandleCartRemove} gad={gad}></Cart>)
                }
            </div>
        </div>
    );
};

export default CartCompo;