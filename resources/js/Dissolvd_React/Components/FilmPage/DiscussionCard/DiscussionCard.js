import {Fragment, useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./DiscussionCard.css";

import { UserContext } from "../../../../context/context";
import axios from "axios";
import { Rating } from "@mui/material";

import ReactPaginate from 'react-paginate';

export const DiscussionCard = ({ is_watched, opinionPerPage}) => {
    
    // CONTEXT

    const params = useParams()

    const { user } = useContext(UserContext);

    // STATES
    const [opinions, setOpinions] = useState([])
    
    const [pageCount, setPageCount] = useState(0);
    // Here we use opinion offsets; we could also use page offsets
    // following the API or data you're working with.
    const [opinionOffset, setOpinionOffset] = useState(0);


    // EFFECTS
    useEffect(() => {
        if (params.id !== undefined) {

            displayDiscussion()
        }
    }, [ params.id ])


    // FUNCTION AND LOGIC
    const displayDiscussion = async (e) => {

        const res = await axios.get('/api/opinion/index/'+ params.id)

        console.log('opinions', res.data)

        setOpinions(res.data)
    }


  useEffect(() => {
    // Fetch opinions from another resources.
    const endOffset = opinionOffset + opinionPerPage;

    console.log(`Loading opinions from ${opinionOffset} to ${endOffset}`);

    setOpinions(opinions.slice(opinionOffset, endOffset));
    setPageCount(Math.ceil(opinions.length / opinionPerPage));
  }, [opinionOffset, opinionPerPage]);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * opinionPerPage) % opinions.length;

    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setOpinionOffset(newOffset);
  };


    
    return (

        <Fragment>
            <div>
                {user && opinions.length ? (
                    <div className="discussion-open-wrap">
                        <h4 className="discussion-open-heading">
                            Reviews & Discussion
                        </h4>
                            {user && opinions.map((opinion) => (
                                <div className="discussion-open" key={opinion.id}>
                                    <div className="discussion-open-info">

                                        {opinion.user && (
                                            <p className="discussion-open-user">
                                                Review written by
                                                <strong> {opinion.user.username}</strong>
                                            </p>
                                        )}
                                                
                                        <Rating
                                            name="rating"
                                            className="discussion-open-rating"
                                            precision={0.5}
                                            size="small"
                                            value={opinion.rating} 
                                            readOnly
                                        /> 
                                    </div>

                                    <div className="discussion-open-review">
                                        {opinion.review}
                                    </div>
                                    
                                </div>
                            ))}
                    </div>
                ) : (null)}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange= {handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount= {pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>

            {user && opinions.length < 1 ? (
                <div className="discussion-wrap">
                    <h4 className="discussion-heading">Reviews & Discussion</h4>
                    <div className="discussion-guest-blur"></div>
                    <p>
                        {" "}
                        <i>Watch this film to see the discussion!</i>
                    </p>
                </div>
            ) : (null)}


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
            
        </Fragment>
    );
};