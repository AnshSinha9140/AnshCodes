import React, { useState } from "react";
import LottieAnimation from "./lottie";
import Modal from "react-modal";
import contact from "../animations/19948-contact.json";
import done from "../animations/done.json";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const checkandSendMail = (e) => {
    e.preventDefault();
    console.log("Sending");

    if (Name !== "" && Email !== "" && message !== "") {
      //here modal
      setIsOpen(!modalIsOpen);
    } else if (Name == "" || Email == "") {
      alert("email and name cannot be empty!!!");
    } else {
      alert("Something went wrong please try again!!!");
    }
  };
  return (
    <div id="contact">
      <div className="contact-heading">
        <h2>Contact Me</h2>
      </div>

      <div className="container contact-main">
        <div className="lottiediv">
          <LottieAnimation className="lol" lottie={contact} />
        </div>
        <div className="form-div">
          <form>
            <input
              className="field"
              type="text"
              name="name"
              placeholder="Your Name"
              value={Name}
              onChange={(event) => setName(event.target.value)}
            ></input>

            <input
              className="field"
              type="email"
              name="email"
              placeholder="Email"
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <textarea
              className="field area"
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <button className="btn" onClick={(e) => checkandSendMail(e)}>
              Send
            </button>

            <Modal isOpen={modalIsOpen} style={customStyles}>
              <h3>Message Sent</h3>
              <LottieAnimation lottie={done} height={200} width={200} />
              <div className="thanking-div">
                Thankyou {Name} for Contacting I will get back to you as soon as
                I can
              </div>
              <button
                className="mod-btn"
                onClick={() => setIsOpen(!modalIsOpen)}
              >
                close
              </button>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
}
