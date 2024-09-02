

import { Link } from "react-router-dom";

const Search = () => {
    return (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black">
            <header className="flex items-center justify-between gap-x-4 px-2 h-10">
                <span className="cursor-pointer flex items-center justify-center">
                    <Link to={'/'}>
                        <span className="material-symbols-rounded text-white">arrow_back</span>
                    </Link>
                </span>
                <input  type="search" placeholder="search" className="genric-search w-full h-full px-4 border-none outline-none bg-transparent text-white"/>
            </header>
        </div>
    );
}

export default Search;