const benefits = [
  {
    id: 1,
    icon: "user-round",
    title: "توجه فردی",
    description: "انتخاب ماساژ متناسب با نیاز هر مراجعه‌کننده",
  },
  {
    id: 2,
    icon: "leaf",
    title: "فضای آرام",
    description: "محیطی دلنشین برای تجربه‌ای آرامش‌بخش",
  },
  {
    id: 3,
    icon: "hand",
    title: "انتخاب نوع ماساژ",
    description: "امکان انتخاب از میان خدمات متنوع ماساژ",
  },
  {
    id: 4,
    icon: "calendar-check",
    title: "رزرو با هماهنگی",
    description: "ثبت درخواست و هماهنگی زمان مراجعه",
  },
];

function BenefitIcon({ name }) {
  const commonProps = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  const icons = {
    "user-round": (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
      </>
    ),

    leaf: (
      <>
        <path d="M20 4c-8 0-14 4-14 11a5 5 0 0 0 5 5c7 0 11-6 9-16Z" />
        <path d="M4 21c3-6 7-9 13-12" />
      </>
    ),

    hand: (
      <>
        <path d="M8 13V5a1.5 1.5 0 0 1 3 0v6" />
        <path d="M11 10V4a1.5 1.5 0 0 1 3 0v7" />
        <path d="M14 10V6a1.5 1.5 0 0 1 3 0v7" />
        <path d="M8 11 6.5 9.5a1.5 1.5 0 0 0-2.5 1.1V15a6 6 0 0 0 6 6h3a6 6 0 0 0 6-6v-3a1.5 1.5 0 0 0-3 0" />
      </>
    ),

    "calendar-check": (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 10h18" />
        <path d="m8 15 2.5 2.5L16 12" />
      </>
    ),
  };

  return <svg {...commonProps}>{icons[name]}</svg>;
}

function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-title">
      <div className="benefits-container">
        <div className="benefits-header">
          <p className="section-label">چرا ابراهیم اکبری؟</p>

          <h2 id="benefits-title">توجه به جزئیات، از ابتدا تا پایان</h2>

          <p>تجربه‌ای متناسب با نیاز و راحتی شما</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.id}>
              <div className="benefit-icon">
                <BenefitIcon name={benefit.icon} />
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
