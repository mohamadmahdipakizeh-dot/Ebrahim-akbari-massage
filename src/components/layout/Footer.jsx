import {Link} from "react-router-dom"
import '../../App.css';

const quickLinks = [
  { label: 'خانه', href: '/home' },
  { label: 'خدمات', href: '/services' },
  { label: 'درباره من', href: '/about' },
  { label: 'تماس با من', href: '/contact' },
  { label: 'درخواست رزرو', href: '/reservation' },
];

const services = [
  'ماساژ بادکش',
  'ماساژ ریلکسی',
  'ماساژ ورزشی',
  'ماساژ بافت عمیق',
  'ماساژ سنگ داغ',
  'ماساژ حرکتی و کششی',
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.3" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.4 4.6A10.1 10.1 0 0 0 12.2 1.9C6.7 1.9 2.2 6.3 2.2 11.8c0 1.75.46 3.46 1.33 4.96L2.1 21.9l5.27-1.37a10.1 10.1 0 0 0 4.82 1.23h.01c5.49 0 9.96-4.43 9.96-9.9 0-2.65-1.04-5.14-2.76-7.26Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.32 7.02c.23-.52.48-.53.76-.54h.65c.2 0 .44.07.6.47l.75 1.81c.09.22.06.4-.03.56l-.47.7c-.11.16-.23.34-.1.57.13.23.58.96 1.25 1.55.86.77 1.58 1.01 1.8 1.12.22.11.36.1.49-.06l.69-.82c.17-.2.34-.17.57-.1l1.72.82c.23.11.38.16.44.24.06.08.06.48-.11.94-.17.46-.98.9-1.35.96-.35.05-.8.12-1.3-.08-.3-.12-1.03-.38-1.82-.85-3.17-1.88-4.16-4.25-4.29-4.5-.13-.25-.72-1.2-.72-2.28 0-1.08.57-1.61.77-1.83Z" fill="currentColor" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.2 3.8 3.7 10.6c-1.2.48-1.19 1.14-.22 1.44l4.48 1.4 1.7 5.14c.22.63.11.88.76.88.51 0 .73-.23.99-.5l2.42-2.35 5.03 3.72c.93.51 1.6.24 1.83-.86l3.31-15.61c.34-1.33-.5-1.93-1.6-1.46Z" fill="currentColor" />
      <path d="m9.2 13.15 8.86-5.59c.43-.26.82-.12.5.16l-7.17 6.46-.27 3.03-1.92-4.06Z" fill="#1e2a20" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.7 2.8 4.4 3.9c-.74.36-1.2 1.14-1.12 1.95.55 6.06 5.33 10.84 11.39 11.39.81.08 1.59-.38 1.95-1.12l1.12-2.31c.3-.62.1-1.36-.47-1.73l-2.7-1.73c-.53-.34-1.24-.27-1.68.18l-1.18 1.18a11.94 11.94 0 0 1-2.5-1.65 11.94 11.94 0 0 1-1.65-2.5l1.18-1.18c.45-.45.52-1.15.18-1.68L9.2 3.27c-.37-.57-1.11-.77-1.73-.47Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6.5-6.2 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.8 6.5 11 6.5 11Z" fill="currentColor" />
      <circle cx="12" cy="10" r="2.3" fill="#1e2a20" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.2 7 7.8 6 7.8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.7" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.1v5.2l3.2 1.9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m14.5 6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7h1M9 7h10M5 12h1M9 12h10M5 17h1M9 17h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function LotusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20c-3.9 0-7-2.2-7-5.1 0-1.8 1.15-3.3 2.92-4.23C7.82 8.4 9.3 6.3 12 4.5c2.7 1.8 4.18 3.9 4.08 6.17C17.85 11.6 19 13.1 19 14.9 19 17.8 15.9 20 12 20Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 20c-2.2-2.3-3.2-4.8-3-7.5M12 20c2.2-2.3 3.2-4.8 3-7.5M12 20c0-4.9 0-8.9 0-13.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SocialLink({ label, href, children }) {
  return (
    <a className="akbari-footer__social" href={href} aria-label={label}>
      {children}
    </a>
  );
}

function ContactRow({ icon, children, href }) {
  const content = (
    <>
      <span className="akbari-footer__contact-icon">{icon}</span>
      <span>{children}</span>
    </>
  );

  return href ? (
    <a className="akbari-footer__contact-row" href={href}>
      {content}
    </a>
  ) : (
    <div className="akbari-footer__contact-row">{content}</div>
  );
}

