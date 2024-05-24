import React from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/loginpage');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="header-container" style={{ display: "flex", justifyContent: 'space-between' }}>
      <div className="logo" 
           style={{ display: 'flex', flex: '1', alignItems: 'center', height: '30px', cursor: 'pointer' }} 
           onClick={handleLogoClick}>
        <img src='/image/logo.png' alt="Logo" style={{ marginRight: '10px', background: 'black', borderRadius: '5px' }} />
        Edu Lingual
      </div>
      <div className="menu" style={{ display: 'flex', flex: '1', marginTop: '35px' }}>
        <a href="#" style={{ marginRight: '20px', color: 'black' }}>Tìm kiếm</a>
        <a href="#" style={{ marginRight: '20px', color: 'black' }}>Blog</a>
        <select name="other" id="other" style={{ height: '25px', width: '60px', border: 'none', fontSize: '16px' }}>
          <option value="all" style={{ fontSize: '18px' }}>Khác</option>
          <option value="english">Tài liệu</option>
          <option value="chinese">Trở thành đối tác</option>
          <option value="chinese">Hỗ trợ</option>
        </select>
      </div>
      <div className="user-actions" style={{ display: 'flex', marginTop: '25px' }}>
        {/* <button style={{ height: '45px' }} href="#" className="signup" >Đăng ký</button> */}
        <button onClick={handleLoginClick} className="login" >Bắt đầu ngay</button>
      </div>
    </header>
  );
};

export default Header;
