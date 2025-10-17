import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setComments } from "../redux/slices/commentsSlice";
import CommentItem from "../components/comment";
import type { RootState } from "../redux/store";
import useCommentsApi from "../hooks/useCommentsApi";

const Comments = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

const {comments} = useCommentsApi();

  const localComments = useSelector((state: RootState) => state.commentsRed.comments);
  console.log("Store:", localComments); //done

  dispatch(setComments(comments));
  
    const handleCreateComment = () => {
        navigate("/add")
    };

  return (
    <>
    <h1>SocialFeed</h1>
      <button onClick={handleCreateComment}>Create a comment</button>
    <h2>Comment here:</h2>

 {          localComments.map((com, i) => 
              <CommentItem
                key={i}
                id={com.id}
                name={com.name}
                email={com.email}
                body={com.body}
              />
        )}
    
    </>
  );
};

export default Comments