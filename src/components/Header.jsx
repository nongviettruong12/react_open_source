import React from "react";
("use client");
import { Link } from "react-router-dom";
import { MegaMenu, Navbar, Dropdown } from "flowbite-react";
const Header = () => {
  const images_6 = [
    {
      src: "https://www.toyota.com.vn/media/l1letfrv/about-banner-1.png",
      text: "TUYỂN DỤNG",
    },
    {
      src: "https://www.toyota.com.vn/media/o03pxyuq/ve-toyota-header.jpg",
      text: "GIỚI THIỆU CÔNG TY",
    },
    {
      src: "https://www.toyota.com.vn/media/1fklg2cg/about-banner-3.png",
      text: "CỘNG ĐỒNG",
    },
    {
      src: "https://www.toyota.com.vn/media/b2ocljrs/about-banner-4.png",
      text: "NỘI ĐỊA HÓA",
    },
    {
      src: "https://www.toyota.com.vn/media/km3nbeez/about-banner-5.png",
      text: "TẠP CHÍ TOYOTA",
    },
  ];
  const images_5 = [
    {
      src: "https://www.toyota.com.vn/media/0pmb0ln3/hybrid_menu.jpg",
      text: "HYBIRD ",
    },
    { src: "https://www.toyota.com.vn/media/tn2lb3kp/tss.png", text: "TSS" },
    {
      src: "https://www.toyota.com.vn/media/cpkn03cs/tnga.png",
      text: 'TNGA',
    },
  ];
  const images_4 = [
    { src: 'https://www.toyota.com.vn/media/qmvnh40m/s%E1%BA%A3n-ph%E1%BA%A9m.png',text: 'SẢN PHẨM '},
    {src: 'https://www.toyota.com.vn/media/4ndfgl2u/khuyen-mai.jpg',text: 'KHUYẾN MÃI'},
    { src: 'https://www.toyota.com.vn/media/3pcd0ryk/header6.png',text:'XÃ HỘI'},
    {src: 'https://www.toyota.com.vn/media/cvqdehl4/th%C3%B4ng-tin-kh%C3%A1c.png',text:'THÔNG TIN KHÁC'}
  ]
  const images_3 = [
    { src: 'https://www.toyota.com.vn/media/tjjbyh0e/toyota-nav-electrification.jpg',text: 'ĐIỆN HÓA Ô TÔ'},
    {src: 'https://www.toyota.com.vn/media/pe0lle2g/toyota-nav-hybrid-electric.png',text: 'CÔNG NGHỆ HYBIRD'},
    {src: 'https://www.toyota.com.vn/media/fh0d21h0/toyota-nav-battery-electric.png', text: 'CÔNG NGHỆ THUẦN ĐIỆN'}
  ]
    
  return (
    <>
      <div className="w-[100%] top-0 fixed bg-white border-b-4 border-[red]">
        <div className="flex justify-between max-w-[1200px] mx-auto h-[90px]">
          <div>
            <img
              src="https://www.toyota.com.vn/media/d1pmr5qz/logo-toyota.jpg"
              alt=""
              className="p-[13px]"
            />
          </div>
          <div>
            <div className="flex justify-end gap-10 p-2 ">
              <hr />
              <Dropdown label="Showroom VR" inline className="hover">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
              <div className="flex gap-3">
                <Link className="hover:underline ">Toyota toàn cầu</Link>
                <Link className="hover:underline ">Tìm đại lý</Link>{" "}
              </div>
              <div className="flex mr-[50px]">
                <Link className="mr-[5px] hover:underline">
                  Language: <span>ENG</span> |
                </Link>
                <Link className="hover:underline">Location: Vn</Link>
              </div>
            </div>
            <hr />
            <MegaMenu className="p-0">
              <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between  md:space-x-8 mt-[5px]">
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <Navbar.Link className="mt-[10px] hover:cursor-pointer">
                    <MegaMenu.Dropdown toggle={<>Sản phẩm</>}>
                      <div className="grid grid-cols-4 gap-3">
                        {images_6.map((image, index) => (
                          <div
                            key={index}
                            className="relative w-[464px] h-[250px]"
                          >
                            <img
                              src={image.src}
                              alt={`Ảnh ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-2 left-2 text-white text-sm px-2 py-1 rounded font-bold text-[25px]">
                              {image.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </MegaMenu.Dropdown>
                  </Navbar.Link>
                  <Navbar.Link className="mt-[10px] hover:cursor-pointer">
                    <MegaMenu.Dropdown toggle={<>Công nghệ</>}>
                      <div className="grid grid-cols-4 gap-3">
                        {images_5.map((image, index) => (
                          <div
                            key={index}
                            className="relative w-[464px] h-[250px]"
                          >
                            <img
                              src={image.src}
                              alt={`Ảnh ${index + 1}`}
                              className="w-full h-full object-cover "
                            />
                            <span className="absolute bottom-2 left-2 text-white text-sm px-2 py-1 rounded font-[600] z-[1] uppercase text-[18px]">
                              {image.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </MegaMenu.Dropdown>
                  </Navbar.Link>
                  <Navbar.Link className="mt-[10px] hover:cursor-pointer">
                    <MegaMenu.Dropdown toggle={<>Dịch vụ</>}>
                      <div className="grid grid-cols-4 gap-3">
                        {images_6.map((image, index) => (
                          <div
                            key={index}
                            className="relative w-[464px] h-[250px]"
                          >
                            <img
                              src={image.src}
                              alt={`Ảnh ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-2 left-2 text-white text-sm px-2 py-1 rounded font-bold text-[25px]">
                              {image.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </MegaMenu.Dropdown>
                  </Navbar.Link>
                  <Navbar.Link className="mt-[10px] hover:cursor-pointer">
                    <MegaMenu.Dropdown toggle={<>Tin tức và khuyến mãi</>}>
                      <div className="grid grid-cols-4 gap-3">
                        {images_4.map((image, index) => (
                          <div
                            key={index}
                            className="relative w-[464px] h-[250px]"
                          >
                            <img
                              src={image.src}
                              alt={`Ảnh ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-2 left-2 text-white text-sm px-2 py-1 rounded font-bold text-[25px]">
                              {image.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </MegaMenu.Dropdown>
                  </Navbar.Link>
                  <Navbar.Link className="mt-[10px] hover:cursor-pointer">
                    <MegaMenu.Dropdown toggle={<>Điện hoá</>}>
                      <div className="grid grid-cols-4 gap-3">
                        {images_3.map((image, index) => (
                          <div
                            key={index}
                            className="relative w-[464px] h-[250px]"
                          >
                            <img
                              src={image.src}
                              alt={`Ảnh ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-2 left-2 text-white text-sm px-2 py-1 rounded font-bold text-[25px]">
                              {image.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </MegaMenu.Dropdown>
                  </Navbar.Link>
                  <Navbar.Link className="mt-[10px] hover:cursor-pointer">
                    <MegaMenu.Dropdown toggle={<>Về Toyota Việt Nam</>}>
                      <div className="grid grid-cols-4 gap-3">
                        {images_6.map((image, index) => (
                          <div
                            key={index}
                            className="relative w-[464px] h-[250px]"
                          >
                            <img
                              src={image.src}
                              alt={`Ảnh ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute bottom-2 left-2 text-white text-sm px-2 py-1 rounded font-bold text-[25px]">
                              {image.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </MegaMenu.Dropdown>
                  </Navbar.Link>
                </Navbar.Collapse>
              </div>
            </MegaMenu>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[94px]">
        <div className="text-center">
          <img
            src="https://www.toyota.com.vn//Resources/Images/251767956485382E3D8EF5D0E1D6D218.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Header;
