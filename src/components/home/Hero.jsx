import { Link } from "react-router-dom";
import '../styles/homepage-images.css'
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-overlay">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-eyebrow">ابراهیم اکبری | ماساژ حرفه‌ای</p>

            <h1 id="hero-title" className="hero-title">
              بدنتان را آرام کنید.
              <br />
              تعادلتان را بازیابید.
            </h1>

            <p className="hero-description">
              تجربه‌ای از ماساژ حرفه‌ای و متناسب با نیاز شما؛ برای آرامش بیشتر،
              کاهش تنش‌های روزمره و ارتباط بهتر با بدن.
            </p>

            <div className="hero-actions">

              <Link to="/services" className="hero-secondary-link">
                مشاهده خدمات
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
