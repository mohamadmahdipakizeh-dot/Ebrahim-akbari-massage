import { Link } from "react-router-dom";
import "../components/styles/about.css";

const approachItems = [
  {
    title: "شنیدن بدن",
    description:
      "پیش از هر چیز، توجه به احساس، نیاز و شرایط بدن؛ چون هر بدن تجربه و واکنش متفاوتی دارد.",
  },
  {
    title: "توجه به جزئیات",
    description:
      "شدت، ریتم و نوع تکنیک‌ها باید با شرایط فرد هماهنگ باشد، نه اینکه برای همه یکسان اجرا شود.",
  },
  {
    title: "ایجاد آرامش",
    description:
      "محیط و فضای جلسه بخشی از تجربه ماساژ است؛ جایی برای مکث، آرام شدن و فاصله گرفتن از فشار روزمره.",
  },
  {
    title: "تجربه‌ای متناسب با شما",
    description:
      "هدف این است که هر جلسه متناسب با نیاز و ترجیح شما شکل بگیرد و تجربه‌ای شخصی‌تر ایجاد کند.",
  },
];

const skills = [
  "ماساژ ریلکسی",
  "ماساژ بافت عمیق",
  "ماساژ سنگ داغ",
  "ماساژ بادکش",
  "ماساژ حرکتی و کششی",
  "آشنایی با اصول آناتومی و عضلات بدن",
  "تکنیک‌های کاهش تنش و رهایی عضلانی",
  "تکنیک‌های کشش و افزایش دامنه حرکتی",
];

const certificates = [
  "گواهی دوره تخصصی ماساژ ریلکسی",
  "گواهی دوره ماساژ بافت عمیق",
  "گواهی آناتومی کاربردی برای ماساژتراپیست‌ها",
  "گواهی دوره ماساژ بادکش",
  "دوره تکمیلی ماساژ حرکتی و کششی",
];

const reasons = [
  {
    title: "رویکرد شخصی‌سازی‌شده",
    description: "هر جلسه بر اساس نیاز و شرایط بدن مراجعه‌کننده شکل می‌گیرد.",
  },
  {
    title: "تسلط بر تکنیک‌های متنوع",
    description:
      "استفاده از تکنیک‌های مختلف برای ایجاد تجربه‌ای متناسب با هدف هر جلسه.",
  },
  {
    title: "تمرکز بر کیفیت و آرامش",
    description:
      "توجه هم‌زمان به کیفیت اجرای ماساژ، راحتی و آرامش مراجعه‌کننده.",
  },
  {
    title: "محیطی آرام و حرفه‌ای",
    description:
      "ایجاد فضایی مناسب برای دور شدن از فشار روزمره و تمرکز بر تجربه ماساژ.",
  },
];

