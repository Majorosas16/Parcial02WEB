// import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editComment } from "../redux/slices/commentsSlice";
import type { RootState } from "../redux/store";

const EditComment = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const com = useSelector((state: RootState) =>
    state.commentsRed.comments.find((com) => com.id === id)
  );

  console.log(com);
  

  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
      const [body, setBody] = useState("");

  const handleSave = () => {
    if (com) {
      dispatch(editComment({ ...com, name: name, email:email, body:body  }));
    }
  };

  if (!com) return <p>No se encontró</p>;

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input value={body} onChange={(e) => setBody(e.target.value)} />

      <button onClick={handleSave}>Editar</button>
    </div>
  );
};

export default EditComment;
