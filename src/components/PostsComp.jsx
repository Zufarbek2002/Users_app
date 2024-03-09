import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingComp from "./LoadingComp";

const PostsComp = () => {
  const [postData, setPostData] = useState([]);
  const [bool, setBool] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/?userId=${id}`)
      .then((res) => {
        setPostData(res.data);
        setBool(false);
      });
  }, [id, bool]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Posts</h1>
      {bool && <LoadingComp />}
      {postData.map((data, i) => (
        <div className="card mb-3" key={i}>
          <div className="card-body">
            <h2 className="fs-5">{data.title}</h2>
            <p className="">{data.body}</p>
            <div className="btn_box">
              <Link
                to={`/comments/${data.id}`}
                className="text-decoration-none text-white"
              >
                <button className="btn btn-primary">Comments</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsComp;
