import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiMapPin, 
  FiAward, 
  FiCheckCircle,
  FiTarget,
  FiHeart,
  FiShield,
  FiTrendingUp
} from 'react-icons/fi';
import './About.css';

const About = () => {
  const stats = [
    { icon: FiUsers, number: '35,000+', label: 'Học viên thành công' },
    { icon: FiMapPin, number: '11', label: 'Chi nhánh' },
    { icon: FiAward, number: '7+', label: 'Năm kinh nghiệm' },
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Sứ mệnh',
      description: 'Cung cấp dịch vụ đào tạo lái xe chất lượng cao, an toàn và hiệu quả cho mọi học viên.'
    },
    {
      icon: FiHeart,
      title: 'Tầm nhìn',
      description: 'Trở thành trung tâm đào tạo lái xe hàng đầu tại Bình Thuận và các tỉnh lân cận.'
    },
    {
      icon: FiShield,
      title: 'Giá trị cốt lõi',
      description: 'Chất lượng, uy tín, trách nhiệm và sự tận tâm với từng học viên.'
    },
    {
      icon: FiTrendingUp,
      title: 'Mục tiêu',
      description: 'Mang lại trải nghiệm học tập tốt nhất và tỷ lệ đậu cao cho học viên.'
    }
  ];

  const timeline = [
    {
      year: '2017',
      title: 'Thành lập',
      description: 'HoclaixeAZ được thành lập với mục tiêu cung cấp dịch vụ đào tạo lái xe chất lượng.'
    },
    {
      year: '2018-2019',
      title: 'Mở rộng',
      description: 'Mở thêm các chi nhánh tại các huyện trong tỉnh Bình Thuận.'
    },
    {
      year: '2020-2021',
      title: 'Phát triển',
      description: 'Đạt được 20,000+ học viên thành công và mở rộng dịch vụ online.'
    },
    {
      year: '2022-2024',
      title: 'Thành công',
      description: 'Đạt 35,000+ học viên thành công và trở thành trung tâm hàng đầu tại Bình Thuận.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Về HoclaixeAZ</h1>
            <p>Hệ thống đào tạo lái xe hàng đầu Bình Thuận với 7+ năm kinh nghiệm</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <stat.icon className="stat-icon" />
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="company-info">
            <motion.div
              className="company-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Giới Thiệu Về HoclaixeAZ</h2>
              <p>
                <strong>HoclaixeAZ</strong> là hệ thống đào tạo lái xe hàng đầu tại tỉnh Bình Thuận, 
                trực thuộc Công Ty Cổ Phần Tư Vấn Giáo Dục và Truyền Thông AZVietNam.
              </p>
              <p>
                Với hơn 7 năm kinh nghiệm trong lĩnh vực đào tạo lái xe, chúng tôi tự tin có thể 
                mang lại trải nghiệm tốt nhất trong quá trình đăng ký học lái xe các hạng A1, A2, B1, B2, C, D, E.
              </p>
              <p>
                HoclaixeAZ cam kết hỗ trợ tận tâm từ lúc ghi danh cho đến khi sát hạch và nhận được 
                bằng lái mang về. Chúng tôi cam kết "ĐÚNG" trong mọi trường hợp.
              </p>
            </motion.div>
            <motion.div
              className="company-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="image-placeholder">
                <FiUsers />
                <p>Hình ảnh trung tâm</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Giá Trị Cốt Lõi</h2>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <value.icon className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Lịch Sử Phát Triển</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-content card">
                  <div className="timeline-year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tại sao chọn HoclaixeAZ?</h2>
          <div className="features-grid">
            <motion.div
              className="feature-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FiCheckCircle />
              <div>
                <h3>Hỗ trợ tận tâm</h3>
                <p>Từ lúc ghi danh đến khi nhận bằng lái</p>
              </div>
            </motion.div>
            <motion.div
              className="feature-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FiCheckCircle />
              <div>
                <h3>Chi phí trọn gói</h3>
                <p>Cam kết không phát sinh thêm chi phí</p>
              </div>
            </motion.div>
            <motion.div
              className="feature-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FiCheckCircle />
              <div>
                <h3>Ôn tập online</h3>
                <p>600 câu lý thuyết và 120 tình huống mô phỏng</p>
              </div>
            </motion.div>
            <motion.div
              className="feature-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FiCheckCircle />
              <div>
                <h3>Lịch học linh hoạt</h3>
                <p>Nhiều khóa học khai giảng liên tục</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 