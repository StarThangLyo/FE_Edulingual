import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header className="header-container" style={{ display: "flex", justifyContent: 'space-between' }}>
      <div className="logo" style={{ display: 'flex', flex: '1', alignItems: 'center', height: '30px' }}>
        <img src='/image/logo.png' alt="Logo" style={{ marginRight: '10px', background: 'black', borderRadius: '5px'}} />
        Edu Lingual
      </div>
      <div className="menu" style={{ display: 'flex', flex: '1', marginTop: '35px' }}>
        <a href="#" style={{marginRight: '20px'}}>Tìm kiếm</a>
        <a href="#" style={{marginRight: '20px'}}>Blog</a>
        <select name="other" id="other" style={{height: '25px', width: '60px', border: 'none', fontSize: '16px'}}>
          <option value="all" style={{ fontSize: '18px' }}>Khác</option>
          <option value="english">Tài liệu</option>
          <option value="chinese">Trở thành đối tác</option>
          <option value="chinese">Hỗ trợ</option>
        </select>
      </div>
      <div className="user-actions" style={{ display: 'flex', marginTop: '25px' }}>
        <button style={{height: '45px'}} href="#" className="signup" >Đăng ký</button>
        <button href="#" className="login" >Bắt đầu ngay</button>
      </div>
    </header>
  );
};

export default Header;