export default function Footer() {
  return (
    <footer className="akbari-footer" dir="rtl">
      <div className="akbari-footer__inner">
        <div className="akbari-footer__desktop-grid">
          <section className="akbari-footer__brand">
            <h2 className="akbari-footer__brand-name">Ebrahim Akbari Massage</h2>
            <p className="akbari-footer__description">
              ماساژ تخصصی برای آرامش جسم و ذهن شما
              <br />
              با بهره‌گیری از تکنیک‌های حرفه‌ای
              <br />
              در فضایی آرام و بهداشتی.
            </p>

            <div className="akbari-footer__socials" aria-label="شبکه‌های اجتماعی">
              <SocialLink label="Instagram" href="#">
                <InstagramIcon />
              </SocialLink>
              <SocialLink label="WhatsApp" href="https://wa.me/989123456789">
                <WhatsappIcon />
              </SocialLink>
              <SocialLink label="Telegram" href="#">
                <TelegramIcon />
              </SocialLink>
              <SocialLink label="تماس تلفنی" href="tel:09123456789">
                <PhoneIcon />
              </SocialLink>
            </div>
          </section>

          <section className="akbari-footer__column">
            <h3 className="akbari-footer__title">دسترسی سریع</h3>
            <ul className="akbari-footer__links">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.href}>
                    <span>{item.label}</span>
                    <ChevronIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="akbari-footer__column">
            <h3 className="akbari-footer__title">خدمات</h3>
            <ul className="akbari-footer__links">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    <span>{service}</span>
                    <ChevronIcon />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="akbari-footer__column akbari-footer__contact">
            <h3 className="akbari-footer__title">اطلاعات تماس</h3>
            <div className="akbari-footer__contact-list">
              <ContactRow icon={<LocationIcon />}>گیلان، دستک</ContactRow>
              <ContactRow icon={<PhoneIcon />} href="tel:09123456789">09123456789</ContactRow>
              <ContactRow icon={<MailIcon />} href="mailto:info@example.com">info@example.com</ContactRow>
              <ContactRow icon={<ClockIcon />}>از ۹ صبح تا ۹ شب</ContactRow>
            </div>
          </section>
        </div>

        <div className="akbari-footer__mobile">
          <section className="akbari-footer__mobile-brand">
            <h2 className="akbari-footer__brand-name">Ebrahim Akbari Massage</h2>
            <p className="akbari-footer__description">
              ماساژ تخصصی برای آرامش جسم و ذهن شما
              <br />
              با بهره‌گیری از تکنیک‌های حرفه‌ای
              <br />
              در فضایی آرام و بهداشتی.
            </p>

            <div className="akbari-footer__socials" aria-label="شبکه‌های اجتماعی">
              <SocialLink label="Instagram" href="#"><InstagramIcon /></SocialLink>
              <SocialLink label="WhatsApp" href="https://wa.me/989123456789"><WhatsappIcon /></SocialLink>
              <SocialLink label="Telegram" href="#"><TelegramIcon /></SocialLink>
              <SocialLink label="تماس تلفنی" href="tel:09123456789"><PhoneIcon /></SocialLink>
            </div>
          </section>

          <details className="akbari-footer__accordion">
            <summary>
              <span className="akbari-footer__summary-title"><ListIcon /> دسترسی سریع</span>
              <ChevronIcon />
            </summary>
            <ul className="akbari-footer__links akbari-footer__links--mobile">
              {quickLinks.map((item) => (
                <li key={item.label}><Link to={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </details>

          <details className="akbari-footer__accordion">
            <summary>
              <span className="akbari-footer__summary-title"><LotusIcon /> خدمات</span>
              <ChevronIcon />
            </summary>
            <ul className="akbari-footer__links akbari-footer__links--mobile">
              {services.map((service) => (
                <li key={service}><Link to="/services">{service}</Link></li>
              ))}
            </ul>
          </details>

          <details className="akbari-footer__accordion">
            <summary>
              <span className="akbari-footer__summary-title"><PhoneIcon /> اطلاعات تماس</span>
              <ChevronIcon />
            </summary>
            <div className="akbari-footer__contact-list akbari-footer__contact-list--mobile">
              <ContactRow icon={<LocationIcon />}>گیلان، دستک</ContactRow>
              <ContactRow icon={<PhoneIcon />} href="tel:09123456789">09123456789</ContactRow>
              <ContactRow icon={<MailIcon />} href="mailto:info@example.com">info@example.com</ContactRow>
              <ContactRow icon={<ClockIcon />}>از ۹ صبح تا ۹ شب</ContactRow>
            </div>
          </details>
        </div>

        <div className="akbari-footer__bottom">
          <p>© 2026 Ebrahim Akbari Massage. تمامی حقوق محفوظ است.</p>
          <p>Proudly Designed by <a className='designer-footer' href="https://t.me/Mahdipkzs" target='_blank'>MahdiPkz</a></p>
        </div>
      </div>
    </footer>
  );
}
