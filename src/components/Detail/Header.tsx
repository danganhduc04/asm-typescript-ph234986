import Button from "../Home/Button";
import Navigation from "../Home/Navigation";

const Header = () => {
  return (
    <header className="flex bg-blue-500 h-auto p-3">
      <div className="flex mx-8">
        <img src="../img/logo1.svg" className="mr-4" />
        <p className="tracking-tighter py-2  text-white">
          Cam kết hoàn 150% nếu nhà xe không giữ vé
        </p>
      </div>
      {/* <div className="flex justify-end py-2" style={{ marginLeft: "130px" }}>
        <ul className="flex mx-3 ">
          <li className="mr-10">
            <a className="text-white">Quản lý đơn hàng</a>
          </li>
          <li className="mr-6">
            <a className="text-white">Mở bán vé trên Vexere</a>
          </li>
          <li>
            <a className="text-white">Trở thành đối tác</a>
          </li>
        </ul>
      </div> */}
      <Navigation />

      <Button title="Hotline 24/7" />
      <Button title="Đăng nhập" />

      {/* <div className="p-2" style={{ marginLeft: "20px" }}>
        <button
          className="btn bg-white text-black border  rounded-lg p-1"
          style={{ marginRight: "3px" }}
        >
          Hotline 24/7
        </button>
        <button className="btn bg-white text-black border  rounded-lg p-1">
          Đăng nhập
        </button>
      </div> */}
    </header>
  );
};

export default Header;
