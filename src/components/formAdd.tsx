import { useState } from "react";

const FormComments = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
      const [body, setBody] = useState("");

  const handleSave = () => {
  };

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input value={body} onChange={(e) => setBody(e.target.value)} />

      <button onClick={handleSave}>Editar</button>
    </>
  );
};

export default FormComments;