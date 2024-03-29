import React, { useRef } from "react";
import "./AdminStiri.css";
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from "./imagini/AdminWorkSpaceImage.png";
import AdminIndexImage from "./imagini/AdminiIndexImage.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const AdminStiri = () => {
  const [StiriData, setStiriData] = useState({
    titlu: "",
    continut: "",
    urlPoza: "",
    hashTaguri: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const [inputErrors, setInputErrors] = useState({});
  const [successMessages, setSuccessMessages] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStiriData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setInputErrors((prevErrors) => ({ ...prevErrors, [id]: false }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;

        if (base64Image) {
          const imageWithoutPrefix = base64Image.replace(
            /^data:image\/(png|jpeg|jpg);base64,/,
            ""
          );

          setStiriData((prevData) => ({
            ...prevData,
            urlPoza: imageWithoutPrefix,
          }));

          setSelectedImage(base64Image);
          console.log("Base64 Image without prefix:", imageWithoutPrefix);
        } else {
          console.error("Error loading image.");
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSelectImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCreateStire = async () => {
    if (!validateInputs()) {
      console.error("Validation failed. Please fill in all required fields.");
      return;
    }

    try {
      console.log("State before API call:", StiriData);

      const response = await fetch(
        "https://handballdevsbe.azurewebsites.net/api/stire?creatorId=95d60880-cab8-4888-9f71-20e44eb60113",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(StiriData),
        }
      );

      console.log("API Response:", response);

      if (response.ok) {
        console.log("Stire created successfully.");
        const timestamp = new Date().getTime();
        const newSuccessMessage = `Stirea cu titlul  ${StiriData.titlu} a fost adaugata`;
        setSuccessMessages((prevMessages) => {
          if (prevMessages.length >= 7) {
            return [{ message: newSuccessMessage, id: timestamp }];
          } else {
            return [
              ...prevMessages,
              { message: newSuccessMessage, id: timestamp },
            ];
          }
        });

        console.log("State after API call:", StiriData);
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };

  const validateInputs = () => {
    const requiredFields = ["titlu", "hashTaguri", "continut"];
    const errors = {};

    requiredFields.forEach((field) => {
      if (StiriData[field] === "" || StiriData[field] === null) {
        errors[field] = true;
      }
    });

    setInputErrors(errors);

    return Object.keys(errors).length === 0;
  };

  return (
    <div className="app-container">
      <Meniusus />

      <div className="title-ADMStiri">
        <img src={FrameImage} alt="" className="frame-image-ADMStiri" />
        <div className="label-container-ADMStiri">
          <label className="label_title-ADMStiri">Panou Administrator</label>
          <div className="row-title-ADMStiri">
            <label className="label_subtitle-ADMStiri">Acasa</label>
            <label className="label_subtitle-ADMStiri">/</label>
            <label className="label_subtitle_admin-ADMStiri">
              Panou Administrator
            </label>
          </div>
        </div>
      </div>

      <div className="Container-ADMStiri">
        <div className="Menu-ADMStiri">
          <img
            src={AdminMenuImage}
            alt=""
            className="Admin-menu-img-ADMStiri"
          />
          <label className="ADMStiri_titles">Panou Administrator</label>
          <div className="options_ADMStiri">
            <Link to="/adminstiri" className="ADMStiri_options1">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Stiri
              </motion.div>
            </Link>
            <Link to="/adminmeciuri" className="ADMStiri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Meciuri
              </motion.div>
            </Link>
            <Link to="/adminjucatori" className="ADMStiri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Jucatorii Seniori
              </motion.div>
            </Link>
            <Link to="/adminjuniori" className="ADMStiri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Jucatorii Juniori
              </motion.div>
            </Link>
            <Link to="/admincadeti" className="ADMStiri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Jucatori Cadeti
              </motion.div>
            </Link>
            <Link to="/adminstaff" className="ADMStiri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Staff
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="Workspace-ADMStiri">
          <img
            src={AdminWorkSpaceImage}
            alt=""
            className="Admin-workspace-img-ADMStiri"
          />
          <label className="admin_titles1-ADMStiri">
            Creaza Stire Noua / Editeaza stire
          </label>
          <div className="workspace-row-ADMStiri">
            <label
              className={`workspace-labels-ADMStiri${
                inputErrors.titlu ? " error" : ""
              }`}
              htmlFor="titlu"
            >
              Titlu
            </label>
            <input
              type="text"
              id="titlu"
              className={`workspace-inputs-ADMStiri${
                inputErrors.titlu ? " error" : ""
              }`}
              onChange={handleInputChange}
            />

            <label
              className={`workspace-labels-ADMStiri${
                inputErrors.hashTaguri ? " error" : ""
              }`}
              htmlFor="hashTaguri"
            >
              HashTaguri #
            </label>
            <input
              type="text"
              id="hashTaguri"
              className={`workspace-inputs-ADMStiri${
                inputErrors.hashTaguri ? " error" : ""
              }`}
              onChange={handleInputChange}
            />
          </div>

          <div className="workspace-row1-ADMStiri">
            <label
              className={`workspace-labels1-ADMStiri${
                inputErrors.continut ? " error" : ""
              }`}
              htmlFor="continut"
            >
              Continut
            </label>
            <textarea
              id="continut"
              className={`workspace-inputs-descriere-ADMStiri${
                inputErrors.continut ? " error" : ""
              }`}
              onChange={handleInputChange}
            ></textarea>
            <button
              className="workspace-button-ADMStiri"
              onClick={handleCreateStire}
            >
              Posteaza stire
            </button>

            <Link to="/noutatidelete" className="workspace-button-ADMStiri">
              Șterge stire
            </Link>
          </div>

          <div className="workspace-row3-ADMStiri">
            <label className="workspace-labels-ADMStiri">
              Incarca poza intr-o postare:
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
            />

            <button
              className="workspace-button-programare-ADMStiri"
              onClick={handleSelectImage}
            >
              Incarca poza
            </button>

            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  maxWidth: "12vw",
                  maxHeight: "12vw",
                }}
              />
            )}
          </div>

          <div className="workspace-row-ADMStiri">
            <label className="workspace-labels-upper-ADMStiri">
              Stiri publicate
            </label>
          </div>
          <div className="workspace-row-index-ADMmeciuri">
            {successMessages.map(({ message, id }) => (
              <div key={id} className="overlay-text-container-stiri">
                <div className="overlay-text-stiri">{message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStiri;
