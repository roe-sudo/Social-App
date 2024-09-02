

// import icons from fontawsome........
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";




const Post = () => {
    return (
        <div className="w-screen h-auto">
            <div className="flex justify-between items-center">
                <div className="">
                     <span><FontAwesomeIcon icon={faUser} /></span>
                     <span>User Name</span>
                </div>
            </div>
        </div>
    );
}

export default Post;