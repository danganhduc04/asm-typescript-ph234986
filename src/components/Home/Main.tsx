import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <div className="main ">
        <h2 className='main-name'>Tuyến đường phổ biến</h2>
        <div className="slider">
          <div className="slides">
            <div className="route">
              <Link to="/detail">
                <img src="../img/from1.png" alt="" />
              </Link>

              <div className="from-to">
                <h4 className="from-name">Sài Gòn - Nha Trang</h4>
                <p className="price">
                  Từ 200.000₫ <del>250.000₫</del>
                </p>
              </div>
            </div>
            <div className="route">
              <img src="../img/from2.png" alt="" />

              <div className="from-to">
                <h4 className="from-name">Hà Nội - Hải Phòng</h4>
                <p className="price">
                  Từ 80.000₫ <del>100.000₫</del>
                </p>
              </div>
            </div>{" "}
            <div className="route">
              <img src="../img/from3.png" alt="" />

              <div className="from-to">
                <h4 className="from-name">Sài Gòn - Đà Lạt</h4>
                <p className="price">Từ 200.000₫</p>
              </div>
            </div>{" "}
            <div className="route">
              <img src="../img/from4.png" alt="" />

              <div className="from-to">
                <h4 className="from-name">Sài Gòn - Phan Thiết</h4>
                <p className="price">Từ 100.000₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Main;
