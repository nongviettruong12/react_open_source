import React from "react";
import Header from "../../components/Header";
import { Card, Tabs } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState, useEffect,useMemo } from "react";
import axiosService from "../../api/instance";
import Footer from "../../components/Footer";
import { HiUserCircle } from "react-icons/hi";
const DashBoard = () => {
  const dataService = [
    {
      id: 1,
      titleTab: "Dịch vụ sau bán hàng",
      title: "Bảo dưỡng định kỳ",
      image:
        "https://www.toyota.com.vn//Resources/Images/F1E4F720C673632E422E9DCF14BB94BA.jpg",
      text: "Trong quá trình vận hành, nhiều chi tiết trên xe bị mài mòn hoặc hư hỏng theo thời gian sử dụng. Điều này xảy ra với bất kỳ cơ cấu máy móc",
    },
    {
      id: 2,
      titleTab: "Dịch vụ sau bán hàng",
      title: "Dịch vụ sửa chữa",
      image:
        "https://www.toyota.com.vn//Resources/Images/69923668F01418A77976B0F361179B36.jpg",
      text: "Toyota cung cấp dịch vụ sửa chữa đối với những hư hỏng do va chạm mà chiếc xe của bạn gặp phải trong quá trình sử dụng với kỹ thuật...",
    },
    {
      id: 3,
      titleTab: "Dịch vụ sau bán hàng",
      title: "Dịch vụ chăm sóc làm đẹp xe",
      image:
        "https://www.toyota.com.vn//Resources/Images/69923668F01418A77976B0F361179B36.jpg",
      text: "Chăm sóc và làm đẹp tập trung vào thẩm mỹ, làm đẹp nội ngoại thất xe, mang lại các trải nghiệm cao cấp và sang trọng cho người dùng...",
    },
    {
      id: 4,
      titleTab: "Dịch vụ gia tăng",
      title: "Chính sách bảo hành",
      image:
        "https://www.toyota.com.vn//Resources/Images/DE6B12D228FC7EC9F7F0E195F88427F5.png",
      text: "Thực hiện những sửa chữa cần thiết, sử dụng những phụ tùng mới hoặc những phụ tùng tái chế cho xe khách hàng nằm trong chế độ...",
    },
    {
      id: 5,
      titleTab: "Sản phẩm chính hãng",
      title: "Kiểm tra & Triệu hồi",
      image:
        "https://www.toyota.com.vn//Resources/Images/027DBBC5C0BA8E9DFC4E46EB6643F65A.png",
      text: "Yếu tố an toàn là vấn đề rất quan trọng đối với xe ô tô, vì thế việc triệu hồi xe ô tô cần phải tiến hành nhanh chóng kịp thời...",
    },
  ];
  const dataTechnologies = [
    {
      id: 1,
      type: "HYBIRD",
      image: "https://img.youtube.com/vi/uhAF8W6jml0/0.jpg",
    },
    {
      id: 2,
      type: "HYBIRD",
      image:
        "https://www.toyota.com.vn//Resources/Images/55379389F2F14403849CDA5F524C4397.jpg",
    },
    {
      id: 3,
      type: "TSS",
      image:
        "https://www.toyota.com.vn//Resources/Images/6BD178F0DA4CE840E2E606A3A984C487.jpg",
    },
    {
      id: 4,
      type: "TSS",
      image: "https://img.youtube.com/vi/SL3otKUZd64/0.jpg",
    },
    {
      id: 5,
      type: "TNGA",
      image: "https://img.youtube.com/vi/e-LbRfjz2Nc/0.jpg",
    },
    {
      id: 6,
      type: "TNGA",
      image: "https://img.youtube.com/vi/Jwq8It3gY0Q/0.jpg",
    },
  ];
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState(0); // Tab cho dịch vụ
  const normalizedDataTechnologies = dataTechnologies.map((tech) => ({
    ...tech,
    type: tech.type.toUpperCase(), // Chuyển tất cả các `type` thành chữ hoa
  }));
  const [activeTechnologyTab, setActiveTechnologyTab] = useState(
    normalizedDataTechnologies[0]?.type || ""
  )
  const filteredData = useMemo(()=>{
    return data.filter((car)=> car.brand === data[activeTab]?.brand)
  },[data, activeTab])

  const filteredTechnology = useMemo(() => {
    return normalizedDataTechnologies.filter(
      (tech) => tech.type === activeTechnologyTab
    );
  }, [normalizedDataTechnologies, activeTechnologyTab]);

  const filteredService = useMemo(() => {
    return dataService.filter(
      (service) => service.titleTab === dataService[activeServiceTab]?.titleTab
    );
  }, [dataService, activeServiceTab]);
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };
  useEffect(() => {
    if (normalizedDataTechnologies.length > 0 && !activeTechnologyTab) {
      setActiveTechnologyTab(normalizedDataTechnologies[0].type);
    }
  }, [normalizedDataTechnologies]);
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
                <Card
                  key={index}
                  className="max-w-sm"
                  imgAlt={car.name}
                  width={100}
                >
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
          {/* optional*/}
          <div className="mt-[50px]">
            <hr />
            <div className="flex justify-between my-5 mx-[200px] text-center">
              <div>
                <svg
                  className="w-[82px] h-[82px] text-red-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="M8.891 15.107 15.11 8.89m-5.183-.52h.01m3.089 7.254h.01M14.08 3.902a2.849 2.849 0 0 0 2.176.902 2.845 2.845 0 0 1 2.94 2.94 2.849 2.849 0 0 0 .901 2.176 2.847 2.847 0 0 1 0 4.16 2.848 2.848 0 0 0-.901 2.175 2.843 2.843 0 0 1-2.94 2.94 2.848 2.848 0 0 0-2.176.902 2.847 2.847 0 0 1-4.16 0 2.85 2.85 0 0 0-2.176-.902 2.845 2.845 0 0 1-2.94-2.94 2.848 2.848 0 0 0-.901-2.176 2.848 2.848 0 0 1 0-4.16 2.849 2.849 0 0 0 .901-2.176 2.845 2.845 0 0 1 2.941-2.94 2.849 2.849 0 0 0 2.176-.901 2.847 2.847 0 0 1 4.159 0Z"
                  />
                </svg>
                <p>Khuyễn mãi</p>
              </div>
              <div>
                <svg
                  className="w-[82px] h-[82px] text-red-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="M9 8h6m-6 4h6m-6 4h6M6 3v18l2-2 2 2 2-2 2 2 2-2 2 2V3l-2 2-2-2-2 2-2-2-2 2-2-2Z"
                  />
                </svg>
                <p>Bảng giá</p>
              </div>
              <div>
                <svg
                  className="w-[82px] h-[82px] text-red-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                  />
                </svg>
                <p>lái thử</p>
              </div>
            </div>
            <hr />
          </div>
          {/* dịch vụ*/}
          <p className="font-bold text-[3rem] mb-[10px]">Dịch vụ</p>
          <div className="container mx-auto mt-[50px]">
            {/* Tabs */}
            <div className="flex space-x-4 border-b border-gray-300">
              {[...new Set(dataService.map((service) => service.titleTab))].map(
                (tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveServiceTab(index)}
                    className={`relative flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none ${
                      activeServiceTab === index ? "text-red-600" : ""
                    }`}
                  >
                    <span>{tab}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 ease-in-out ${
                        activeServiceTab === index ? "scale-x-100" : "scale-x-0"
                      }`}
                    ></span>
                  </button>
                )
              )}
            </div>

            {/* Content */}
            <div className="mt-10 flex flex-wrap gap-4 mb-[40px]">
              {dataService
                .filter(
                  (service) =>
                    service.titleTab ===
                    [...new Set(dataService.map((item) => item.titleTab))][
                      activeServiceTab
                    ]
                )
                .map((service) => (
                  <Card
                    key={service.id}
                    className="max-w-sm"
                    imgAlt={service.title}
                    width={100}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="flex gap-4">
                      <Link to={`/product/${service.id}`}>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                          {service.title}
                          <p className="line-clamp-3 text-[15px] text-[gray]">
                            {service.text}
                          </p>
                        </h5>
                      </Link>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* công nghệ */}
          <p className="font-bold text-[3rem] mb-[10px]">Công nghệ</p>
          <div className="container mx-auto mt-[50px]">
            <div className="flex space-x-4 border-b border-gray-300">
              {/* Tạo các tab dựa trên các loại `type` duy nhất */}
              {[
                ...new Set(normalizedDataTechnologies.map((tech) => tech.type)),
              ].map((type, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTechnologyTab(type)} // Cập nhật để chọn `type` thay vì chỉ số
                  className={`relative flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none ${
                    activeTechnologyTab === type ? "text-red-600" : ""
                  }`}
                >
                  <span>{type}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-red-600 transition-transform duration-300 ease-in-out ${
                      activeTechnologyTab === type ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></span>
                </button>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4 mb-[40px] justify-center">
              {/* Lọc các phần tử theo `type` được chọn */}
              {normalizedDataTechnologies
                .filter((tech) => tech.type === activeTechnologyTab)
                .map((tech) => (
                  <img src={tech.image} width={500}/>
                ))}
            </div>
          </div>

          <div className="my-[50px]">
            <button> xem thêm</button>
          </div>
          {/* form liên hệ*/}

          <form className="border">
            <div className="gap-6 mb-6 md:grid-cols-2 max-w-[1064px] mx-auto">
              <div className="text-center font-bold text-[18px] my-6">
                Trao đổi với chúng tôi
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <p className="mb-[10px] font-bold">
                  Thông tin quý khách cần biết*
                </p>
                <select name="" id="" className="w-full">
                  <option value="">Bán hàng</option>
                  <option value="">Dịch vụ</option>
                  <option value="">Đại lý</option>
                  <option value="">Tư vấn tài chính</option>
                  <option value="">Góp ý website</option>
                </select>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <p className="mb-[10px] font-bold">
                  Thông tin quý khách cần biết*
                </p>
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <p className="mb-[10px] font-bold">
                    Thông tin quý khách cần biết*
                  </p>
                  <input
                    type="number"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <p className="mb-[10px] font-bold">
                    Thông tin quý khách cần biết*
                  </p>
                  <input
                    type="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <p className="mb-[10px] font-bold">
                  Thông tin quý khách cần biết*
                </p>
                <textarea
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tôi xác nhận rằng các đại lý Toyota có thể gửi cho tôi thêm
                  thông tin về các sản phẩm hoặc dịch vụ của Toyota.
                </label>
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tôi đã đọc và đồng ý với các{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {" "}
                    quy định và chính sách
                  </a>
                  của Toyota Việt Nam.
                </label>
              </div>
            </div>
            <div className="flex justify-center mb-[24px]">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-9 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 p-4"
              >
                Gửi
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DashBoard;
