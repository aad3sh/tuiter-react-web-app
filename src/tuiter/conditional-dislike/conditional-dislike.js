import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";

const ConditionalDislike = ({tuit}) => {
    const dispatch = useDispatch();
    const dislikeTuitHandler = (tuit) => {
        const updatedTuit = {
            ...tuit
        }
        updatedTuit.dislikes = updatedTuit.disliked ? updatedTuit.dislikes - 1 : updatedTuit.dislikes + 1
        updatedTuit.disliked = !updatedTuit.disliked;
        dispatch(updateTuitThunk(updatedTuit));
    }
    return (
        <span onClick={() => dislikeTuitHandler(tuit)}>
            {
                tuit.disliked &&
                <i className="fa-solid fa-thumbs-down"></i>
            }
            {
                !tuit.disliked &&
                <i className="fa-regular fa-thumbs-down"></i>
            }

            &nbsp;{tuit.dislikes}
        </span>
    );
}
export default ConditionalDislike;