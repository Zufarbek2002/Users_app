import loading from "../assets/loading.svg";
import "./UsersStyle.scss";

const LoadingComp = () => {
  return (
    <div className="loading_box">
      <img src={loading} alt="" />
    </div>
  );
};

export default LoadingComp;
