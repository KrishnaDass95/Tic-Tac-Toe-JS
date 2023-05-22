import { FaRegCircle,FaTimes,FaPen } from "react-icons/fa";

const Icon = ({ic}) => {

    switch(ic){

        case "circle": 
            return <FaRegCircle className="icon" />;
        case "cross":
            return <FaTimes className="icon" />;
        default:
            return <FaPen className="icon" />;

    }
}

export default Icon;