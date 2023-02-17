import { FaCopyright } from "react-icons/fa";
import FooterCSS from "../styles/footer-styles/footer.module.css";

export const Footer = () => {
  return (
    <footer style={footerBackground}>
      <div className={FooterCSS.footer}>
        <div className={FooterCSS.footerC}>
          <div className={FooterCSS.wrapper}>
            <FaCopyright />
            Title
          </div>
        </div>
        <p className={FooterCSS.footerP}>All right reserver</p>
      </div>
    </footer>
  );
};
const footerBackground = {
  background: "gray",
};
