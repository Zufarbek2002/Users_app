import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./UsersStyle.scss";
import LoadingComp from "./LoadingComp";

const AlbumComp = () => {
  const [albumData, setAlbumData] = useState([]);
  const [bool, setBool] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
      .then((res) => {
        setAlbumData(res.data);
        setBool(false);
      });
  }, [id, bool]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Album</h1>
      {bool && <LoadingComp />}
      <div className="d-flex flex-wrap justify-content-between gap-4">
        {albumData.map((data, i) => (
          <div className="card data_box mb-3" key={i}>
            <div className="card-body d-flex flex-md-column justify-content-between">
              <h2 className="fs-5">{data.title}</h2>
              <p className="">{data.body}</p>
              <div className="btn_box text-end ">
                <Link
                  to={`/photo/${data.id}`}
                  className="text-decoration-none text-white"
                >
                  <button className="btn btn-primary">Photos</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumComp;
