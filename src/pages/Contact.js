import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiMessageSquare,
  FiUser,
  FiSend
} from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Điện thoại',
      value: '0974.513.516',
      link: 'tel:0974513516'
    },
    {
      icon: FiPhone,
      title: 'Điện thoại phụ',
      value: '0962.034.167',
      link: 'tel:0962034167'
    },
    {
      icon: FiMail,
      title: 'Email',
      value: 'info@hoclaixeaz.vn',
      link: 'mailto:info@hoclaixeaz.vn'
    },
    {
      icon: FiMapPin,
      title: 'Địa chỉ',
      value: '173 Đường 19/4, P. Hàm Thắng, Tỉnh Lâm Đồng',
      link: 'https://maps.google.com/?q=173+Duong+19/4+Ham+Thang+Lam+Dong'
    },
    {
      icon: FiClock,
      title: 'Giờ làm việc',
      value: 'Thứ 2 - Chủ nhật: 7:00 - 21:00',
      link: null
    }
  ];

  const courses = [
    'Hạng A1 - Xe Máy',
    'Hạng A2 - Xe Mô Tô',
    'Hạng B1 - Xe Ô Tô Tự Động',
    'Hạng B2 - Xe Ô Tô Số Sàn',
    'Hạng C - Xe Tải',
    'Nâng hạng B2 lên C',
    'Nâng hạng B2 lên D',
    'Nâng hạng C lên D',
    'Nâng hạng C lên E',
    'Nâng hạng D lên E'
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Liên Hệ</h1>
            <p>Liên hệ với chúng tôi để được tư vấn miễn phí và đăng ký khóa học phù hợp</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <info.icon className="contact-icon" />
                <h3>{info.title}</h3>
                {info.link ? (
                  <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                    {info.value}
                  </a>
                ) : (
                  <p>{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="contact-form-container">
            <motion.div
              className="contact-form-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Gửi Tin Nhắn Cho Chúng Tôi</h2>
              <p>
                Hãy điền thông tin bên dưới và chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
                Tư vấn miễn phí, không mất phí!
              </p>
              <div className="form-benefits">
                <div className="benefit-item">
                  <FiMessageSquare />
                  <span>Tư vấn miễn phí</span>
                </div>
                <div className="benefit-item">
                  <FiUser />
                  <span>Hỗ trợ tận tâm</span>
                </div>
                <div className="benefit-item">
                  <FiSend />
                  <span>Phản hồi nhanh chóng</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              className="contact-form card"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Số điện thoại *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Nhập số điện thoại"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Nhập email (không bắt buộc)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Khóa học quan tâm</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                >
                  <option value="">Chọn khóa học</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Nội dung tin nhắn</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi Tin Nhắn'}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Vị Trí Trung Tâm</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.484123456789!2d108.12345678901234!3d10.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzE1LjYiTiAxMDjCsDA3JzM0LjQiRQ!5e0!3m2!1svi!2s!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HoclaixeAZ Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Gọi ngay để được tư vấn miễn phí!</h2>
            <p>Đội ngũ tư vấn viên chuyên nghiệp sẵn sàng hỗ trợ bạn 24/7</p>
            <div className="cta-buttons">
              <a href="tel:0974513516" className="btn btn-primary">
                <FiPhone />
                Gọi Ngay: 0974.513.516
              </a>
              <a href="https://zalo.me/0974513516" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FiMessageSquare />
                Chat Zalo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 