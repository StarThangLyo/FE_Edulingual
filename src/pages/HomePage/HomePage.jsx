import React from 'react';
import './HomePage.css';
import { EnvironmentOutlined, StarOutlined, TeamOutlined } from '@ant-design/icons';

const courses = [
  {
    name: "Thanh Hằng",
    experience: "6 Năm",
    course: "Khóa học IELTS 6.0",
    fee: "10 Triệu VND",
    rating: 4.9,
    followers: 4019,
    location: "Hà Nội",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
  },
  {
    name: "Trần Sang",
    experience: "6 Năm",
    course: "Khóa học Giao tiếp",
    fee: "4 Triệu VND",
    rating: 4.9,
    followers: 4019,
    location: "Hà Nội",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
  },
  {
    name: "Nguyễn Huệ",
    experience: "6 Năm",
    course: "Khóa học tiếng Hàn",
    fee: "3,5 Triệu VND",
    rating: 4.85,
    followers: 8019,
    location: "HCM",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
  },
  {
    name: "Nguyễn Huệ",
    experience: "6 Năm",
    course: "Khóa học tiếng Hàn",
    fee: "3,5 Triệu VND",
    rating: 4.85,
    followers: 8019,
    location: "HCM",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
  },
  {
    name: "Nguyễn Huệ",
    experience: "6 Năm",
    course: "Khóa học tiếng Hàn",
    fee: "3,5 Triệu VND",
    rating: 4.85,
    followers: 8019,
    location: "HCM",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
  },
  {
    name: "Nguyễn Huệ",
    experience: "6 Năm",
    course: "Khóa học tiếng Hàn",
    fee: "3,5 Triệu VND",
    rating: 4.85,
    followers: 8019,
    location: "HCM",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
  },
  {
    name: "Nguyễn Huệ",
    experience: "6 Năm",
    course: "Khóa học tiếng Hàn",
    fee: "3,5 Triệu VND",
    rating: 4.85,
    followers: 8019,
    location: "HCM",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
  },
  {
    name: "Nguyễn Huệ",
    experience: "6 Năm",
    course: "Khóa học tiếng Hàn",
    fee: "3,5 Triệu VND",
    rating: 4.85,
    followers: 8019,
    location: "HCM",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg"
  },
  // Add more course objects as needed
];

export const HomePage = () => {
  return (
    <section className="container">
      <div className="frame-container">
        <img src="./image/frame.png" alt="" className="frame" />
        <div className="frame-text">
          <h1 style={{margin: 0}}>Tìm kiếm người hướng dẫn</h1>
          <h1 style={{color: '#0056b3', margin: 0, marginBottom: '50px'}}>đồng hành cùng bạn</h1>
          <p style={{marginBottom: '50px'}}>Xây dựng một trang web cho cộng đồng, hoạt động học tập và khóa học của bạn.</p>
        
      <div className="search-bar">
        <select name="language" id="language">
          <option value="all">Ngôn ngữ</option>
          <option value="english">Tiếng Anh</option>
          <option value="chinese">Tiếng Trung</option>
          <option value="japanese">Tiếng Nhật</option>
          <option value="korea">Tiếng Hàn</option>
          <option value="france">Tiếng Pháp</option>
        </select>
        <select name="course" id="course">
          <option value="all">Tất cả khóa học</option>
          <option value="english">Giao tiếp</option>
          <option value="chinese">A1</option>
          <option value="japanese">A2</option>
          <option value="korea">B1</option>
          <option value="france">B2</option>
        </select>
        <select name="level" id="level">
          <option value="all">Tất cả địa điểm</option>
          <option value="q1">Quận 1</option>
          <option value="q2">Quận 2</option>
          <option value="q3">Quận 3</option>
          <option value="q4">Quận 4</option>
          <option value="q5">Quận 5</option>
          <option value="q6">Quận 6</option>
          <option value="q7">Quận 7</option>
          <option value="q8">Quận 8</option>
          <option value="thuduc">Thủ Đức</option>
        </select>
        <button type="button" style={{margin: 0}}>Tìm kiếm</button>
      </div>
      </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <h1>Những khóa học <span style={{color: '#27d971'}}> nổi bật </span></h1>
      </div>
      <div className="sort-bar">
        <select name="language" id="language" style={{marginRight: '20px'}}>
          <option value="all">Ngôn ngữ</option>
          <option value="english">Tiếng Anh</option>
          <option value="chinese">Tiếng Trung</option>
          <option value="japanese">Tiếng Nhật</option>
          <option value="korea">Tiếng Hàn</option>
          <option value="france">Tiếng Pháp</option>
        </select>
        <select name="price" id="price" style={{marginRight: '20px'}}>
          <option value="all">Tất cả giá</option>
          <option value="1tr-2tr">1tr-2tr</option>
          <option value="2tr-3tr">2tr-3tr</option>
          <option value="3tr-4tr">3tr-4tr</option>
          <option value="4tr-5tr">4tr-5tr</option>
          <option value="5tr-6tr">5tr-6tr</option>
        </select>
        <select name="distric" id="distric" style={{marginRight: '20px'}}>
          <option value="all">Tất cả địa điểm</option>
          <option value="q1">Quận 1</option>
          <option value="q2">Quận 2</option>
          <option value="q3">Quận 3</option>
          <option value="q4">Quận 4</option>
          <option value="q5">Quận 5</option>
          <option value="q6">Quận 6</option>
          <option value="q7">Quận 7</option>
          <option value="q8">Quận 8</option>
          <option value="thuduc">Thủ Đức</option>
        </select>
        <select name="sort" id="sort">
          <option value="rating">Đánh giá cao</option>
          <option value="popularity">Phổ biến</option>
          <option value="new">Mới nhất</option>
        </select>
      </div>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.img} alt={course.name} />
            <div className="course-info">
              <h2>{course.name}</h2>
              <p><strong>Kinh nghiệm:</strong> {course.experience}</p>
              <p><strong>Khóa học:</strong> {course.course}</p>
              <p><strong>Học phí:</strong> {course.fee}</p>
              <div className="additional-info">
                <div className="rating"><StarOutlined />{course.rating}</div>
                <div className="followers"><TeamOutlined />{course.followers} Theo dõi</div>
                <div className="location"><EnvironmentOutlined /> {course.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="load-more">Xem thêm...</button>
    </section>
  );
};
