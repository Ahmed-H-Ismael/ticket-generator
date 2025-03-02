import "./App.css";
import logo3 from "../src/images/logo-mark.svg";
import logo4 from "../src/images/icon-upload.svg";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  function removeImg() {
    setImage(null);
  }
  return (
    <div className="App">
      <Logoheader />
      <Form
        image={image}
        handleImageChange={handleImageChange}
        removeImg={removeImg}
      />
      <Footer />
    </div>
  );
}
function Logoheader() {
  return (
    <div className="logoheader">
      <img src={logo3} alt="logo" />
      <span>Coding Conf</span>
    </div>
  );
}

function Form({ image, handleImageChange, removeImg }) {
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [username, setusername] = useState("");
  const [hidd, sethidd] = useState(true);
  function handleButton(e) {
    e.preventDefault();
    if (name && mail && username) {
      sethidd(false);
    }
  }
  return (
    <>
      <Header hidd={hidd} name={name} mail={mail} />
      <div className="form">
        {hidd && (
          <form>
            <label> Upload Avatar</label>
            <div className="content">
              {!image ? (
                <div className="upload">
                  <label for="input1" className="labelfile">
                    <img src={logo4} alt="logo4" className="logo4" />{" "}
                    <span>Drag and drop or click to upload</span>
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="input1"
                    name="input1"
                    aria-describedby="input1_help"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              ) : (
                <div className="myimg">
                  <img
                    src={image}
                    alt="معاينة الصورة"
                    className="uploadedImg"
                  />
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <button
                      className="removeBtn"
                      onClick={removeImg}
                      style={{ marginRight: "10px" }}
                    >
                      Remov Img
                    </button>
                    <label for="input2" className="removeBtn">
                      Change Img
                    </label>
                    <input
                      id="input2"
                      type="file"
                      className="removeBtn"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
              )}
            </div>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Jonas"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            {!name && <span>Please enter a valid full name</span>}
            <label>Email Address</label>
            <input
              type="text"
              placeholder="example@email.com"
              value={mail}
              onChange={(e) => setmail(e.target.value)}
            />
            {!mail.includes("@") && (
              <span>Please enter a valid email address</span>
            )}
            <label>GitHub Username</label>
            <input
              type="text"
              placeholder=" @yourusername"
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            {!username.includes("@") && (
              <span>Please enter a valid github username</span>
            )}
            <button className="btn" onClick={handleButton}>
              Generate My Ticket
            </button>
          </form>
        )}
        {!hidd && (
          <div className="ticket">
            <div className="info">
              <img src={logo3} alt="logo3" />
              <div style={{ marginLeft: "1rem", color: "white" }}>
                <h3>Coding Conf</h3>
                <p>Jan 31, 2025 / Austin, TX</p>
              </div>
            </div>
            <div className="info" style={{ marginTop: "1rem" }}>
              <img src={image} alt="logo3" className="uploadedImg" />
              <div style={{ marginLeft: "1rem", color: "white" }}>
                <h3>{name}</h3>
                <p>{username}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
function Header({ hidd, name, mail }) {
  return (
    <div>
      <div className="header">
        <h1 className="App">
          {hidd
            ? "Your Journey to Coding Conf 2025 Starts Here!"
            : `Congrats ${name} Your ticket is ready`}
        </h1>
        <p>
          {hidd
            ? "Secure your spot at next year's biggest coding conference."
            : `We've emailed your ticket to ${mail} and will send updates in the run up to the event. Coding Conf Jan 31, 2025 /
    Austin, TX`}
        </p>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div class="attribution footer">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
      Coded by <a href="https://github.com/Ahmed-H-Ismael">Ahmed-H-Ismael</a>.
    </div>
  );
}
