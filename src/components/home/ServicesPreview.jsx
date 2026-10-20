import { Link } from "react-router-dom";

function ServicesPreview() {
  return (
    <section className="services-preview" aria-labelledby="services-title">
      <div className="services-preview-container">
        <div className="services-preview-header">
          <p className="section-label">خدمات ماساژ</p>

          <h2 id="services-title">ماساژ متناسب با نیاز شما</h2>

          <p>هر جلسه با توجه به نیاز و شرایط بدنی شما انتخاب و تنظیم می‌شود.</p>
        </div>

        <div className="services-preview-grid">
          <article className="service-card">
            <h3>ماساژ ریلکسی</h3>

            <div className="service-meta">
              <span>60 دقیقه</span>
              <span>$80</span>
            </div>

            <p>
              ماساژی آرام و ملایم برای رهایی از تنش‌های روزمره و ایجاد حس آرامش.
            </p>

            <Link to="/services">مشاهده جزئیات</Link>
          </article>

          <article className="service-card">
            <h3>ماساژ بافت عمیق</h3>

            <div className="service-meta">
              <span>60 دقیقه</span>
              <span>$95</span>
            </div>

            <p>
              تمرکز عمیق‌تر بر عضلات برای کمک به کاهش گرفتگی و تنش‌های عضلانی.
            </p>

            <Link to="/services">مشاهده جزئیات</Link>
          </article>

          <article className="service-card">
            <h3>ماساژ بادکش</h3>

            <div className="service-meta">
              <span>90 دقیقه</span>
              <span>$120</span>
            </div>

            <p>
استفاده از تکنیک بادکش در کنار ماساژ برای کمک به کاهش احساس گرفتگی و ایجاد حس سبکی در بدن.


            </p>

            <Link to="/services">مشاهده جزئیات</Link>
          </article>
        </div>

        <div className="services-preview-footer">
          <Link to="/services">مشاهده همه خدمات</Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
