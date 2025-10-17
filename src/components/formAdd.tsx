import { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/slices/commentsSlice";

const FormComments = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
      const [body, setBody] = useState("");

    const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addComment({ name: name, email:email, body:body  }))
  };

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input value={body} onChange={(e) => setBody(e.target.value)} />

      <button onClick={handleSave}>Add</button>
    </>
  );
};

export default FormComments;