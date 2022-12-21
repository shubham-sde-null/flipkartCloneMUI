// import { Box } from "@mui/material";
import React from "react";
import { Divider } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";
import CardGiftcardSharpIcon from "@mui/icons-material/CardGiftcardSharp";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import "./Footer.css";
function Footer() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={isMatch ? "footerS" : "footer"}>
      <div className={isMatch ? "footer__infoS" : "footer__info"}>
        <div>
          <p
            className={isMatch ? "footer__infoHeadingS" : "footer__infoHeading"}
          >
            {" "}
            ABOUT{" "}
          </p>{" "}
          <p> Contact Us </p> <p> About Us </p> <p> Careers </p>{" "}
          <p> Flipkart Stories </p> <p> Posts </p> <p> Flipkart Wholesale </p>{" "}
          <p> Corporate Information </p>{" "}
        </div>{" "}
        <div>
          <p
            className={isMatch ? "footer__infoHeadingS" : "footer__infoHeading"}
          >
            {" "}
            HELP{" "}
          </p>{" "}
          <p> Payments </p> <p> Shipping </p> <p> Cancellations And Returns </p>{" "}
          <p> FAQ </p> <p> Report Infringment </p>{" "}
        </div>{" "}
        <div>
          <p
            className={isMatch ? "footer__infoHeadingS" : "footer__infoHeading"}
          >
            {" "}
            POLICY{" "}
          </p>{" "}
          <p> Return Policy </p> <p> Terms Of Use </p> <p> Security </p>{" "}
          <p> Privacy </p> <p> Site Map </p> <p> EPR Compliance </p>{" "}
        </div>{" "}
        <div className={isMatch ? "socialsS" : "socials"}>
          <p
            className={isMatch ? "footer__infoHeadingS" : "footer__infoHeading"}
          >
            {" "}
            SOCIAL{" "}
          </p>
          <p> Facebook </p> <p> Twitter </p>
          <p> Youtube </p>{" "}
        </div>{" "}
        <Divider
          orientation="vertical"
          sx={{
            height: "auto",
            // width: "2px",
            // color: "white",
            border: "0.5px solid gray",
            display: isMatch ? "none" : "",
          }}
        />
        <div className={isMatch ? "footer__mailUsS" : "footer__mailUs"}>
          <p
            className={isMatch ? "footer__infoHeadingS" : "footer__infoHeading"}
          >
            {" "}
            Mail Us:{" "}
          </p>{" "}
          <p> Lorem ipsum dolor sit amet. </p>{" "}
          <p> Lorem ipsum dolor sit amet.</p>{" "}
          <p> Lorem ipsum dolor sit amet. </p>{" "}
          <p> Lorem ipsum dolor sit amet, consectetur </p>{" "}
          <p> Lorem, ipsum dolor. </p> <p> Lorem, ipsum.</p>{" "}
          {/* <p> Flipkart Internet Private Limited, </p>{" "}
          <p> Buildings Alyssa, Begonia & </p>{" "}
          <p> Clove Embassy Tech Village, </p>{" "}
          <p> Outer Ring Road, Devarabeesanahalli Village, </p>{" "}
          <p> Bengaluru, 560103, </p> <p> Karnataka, India </p>{" "} */}
        </div>
        <div className={isMatch ? "footer__addressS" : "footer__address"}>
          <p
            // style={{ textAlign: isMatch ? "center" : "" }}
            className={isMatch ? "footer__infoHeadingS" : "footer__infoHeading"}
          >
            {" "}
            Registered Office Address:{" "}
          </p>{" "}
          {/* <p> Flipkart Internet Private Limited, </p>{" "}
          <p> Buildings Alyssa, Begonia & </p>{" "}
          <p> Clove Embassy Tech Village, </p>{" "}
          <p> Outer Ring Road, Devarabeesanahalli Village, </p>{" "}
          <p> Bengaluru, 560103, </p> <p> Karnataka, India </p>{" "}
          <p> CIN: U51109KA2012PTC066107 </p> <p> Telephone: 044 - 45614700 </p>{" "} */}
          <p className={isMatch ? "companyAddressS" : "companyAddress"}>
            {isMatch
              ? " Lorem ipsum dolor sit amet, consectetur adipisicing elit"
              : "Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          </p>
        </div>{" "}
      </div>{" "}
      <div className={isMatch ? "footer__paymentS" : "footer__payment"}>
        <p className="footerLast" style={{ display: isMatch ? "none" : "" }}>
          <span>
            <WorkIcon fontSize="small" />
          </span>
          <p>Become a Seller </p>
        </p>{" "}
        <p className="footerLast" style={{ display: isMatch ? "none" : "" }}>
          <span>
            <StarsSharpIcon fontSize="small" />
          </span>
          <p>Advertise </p>
        </p>{" "}
        <p className="footerLast" style={{ display: isMatch ? "none" : "" }}>
          <span>
            <CardGiftcardSharpIcon fontSize="small" />
          </span>
          <p> Gift Cards </p>
        </p>{" "}
        <p className="footerLast" style={{ display: isMatch ? "none" : "" }}>
          <span>
            <HelpSharpIcon fontSize="small" />
          </span>
          <p> Help Center </p>
        </p>{" "}
        <p className={isMatch ? "copyRightS" : "copyRight"}>
          {" "}
          &copy; 2007 - 2022 Flipkart.com{" "}
        </p>{" "}
        <img
          style={{ display: isMatch ? "none" : "" }}
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
          alt=""
        />
      </div>{" "}
    </div>
  );
}

export default Footer;
