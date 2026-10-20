import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta-container">
        <p className="section-label">زمان مراقبت از خودتان</p>

        <h2 id="final-cta-title">قدمی برای آرامش و تعادل بیشتر بردارید.</h2>

        <p className="final-cta-description">
          خدمت موردنظر خود را انتخاب کنید و درخواست رزروتان را برای هماهنگی زمان
          مراجعه ثبت کنید.
        </p>

        <Link to="/reservation" className="final-cta-button">
          درخواست رزرو
        </Link>
      </div>
    </section>
  );
}

export default FinalCTA;
