import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UsersStyle.scss";
import LoadingComp from "./LoadingComp";

const UsersComp = () => {
  const [dataBase, setDataBase] = useState([]);
  const [bool, setBool] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setDataBase(res.data);
      setBool(false);
    });
  }, [bool]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Users</h1>
      {bool && <LoadingComp />}
      <div className="d-flex flex-wrap justify-content-between gap-5">
        {dataBase.map((data, i) => (
          <div className="data_box card shadow" key={i}>
            <div className="card-header">
              <h3>{data.name}</h3>
              <h3 className="fs-5">{data.username}</h3>
            </div>
            <div className="card-body">
              <p>
                Email: <a href="#">{data.email}</a>
              </p>
              <p>
                Website: <a href="#">{data.website}</a>
              </p>
              <p>
                Address:{" "}
                <a href="#">
                  {data.address.city},{data.address.street}
                </a>
              </p>
              <p>
                Phone: <a href="#">{data.phone}</a>
              </p>
              <p>
                Company: <a href="#">{data.company.name}</a>
              </p>
            </div>
            <div className="card-footer d-flex gap-2 justify-content-center">
              <Link
                to={`/posts/${data.id}`}
                className="text-decoration-none text-white"
              >
                <button className="btn btn-primary">Posts</button>
              </Link>
              <Link
                to={`/todos/${data.id}`}
                className="text-decoration-none text-white"
              >
                <button className="btn btn-primary">Todos</button>
              </Link>
              <Link
                to={`/album/${data.id}`}
                className="text-decoration-none text-white"
              >
                <button className="btn btn-primary">Album</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersComp;
