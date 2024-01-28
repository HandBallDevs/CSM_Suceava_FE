import React, { useEffect, useState } from "react";
import "./AdminMeciuri.css";
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from "./imagini/AdminWorkSpaceImage.png";
import AdminIndexImage from "./imagini/AdminiIndexImage.png";
import { useNavigate, Link } from "react-router-dom";
import { useRef } from "react";

const AdminMeciuri = () => {
  const [meciData, setMeciData] = useState({
    tipCampionat: 0,
    editia: '',
    statusMeci: '',
    data: '',
    urlPoza: '',
    numeAdversar: '',
    locatia: '',
    linkLive: '',
    acasa: true,
    scorCSUSV: 0,
    scorAdversar: 0
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;

    // Update state based on input type
    setMeciData((prevData) => {
      const newValue =
        type === "checkbox"
          ? checked
          : id.toLowerCase() === "statusmeci"
          ? parseInt(value, 10)
          : value;

      const updatedData = {
        ...prevData,
        [id]: id.toLowerCase() === "data" ? newValue.split("T")[0] : newValue,
      };

      console.log("Updated Data:", updatedData); // Log the updated data

      return updatedData;
    });
  };

  const handleCreateMeci = async () => {
    try {
      console.log("State before API call:", meciData); // Log the state before API call

      const formattedData = {
        ...meciData,
        data: meciData.data ? new Date(meciData.data).toISOString() : null,
      };

      console.log("Formatted Data:", formattedData); // Log the formatted data

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

      console.log("API Response:", response); // Log the API response

      if (response.ok) {
        console.log("Meci created successfully.");
        // Optionally, you can navigate to a different page after the Meci is created
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("API Error:", error.message);
    }
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
    // Trigger the click event of the file input
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
              Stiri
            </Link>
            <Link to="/adminmeciuri" className="ADMmeciuri_options">
              Meciuri
            </Link>
            <Link to="/adminjucatori" className="ADMmeciuri_options">
              Jucatorii Seniori
            </Link>

            <Link to="/adminjuniori" className="ADMmeciuri_options">
              Jucatorii Juniori
            </Link>
            <Link to="/admincadeti" className="ADMmeciuri_options">
              Jucatori Cadeti
            </Link>
            <Link to="/adminstaff" className="ADMmeciuri_options">
              Staff
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
              <label className="workspace-labels-ADMmeciuri" htmlFor="editia">
                Editia:
              </label>
              <label
                className="workspace-labels-ADMmeciuri"
                htmlFor="datasiora"
              >
                Data si ora:
              </label>

              <label className="workspace-labels-ADMmeciuri" htmlFor="locatia">
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
                className="workspace-inputs-ADMmeciuri"
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
                className="workspace-inputs-ADMmeciuri"
                value={meciData.locatia}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="statusMeci"
                className="workspace-inputs-ADMmeciuri"
                value={meciData.statusMeci}
                onChange={handleInputChange}
              />
            </div>

            <div className="workspace-collumn-ADMmeciuri">
              <label
                className="workspace-labels-ADMmeciuri"
                htmlFor="numeAdversar"
              >
                Nume adversar:
              </label>
              <label className="workspace-labels-ADMmeciuri" htmlFor="acasa">
                Acasa:
              </label>
              <label
                className="workspace-labels-ADMmeciuri"
                htmlFor="scorcsusv"
              >
                Scor CSUSV:
              </label>
              <label
                className="workspace-labels-ADMmeciuri"
                htmlFor="scoradversar"
              >
                Scor adversar:
              </label>
            </div>

            <div className="workspace-collumn-input-ADMmeciuri">
              <input
                type="text"
                id="numeAdversar"
                className="workspace-inputs-ADMmeciuri"
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
                className="workspace-inputs-ADMmeciuri"
                value={meciData.scorcsusv}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="scorAdversar"
                className="workspace-inputs-ADMmeciuri"
                value={meciData.scoradversar}
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
            <button className="workspace-button-submit-ADMmeciuri">
              Actualizeaza meci
            </button>
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
            <img
              src={AdminIndexImage}
              alt=""
              className="AdminIndexImage-ADMmeciuri"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMeciuri;
