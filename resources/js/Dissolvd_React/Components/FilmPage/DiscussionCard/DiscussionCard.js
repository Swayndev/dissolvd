import {Fragment, useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./DiscussionCard.css";

import { UserContext } from "../../../../context/context";
import axios from "axios";
import { Rating } from "@mui/material";

export const DiscussionCard = ({ is_watched }) => {
    
    // CONTEXT

    const params = useParams()

    const { user } = useContext(UserContext);
    const [opinions, setOpinions] = useState([])
    
    const displayDiscussion = async (e) => {

        const res = await axios.get('/api/opinion/index/'+ params.id)

        console.log('opinions', res.data)
        setOpinions(res.data)
    }

    useEffect(() => {
        if (params.id !== undefined) {

            displayDiscussion()
        }
    }, [ params.id ])
    
    return (

        <div>
            {
                user && opinions.map((element) => (<Fragment key={element.id}>
                    {
                        element.user && <h3>{element.user.username}</h3>
                    }
                            
                    <Rating value={element.rating} readOnly />
                    <p>
                        {
                            element.review
                        }
                    </p>
                </Fragment>))
            }
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
            {user && is_watched === true ? <div>YES DISCUSSION</div> : null}
            {user && is_watched === false ? (
                <div>Watch this movie to see the discussion</div>
            ) : null}
        </div>
    );
};