import { useEffect, useMemo, useRef, useState } from "react";
import {  useLocation } from "react-router-dom";
import "../components/styles/reservation.css";

const SERVICES = [
  { id: "relaxing", name: "ماساژ ریلکسی", duration: 60, price: 80, icon: "leaf" },
  { id: "deep-tissue", name: "ماساژ بافت عمیق", duration: 60, price: 95, icon: "hands" },
  { id: "hot-stone", name: "ماساژ سنگ داغ", duration: 90, price: 120, icon: "stone" },
  { id: "cupping", name: "ماساژ بادکش", duration: 60, price: 90, icon: "cupping" },
  { id: "movement-stretching", name: "ماساژ حرکتی و کششی", duration: 60, price: 85, icon: "stretch" },
  {id: "sport-massage", name: "ماساژ ورزشی", duration: 75, price: 150, icon: ""}
];

const STORAGE_KEY = "ebrahimAkbariMassageReservations";
const HOURS = Array.from(
  { length: 13 },
  (_, index) => `${String(index + 9).padStart(2, "0")}:00`
);
const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

function normalizePhone(value) {
  return String(value)
    .replace(/[۰-۹]/g, (digit) => String(PERSIAN_DIGITS.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String(ARABIC_DIGITS.indexOf(digit)))
    .replace(/\D/g, "")
    .slice(0, 11);
}

function toPersianDigits(value) {
  return String(value).replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)]);
}

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatPersianDate(value) {
  if (!value) return "انتخاب نشده";
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

function getServiceFromSearch(search) {
  const requestedService = new URLSearchParams(search).get("service");
  if (!requestedService) return "";

  const normalized = requestedService.trim().toLowerCase();

  return (
    SERVICES.find(
      (service) =>
        service.id === normalized ||
        service.name === requestedService ||
        service.name.toLowerCase() === normalized
    )?.id ?? ""
  );
}

function ServiceIcon({ type }) {
  if (type === "hands") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 25c3-3 6-5 9-5 2 0 4 1 5 3l2 4" />
        <path d="M39 25c-3-3-6-5-9-5-2 0-4 1-5 3l-2 4" />
        <path d="M13 29c4 4 8 6 11 6s7-2 11-6" />
        <path d="M20 19c0-2 1-4 4-4s4 2 4 4" />
      </svg>
    );
  }

  if (type === "stone") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <ellipse cx="24" cy="15" rx="8" ry="5" />
        <ellipse cx="21" cy="26" rx="11" ry="6" />
        <ellipse cx="27" cy="37" rx="9" ry="5" />
      </svg>
    );
  }

  if (type === "cupping") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 12h20l-2 7H16l-2-7Z" />
        <path d="M17 19h14l-2 14H19l-2-14Z" />
        <path d="M21 33v4h6v-4" />
        <path d="M24 8v4" />
      </svg>
    );
  }

  if (type === "stretch") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="8" r="3.5" />
        <path d="M24 12v13" />
        <path d="M24 16 14 21" />
        <path d="M24 16 35 20" />
        <path d="M24 25 15 36" />
        <path d="M24 25 34 36" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 39C12 32 8 23 13 16c3-4 8-2 11 3 3-5 8-7 11-3 5 7 1 16-11 23Z" />
      <path d="M24 37c-1-9-1-15 0-20M24 29c-4-4-7-5-10-5M24 25c4-4 7-5 10-5" />
    </svg>
  );
}

