import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../layouts/LegalPages.css";

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Navbar />

      <div className="legal-container">
        <h1>Privacy Policy</h1>

        <p>
          This website may collect personal information voluntarily provided by
          users through contact forms, such as:
        </p>

        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Message content</li>
        </ul>

        <p>
          This information is used solely for communication purposes and
          project inquiries.
        </p>

        <p>
          No personal data is sold, shared, or used for marketing purposes
          without consent.
        </p>

        <p>
          This website may use basic analytics tools to improve user experience
          and performance.
        </p>

        <p>
          Users may request access, correction, or deletion of their personal
          data by contacting:
        </p>

        <p><strong>your@email.com</strong></p>
      </div>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;