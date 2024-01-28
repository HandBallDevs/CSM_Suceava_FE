import React, { useRef } from "react";
import "./AdminStiri.css";
import Meniusus from "./Meniusus";
import FrameImage from "./imagini/frame.png";
import AdminMenuImage from "./imagini/AdminMenuImage.png";
import AdminWorkSpaceImage from "./imagini/AdminWorkSpaceImage.png";
import AdminIndexImage from "./imagini/AdminiIndexImage.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminStiri = () => {
  const [StiriData, setStiriData] = useState({
    titlu: "",
    continut: "",
    urlPoza: "",
    hashTaguri: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStiriData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
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
    // Trigger the click event of the file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCreateStire = async () => {
    try {
      console.log("State before API call:", StiriData); // Log the state before API call

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

      console.log("API Response:", response); // Log the API response

      if (response.ok) {
        console.log("Stire created successfully.");
        // Optionally, you can navigate to a different page after the Meci is created
        console.log("State after API call:", StiriData); // Log the state before API call
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("API Error:", error.message);
    }
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
            <Link to="/adminstiri" className="ADMStiri_options">
              Stiri
            </Link>
            <Link to="/adminmeciuri" className="ADM_options">
              Meciuri
            </Link>
            <Link to="/adminjucatori" className="ADMStiri_options">
              Jucatorii Seniori
            </Link>
            <Link to="/adminjuniori" className="ADMStiri_options">
              Jucatorii Juniori
            </Link>
            <Link to="/admincadeti" className="ADMStiri_options">
              Jucatori Cadeti
            </Link>
            <Link to="/adminstaff" className="ADMStiri_options">
              Staff
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
            <label className="workspace-labels-ADMStiri" htmlFor="titlu">
              Titlu
            </label>
            <input
              type="text"
              id="titlu"
              className="workspace-inputs-ADMStiri"
              onChange={handleInputChange}
            />

            <label className="workspace-labels-ADMStiri" htmlFor="hashTaguri">
              HashTaguri #
            </label>
            <input
              type="text"
              id="hashTaguri"
              className="workspace-inputs-ADMStiri"
              onChange={handleInputChange}
            />
          </div>

          <div className="workspace-row1-ADMStiri">
            <label className="workspace-labels1-ADMStiri" htmlFor="continut">
              Continut
            </label>
            <input
              type="text"
              id="continut"
              className="workspace-inputs-descriere-ADMStiri"
              onChange={handleInputChange}
            />
            <button
              className="workspace-button-ADMStiri"
              onClick={handleCreateStire}
            >
              Posteaza stire
            </button>

            <button className="workspace-button-ADMStiri">
              Actualizeaza stire
            </button>
          </div>

          <div className="workspace-row3-ADMStiri">
            <label className="workspace-labels-ADMStiri">
              Incarca intr-o postare:
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

          <div className="workspace-row-ADMStiri">
            <img
              src={AdminIndexImage}
              alt=""
              className="AdminIndexImage-ADMStiri"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStiri;
