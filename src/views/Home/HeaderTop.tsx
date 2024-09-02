

import { Link } from "react-router-dom";



const HeaderTop = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-10   flex items-center justify-between px-2 gap-x-2">
                <div className="flex items-center justify-between gap-x-1">
                    <span className="text-[1.4rem] font-bold text-white">You</span>
                    <sub className="main-bg-class font-bold"><span className="material-symbols-rounded">favorite</span></sub>
                </div>
                <div className="start-stat flex items-center justify-center rounded-xl w-full">
                    <span className="text-white">The Future</span>
                </div>
                <div className="h-full flex items-center justify-center gap-x-2">
                <Link to={'/search'}>
                    <span className="material-symbols-rounded cursor-pointer text-white font-bold text-[1.7rem]">search</span>
                </Link>
                <span className="material-symbols-rounded cursor-pointer text-white font-bold text-[1.7rem]">filter_alt</span>
                </div>
        </div> //big div..............
    );
}

export default HeaderTop;