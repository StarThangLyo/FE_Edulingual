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
    feedback: "8019 đánh giá",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg",
  },
  {
    name: "Trần Sang",
    experience: "6 Năm",
    course: "Khóa học Giao tiếp",
    fee: "4 Triệu VND",
    rating: 4.9,
    feedback: "8019 đánh giá",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg",
  },
  {
    name: "Long Nguyễn",
    experience: "10 Năm",
    course: "Khóa học tiếng Hàn",
    fee: "3,5 Triệu VND",
    rating: 4.85,
    feedback: "8019 đánh giá",
    img: "https://lsvn.vn/storage/uploads/files/1014/6013c1d703084.jpg",
  },
  // Add more course objects as needed
];

export const SearchPage = () => {
  return (
    <section className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <img src="./image/frameSearch.png" alt="" className={styles.frame}/>
        <div className={styles.frameText}>
          <h1 style={{ margin: 0, color: 'black'}}>Tìm kiếm người hướng dẫn</h1>
          <h1 style={{ color: '#0056b3', margin: 0, marginBottom: '50px' }}>đồng hành cùng bạn</h1>
          <p style={{ marginBottom: '50px' }}>Tiếp cận 10,000+ giáo viên bản xứ xuất sắc từ các nơi khắp cả nước</p>
          </div>
          <div className={styles.search}>
            <select name="language" id="language" style={{paddingInline: '50px'}}>
              <option value="all">Ngôn ngữ</option>
              <option value="english">Tiếng Anh</option>
              <option value="chinese">Tiếng Trung</option>
              <option value="japanese">Tiếng Nhật</option>
              <option value="korea">Tiếng Hàn</option>
              <option value="france">Tiếng Pháp</option>
            </select>
            <select name="price" id="price" style={{paddingInline: '50px'}}>
          <option value="all">Tất cả giá</option>
          <option value="1tr-2tr">1tr-2tr</option>
          <option value="2tr-3tr">2tr-3tr</option>
          <option value="3tr-4tr">3tr-4tr</option>
          <option value="4tr-5tr">4tr-5tr</option>
          <option value="5tr-6tr">5tr-6tr</option>
        </select>
            <select name="level" id="level" style={{paddingInline: '50px'}}>
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
        <button type="button" className={styles.searchButton} >Tìm kiếm</button>
          </div>
      </div>
      <div className={styles.searchResults}>
        <div className={styles.result}>
        <p style={{fontWeight: 'bold'}}>1,133 Kết quả</p>
        </div>
        <div className={styles.searndnfilter}></div>
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
              <p style={{margin: 0}}><strong>Kinh nghiệm:</strong> {course.experience}</p>
              <p style={{margin: 0}}><strong>Khóa học:</strong> {course.course}</p>
              <p style={{margin: 0}}><strong>Học phí:</strong> {course.fee}</p>
              <div className={styles.additionalInfo}>
                <div className={styles.rating}><StarOutlined /> {course.rating}</div>
                <div className={styles.feedback}><TeamOutlined /> {course.feedback}</div>
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
