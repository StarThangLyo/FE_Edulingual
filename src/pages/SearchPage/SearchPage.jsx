import React from 'react';
import styles from './SearchPage.module.css';
import {StarOutlined, TeamOutlined } from '@ant-design/icons';

const searchResults = [
  {
    name: "Thanh Hằng",
    experience: "6 Năm",
    course: "Khóa học IELTS 6.0",
    fee: "10 Triệu VND",
    rating: 4.9,
    followers: 4019,
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg",
  },
  {
    name: "Trần Sang",
    experience: "6 Năm",
    course: "Khóa học Giao tiếp",
    fee: "4 Triệu VND",
    rating: 4.9,
    followers: 4019,
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg",
  },
  {
    name: "Long Nguyễn",
    experience: "10 Năm",
    course: "Khóa học tiếng Hàn",
    fee: "3,5 Triệu VND",
    rating: 4.85,
    feedback: 8019,
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg",
  },
  // Add more course objects as needed
];

export const SearchPage = () => {
  return (
    <section className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <select name="language" id="language">
          <option value="all">Tất cả ngôn ngữ</option>
          <option value="english">Tiếng Anh</option>
          <option value="chinese">Tiếng Trung</option>
          <option value="japanese">Tiếng Nhật</option>
          <option value="korea">Tiếng Hàn</option>
          <option value="france">Tiếng Pháp</option>
        </select>
        <select name="price" id="price">
          <option value="all">Tất cả giá</option>
          <option value="1tr-2tr">1tr-2tr</option>
          <option value="2tr-3tr">2tr-3tr</option>
          <option value="3tr-4tr">3tr-4tr</option>
          <option value="4tr-5tr">4tr-5tr</option>
          <option value="5tr-6tr">5tr-6tr</option>
        </select>
        <select name="location" id="location">
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
        <button type="button" className={styles.searchButton}>Tìm kiếm</button>
      </div>
      <div className={styles.searchResults}>
        <p>1,133 Kết quả</p>
        <input type="text" placeholder="Tìm kiếm" className={styles.searchInput} />
        <select name="sort" id="sort">
          <option value="rating">Lọc theo: Đánh giá cao</option>
          <option value="popularity">Phổ biến</option>
          <option value="new">Mới nhất</option>
        </select>
      </div>
      <div className={styles.courseList}>
        {searchResults.map((course, index) => (
          <div className={styles.courseCard} key={index}>
            <img src={course.img} alt={course.name} />
            <div className={styles.courseInfo}>
              <div className={styles.courseIf}>
              <h2>{course.name}</h2>
              <p><strong>Kinh nghiệm:</strong> {course.experience}</p>
              <p><strong>Khóa học:</strong> {course.course}</p>
              <p><strong>Học phí:</strong> {course.fee}</p>
              <div className={styles.additionalInfo}>
                <div className={styles.rating}><StarOutlined /> {course.rating}</div>
                <div className={styles.feedback}><TeamOutlined /> {course.feedback}Đánh giá</div>
              </div>
              </div>
              <div className={styles.courseActions}>
                <button className={styles.enrollButton}>Đăng ký học</button>
                <button className={styles.detailsButton}>Học thử</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
