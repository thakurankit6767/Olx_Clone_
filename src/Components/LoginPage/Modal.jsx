import React, { useRef, useState } from "react";
import styles from "./Modal.module.css";
import { OTPpage } from "./OTPpage";

export const Modal = ({ show, handleClose }) => {
  const [emailSection, setEmailSection] = useState(false);
  const [phoneSection, setPhoneSection] = useState(false);
  const [mainSection, setMainSection] = useState(true);
  const [otpSection, setOtpSection] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otpLength,setOtpLength]=useState(false);
  const [page, setPage] = useState(0);
  const [name,setName]=useState("");
  const pointer = useRef(null);
  const slides = [
    {
      url: "./loginEntryPointChat.webp",
      text: "Close deals from the comfort of your home",
      id: 1,
    },
    {
      url: "./loginEntryPointPost.webp",
      text: "Help us become one of the safest places to buy and sell",
      id: 2,
    },
    {
      url: "./loginEntryPointFavorite.webp",
      text: "Keep all your favorites in one place",
      id: 3,
    },
  ];

  const showEmailSection = () => {
    pointer.current = "email";
    setEmailSection(true);
    setMainSection(false);
    setOtpSection(false);
    setPhoneSection(false);
    setOtpLength(false);
  };
  const showOtpSection = () => {
    setOtpSection(true);
    setEmailSection(false);
    setMainSection(false);
    setPhoneSection(false);
    setOtpLength(false);
    alert("Your OTP is 2579.");
  };
  const gotoMain = () => {
    setMainSection(true);
    setEmailSection(false);
    setPhoneSection(false);
    setOtpSection(false);
    setOtpLength(false);
  };
  const handlePhone = () => {
    pointer.current = "phone";
    setPhoneSection(true);
    setMainSection(false);
    setEmailSection(false);
    setOtpSection(false);
    setOtpLength(false);
  };
  const gotoEmail = () => {
    if (pointer.current === "phone") {
      setEmailSection(false);
      setPhoneSection(true);
      setMainSection(false);
      setOtpSection(false);
      setOtpLength(false);
    } else {
      setEmailSection(true);
      setPhoneSection(false);
      setMainSection(false);
      setOtpSection(false);
      setOtpLength(false);
    }
  };
  const handleDec = (value) => {
    value = (page - value) % 3;
    setPage(value);
  };
  const handleInc = (value) => {
    value = (page + value) % 3;
    setPage(value);
  };

  if (!show) {
    return null;
  }
  console.log(otpLength);
  return (
    <>
      {mainSection && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <div style={{ display: "flex" }}>
                <button className={styles.button} onClick={handleClose}>
                  X
                </button>
              </div>
            </div>
            <div className={styles.modal_body}>
              <div>
                <div className={styles.slider_div}>
                  <div className={styles.slider_image_div}>
                    <button style={{ border: "none", background: "white" }}>
                      <img
                        onClick={() => handleDec(-1)}
                        className={styles.arrow_image}
                        src="https://www.seekpng.com/png/detail/198-1980787_left-arrow-sign-arrow-back-icon-png.png"
                        alt="name"
                      />
                    </button>
                    <img
                      className={styles.slider_image}
                      src={`${slides[page].url}`}
                      alt="name"
                    />
                    <button style={{ border: "none", background: "white" }}>
                      <img
                        onClick={() => handleInc(1)}
                        className={styles.arrow_image_rotate}
                        src="https://www.seekpng.com/png/detail/198-1980787_left-arrow-sign-arrow-back-icon-png.png"
                        alt="name"
                      />
                    </button>
                  </div>
                  <div className={styles.slider_text_div}>
                    <p>{`${slides[page].text}`}</p>
                  </div>
                </div>
                <div className={styles.button_div}>
                  <div style={{ height: "40px", border: "0px" }}>
                    <button onClick={handlePhone} className={styles.phone}>
                      Continue with Phone
                    </button>
                  </div>
                  <div style={{ height: "40px"}}>
                    <button className={styles.google}>
                      <a
                        style={{ textDecoration: "none", color: "#002f34" }}
                        target={"_blank"}
                        rel="noreferrer"
                        href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.olx.in%3Fid%3Dauth900925&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=620536207652-dggu54ckkkbb7n0bmqkphjrtl755age9.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.olx.in&prompt&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
                      >
                        Continue with Google
                      </a>
                    </button>
                  </div>
                  <div>
                    <p className={styles.or}>OR</p>
                  </div>
                  <div className={styles.email}>
                    <button className={styles.email_button}>
                      <a
                        style={{ color: "black", fontSize: "bold" }}
                        href="#email"
                        onClick={() => showEmailSection()}
                      >
                        Login with Email
                      </a>
                    </button>
                  </div>
                  <div>
                    <p className={styles.personal}>
                      All your personal details are safe with us
                    </p>
                  </div>
                  <div className={styles.term_div}>
                    <p className={styles.personal}>
                      If you continue, you are accepting{" "}
                      <a
                        href="https://help.olx.in/hc/en-us"
                        target={"_blank"}
                        rel="noreferrer"
                        className={styles.conditions}
                      >
                        OLX Terms and Coditions and Privacy Policy.
                      </a>
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
      {emailSection && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <div style={{ display: "flex" }}>
                <button
                  style={{ border: "none", background: "white" }}
                  onClick={gotoMain}
                >
                  <img
                    className={styles.arrow_image1}
                    src="https://www.seekpng.com/png/detail/198-1980787_left-arrow-sign-arrow-back-icon-png.png"
                    alt="name"
                  />
                </button>
                <button className={styles.button1} onClick={handleClose}>
                  X
                </button>
              </div>
            </div>
            <div>
              <div>
                <div className={styles.images_olx}>
                  <img
                    className={styles.olx_image}
                    src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
                    alt="olx"
                  />
                </div>
                <div className={styles.email_login}>
                  <h3>Enter your Email to Login</h3>
                </div>
                <div className={styles.email_input_div}>
                  <input
                  style={{width:"250px"}}
                    className={styles.email_input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "x-small",
                    width: "80%",
                    margin: "auto",
                    marginTop: "50px",
                  }}
                >
                  <p>
                    If you are a new user please select any other login option
                    from previous page.
                  </p>
                </div>
                <div className={styles.email_button_div}>
                  <button
                    disabled={email.length <= 0}
                    className={styles.email_next}
                    onClick={showOtpSection}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "x-small",
                  width: "80%",
                  margin: "auto",
                  marginTop: "50px",
                  color: "gray",
                }}
              >
                <p>
                  Your email is never shared with external parties nor do we use
                  it to spam you in any way
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {phoneSection && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <div style={{ display: "flex" }}>
                <button
                  style={{ border: "none", background: "white" }}
                  onClick={gotoMain}
                >
                  <img
                    className={styles.arrow_image1}
                    src="https://www.seekpng.com/png/detail/198-1980787_left-arrow-sign-arrow-back-icon-png.png"
                    alt="name"
                  />
                </button>
                <button className={styles.button1} onClick={handleClose}>
                  X
                </button>
              </div>
            </div>
            <div>
              <div>
                <div className={styles.images_olx}>
                  <img
                    className={styles.olx_image}
                    src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
                    alt="olx"
                  />
                </div>
                <div className={styles.email_login}>
                  <h3>Enter your phone number</h3>
                </div>
                <div className={styles.email_input_div}>
                  <input style={{width:"250px"}}
                    className={styles.email_input}
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className={styles.phone_button_div}>
                  <button
                    className={styles.email_next}
                    onClick={showOtpSection}
                    disabled={phone.length < 10 || phone.length > 10}
                  >
                    Next
                  </button>
                </div>
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "x-small",
                  width: "80%",
                  margin: "auto",
                  marginTop: "50px",
                  color: "gray",
                }}
              >
                <p>
                  Your phone is never shared with external parties nor do we use
                  it to spam you in any way.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {otpSection && (
        
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <div style={{ display: "flex" }}>
                <button
                  style={{ border: "none", background: "white" }}
                  onClick={gotoEmail}
                >
                  <img
                    className={styles.arrow_image1}
                    src="https://www.seekpng.com/png/detail/198-1980787_left-arrow-sign-arrow-back-icon-png.png"
                    alt="name"
                  />
                </button>
                <button className={styles.button1} onClick={handleClose}>
                  X
                </button>
              </div>
            </div>
            <div className={styles.images_olx}>
              <img
                className={styles.olx_image}
                src="https://logos-world.net/wp-content/uploads/2022/04/OLX-Symbol.png"
                alt="olx"
              />
            </div>
            <div className={styles.email_login}>
              <h3>Enter verification code</h3>
            </div>
            <div>
              <p className={styles.confirmation}>
                We sent a 4 digit code to{" "}
                <span className={styles.number}>
                  {pointer.current === "phone" ? `${phone}` : `${email}`}
                </span>
              </p>
            </div>
            <OTPpage setOtpLength={setOtpLength} />
            <div>
              <div className={styles.otp_again}>
                <a style={{ textDecoration: "none" }} href="#abc">
                  Resend code by SMS
                </a>
              </div>
              <div className={styles.otp_again}>
                <a style={{ textDecoration: "none" }} href="#abc">
                  Resend code by Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {otpLength && (
        <div className={styles.modal}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <div style={{ display: "flex" }}>
                <button
                  style={{ border: "none", background: "white" }}
                  onClick={showOtpSection}
                >
                  <img
                    className={styles.arrow_image1}
                    src="https://www.seekpng.com/png/detail/198-1980787_left-arrow-sign-arrow-back-icon-png.png"
                    alt="name"
                  />
                </button>
                <button className={styles.button1} onClick={handleClose}>
                  X
                </button>
              </div>
              <div style={{justifyContent:"center"}}>
              <div><h2 className={styles.name}>What's your name?</h2></div>
              <div><p className={styles.stranger}>'Stranger',feel so impersonal,you know?</p></div>
              <div className={styles.input_name}><input value={name} onChange={(e)=>{setName(e.target.value);localStorage.setItem("name",JSON.stringify(name));}} style={{width:"250px",height:"32px",paddingLeft:"5px",paddingRight:"45px"}} placeholder="Enter your name" type="text"/></div>
              <div className={styles.continue_btn_div}><button onClick={handleClose} className={styles.continue_btn}>Continue</button></div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};
