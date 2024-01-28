import React, { useEffect, useState } from "react";
import "./AdminMeciuri.css";
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from "./imagini/AdminWorkSpaceImage.png";
import AdminIndexImage from "./imagini/AdminiIndexImage.png";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";

const AdminMeciuri = () => {
  const [meciData, setMeciData] = useState({
    tipCampionat: 0,
    editia: "",
    statusMeci: "",
    data: "",
    urlPoza: "",
    numeAdversar: "",
    locatia: "",
    linkLive: "",
    acasa: true,
    scorCSUSV: 0,
    scorAdversar: 0,
  });

  const [inputErrors, setInputErrors] = useState({});
  const [successMessages, setSuccessMessages] = useState([]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    setInputErrors((prevErrors) => ({ ...prevErrors, [id]: false }));

    setMeciData((prevData) => {
      const newValue =
        type === "checkbox"
          ? checked
          : id.toLowerCase() === "statusmeci"
          ? parseInt(value, 10)
          : value;

      if (id.toLowerCase() === "data") {
        const currentDate = new Date();
        const selectedDate = new Date(value);

        const isPastDate = selectedDate < currentDate;

        const updatedData = {
          ...prevData,
          [id]: value.split("T")[0],
          statusMeci: isPastDate ? 0 : 1,
        };

        console.log("Updated Data:", updatedData);

        return updatedData;
      }

      const updatedData = {
        ...prevData,
        [id]: newValue,
      };

      console.log("Updated Data:", updatedData);

      return updatedData;
    });
  };

  const handleCreateMeci = async () => {
    if (!validateInputs()) {
      console.error("Validation failed. Please fill in all required fields.");
      return;
    }

    try {
      console.log("State before API call:", meciData);

      const formattedData = {
        ...meciData,
        data: meciData.data ? new Date(meciData.data).toISOString() : null,
      };

      console.log("Formatted Data:", formattedData);
      const response = await fetch(
        "https://handballdevsbe.azurewebsites.net/api/meci",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );

      console.log("API Response:", response);

      if (response.ok) {
        console.log("Meci created successfully.");
        const timestamp = new Date().getTime();
        const newSuccessMessage = `Meciul dintre CSU Suceava si ${meciData.numeAdversar} a fost adaugat cu succes`;
        setSuccessMessages((prevMessages) => {
          if (prevMessages.length >= 8) {
            return [{ message: newSuccessMessage, id: timestamp }];
          } else {
            return [
              ...prevMessages,
              { message: newSuccessMessage, id: timestamp },
            ];
          }
        });
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("API Error:", error.message);
    }
  };

  const validateInputs = () => {
    const requiredFields = [
      "editia",
      "numeAdversar",
      "locatia",
      "scorCSUSV",
      "scorAdversar",
    ];
    const errors = {};

    requiredFields.forEach((field) => {
      const fieldName =
        field === "scorCSUSV"
          ? "scorcsusv"
          : field === "scorAdversar"
          ? "scoradversar"
          : field;

      if (meciData[fieldName] === "" || meciData[fieldName] === null) {
        errors[fieldName] = true;
      }
    });

    setInputErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
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

          setMeciData((prevData) => ({
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

  return (
    <div className="app-container">
      <Meniusus />
      <div className="title-ADMmeciuri">
        <img src={FrameImage} alt="" className="frame-image-ADMmeciuri" />
        <div className="label-container-ADMmeciuri">
          <label className="label_title-ADMmeciuri">Panou Administrator</label>
          <div className="row-title-ADMmeciuri">
            <label className="label_subtitle-ADMmeciuri">Acasa</label>
            <label className="label_subtitle-ADMmeciuri">/</label>
            <label className="label_subtitle_admin-ADMmeciuri">
              Panou Administrator
            </label>
          </div>
        </div>
      </div>

      <div className="Container-ADMmeciuri">
        <div className="Menu-ADMmeciuri">
          <img
            src={AdminMenuImage}
            alt=""
            className="Admin-menu-img-ADMmeciuri"
          />
          <label className="ADMmeciuri_titles">Panou Administrator</label>
          <div className="options_ADMmeciuri">
            <Link to="/adminstiri" className="ADMmeciuri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Stiri
              </motion.div>
            </Link>
            <Link to="/adminmeciuri" className="ADMmeciuri_options1">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Meciuri
              </motion.div>
            </Link>
            <Link to="/adminjucatori" className="ADMmeciuri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Jucatorii Seniori
              </motion.div>
            </Link>
            <Link to="/adminjuniori" className="ADMmeciuri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Jucatorii Juniori
              </motion.div>
            </Link>
            <Link to="/admincadeti" className="ADMmeciuri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Jucatori Cadeti
              </motion.div>
            </Link>
            <Link to="/adminstaff" className="ADMmeciuri_options">
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
              >
                Staff
              </motion.div>
            </Link>
          </div>
        </div>

        <div className="Workspace-ADMmeciuri">
          <img
            src={AdminWorkSpaceImage}
            alt=""
            className="Admin-workspace-img-ADMmeciuri"
          />
          <label className="admin_titles1-ADMmeciuri">
            Creaza Meci nou / Editeaza meciuri
          </label>

          <div className="workspace-row-ADMmeciuri">
            <div className="workspace-collumn-ADMmeciuri">
              <label
                className={`workspace-labels-ADMmeciuri${
                  inputErrors.editia ? " error" : ""
                }`}
                htmlFor="editia"
              >
                Editia:
              </label>
              <label
                className="workspace-labels-ADMmeciuri"
                htmlFor="datasiora"
              >
                Data si ora:
              </label>
              <label
                className={`workspace-labels-ADMmeciuri${
                  inputErrors.locatia ? " error" : ""
                }`}
                htmlFor="locatia"
              >
                Locatia:
              </label>

              <label
                className="workspace-labels-ADMmeciuri"
                htmlFor="statusMeci"
              >
                Status meci:
              </label>
            </div>

            <div className="workspace-collumn-input-ADMmeciuri">
              <input
                type="text"
                id="editia"
                className={`workspace-inputs-ADMmeciuri${
                  inputErrors.editia ? " error" : ""
                }`}
                value={meciData.editia}
                onChange={handleInputChange}
              />
              <input
                type="date"
                id="data"
                className="workspace-inputs-ADMmeciuri"
                defaultValue={meciData.data}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="locatia"
                className={`workspace-inputs-ADMmeciuri${
                  inputErrors.locatia ? " error" : ""
                }`}
                value={meciData.locatia}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="statusMeci"
                className="workspace-inputs-ADMmeciuri"
                value={
                  meciData.statusMeci === 0
                    ? "Meci terminat"
                    : "Meci din viitor"
                }
                readOnly
              />
            </div>

            <div className="workspace-collumn-ADMmeciuri">
              <label
                className={`workspace-labels-ADMmeciuri${
                  inputErrors.numeAdversar ? " error" : ""
                }`}
                htmlFor="numeAdversar"
              >
                Nume adversar:
              </label>
              <label className="workspace-labels-ADMmeciuri" htmlFor="acasa">
                Acasa:
              </label>

              <label
                className={`workspace-labels-ADMmeciuri${
                  inputErrors.scorCSUSV ? " error" : ""
                }`}
                htmlFor="scorCSUSV"
              >
                Scor CSUSV:
              </label>

              <label
                className={`workspace-labels-ADMmeciuri${
                  inputErrors.scorAdversar ? " error" : ""
                }`}
                htmlFor="scorAdversar"
              >
                Scor adversar:
              </label>
            </div>

            <div className="workspace-collumn-input-ADMmeciuri">
              <input
                type="text"
                id="numeAdversar"
                className={`workspace-inputs-ADMmeciuri${
                  inputErrors.numeAdversar ? " error" : ""
                }`}
                value={meciData.numeadversar}
                onChange={handleInputChange}
              />
              <input
                type="checkbox"
                id="acasa"
                className="workspace-checkbox-ADMmeciuri"
                checked={meciData.acasa}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="scorCSUSV"
                className={`workspace-inputs-ADMmeciuri${
                  inputErrors.scorCSUSV ? " error" : ""
                }`}
                value={meciData.statusMeci === 1 ? 0 : meciData.scorcsusv}
                readOnly={meciData.statusMeci === 1}
              />
              <input
                type="text"
                id="scorAdversar"
                className={`workspace-inputs-ADMmeciuri${
                  inputErrors.scoraAversar ? " error" : ""
                }`}
                value={meciData.statusMeci === 1 ? 0 : meciData.scoradversar}
                readOnly={meciData.statusMeci === 1}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="workspace-row1-ADMmeciuri">
            <button
              className="workspace-button-submit-ADMmeciuri"
              onClick={handleCreateMeci}
            >
              Creaza meci nou
            </button>

            
              <Link
                to="/stergemeci"
                className="workspace-button-submit-ADMmeciuri"
              >
                Sterge meci
              </Link>
       
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
            />
            <button
              className="workspace-button-submit-ADMmeciuri"
              onClick={handleSelectImage}
            >
              Incarca poza adversar
            </button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  maxWidth: "5vw",
                  maxHeight: "5vw",
                }}
              />
            )}
          </div>

          <div className="workspace-row-index-ADMmeciuri">
            <label className="workspace-labels-upper-ADMmeciuri">
              Meciuri publicate
            </label>
          </div>
          <div className="workspace-row-index-ADMmeciuri">
            {successMessages.map(({ message, id }) => (
              <div key={id} className="overlay-text-container-meci">
                <div className="overlay-text-meci">{message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMeciuri;
