import { useNavigate } from "react-router-dom";
import type { CommentType } from "../Types/commentType";
// import { useDispatch } from "react-redux";

const CommentItem = ({id, name, email, body}: CommentType) => {

const navigate = useNavigate();

const handleEdit = () => {
    navigate(`/edit/${id}`)
  };

  const handleAddFavorite = () => {
  };

  return (
    <>
    <h4>{name}</h4>
    <p>{email}</p>
    <p>{body}</p>
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleAddFavorite}>Add Favorite</button>
    <p>---------------------</p>
    </>
  );
};

export default CommentItem;