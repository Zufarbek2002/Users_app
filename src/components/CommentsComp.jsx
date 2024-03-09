import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingComp from "./LoadingComp";

const CommentsComp = () => {
  const [commentData, setCommentData] = useState([]);
  const [bool, setBool] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
      .then((res) => {
        setCommentData(res.data);
        setBool(false);
      });
  }, [id, bool]);
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Comments</h1>
      {bool && <LoadingComp />}
      {commentData.map((data, i) => (
        <div className="card mb-3" key={i}>
          <div className="card-header">
            <h2 className="fs-4">{data.email}</h2>
          </div>
          <div className="card-body">
            <h2 className="fs-5">{data.name}</h2>
            <p className="">{data.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsComp;
