import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiMail, FiClock } from 'react-icons/fi';
import './Branches.css';

const Branches = () => {
  const branches = [
    {
      name: 'Chi Nhánh VP Phan Thiết',
      address: '173 Đường 19/4, P Xuận An, TP Phan Thiết, Bình Thuận (cũ)',
      newAddress: '173 Đường 19/4, P Hàm Thắng, Tỉnh Lâm Đồng (mới)',
      hotline: '0974 513 516 - 0369 1011 39',
      isMain: true
    },
    {
      name: 'Chi Nhánh VP Lagi',
      address: '01 Lý Thường Kiệt, P Tân An, Thị Xã Lagi (cũ)',
      newAddress: '01 Lý Thường Kiệt, P Lagi, Tỉnh Lâm Đồng (Mới)',
      hotline: '0974 513 516 - 034 872 1616'
    },
    {
      name: 'Chi Nhánh VP Chợ Lầu, Bắc Bình',
      address: '216 Nguyễn Tất Thành, QL1A, TT Chợ Lầu, H Bắc Bình',
      hotline: '0974 513 516 - 086 722 1616'
    },
    {
      name: 'Chi Nhánh VP Đức Linh',
      address: '237 ĐT766, thôn 4, xã Đức Hạnh (Ngã Ba Cây Sung, Cafe Thạch Thảo), Huyện Đức Linh',
      hotline: '0974 513 516 - 0867 39 1616'
    },
    {
      name: 'Chi Nhánh VP Hàm Tân',
      address: 'Số 11 Đường Lê Duẩn, Thị Trấn Tân Minh, Hàm Tân',
      hotline: '0974 513 516 - 0866 513 518'
    },
    {
      name: 'Chi Nhánh VP Tuy Phong, Liên Hương',
      address: 'Đường Nguyễn Thị Minh Khai (Đối diện Hồ Bơi Tuy Phong) TT Liên Hương, Huyện Tuy Phong',
      hotline: '0974 513 516 - 0865 513 517'
    },
    {
      name: 'Chi Nhánh VP Hàm Thuận Nam',
      address: 'KM30, số 501 Thị Trấn Thuận Nam (Lò Bún Phương Lan) ở giữa điện máy xanh và thế giới di động.',
      hotline: '0974 513 516 - 08 6666 2741'
    },
    {
      name: 'Chi Nhánh VP Tánh Linh',
      address: '459 Thôn 3, Xã Gia An (Gần Chợ Gia An, đối diện Cây Xăng Dầu Thuận Lợi).',
      hotline: '0974 513 516 - 08 6666 4940'
    },
    {
      name: 'Chi Nhánh VP Vĩnh Tân, Tuy Phong',
      address: 'Số 20 QL1A, Vĩnh Phúc (đối diện nhiệt điện Vĩnh Tân 4)',
      hotline: '0974 513 516 - 0376 316 516'
    },
    {
      name: 'Chi Nhánh VP Xuân Lộc, Đồng Nai',
      address: 'Số 2570 QL1A (ngay ngã ba Ông Đồn)',
      hotline: '0974 513 516 - 0368 016 5161'
    }
  ];

  const contactInfo = {
    mainPhone: '0974.513.516',
    secondaryPhone: '0962.034.167',
    email: 'info@hoclaixeaz.vn',
    workingHours: 'Thứ 2 - Chủ nhật: 7:00 - 21:00'
  };

  return (
    <div className="branches-page">
      {/* Hero Section */}
      <section className="branches-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Chi Nhánh HoclaixeAZ</h1>
            <p>11 chi nhánh trên toàn tỉnh Bình Thuận, hỗ trợ ghi danh mọi lúc mọi nơi</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="contact-info-card">
            <h2>Thông Tin Liên Hệ</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <FiPhone />
                <div>
                  <h3>Điện thoại chính</h3>
                  <p>{contactInfo.mainPhone}</p>
                </div>
              </div>
              <div className="contact-item">
                <FiPhone />
                <div>
                  <h3>Điện thoại phụ</h3>
                  <p>{contactInfo.secondaryPhone}</p>
                </div>
              </div>
              <div className="contact-item">
                <FiMail />
                <div>
                  <h3>Email</h3>
                  <p>{contactInfo.email}</p>
                </div>
              </div>
              <div className="contact-item">
                <FiClock />
                <div>
                  <h3>Giờ làm việc</h3>
                  <p>{contactInfo.workingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="section-title">Danh Sách Chi Nhánh</h2>
          <div className="branches-grid">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className={`branch-card card ${branch.isMain ? 'main-branch' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {branch.isMain && (
                  <div className="main-badge">Trụ sở chính</div>
                )}
                <h3>{branch.name}</h3>
                
                <div className="branch-address">
                  <FiMapPin />
                  <div>
                    <p><strong>Địa chỉ cũ:</strong></p>
                    <p>{branch.address}</p>
                    {branch.newAddress && (
                      <>
                        <p><strong>Địa chỉ mới:</strong></p>
                        <p>{branch.newAddress}</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="branch-contact">
                  <FiPhone />
                  <div>
                    <p><strong>Hotline:</strong></p>
                    <p>{branch.hotline}</p>
                  </div>
                </div>

                <div className="branch-actions">
                  <a href={`tel:${branch.hotline.split(' - ')[0]}`} className="btn btn-primary">
                    Gọi Ngay
                  </a>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="btn btn-outline">
                    Xem Bản Đồ
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Bản Đồ Chi Nhánh</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.484123456789!2d108.12345678901234!3d10.98765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU5JzE1LjYiTiAxMDjCsDA3JzM0LjQiRQ!5e0!3m2!1svi!2s!4v1234567890123"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HoclaixeAZ Branches Map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Liên hệ ngay để được tư vấn miễn phí!</h2>
            <p>Chọn chi nhánh gần nhất hoặc gọi điện để được hỗ trợ tận tâm</p>
            <div className="cta-buttons">
              <a href="tel:0974513516" className="btn btn-primary">
                <FiPhone />
                Gọi Ngay: 0974.513.516
              </a>
              <a href="mailto:info@hoclaixeaz.vn" className="btn btn-outline">
                <FiMail />
                Gửi Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches; 