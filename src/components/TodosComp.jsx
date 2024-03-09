import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingComp from "./LoadingComp";

const TodosComp = () => {
  const [postData, setPostData] = useState([]);
  const [bool, setBool] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`)
      .then((res) => {
        setPostData(res.data);
        setBool(false);
      });
  }, [id, bool]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Todos</h1>
      {bool && <LoadingComp />}
      {postData.map((data, i) => (
        <div className="card mb-3 pt-3" key={i}>
          <div className="card-body d-flex justify-content-between align-content-center">
            <h2 className="fs-5">{data.title}</h2>
            <p className="">{data.completed ? "✅" : "❌"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodosComp;
