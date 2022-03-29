import {useContext} from "react";
import { Link } from "react-router-dom";
import "./DiscussionCard.css";

import { UserContext } from "../../../../context/context";

export const DiscussionCard = ({ watched }) => {
    
    // CONTEXT
    
    const { user } = useContext(UserContext);
    
    
    return (
        <div>
            {!user && (
                <div className="discussion-wrap">
                    <h4 className="discussion-heading">Reviews & Discussion</h4>
                    <div className="discussion-guest-blur"></div>
                    <Link to="/register">
                        <button className="discussion-guest-btn">
                            Why can't I see this?
                        </button>
                    </Link>
                </div>
            )}
            {user && watched === true ? <div>YES DISCUSSION</div> : null}
            {user && watched === false ? (
                <div>Watch this movie to see the discussion</div>
            ) : null}
        </div>
    );
};