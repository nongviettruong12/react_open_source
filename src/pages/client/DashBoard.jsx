import React from "react";
import Header from "../../components/Header";
import { Card, Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosService from "../../api/instance";
import Footer from "../../components/Footer";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
const DashBoard = () => {
  const [data, setData] = useState([]);
  const [activeTab , setActiveTab] = useState(0)
  const filteredData = data.filter(car => car.brand === data[activeTab].brand)
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  useEffect(() => {
    axiosService
      .get("/cars")
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <Header />
      <section>
        
        <div className="max-w-[1280px] mx-auto mt-[-100px]">
          {/* các dòng xe được recomend */}
          <p className="font-bold text-[3rem]">KHÁM PHÁ CÁC DÒNG XE TOYOTA</p>
          <div className="container mx-auto">
      <div className="flex space-x-4 border-b border-gray-300">
        {data.slice(0, 5).map((imageTab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)} 
            className={`relative flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none ${
              activeTab === index ? "text-red-600" : ""
            }`}
          >
            <HiUserCircle className="w-5 h-5" />
            <span>{imageTab.brand}</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 ease-in-out ${
                activeTab === index ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4 mb-[40px]">
        {filteredData.map((car, index) => (
          <Card key={index} className="max-w-sm" imgAlt={car.name} width={100}>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex gap-4">
              <Link to={`/product/${car.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {car.name}
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-1xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(car.price)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>

    {/* và các dòng xe khác */}
    <p className="font-bold text-[3rem] mb-[10px]">Và các dòng xe khác của chúng tôi</p>
          <div className="grid grid-cols-4 gap-4">
            {data.map((car, index) => {
              return (
                <Card
                  key={index}
                  className="max-w-sm"
                  imgAlt={car.name}
                  // imgSrc={car.image}
                  width={100}
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className=" w-full h-48 object-cover "
                  />
                  <Link to={`/product/${car.id}`}>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {car.name}
                    </h5>
                    <span>{car.shortDes}</span>
                  </Link>
                  <div className="mb-5 mt-2.5 flex items-center">
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="h-5 w-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                      {car.rating}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      Hãng: <span className="font-bold">{car.brand}</span>
                    </div>
                    <div>
                      <span className="font-bold">{car.seats} Chỗ</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-1xl font-bold text-gray-900 dark:text-white">
                      {formatCurrency(car.price)}
                    </span>
                    <a
                      href="#"
                      className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>

         {/* optional*/}
          <div className="mt-[50px]">
            <hr />
            <div className="flex justify-between my-5 mx-[200px] text-center">
                  <div>
                  <svg className="w-[82px] h-[82px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"/>
</svg>
                <p>Khuyễn mãi</p>
                  </div>
                  <div>
                  <svg className="w-[82px] h-[82px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="M9 8h6m-6 4h6m-6 4h6M6 3v18l2-2 2 2 2-2 2 2 2-2 2 2V3l-2 2-2-2-2 2-2-2-2 2-2-2Z"/>
</svg>
                  <p>Bảng giá</p>
                  </div>
                  <div>
                  <svg className="w-[82px] h-[82px] text-red-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
</svg>
                  <p>lái thử</p>
                  </div>
            </div>
            <hr />
          </div>
          {/* dịch vụ*/}
          <p className="font-bold text-[3rem] mb-[10px]">Dịch vụ</p>
          <div className="container mx-auto mt-[50px]">
      <div className="flex space-x-4 border-b border-gray-300">
        {data.slice(0, 5).map((imageTab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)} 
            className={`relative flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none ${
              activeTab === index ? "text-red-600" : ""
            }`}
          >
            <HiUserCircle className="w-5 h-5" />
            <span>{imageTab.brand}</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 ease-in-out ${
                activeTab === index ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4 mb-[40px]">
        {filteredData.map((car, index) => (
          <Card key={index} className="max-w-sm" imgAlt={car.name} width={100}>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex gap-4">
              <Link to={`/product/${car.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {car.name}
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-1xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(car.price)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
        {/* công nghệ */}
        <p className="font-bold text-[3rem] mb-[10px]">Công nghệ</p>
          <div className="container mx-auto mt-[50px]">
      <div className="flex space-x-4 border-b border-gray-300">
        {data.slice(0, 5).map((imageTab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)} 
            className={`relative flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none ${
              activeTab === index ? "text-red-600" : ""
            }`}
          >
            <HiUserCircle className="w-5 h-5" />
            <span>{imageTab.brand}</span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 ease-in-out ${
                activeTab === index ? "scale-x-100" : "scale-x-0"
              }`}
            ></span>
          </button>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4 mb-[40px]">
        {filteredData.map((car, index) => (
          <Card key={index} className="max-w-sm" imgAlt={car.name} width={100}>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="flex gap-4">
              <Link to={`/product/${car.id}`}>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {car.name}
                </h5>
              </Link>
              <div className="flex items-center justify-between">
                <span className="text-1xl font-bold text-gray-900 dark:text-white">
                  {formatCurrency(car.price)}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
        <div className="my-[50px]">
        <button> xem thêm</button>
        </div>
        {/* form liên hệ*/}
        
<form className="border">
    <div className="gap-6 mb-6 md:grid-cols-2 max-w-[1064px] mx-auto">
      <div className="text-center font-bold text-[18px] my-6">Trao đổi với chúng tôi</div>
      <div className="relative z-0 w-full mb-5 group">
      <p className="mb-[10px] font-bold">Thông tin quý khách cần biết*</p>
      <select name="" id="" className="w-full">
        <option value="">Bán hàng</option>
        <option value="">Dịch vụ</option>
        <option value="">Đại lý</option>
        <option value="">Tư vấn tài chính</option>
        <option value="">Góp ý website</option>
      </select>
  </div>
  <div className="relative z-0 w-full mb-5 group">
  <p className="mb-[10px] font-bold">Thông tin quý khách cần biết*</p>
      <input type="text"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
    <p className="mb-[10px] font-bold">Thông tin quý khách cần biết*</p>
        <input type="number"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    </div>
    <div className="relative z-0 w-full mb-5 group">
    <p className="mb-[10px] font-bold">Thông tin quý khách cần biết*</p>
        <input type="email"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    </div>
  </div>
  <div className="relative z-0 w-full mb-5 group">
  <p className="mb-[10px] font-bold">Thông tin quý khách cần biết*</p>
      <textarea type="text"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
  </div>
  <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tôi xác nhận rằng các đại lý Toyota có thể gửi cho tôi thêm thông tin về các sản phẩm hoặc dịch vụ của Toyota.</label>
    </div>
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tôi đã đọc và đồng ý với các <a href="#" className="text-blue-600 hover:underline dark:text-blue-500"> quy định và chính sách</a>của Toyota Việt Nam.</label>
    </div>
    </div> 
    <div className="flex justify-center mb-[24px]">
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-9 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-4">Gửi</button>
    </div>
</form>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DashBoard;
