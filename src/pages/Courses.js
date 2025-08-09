import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiZap, 
  FiBox, 
  FiPackage, 
  FiClock, 
  FiDollarSign, 
  FiCheckCircle,
  FiUsers,
  FiBookOpen,
  FiAward
} from 'react-icons/fi';
import './Courses.css';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const basicCourses = [
    {
      title: 'Hạng A1 - Xe Máy',
      icon: FiZap,
      duration: '3 ngày',
      price: 'Liên hệ',
      features: [
        'Lý thuyết cơ bản về giao thông',
        'Thực hành lái xe máy',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe A1'
      ],
      description: 'Khóa học lái xe máy cơ bản, phù hợp cho người mới bắt đầu.'
    },
    {
      title: 'Hạng A2 - Xe Mô Tô',
      icon: FiZap,
      duration: '3 ngày',
      price: '3,600,000 VND',
      features: [
        'Lý thuyết nâng cao',
        'Thực hành lái xe mô tô',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe A2'
      ],
      description: 'Khóa học lái xe mô tô phân khối lớn.'
    },
    {
      title: 'Hạng B1.1 - Xe Ô Tô Tự Động',
      icon: FiBox,
      duration: '3.5 tháng',
      price: '13,500,000 VND',
      features: [
        'Lý thuyết 600 câu hỏi',
        'Thực hành lái xe ô tô tự động',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe B1.1'
      ],
      description: 'Khóa học lái xe ô tô số tự động, phù hợp cho người mới học.'
    },
    {
      title: 'Hạng B2 - Xe Ô Tô Số Sàn',
      icon: FiBox,
      duration: '3.5 tháng',
      price: '13,500,000 VND',
      features: [
        'Lý thuyết 600 câu hỏi',
        'Thực hành lái xe ô tô số sàn',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe B2'
      ],
      description: 'Khóa học lái xe ô tô số sàn, phổ biến nhất hiện nay.'
    },
    {
      title: 'Hạng C - Xe Tải',
      icon: FiPackage,
      duration: '6 tháng',
      price: '17,000,000 VND',
      features: [
        'Lý thuyết nâng cao',
        'Thực hành lái xe tải',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe C'
      ],
      description: 'Khóa học lái xe tải, xe khách từ 9 chỗ ngồi trở lên.'
    }
  ];

  const upgradeCourses = [
    {
      title: 'Nâng Hạng B2 lên C',
      icon: FiPackage,
      duration: '2.5 tháng',
      price: '10,500,000 VND',
      requirements: 'Đã có bằng B2 trên 3 năm',
      features: [
        'Lý thuyết nâng cao',
        'Thực hành lái xe tải',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe C'
      ]
    },
    {
      title: 'Nâng Hạng B2 lên D',
      icon: FiPackage,
      duration: '2.5 tháng',
      price: '13,000,000 VND',
      requirements: 'Đã có bằng B2 trên 3 năm',
      features: [
        'Lý thuyết nâng cao',
        'Thực hành lái xe khách',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe D'
      ]
    },
    {
      title: 'Nâng Hạng C lên D',
      icon: FiPackage,
      duration: '2.5 tháng',
      price: '12,000,000 VND',
      requirements: 'Đã có bằng C trên 3 năm',
      features: [
        'Lý thuyết nâng cao',
        'Thực hành lái xe khách',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe D'
      ]
    },
    {
      title: 'Nâng Hạng C lên E',
      icon: FiPackage,
      duration: 'Thông báo sau',
      price: '15,000,000 VND',
      requirements: 'Đã có bằng C trên 3 năm',
      features: [
        'Lý thuyết nâng cao',
        'Thực hành lái xe container',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe E'
      ]
    },
    {
      title: 'Nâng Hạng D lên E',
      icon: FiPackage,
      duration: 'Thông báo sau',
      price: '15,000,000 VND',
      requirements: 'Đã có bằng D trên 3 năm',
      features: [
        'Lý thuyết nâng cao',
        'Thực hành lái xe container',
        'Thi sát hạch lý thuyết',
        'Thi sát hạch thực hành',
        'Cấp bằng lái xe E'
      ]
    }
  ];

  const benefits = [
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
    },
    {
      icon: FiCheckCircle,
      title: 'Giáo viên kinh nghiệm',
      description: 'Đội ngũ giáo viên có nhiều năm kinh nghiệm'
    },
    {
      icon: FiCheckCircle,
      title: 'Thiết bị hiện đại',
      description: 'Xe tập lái hiện đại, an toàn'
    }
  ];

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="courses-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Khóa Học Lái Xe</h1>
            <p>Chi phí trọn gói, cam kết không phát sinh bất cứ khoản chi phí nào</p>
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="section">
        <div className="container">
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === 'basic' ? 'active' : ''}`}
              onClick={() => setActiveTab('basic')}
            >
              Khóa Học Cơ Bản
            </button>
            <button
              className={`tab-btn ${activeTab === 'upgrade' ? 'active' : ''}`}
              onClick={() => setActiveTab('upgrade')}
            >
              Nâng Hạng Bằng Lái
            </button>
          </div>

          <div className="courses-grid">
            {activeTab === 'basic' ? (
              basicCourses.map((course, index) => (
                <motion.div
                  key={index}
                  className="course-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="course-header">
                    <div className="course-icon">
                      <course.icon />
                    </div>
                    <h3>{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                  </div>
                  
                  <div className="course-details">
                    <div className="course-detail">
                      <FiClock />
                      <span>Thời lượng: <strong>{course.duration}</strong></span>
                    </div>
                    <div className="course-detail">
                      <FiDollarSign />
                      <span>Chi phí: <strong>{course.price}</strong></span>
                    </div>
                  </div>

                  <ul className="course-features">
                    {course.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="tel:0974513516" className="btn btn-primary">
                    Đăng Ký Ngay
                  </a>
                </motion.div>
              ))
            ) : (
              upgradeCourses.map((course, index) => (
                <motion.div
                  key={index}
                  className="course-card upgrade"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="course-header">
                    <div className="course-icon">
                      <course.icon />
                    </div>
                    <h3>{course.title}</h3>
                    <div className="requirements">
                      <strong>Yêu cầu:</strong> {course.requirements}
                    </div>
                  </div>
                  
                  <div className="course-details">
                    <div className="course-detail">
                      <FiClock />
                      <span>Thời lượng: <strong>{course.duration}</strong></span>
                    </div>
                    <div className="course-detail">
                      <FiDollarSign />
                      <span>Chi phí: <strong>{course.price}</strong></span>
                    </div>
                  </div>

                  <ul className="course-features">
                    {course.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="tel:0974513516" className="btn btn-primary">
                    Đăng Ký Ngay
                  </a>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Tại sao chọn HoclaixeAZ?</h2>
          <div className="grid grid-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <benefit.icon className="benefit-icon" />
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses; 