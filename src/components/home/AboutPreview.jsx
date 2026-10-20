import { Link } from "react-router-dom";
import '../styles/homepage-images.css'
import '../../App.css'
function AboutPreview() {
  return (
    <section className="about-preview" aria-labelledby="about-title">
      <div className="about-preview-container">
        <div
          className="about-preview-image"
          role="img"
          aria-label="تصویر ابراهیم اکبری"
        >
        </div>

        <div className="about-preview-content">
          <p className="section-label">درباره ابراهیم</p>

          <h2 id="about-title">
            مراقبت از بدن،
            <br />
            با توجه به نیاز شما
          </h2>

          <p className="about-preview-description">
            من ابراهیم اکبری هستم. هدف من ارائه تجربه‌ای از ماساژ حرفه‌ای و
            متناسب با نیاز هر فرد است؛ در فضایی آرام و با توجه به راحتی و شرایط
            هر مراجعه‌کننده.
          </p>

          <Link to="/about" className="about-preview-button">
            بیشتر درباره من
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
