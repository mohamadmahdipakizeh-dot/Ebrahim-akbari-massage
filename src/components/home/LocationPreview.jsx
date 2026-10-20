import { Link } from "react-router-dom";
import '../styles/homepage-images.css'
function LocationPreview() {
  return (
    <section
      className="location-preview"
      aria-labelledby="location-preview-title"
    >
      <div className="location-preview-container">
        <div className="location-preview-content">
          <p className="section-label">موقعیت و دسترسی</p>

          <h2 id="location-preview-title">فضایی برای آرامش و مراقبت از بدن</h2>

          <p>
            برای اطلاع از موقعیت محل ارائه خدمات و هماهنگی مراجعه، از طریق صفحه
            تماس با ما اقدام کنید.
          </p>
          <p className="location-preview-address">
            گیلان، دستک
          </p>


          <Link to="/contact" className="location-preview-button">
            اطلاعات تماس و مسیر
          </Link>
        </div>

        <div
          className="location-preview-image"
          role="img"
          aria-label="فضای تصویری محل ارائه خدمات ماساژ"
        >
        </div>
      </div>
    </section>
  );
}

export default LocationPreview;
