import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "انتخاب خدمت",
    description: "ماساژ موردنظر خود را از میان خدمات انتخاب کنید.",
  },
  {
    id: 2,
    title: "ارسال درخواست رزرو",
    description: "اطلاعات تماس و زمان پیشنهادی خود را ثبت کنید.",
  },
  {
    id: 3,
    title: "هماهنگی نهایی",
    description: "زمان مراجعه پس از هماهنگی با شما نهایی می شود.",
  },
];

function BookingSteps() {
  return (
    <section className="booking-steps" aria-labelledby="booking-steps-title">
      <div className="booking-steps-container">
        <div className="booking-steps-header">
          <p className="section-label">روند رزرو</p>

          <h2 id="booking-steps-title">رزرو در سه مرحله ساده</h2>

          <p>از انتخاب خدمت تا هماهنگی زمان مراجعه</p>
        </div>

        <div className="booking-steps-grid">
          {steps.map((step) => (
            <article className="booking-step-card" key={step.id}>
              <div className="booking-step-number" aria-hidden="true">
                {step.id.toLocaleString("fa-IR")}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="booking-steps-footer">
          <Link to="/reservation" className="booking-steps-button">
            درخواست رزرو
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BookingSteps;
