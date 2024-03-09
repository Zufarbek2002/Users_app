import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingComp from "./LoadingComp";

const PhotosComp = () => {
  const [photoData, setPhotoData] = useState([]);
  const [page, setPage] = useState(1);
  const [bool, setBool] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos/?albumId=${id}&_limit=10&_page=${page}`
      )
      .then((res) => {
        setPhotoData(res.data);
        setBool(false);
      });
  }, [id, page, bool]);

  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Photos</h1>
      {bool && <LoadingComp />}
      {photoData.map((data, i) => (
        <div className="card mb-3" key={i}>
          <div className="card-body d-flex align-items-center justify-content-between">
            <h2 className="fs-5">{data.title}</h2>
            <a href={`${data.url}`}>
              <img src={`${data.thumbnailUrl}`} alt={`${data.title}`} />
            </a>
          </div>
        </div>
      ))}
      {!bool && (
        <div className="btn_box d-flex gap-4 align-items-center justify-content-center mb-5 mt-5">
          <button
            className="btn btn-success px-4 fs-3"
            disabled={page == 1}
            onClick={handlePrev}
          >
            Prev
          </button>
          <h2 className="fs-1">{page}</h2>
          <button
            className="btn btn-success px-4 fs-3"
            disabled={page == 5}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotosComp;
