import { Link } from "react-router-dom";
import "../components/styles/services.css";

const services = [
  {
    name: "ماساژ ریلکسی",
    description:
      "یک تجربه آرام و ملایم برای کاهش تنش‌های روزمره و ایجاد احساس آرامش عمیق‌تر در بدن.",
    suitableFor: "مناسب برای آرامش و کاهش استرس",
    duration: "60 دقیقه",
    price: "$80",
    type:"relaxing"
  },
  {
    name: "ماساژ بافت عمیق",
    description:
      "تکنیک‌های عمیق‌تر برای کار روی تنش‌های عضلانی و کمک به کاهش گرفتگی و فشار در بدن.",
    suitableFor: "مناسب برای تنش و گرفتگی عضلات",
    duration: "60 دقیقه",
    price: "$95",
    type:'deep-tissue'
  },
  {
    name: "ماساژ سنگ داغ",
    description:
      "ترکیبی آرامش‌بخش از گرمای سنگ و تکنیک‌های ماساژ برای تجربه‌ای عمیق‌تر و آرام‌تر.",
    suitableFor: "مناسب برای آرامش عمیق و رهایی از تنش",
    duration: "90 دقیقه",
    price: "$120",
    type:'hot-stone'
  },
  {
    name: "ماساژ بادکش",
    description:
      "استفاده از تکنیک بادکش در کنار ماساژ برای کمک به کاهش احساس گرفتگی و ایجاد حس سبکی در بدن.",
    suitableFor: "مناسب برای احساس سنگینی و تنش عضلانی",
    duration: "60 دقیقه",
    price: "$90",
    type:'cupping'
  },
  {
    name: "ماساژ حرکتی و کششی",
    description:
      "ترکیبی از حرکات و کشش‌های کنترل‌شده برای کمک به افزایش احساس آزادی حرکت و کاهش خشکی بدن.",
    suitableFor: "مناسب برای خشکی و محدودیت حرکتی",
    duration: "60 دقیقه",
    price: "$85",
    type:'flexion'
  },
];

function ServicesHero() {
  return (
    <section className="services-hero" aria-labelledby="services-title">
      <div className="services-hero-container">
        <div className="services-hero-content">
          <p className="services-hero-eyebrow">خدمات ماساژ</p>

          <h1 id="services-title">هر ماساژ، برای یک نیاز متفاوت</h1>

          <p className="services-hero-description">
            از آرامش و کاهش تنش‌های عضلانی تا کار عمیق‌تر روی بدن؛ در این صفحه
            با هر خدمت، کاربرد، مدت زمان و هزینه آن آشنا می‌شوید تا انتخاب مناسب
            برایتان ساده‌تر شود.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesIntro() {
  return (
    <section className="services-intro" aria-labelledby="services-intro-title">
      <div className="container">
        <p className="section-label">رویکرد من</p>

        <h2 id="services-intro-title">تجربه‌ای متناسب با نیاز بدن شما</h2>

        <p>
          هر یک از خدمات با هدف متفاوتی ارائه می‌شود. در ادامه می‌توانید
          ویژگی‌های هر ماساژ، مدت زمان و هزینه آن را بررسی کنید و بر اساس نیاز و
          ترجیح خود، خدمت موردنظرتان را انتخاب کنید.
        </p>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-header">
        <h3>{service.name}</h3>

        <p className="service-suitable">{service.suitableFor}</p>
      </div>

      <p className="service-description">{service.description}</p>

      <div className="service-meta">
        <span>{service.duration}</span>
        <span>{service.price}</span>
      </div>

      <Link to={`/reservation?service=${service.type}`} className="service-card-button">
        درخواست رزرو
      </Link>
    </article>
  );
}

function ServicesList() {
  return (
    <section className="services-list" aria-labelledby="services-list-title">
      <div className="container">
        <div className="services-list-header">
          <p className="section-label">خدمات</p>

          <h2 id="services-list-title">خدماتی برای آرامش و ریکاوری</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}

          <article className="service-card service-consultation-card">
            <div className="service-card-header">
              <h3>نمی‌دانید کدام ماساژ مناسب شماست؟</h3>

              <p className="service-suitable">
                برای انتخاب راحت‌تر، راهنمایی بگیرید
              </p>
            </div>

            <p className="service-description">
              اگر برای انتخاب خدمت مناسب مطمئن نیستید، می‌توانید برای دریافت
              راهنمایی و مشاوره با من در تماس باشید.
            </p>

            <div className="service-meta service-consultation-meta">
              <span>مشاوره</span>
              <span>انتخاب خدمت مناسب</span>
            </div>

            <Link to="/contact" className="service-card-button">
              دریافت مشاوره
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function WhyServices() {
  const benefits = [
    "توجه به نیازهای هر مراجعه‌کننده",
    "محیطی آرام و مناسب برای ریلکس شدن",
    "تجربه‌ای شخصی‌تر و متناسب با شرایط بدن",
    "تمرکز بر آرامش، کاهش تنش و ریکاوری",
  ];

  return (
    <section className="why-services" aria-labelledby="why-services-title">
      <div className="container">
        <div className="why-services-content">
          <p className="section-label">چرا این خدمات؟</p>

          <h2 id="why-services-title">تمرکز روی تجربه‌ای آرام و هدفمند</h2>

          <ul>
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServicesFinalCTA() {
  return (
    <section
      className="services-final-cta"
      aria-labelledby="services-cta-title"
    >
      <div className="container">
        <div className="services-final-cta-content">
          <h2 id="services-cta-title">خدمت موردنظر خود را انتخاب کرده‌اید؟</h2>

          <p>برای ثبت درخواست، می‌توانید از طریق فرم رزرو اقدام کنید.</p>

          <Link to="/reservation" className="services-final-cta-button">
            درخواست رزرو
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <main>
        <ServicesHero />
        <ServicesIntro />
        <ServicesList />
        <WhyServices />
        <ServicesFinalCTA />
      </main>
    </>
  );
}
