import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="mt-[50px] " />
      <div className="flex justify-center mt-6 ">
        <div className="mr-[50px]">
          <p className="font-bold">SẢN PHẨM</p>
          <p>Hatchback</p>
          <p>Sedan</p>
          <p>SUV</p>
          <p>Đa dụng</p>
          <p>Thương mại</p>
          <p>Bán tải</p>
          <p>Khách hàng dự án</p>
        </div>
        <div className="mr-[50px]">
          <p className="font-bold">CÔNG NGHỆ</p>
          <p>Hybrid</p>
          <p>TSS</p>
          <p>TNGA</p>
        </div>
        <div className="mr-[50px]">
          <p className="font-bold">DỊCH VỤ</p>
          <p>Dịch vụ bảo dưỡng</p>
          <p>Dịch vụ sau bán hàng</p>
          <p>Sản phẩm chính hãng</p>
          <p>Cơ sở bảo hành bảo dưỡng</p>
          <p>Hướng dẫn an toàn</p>
        </div>
        <div className="mr-[50px]">
          <p className="font-bold">TIN TỨC & KHUYẾN MÃI</p>
          <p>Sản phẩm</p>
          <p>Khuyến mãi</p>
          <p>Xã hội</p>
          <p>Thông tin bổ trợ</p>
          <p>Thông tin khác</p>
        </div>
        <div className="mr-[50px]">
          <p className="font-bold">VỀ TOYOTA VIỆT NAM</p>
          <p>Giới thiệu công ty</p>
          <p>Tuyển dụng</p>
          <p>Cộng đồng</p>
          <p>Nội địa hóa</p>
          <p>Tạp chí Toyota</p>
        </div>
      </div>
      <div className="text-[white] bg-[black]">
      <div className="flex justify-center mt-[50px]">
        <div className="mr-[50px]">
          <p>CÔNG TY Ô TÔ TOYOTA VIỆT NAM</p>
          <p>Số GCNĐKDN: 2500150335</p>
          <p>Cấp lần đầu: Ngày 26/03/2007</p>
          <p>Đăng ký thay đổi lần thứ 20: Ngày 14/08/2024</p>
          <p>Cơ quan cấp: Sở kế hoạch và đầu tư tỉnh Vĩnh Phúc</p>
          <p>
            Địa chỉ: Phường Phúc Thắng, Thành phố Phúc Yên, Tỉnh Vĩnh Phúc, Việt
            Nam
          </p>
        </div>
        <div className="mr-[50px]">
          <p>ĐƯỜNG DÂY NÓNG</p>
          <p>
            <span>icon</span> 1800 1524
          </p>
          <p>
            <span>icon</span> 1800 1524
          </p>
          <p>
            <span>icon</span> email
          </p>
          <p>Hotline Hỗ trợ tài chính: (84-28) 7309 0998</p>
          <p>Hotline Bảo hiểm Toyota: 1900 633 384</p>
          <img src="" alt="" />
        </div>
        <div className="mr-[50px]">
            <p>ĐĂNG KÝ NHẬN BẢN TIN</p>
            <p>Đừng bỏ lỡ những tin tức khuyến mãi của chúng tôi</p>
          <div>
            <input type="text" />
            <button>arrow</button>
          </div>
          <p>icon</p>
          <p>icon</p>
        </div>
      </div>
      <div className="flex justify-around my-[50px]">
        <p className="hover:underline">Sơ đồ trang | Chính sách và điều khoản | Chính sách bảo mật thông tin cá nhân</p>
        <p>© Bản quyền thuộc về Công ty ô tô Toyota Việt Nam</p>
      </div>
      </div>
    </>
  );
};

export default Footer;
