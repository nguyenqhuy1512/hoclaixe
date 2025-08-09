import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HoclaixeAZ</h3>
            <p>Hệ thống đào tạo lái xe hàng đầu Bình Thuận với 7+ năm kinh nghiệm và 35,000+ học viên thành công.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Khóa Học</h4>
            <ul>
              <li><Link to="/courses">Hạng A1 - Xe Máy</Link></li>
              <li><Link to="/courses">Hạng A2 - Xe Mô Tô</Link></li>
              <li><Link to="/courses">Hạng B1 - Xe Ô Tô</Link></li>
              <li><Link to="/courses">Hạng B2 - Xe Ô Tô</Link></li>
              <li><Link to="/courses">Hạng C - Xe Tải</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Dịch Vụ</h4>
            <ul>
              <li><Link to="/branches">Chi Nhánh</Link></li>
              <li><Link to="/about">Về Chúng Tôi</Link></li>
              <li><Link to="/contact">Liên Hệ</Link></li>
              <li><a href="#">Ôn Tập Online</a></li>
              <li><a href="#">Thi Thử</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Liên Hệ</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FiPhone />
                <span>0974.513.516</span>
              </div>
              <div className="contact-item">
                <FiMail />
                <span>info@hoclaixeaz.vn</span>
              </div>
              <div className="contact-item">
                <FiMapPin />
                <span>173 Đường 19/4, P. Hàm Thắng, Tỉnh Lâm Đồng</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 HoclaixeAZ. Tất cả quyền được bảo lưu.</p>
            <div className="footer-links">
              <a href="#">Chính sách bảo mật</a>
              <a href="#">Điều khoản sử dụng</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 