export default function Reservation() {
  const location = useLocation();
  const carouselRef = useRef(null);
  const fieldsRef = useRef(null);

  const [selectedService, setSelectedService] = useState(() =>
    getServiceFromSearch(location.search)
  );
  const [cameFromServiceCard, setCameFromServiceCard] = useState(() =>
    Boolean(getServiceFromSearch(location.search))
  );
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    const serviceFromUrl = getServiceFromSearch(location.search);

    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl);
      setCameFromServiceCard(true);

      window.requestAnimationFrame(() => {
        fieldsRef.current?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    } else {
      setCameFromServiceCard(false);
    }
  }, [location.search]);

  const chosenService = useMemo(
    () => SERVICES.find((service) => service.id === selectedService),
    [selectedService]
  );

  function updateField(event) {
    const { name, value } = event.target;

    const nextValue = name === "phone" ? normalizePhone(value) : value;

    setForm((current) => ({
      ...current,
      [name]: nextValue,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
      storage: "",
    }));

    setConfirmation(null);
  }

  function selectService(serviceId) {
    setSelectedService(serviceId);
    setCameFromServiceCard(false);
    setErrors((current) => ({ ...current, service: "" }));
    setConfirmation(null);
  }

  function moveCarousel(direction) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector(".reservation-service-card");
    const amount = (card?.getBoundingClientRect().width ?? 280) + 16;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    carousel.scrollBy({
      left: direction * amount,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }



  function validate() {
    const nextErrors = {};

    if (!selectedService) {
      nextErrors.service = "لطفاً یک خدمت را انتخاب کنید.";
    }

    if (!form.fullName.trim()) {
      nextErrors.fullName = "نام و نام خانوادگی را وارد کنید.";
    }

    if (!/^09\d{9}$/.test(normalizePhone(form.phone))) {
      nextErrors.phone = "شماره موبایل باید ۱۱ رقم و با 09 شروع شود.";
    }

    if (!form.date) {
      nextErrors.date = "روز مراجعه را انتخاب کنید.";
    } else if (form.date < getLocalDateString()) {
      nextErrors.date = "تاریخ انتخابی نمی‌تواند در گذشته باشد.";
    }

    if (!form.time) {
      nextErrors.time = "ساعت پیشنهادی را انتخاب کنید.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setConfirmation(null);

    if (!validate()) {
      return;
    }

    const request = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      serviceId: chosenService.id,
      serviceName: chosenService.name,
      duration: chosenService.duration,
      price: chosenService.price,
      fullName: form.fullName.trim(),
      phone: normalizePhone(form.phone),
      date: form.date,
      time: form.time,
      notes: form.notes.trim(),
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    try {
      const stored = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
      const previousRequests = Array.isArray(stored) ? stored : [];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...previousRequests, request])
      );

      setConfirmation(request);
      setForm({
        fullName: "",
        phone: "",
        date: "",
        time: "",
        notes: "",
      });
      setErrors({});
    } catch {
      setErrors({
        storage:
          "ذخیره درخواست در این مرورگر انجام نشد. فضای ذخیره‌سازی مرورگر را بررسی کنید.",
      });
    }
  }

  const minDate = getLocalDateString();

  return (
    <>
      <main className="reservation-page">
        <section className="reservation-hero" aria-labelledby="reservation-title">
          <div className="container reservation-hero-container">
            <div className="reservation-hero-content">
              <p className="section-label reservation-hero-label">
                درخواست رزرو
              </p>
              <h1 id="reservation-title">درخواست رزرو ماساژ</h1>
              <p>
                تجربه آرامش خود را با انتخاب ماساژ مناسب آغاز کنید.
              </p>
            </div>
          </div>
        </section>

        <section
          className="reservation-services-section"
          aria-labelledby="reservation-services-title"
        >
          <div className="container">
            <div className="reservation-section-heading">
              <p className="section-label">انتخاب خدمت</p>
              <h2 id="reservation-services-title">
                ماساژ موردنظر خود را انتخاب کنید
              </h2>
              <p>
                با انتخاب خدمت دلخواه و تکمیل اطلاعات زیر، درخواست رزرو خود را
                ثبت کنید.
              </p>
            </div>

            <div className="reservation-carousel-toolbar">
              <p>خدمت موردنظر را انتخاب کنید</p>

              <div className="reservation-carousel-controls">
                <button
                  type="button"
                  onClick={() => moveCarousel(1)}
                  aria-label="حرکت به کارت‌های بعدی"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => moveCarousel(-1)}
                  aria-label="حرکت به کارت‌های قبلی"
                >
                  ›
                </button>
              </div>
            </div>

            <div
              className="reservation-carousel"
              ref={carouselRef}
              aria-label="انتخاب نوع ماساژ"
            >
              {SERVICES.map((service) => {
                const isSelected = selectedService === service.id;

                return (
                  <button
                    type="button"
                    key={service.id}
                    className={`reservation-service-card${
                      isSelected ? " is-selected" : ""
                    }`}
                    aria-pressed={isSelected}
                    onClick={() => selectService(service.id)}
                  >
                    <span className="reservation-service-icon">
                      <ServiceIcon type={service.icon} />
                    </span>

                    <span className="reservation-service-name">
                      {service.name}
                    </span>

                    <span className="reservation-service-meta">
                      {toPersianDigits(service.duration)} دقیقه
                    </span>

                    <span className="reservation-service-price">
                      ${service.price}
                    </span>

                    <span
                      className="reservation-selection-mark"
                      aria-hidden="true"
                    >
                      {isSelected ? "✓" : "+"}
                    </span>
                  </button>
                );
              })}
            </div>

            {errors.service && (
              <p className="reservation-error" role="alert">
                {errors.service}
              </p>
            )}

            {cameFromServiceCard && chosenService && (
              <div className="reservation-selected-service" aria-live="polite">
                <div>
                  <span>خدمت انتخاب‌شده</span>
                  <strong>
                    {chosenService.name} ·{" "}
                    {toPersianDigits(chosenService.duration)} دقیقه · $
                    {chosenService.price}
                  </strong>
                </div>

                <button type="button" onClick={() => setCameFromServiceCard(false)}>
                  تغییر خدمت
                </button>
              </div>
            )}

            <form
              className="reservation-form"
              onSubmit={handleSubmit}
              noValidate
              ref={fieldsRef}
            >
              <div className="reservation-form-heading">
                <p className="section-label">اطلاعات مراجعه‌کننده</p>
                <h3>اطلاعات خود را وارد کنید</h3>
                <p>فیلدهای ستاره‌دار برای ثبت درخواست الزامی هستند.</p>
              </div>

              <div className="reservation-fields-grid">
                <div className="reservation-field">
                  <label htmlFor="reservation-full-name">
                    نام و نام خانوادگی{" "}
                    <span className="reservation-required">*</span>
                  </label>
                  <input
                    id="reservation-full-name"
                    name="fullName"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={updateField}
                    placeholder="نام و نام خانوادگی"
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={
                      errors.fullName ? "reservation-name-error" : undefined
                    }
                    required
                  />
                  {errors.fullName && (
                    <p id="reservation-name-error" className="reservation-error">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="reservation-field">
                  <label htmlFor="reservation-phone">
                    شماره تماس{" "}
                    <span className="reservation-required">*</span>
                  </label>
                  <input
                    id="reservation-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    dir="ltr"
                    value={form.phone}
                    onChange={updateField}
                    placeholder="09123456789"
                    maxLength={11}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? "reservation-phone-error" : undefined
                    }
                    required
                  />
                  {errors.phone && (
                    <p id="reservation-phone-error" className="reservation-error">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="reservation-field">
                  <label htmlFor="reservation-date">
                    روز مراجعه{" "}
                    <span className="reservation-required">*</span>
                  </label>
                  <input
                    id="reservation-date"
                    name="date"
                    type="date"
                    min={minDate}
                    value={form.date}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={
                      errors.date ? "reservation-date-error" : undefined
                    }
                    required
                  />
                  {errors.date && (
                    <p id="reservation-date-error" className="reservation-error">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div className="reservation-field">
                  <label htmlFor="reservation-time">
                    ساعت پیشنهادی{" "}
                    <span className="reservation-required">*</span>
                  </label>
                  <select
                    id="reservation-time"
                    name="time"
                    value={form.time}
                    onChange={updateField}
                    aria-invalid={Boolean(errors.time)}
                    aria-describedby={
                      errors.time ? "reservation-time-error" : undefined
                    }
                    required
                  >
                    <option value="">انتخاب ساعت</option>
                    {HOURS.map((hour) => (
                      <option key={hour} value={hour}>
                        {toPersianDigits(hour)}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p id="reservation-time-error" className="reservation-error">
                      {errors.time}
                    </p>
                  )}
                </div>

                <div className="reservation-field reservation-field-full">
                  <label htmlFor="reservation-notes">
                    توضیحات تکمیلی{" "}
                    <span className="reservation-optional">(اختیاری)</span>
                  </label>
                  <textarea
                    id="reservation-notes"
                    name="notes"
                    value={form.notes}
                    onChange={updateField}
                    placeholder="اگر نکته یا نیاز خاصی دارید، اینجا بنویسید."
                    rows={4}
                  />
                </div>
              </div>

              {errors.storage && (
                <p className="reservation-error" role="alert">
                  {errors.storage}
                </p>
              )}

              <div className="reservation-submit-row">
                <p>زمان انتخابی پس از هماهنگی نهایی خواهد شد.</p>
                <button className="reservation-submit-button" type="submit">
                  ثبت درخواست رزرو
                  <span aria-hidden="true">←</span>
                </button>
              </div>
            </form>

            {confirmation && (
              <section
                className="reservation-confirmation"
                role="status"
                aria-live="polite"
              >
                <span
                  className="reservation-confirmation-icon"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <div>
                  <p className="section-label">ثبت موفق</p>
                  <h3>درخواست شما با موفقیت ثبت شد.</h3>
                  <p>
                    اطلاعات درخواست در این مرورگر ذخیره شد. زمان مراجعه هنوز
                    تأیید نشده است.
                  </p>

                  <dl className="reservation-summary">
                    <div>
                      <dt>خدمت</dt>
                      <dd>{confirmation.serviceName}</dd>
                    </div>
                    <div>
                      <dt>روز مراجعه</dt>
                      <dd>{formatPersianDate(confirmation.date)}</dd>
                    </div>
                    <div>
                      <dt>ساعت پیشنهادی</dt>
                      <dd>{toPersianDigits(confirmation.time)}</dd>
                    </div>
                  </dl>
                </div>
              </section>
            )}
          </div>
        </section>

        <section className="reservation-guide" aria-labelledby="reservation-guide-title">
          <div className="container reservation-guide-inner">
            <span className="reservation-guide-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="17" />
                <path d="M24 20v10" />
                <circle cx="24" cy="15" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </span>

            <div>
              <p className="section-label">هماهنگی نهایی</p>
              <h2 id="reservation-guide-title">هماهنگی زمان مراجعه</h2>
              <p>
                پس از ثبت درخواست، زمان مراجعه با توجه به ترجیح شما و از طریق
                هماهنگی جداگانه نهایی خواهد شد.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
