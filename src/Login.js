import React, { useEffect, useState } from "react";
import "./Login.css";
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import LoginFrameImage from "./imagini/LoginFrameImage.png";
import Meniujos from "./Meniujos";
import { useNavigate, Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberCredentials, setRememberCredentials] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (storedEmail && storedPassword) {
      setEmail(storedEmail);
      setPassword(storedPassword);
      setRememberCredentials(true);
    }
  }, []);

  useEffect(() => {
    if (rememberCredentials) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  }, [email, password, rememberCredentials]);

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://handballdevsbe.azurewebsites.net/api/utilizatori/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (response.ok) {
        const data = await response.text();
        console.log("API Response:", data);
        if (data && data.length > 0) {
          setIsLoggedIn(true);
          navigate("/admin");
        }
      } else {
        console.error("API Error:", response.statusText);
        setError("Nume sau parola gresita");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };

  return (
    <animated.div style={springProps}>
      <div className="app-container">
        <Meniusus />

        <div className="title-LOGIN">
          <img src={FrameImage} alt="" className="frame-image-LOGIN" />
          <div className="label-container-LOGIN">
            <label className="label_title-LOGIN">Panou Administrator</label>
            <div className="row-title-LOGIN">
              <label className="label_subtitle-LOGIN">Acasa</label>
              <label className="label_subtitle-LOGIN">/</label>
              <label className="label_subtitle_admin-LOGIN">
                Panou Administrator
              </label>
            </div>
          </div>
        </div>
        <div className="container-LOGIN">
          <img src={LoginFrameImage} alt="" className="image-border-LOGIN" />
          <div className="content-LOGIN">
            <label className="content-label-LOGIN">Login</label>
            <div className="container-INPUT-LOGIN">
              <input
                type="email"
                id="email"
                name="email"
                className="input-LOGIN"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                name="password"
                className="input-LOGIN"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="row-retine-LOGIN">
                <label className="save-label-LOGIN">
                  Retine datele de conectare
                </label>
                <div className="ios-switch">
                  <input
                    type="checkbox"
                    id="toggleSwitch"
                    checked={rememberCredentials}
                    onChange={() =>
                      setRememberCredentials(!rememberCredentials)
                    }
                  />
                  <label className="ios-switch-label" htmlFor="toggleSwitch">
                    <div className="ios-switch-slider"></div>
                  </label>
                </div>
              </div>
            </div>

            {isLoggedIn ? (
              <Link to="/admin" className="Submit-LOGIN">
                Conecteaza-te
              </Link>
            ) : (
              <>
                <motion.button
                  className="Submit-LOGIN"
                  onClick={handleLogin}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  Conecteaza-te
                </motion.button>
                {error && (
                  <p className="error-message" style={{ color: "red" }}>
                    {error}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        <Meniujos />
      </div>
    </animated.div>
  );
};

export default Login;
