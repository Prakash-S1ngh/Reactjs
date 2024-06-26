import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "./AppContext";

function Footer() {
    const { pages, totalPage, clickHandler } = useContext(AppContext);
    const location = useLocation(); // Get the current location

    console.log(pages, totalPage);

    return (
        <div className="footer">
            <div className="btn">
                <button onClick={() => clickHandler(pages - 1, location)}>Previous</button>
                <button onClick={() => clickHandler(pages + 1, location)}>Next</button>
            </div>
            <div className="total">
                {`${pages} of ${totalPage}`}
            </div>
        </div>
    );
}

export default Footer;
