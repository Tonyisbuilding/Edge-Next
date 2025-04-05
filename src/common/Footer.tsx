import "./common.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Brand */}
        <div className="footer-brand">
          <div className="brand-content">
            <h2>Edge Capital</h2>
            <p>Investing with an edge</p>
          </div>

          <div className="footer-email">
            <a href="mailto:info@edge-capital.nl">info@edge-capital.nl</a>
            <span className="arrow">→</span>
          </div>
        </div>

        {/* Middle Section - Navigation */}
        <div className="middle-middle">
          <div className="footer-nav">
            <h3>Home</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/edge-fund">Edge Fund</a></li>
              {/* <li><a href="/impact">Edge Impact</a></li> */}
              <li><a href="/institutional">Institutional</a></li>
              <li><a href="/contact">Contact</a></li>
              {/* <li><a href="/faqs">FAQ's</a></li> */}
            </ul>
          </div>

          <div className="footer-nav">
            <h3>Help center</h3>
            <ul>
              <li><a href="/media">Knowledge Base</a></li>
              <li><a href="/contact">Support</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              {/* <li><a href="/404">404</a></li> */}
            </ul>
          </div>
        </div>

        {/* Right Section - Social */}
        <div className="footer-social">
          <h3>Social</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/edgecapital1/" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              LinkedIn
            </a>
            <a href="#" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              X
            </a>
            <a href="#" className="social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="footer-disclaimer">
        <h3>General Disclaimer:</h3>
        <p>The information on this website is solely intended for general informational purposes. 
         The information is provided by the administrator, and while we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability concerning the website or the information, products, services, or related graphics on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.

Edge Capital Management BV is registered with the Dutch Authority for the Financial Markets (AFM) as an AIFM (Alternative Investment Fund Manager) under the AIFMD registration regime of Article 2:66a Wft and is listed in the register for exempt managers of investment institutions on the AFM website, as referred to in Article 1:107 Wft with registration number 50027774.</p>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-copyright">© 2024 edgecapital. All rights reserved.</div>
        <div className="footer-status">
          <span className="status-dot"></span>
          <span>All Systems Operational</span>
        </div>
        <a href="/privacy" className="footer-policy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
