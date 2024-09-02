
import { Link } from "react-router-dom";

const Header = ()=> {
    return (
            <header className="fixed top-10 left-0 w-screen h-10 flex items-center justify-between px-2 text-slate-200">
                <Link to={"/"} className="active  h-full flex items-center justify-center flex-grow">
                    <span className="material-symbols-rounded cursor-pointer font-bold text-[1.7rem] ">home</span>
                </Link>
                <Link to={"/"} className=" h-full flex items-center justify-center flex-grow">
                    <span className="material-symbols-rounded cursor-pointer font-bold text-[1.7rem]">play_circle</span>
                </Link>
                <Link to={"/"} className=" h-full flex items-center justify-center flex-grow">
                     <span className="material-symbols-rounded cursor-pointer font-bold text-[1.7rem]">notifications</span>
                </Link>
                <Link to={"/"} className="  h-full flex items-center justify-center flex-grow">
                    <span className="material-symbols-rounded cursor-pointer font-bold text-[1.7rem]">interpreter_mode</span>
                </Link>
                <Link to={"/"} className="h-full flex items-center justify-center flex-grow">
                    <span className="material-symbols-rounded cursor-pointer font-bold text-[1.7rem]">account_circle</span>
                </Link>
                <Link to={"/"} className=" h-full flex items-center justify-center flex-grow">
                     <span className="material-symbols-rounded cursor-pointer font-bold text-[1.7rem]">menu</span> 
                </Link>

            </header>
    );
}


export default Header;