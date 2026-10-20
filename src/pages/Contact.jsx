import { useState } from "react";
import "../components/styles/contact.css";

const NESHAN_URL = "https://nshn.ir/7bLPOS5BN3CF";

const initialForm = {
  name: "",
  phone: "",
  subject: "",
  message: "",
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.6 4.3 5.9 5.9c-.7.7-.9 1.8-.4 2.7 2.1 4.2 5.6 7.7 9.8 9.8.9.5 2 .3 2.7-.4l1.6-1.7c.5-.5.5-1.3.1-1.9l-1.9-2.7a1.4 1.4 0 0 0-1.8-.4l-2.1 1a13.2 13.2 0 0 1-4.6-4.6l1-2.1a1.4 1.4 0 0 0-.4-1.8L9.5 4.2c-.6-.4-1.4-.4-1.9.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M19 10.2c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="10.2"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m20.1 4.7-2.9 13.7c-.2 1-1 1.3-1.8.8l-4.3-3.2-2.1 2c-.2.2-.4.4-.8.4l.3-4.5 8.2-7.4c.4-.3-.1-.5-.6-.2L6 12.9l-4.2-1.3c-.9-.3-.9-.9.2-1.3L18.5 4c.8-.3 1.5.2 1.6.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactHero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-title">
      <div className="container contact-hero-container">
        <div className="contact-hero-content">
          <p className="section-label contact-hero-label">تماس با من</p>
          <h1 id="contact-title">ارتباط مستقیم با ابراهیم اکبری</h1>
        </div>
      </div>
    </section>
  );
}

function ContactMethods() {
  return (
    <section
      className="contact-methods"
      aria-labelledby="contact-methods-title"
    >
      <div className="container">
        <div className="contact-section-heading">
          <p className="section-label">راه‌های ارتباطی</p>
          <h2 id="contact-methods-title">راه‌های ارتباط با من</h2>
        </div>

        <div className="contact-methods-grid">
          <article className="contact-method-card">
            <span className="contact-method-icon">
              <PhoneIcon />
            </span>
            <h3>شماره تماس</h3>
            <a className="contact-method-value" href="tel:+989120000000">
              +989120000000
            </a>
            <p>برای تماس مستقیم می‌توانید از این شماره استفاده کنید.</p>
          </article>

          <article className="contact-method-card">
            <span className="contact-method-icon">
              <LocationIcon />
            </span>
            <h3>محل فعالیت</h3>
            <p className="contact-method-value">دستک </p>
            <a
              className="contact-method-link"
              href={NESHAN_URL}
              target="_blank"
              rel="noreferrer"
            >
              مشاهده در نشان
              <ArrowIcon />
            </a>
          </article>

          <article className="contact-method-card">
            <span className="contact-method-icon">
              <InstagramIcon />
            </span>
            <h3>شبکه‌های اجتماعی</h3>
            <p>
              برای ارتباط در شبکه‌های اجتماعی، می‌توانید از آیکون‌های زیر
              استفاده کنید.
            </p>
            <div className="contact-socials" aria-label="شبکه‌های اجتماعی">
              <a
                href="#"
                className="contact-social-link"
                aria-label="اینستاگرام"
                title="اینستاگرام"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="contact-social-link"
                aria-label="تلگرام"
                title="تلگرام"
              >
                <TelegramIcon />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = "نام و نام خانوادگی را وارد کنید.";
    }

    const normalizedPhone = form.phone.replace(/[۰-۹]/g, (digit) =>
      String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)),
    );

    if (!/^09\d{9}$/.test(normalizedPhone.trim())) {
      nextErrors.phone = "شماره تماس معتبر وارد کنید.";
    }

    if (!form.subject) {
      nextErrors.subject = "موضوع را انتخاب کنید.";
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = "پیام باید حداقل ۱۰ کاراکتر داشته باشد.";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmitted(false);
    setForm((current) => ({ ...current, [name]: value }));

    if (errors[name]) {
      setErrors((current) => ({ ...current, [name]: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section
      className="contact-form-section"
      aria-labelledby="contact-form-title"
    >
      <div className="container contact-form-grid">
        <div className="contact-form-panel">
          <div className="contact-section-heading contact-form-heading">
            <p className="section-label">فرم تماس</p>
            <h2 id="contact-form-title">
              درخواست خود را با من در میان بگذارید
            </h2>
            <p>سؤال، مشاوره یا درخواست خود را از طریق فرم زیر مطرح کنید.</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">نام و نام خانوادگی</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                />
                {errors.name && (
                  <p id="contact-name-error" className="contact-field-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">شماره تماس</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  inputMode="tel"
                  dir="ltr"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "contact-phone-error" : undefined
                  }
                />
                {errors.phone && (
                  <p id="contact-phone-error" className="contact-field-error">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">موضوع</label>
              <select
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={
                  errors.subject ? "contact-subject-error" : undefined
                }
              >
                <option value="">انتخاب موضوع</option>
                <option value="services">سؤال درباره خدمات</option>
                <option value="consultation">مشاوره</option>
                <option value="coordination">هماهنگی</option>
                <option value="other">سایر</option>
              </select>
              {errors.subject && (
                <p id="contact-subject-error" className="contact-field-error">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">پیام</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
              />
              {errors.message && (
                <p id="contact-message-error" className="contact-field-error">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="contact-submit-button">
              ارسال پیام
            </button>

            {submitted && (
              <p className="contact-success" role="status" aria-live="polite">
                پیام شما در این نسخه نمایشی با موفقیت ثبت شد.
              </p>
            )}
          </form>
        </div>

        <div className="contact-form-visual" aria-hidden="true">
          <div className="contact-visual-orb contact-visual-orb-one" />
          <div className="contact-visual-orb contact-visual-orb-two" />
          <div className="contact-visual-card">
            <div className="contact-visual-card-line contact-visual-card-line-short" />
            <div className="contact-visual-card-line" />
            <div className="contact-visual-card-line contact-visual-card-line-medium" />
            <div className="contact-visual-card-circle" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLocation() {
  return (
    <section
      className="contact-location"
      aria-labelledby="contact-location-title"
    >
      <div className="container">
        <div className="contact-location-heading">
          <p className="section-label">محل فعالیت</p>
          <h2 id="contact-location-title">در دسترس شما در دستک، گیلان</h2>
          <p className="contact-location-address">دستک</p>
        </div>

        <div className="contact-map-card">
          <div className="contact-map-grid" aria-hidden="true" />
          <div className="contact-map-pin" aria-hidden="true">
            <LocationIcon />
          </div>
          <div className="contact-map-label">
            <span>موقعیت فعالیت</span>
            <strong>دستک</strong>
          </div>
          <a
            className="contact-map-button"
            href={NESHAN_URL}
            target="_blank"
            rel="noreferrer"
          >
            مشاهده مسیر در نشان
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactLocation />
    </>
  );
}
