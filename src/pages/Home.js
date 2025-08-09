import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiMapPin, 
  FiAward, 
  FiBookOpen, 
  FiBox, 
  FiZap,
  FiPackage,
  FiCheckCircle,
  FiPhone,
  FiMail
} from 'react-icons/fi';
import './Home.css';

const Home = () => {
  const stats = [
    { icon: FiUsers, number: '36,000+', label: 'Học viên thành công' },
    { icon: FiMapPin, number: '11', label: 'Chi nhánh' },
    { icon: FiAward, number: '7+', label: 'Năm kinh nghiệm' },
  ];

  const courses = [
    {
      title: 'Hạng A1 - Xe Máy',
      duration: '3 ngày',
      price: 'Liên hệ',
      icon: FiZap,
      features: ['Lý thuyết cơ bản', 'Thực hành lái xe', 'Thi sát hạch']
    },
    {
      title: 'Hạng B2 - Xe Ô Tô',
      duration: '3.5 tháng',
      price: '13,500,000 VND',
      icon: FiBox,
      features: ['Lý thuyết 600 câu', 'Thực hành lái xe', 'Thi sát hạch']
    },
    {
      title: 'Hạng C - Xe Tải',
      duration: '6 tháng',
      price: '17,000,000 VND',
      icon: FiPackage,
      features: ['Lý thuyết nâng cao', 'Thực hành lái xe tải', 'Thi sát hạch']
    }
  ];

  const features = [
    {
      icon: FiCheckCircle,
      title: 'Hỗ trợ tận tâm',
      description: 'Từ lúc ghi danh đến khi nhận bằng lái'
    },
    {
      icon: FiCheckCircle,
      title: 'Chi phí trọn gói',
      description: 'Cam kết không phát sinh thêm chi phí'
    },
    {
      icon: FiCheckCircle,
      title: 'Ôn tập online',
      description: '600 câu lý thuyết và 120 tình huống mô phỏng'
    },
    {
      icon: FiCheckCircle,
      title: 'Lịch học linh hoạt',
      description: 'Nhiều khóa học khai giảng liên tục'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Học Lái Xe AZ</h1>
              <h2>Hệ thống đào tạo lái xe hàng đầu Bình Thuận</h2>
              <p>7 năm kinh nghiệm trong việc tư vấn hỗ trợ học viên đăng ký ghi danh học lái xe các hạng tại Bình Thuận.</p>
              <div className="hero-buttons">
                <Link to="/courses" className="btn btn-primary">
                  Xem Khóa Học
                </Link>
                <a href="tel:0974513516" className="btn btn-outline">
                  <FiPhone />
                  Gọi Ngay: 0974.513.516
                </a>
              </div>
            </motion.div>
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <stat.icon />
                    <div>
                      <h3>{stat.number}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Tại sao chọn HoclaixeAZ?</h2>
          <p className="section-subtitle">
            HoclaixeAZ tự tin có thể mang lại trải nghiệm tốt nhất trong quá trình đăng ký học lái xe
          </p>
          <div className="grid grid-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Khóa Học Nổi Bật</h2>
          <p className="section-subtitle">
            Chi phí trọn gói, cam kết không phát sinh bất cứ khoản chi phí nào
          </p>
          <div className="grid grid-3">
            {courses.map((course, index) => (
              <motion.div 
                key={index}
                className="course-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="course-icon">
                  <course.icon />
                </div>
                <h3>{course.title}</h3>
                <div className="course-details">
                  <div className="course-detail">
                    <span>Thời lượng:</span>
                    <strong>{course.duration}</strong>
                  </div>
                  <div className="course-detail">
                    <span>Chi phí:</span>
                    <strong>{course.price}</strong>
                  </div>
                </div>
                <ul className="course-features">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Link to="/courses" className="btn btn-primary">
                  Xem Chi Tiết
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Bắt đầu hành trình học lái xe ngay hôm nay!</h2>
            <p>Liên hệ với chúng tôi để được tư vấn miễn phí và đăng ký khóa học phù hợp</p>
            <div className="cta-buttons">
              <a href="tel:0974513516" className="btn btn-primary">
                <FiPhone />
                Gọi Ngay: 0974.513.516
              </a>
              <Link to="/contact" className="btn btn-outline">
                <FiMail />
                Liên Hệ Tư Vấn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 