function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-title">
      <div className="container about-hero-container">
        <div className="about-hero-content">
          <p className="section-label about-hero-label">درباره من</p>
          <h1 id="about-title">ابراهیم اکبری؛ با نگاهی متفاوت به ماساژ</h1>
          <p>
            ماساژ برای من، نقطه‌ای میان لمس، آرامش و شناخت بدن است؛ جایی که هر
            جلسه می‌تواند تجربه‌ای متفاوت باشد.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutIntroduction() {
  return (
    <section
      className="about-introduction"
      aria-labelledby="about-introduction-title"
    >
      <div className="container about-introduction-grid">
        <div
          className="about-image"
          role="img"
          aria-label="تصویر ابراهیم اکبری"
        ></div>
        <div className="about-introduction-content">
          <p className="section-label">آشنایی بیشتر با من</p>
          <h2 id="about-introduction-title">ماساژ؛ فرصتی برای توجه به خود</h2>
          <p>
            من ابراهیم اکبری هستم و ماساژ را برای من می‌توان فراتر از یک خدمت
            دانست؛ فرصتی برای توجه بیشتر به بدن و زمانی برای فاصله گرفتن از فشار
            و شلوغی روزمره.
          </p>
          <p>
            در هر جلسه تلاش می‌کنم با توجه به شرایط و نیازهای هر فرد، تجربه‌ای
            آرام و متناسب ایجاد کنم. برای من، توجه به احساس مراجعه‌کننده و ایجاد
            فضایی که در آن بتواند با آرامش این زمان را به خودش اختصاص دهد، بخش
            مهمی از این تجربه است.
          </p>
          <p>
            هدفم این است که هر جلسه فقط به پایان یک ماساژ ختم نشود؛ بلکه فرصتی
            باشد برای آرامش، رهایی از تنش و احساس بهتر نسبت به بدن.
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutApproach() {
  return (
    <section className="about-approach" aria-labelledby="about-approach-title">
      <div className="container">
        <div className="about-section-heading">
          <p className="section-label">رویکرد من</p>
          <h2 id="about-approach-title">هر بدن، نیاز خودش را دارد</h2>
          <p>
            من باور دارم ماساژ زمانی معنا پیدا می‌کند که با بدن و نیازهای هر فرد
            هماهنگ باشد. به همین دلیل، رویکرد من فقط اجرای یک تکنیک ثابت نیست؛
            بلکه توجه به شرایط بدن، میزان تنش و هدفی است که هر فرد از یک جلسه
            ماساژ دارد.
          </p>
        </div>

        <div className="about-approach-grid">
          {approachItems.map((item) => (
            <article className="about-info-card" key={item.title}>
              <span className="about-card-number" aria-hidden="true">
                {String(approachItems.indexOf(item) + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutExperience() {
  return (
    <section
      className="about-experience"
      aria-labelledby="about-experience-title"
    >
      <div className="container">
        <div className="about-section-heading about-experience-heading">
          <p className="section-label">تجربه و مهارت‌ها</p>
          <h2 id="about-experience-title">تجربه و مهارت‌های من</h2>
          <p>
            در مسیر فعالیت حرفه‌ای در حوزه ماساژ، تمرکز من بر شناخت بدن، اجرای
            صحیح تکنیک‌ها و ایجاد تجربه‌ای متناسب با نیاز هر مراجعه‌کننده است.
            آشنایی با تکنیک‌های مختلف ماساژ به من کمک می‌کند رویکرد مناسب‌تری را
            برای هر جلسه انتخاب کنم.
          </p>
        </div>

        <div className="about-experience-grid">
          <div className="about-skill-panel">
            <h3>حوزه‌های مهارتی</h3>
            <ul>
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="about-certificate-panel">
            <h3>مدارک و دوره‌های حرفه‌ای</h3>
            <ul>
              {certificates.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutReasons() {
  const icons = [
    <svg key="heart" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>,
    <svg key="check" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="m8 12 2.5 2.5L16 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
    <svg key="focus" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
    </svg>,
    <svg key="shield" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  return (
    <section className="about-reasons" aria-labelledby="about-reasons-title">
      <div className="container">
        <div className="about-section-heading">
          <p className="section-label">تفاوت در تجربه</p>
          <h2 id="about-reasons-title">نگاهی حرفه‌ای به تجربه ماساژ</h2>
        </div>

        <div className="about-reasons-grid">
          {reasons.map((reason, index) => (
            <article className="about-reason-card" key={reason.title}>
              <span className="about-reason-icon">{icons[index]}</span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutFinalCTA() {
  return (
    <section className="about-final-cta" aria-labelledby="about-cta-title">
      <div className="container about-final-cta-content">
        <p className="section-label">شروع یک تجربه متفاوت</p>
        <h2 id="about-cta-title">برای تجربه ماساژ مناسب خود آماده‌اید؟</h2>
        <p>
          خدمت موردنظر خود را انتخاب کنید و درخواست رزرو خود را ثبت کنید. زمان
          مراجعه پس از هماهنگی با شما نهایی خواهد شد.
        </p>
        <div className="about-final-cta-actions">
          <Link to="/reservation" className="about-cta-primary">
            درخواست رزرو
          </Link>
          <Link to="/services" className="about-cta-secondary">
            مشاهده خدمات
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <main>
        <AboutHero />
        <AboutIntroduction />
        <AboutApproach />
        <AboutExperience />
        <AboutReasons />
        <AboutFinalCTA />
      </main>
    </>
  );
}
