import { useReducer } from "react";
import arrow from "../../assets/icon-arrow-dark.svg";

const initialState = { product: false, company: false, connect: false };
const reducer = (state, action) => {
    switch (action.type) {
        case "product":
            // return { ...state, product: !state.product };
            return { product: !state.product, company: false, connect: false };
        case "company":
            // return { ...state, company: !state.company };
            return { company: !state.company, product: false, connect: false };
        case "connect":
            return { connect: !state.connect, company: false, product: false };
        default:
            return;
    }
};

const MobileNav = () => {
    const [curState, dispatch] = useReducer(reducer, initialState);

    return (
        <div
            aria-label='hidden'
            className='absolute z-20 top-[20%] left-1/2 flex flex-col justify-between
     w-11/12 bg-white h-auto shadow-2xl pt-4 pb-8
    rounded-lg text-xl font-semibold font-overpass text-body-copy
    animate-slide-in desktop:hidden'>
            <nav className='w-4/5 mx-auto border-b-[1px] border-footer-text'>
                <ul className='flex flex-col items-center'>
                    <li className='w-full text-center'>
                        Product
                        <img
                            src={arrow}
                            alt='arrow down'
                            onClick={() => dispatch({ type: "product" })}
                            className={
                                curState.product
                                    ? "inline ml-2 hover:cursor-pointer hover:scale-150 rotate-180 transition-all duration-300"
                                    : "inline ml-2 hover:cursor-pointer hover:scale-150 transition-all duration-300"
                            }
                        />
                        <div
                            className={
                                curState.product
                                    ? "my-4 rounded-md bg-footer-text h-[180px] opacity-100 transition-all duration-300"
                                    : "my-4 rounded-md bg-footer-text overflow-hidden h-0 opacity-0 transition-all duration-300"
                            }>
                            <ul className='flex flex-col items-center'>
                                <li className='my-4'>Designs</li>
                                <li className='my-4'>Infrastructure</li>
                                <li className='my-4'>Tools</li>
                            </ul>
                        </div>
                    </li>

                    <li className='w-full text-center'>
                        Company
                        <img
                            src={arrow}
                            alt='arrow down'
                            onClick={() => dispatch({ type: "company" })}
                            className={
                                curState.company
                                    ? "inline ml-2 rotate-180 hover:cursor-pointer hover:scale-150 transition-all duration-300"
                                    : "inline ml-2 hover:cursor-pointer hover:scale-150 transition-all duration-300"
                            }
                        />
                        <div
                            className={
                                curState.company
                                    ? "my-4 rounded-md bg-footer-text h-[180px] opacity-100 transition-all duration-300"
                                    : "my-4 rounded-md bg-footer-text overflow-hidden h-0 opacity-0 transition-all duration-300"
                            }>
                            <ul className='flex flex-col items-center'>
                                <li className='my-4'>Resources</li>
                                <li className='my-4'>Team</li>
                                <li className='my-4'>Culture</li>
                            </ul>
                        </div>
                    </li>

                    <li className='w-full text-center'>
                        Connect
                        <img
                            src={arrow}
                            alt='arrow down'
                            onClick={() => dispatch({ type: "connect" })}
                            className={
                                curState.connect
                                    ? "inline ml-2 rotate-180 hover:cursor-pointer hover:scale-150 transition-all duration-300"
                                    : "inline ml-2 hover:cursor-pointer hover:scale-150 transition-all duration-300"
                            }
                        />
                        <div
                            className={
                                curState.connect
                                    ? "my-4 rounded-md bg-footer-text h-[180px] opacity-100 transition-all duration-300"
                                    : "my-4 rounded-md bg-footer-text overflow-hidden h-0 opacity-0 transition-all duration-300"
                            }>
                            <ul className='flex flex-col items-center'>
                                <li className='my-4'>Contact</li>
                                <li className='my-4'>Newsletter</li>
                                <li className='my-4'>LinkedIn</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className='flex flex-col items-center'>
                <button className='my-4 text-xl font-semibold'>Login</button>
                <button className='px-8 py-1 font-semibold text-white rounded-full bg-button-gradient font-ubuntu'>
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default MobileNav;
