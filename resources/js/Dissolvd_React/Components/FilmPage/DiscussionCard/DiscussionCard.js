import {Fragment, useContext, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./DiscussionCard.css";

import { UserContext } from "../../../../context/context";
import axios from "axios";
import { Rating } from "@mui/material";

import ReactPaginate from 'react-paginate';

export const DiscussionCard = ({ is_watched }) => {
    
    // CONTEXT

    const params = useParams()

    const { user } = useContext(UserContext);

    // STATES
    const [opinions, setOpinions] = useState([])
    
    // Here we use opinion offsets; we could also use page offsets
    // following the API or data you're working with.


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


    const [currentPage, setCurrentPage] = useState(1);
    const [opinionsPerPage, setOpinionsPerPage] = useState(5);


    const indexOfLastPost = currentPage * opinionsPerPage;
    const indexOfFirstPost = indexOfLastPost - opinionsPerPage;
    const totalOpinions = opinions.length;
    
    
    const selectedList = opinions.slice(indexOfFirstPost, indexOfLastPost);
    const lastPageNumber = Math.ceil(totalOpinions / opinionsPerPage);
    
    const pageNumbers = []

    for(let i = 1; i <= lastPageNumber; i++){
        pageNumbers.push(i)
    }


  /* useEffect(() => {
    // Fetch opinions from another resources.
    const endOffset = opinionOffset + opinionPerPage;

    console.log(`Loading opinions from ${opinionOffset} to ${endOffset}`);

    setOpinions(opinions.slice(opinionOffset, endOffset));
    setPageCount(Math.ceil(opinions.length / opinionPerPage));
  }, [opinionOffset, opinionPerPage]); */


//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * opinionPerPage) % opinions.length;

//     console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
//     setOpinionOffset(newOffset);
//   };


    
    return (

        <Fragment>
            <div>
                {user && opinions.length ? (
                    <div className="discussion-open-wrap">
                        <h4 className="discussion-open-heading">
                            Reviews & Discussion
                        </h4>
                            {user && selectedList.map((opinion) => (
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
                {
                    pageNumbers.map((element) =>
                    <button className="page-btn"
                        onClick={() => setCurrentPage(element)}>
                        page {element}
                    </button>)
                }
                
                
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