import { useState, useEffect } from "react";

const useCommentsApi = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const getUsers = async () => {
      try {
        const datos = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then((res) => res.json());
        setComments(datos);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  },[])

  return { comments, loading }
}

export default useCommentsApi;