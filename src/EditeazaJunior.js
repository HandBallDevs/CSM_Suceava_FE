import React, { useState, useEffect } from 'react';
import './EditeazaJucator.css';
import Meniusus from './Meniusus';
import FrameImage from './imagini/frame.png';
import ImgJucator from './imagini/PozaJucaror.png';
import { Link, useParams } from 'react-router-dom';

const EditeazaJunior = () => {
  const { playerId } = useParams();

  console.log('Player ID from route:', playerId);

  const [loading, setLoading] = useState(true);

  const [playerData, setPlayerData] = useState({
    nume: '',
    prenume: '',
    pozitie: '',
    datan: '',
    nationalitate: '',
    inaltime: '',
    descriere: '',
    imagine: '', 
  });

  // Add state for image handling
  const [originalImageSrc, setOriginalImageSrc] = useState(ImgJucator);
  const [imgSrc, setImgSrc] = useState(ImgJucator);
  const [isImageSelected, setIsImageSelected] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);
 

  useEffect(() => {
    const fetchPlayerData = async () => {
      try {
        if (!playerId) {
          console.error('Player ID is undefined.');
          return;
        }

        console.log('Fetching data for player ID:', playerId);

        const response = await fetch(
          `https://handballdevsbe.azurewebsites.net/api/staff?tipLot=1&id=${playerId}`
        );
        console.log('API Response:', response);

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched Data:', data);

          if (data && data.length > 0) {
            console.log('Fetched Data:', data);

            const selectedPlayer = data.find((player) => player.id === playerId);

            if (selectedPlayer) {
              setPlayerData({
                nume: selectedPlayer.nume,
                prenume: selectedPlayer.prenume,
                pozitie: selectedPlayer.post,
                datan: selectedPlayer.dataNastere,
                nationalitate: selectedPlayer.nationalitate,
                inaltime: selectedPlayer.inaltime,
                descriere: selectedPlayer.descriere,
                imagine: selectedPlayer.urlPoza,
              });

              // Set image states for existing image
              setImgSrc(selectedPlayer.urlPoza);
              setOriginalImageSrc(selectedPlayer.urlPoza);
              setIsImageSelected(true);
            } else {
              console.error(`Player with ID ${playerId} not found in the response.`);
            }
          } else {
            console.error('No data received from the API.');
          }
        } else {
          console.error('API Error:', response.statusText);
        }
      } catch (error) {
        console.error('API Error:', error.message);
      }
    };

    // Fetch data when playerId changes
    if (playerId) {
      fetchPlayerData();
    }
  }, [playerId]);

  // Add image change handler
  const handleImageChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const base64Image = e.target.result;
  
        if (base64Image) {
          // Remove the prefix before setting in the state
          const imageWithoutPrefix = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
          setImgSrc(imageWithoutPrefix);
          setIsImageSelected(true);
          console.log('Base64 Image without prefix:', imageWithoutPrefix);
        } else {
          console.error('Error loading image.');
        }
      };
  
      reader.readAsDataURL(file);
  
      // Make a copy of the original image before conversion
      const originalReader = new FileReader();
      originalReader.onload = (e) => {
        const originalBase64Image = e.target.result;
        setOriginalImageSrc(originalBase64Image);
      };
      originalReader.readAsDataURL(file);
    }
  };
  
  

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let sanitizedValue = value;
    let isValid = true;
  
    switch (id) {
      case 'datan':
        // Validate and format datan as yyyy-mm-dd
        isValid = validateDateFormat(value);
        
        
       
        break;
      case 'inaltime':
        // Validate inaltime as a numeric value
        isValid = validateNumeric(value);
        sanitizedValue = isValid ? value : '';
        break;
      default:
        // For other fields, just trim leading/trailing spaces
        sanitizedValue = sanitizedValue.trim();
    }
  
    setPlayerData({
      ...playerData,
      [id]: sanitizedValue,
    });
  
    const isFieldFilled = sanitizedValue !== '';
    setAllFieldsFilled(Object.values({ ...playerData, [id]: sanitizedValue }).every((value) => value !== ''));
    setEmptyFields((prevEmptyFields) =>
      isFieldFilled ? prevEmptyFields.filter((field) => field !== id) : [...prevEmptyFields, id]
    );
  
    // Show error message if the format is incorrect
    const labelElement = document.querySelector(`label[for=${id}]`);
    if (labelElement) {
      isValid ? labelElement.classList.remove('unfilled-field') : labelElement.classList.add('unfilled-field');
    }
  };
  
  const validateDateFormat = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString) && !/[a-zA-Z]/.test(dateString);
};
  
  const validateNumeric = (value) => {
    // Validate if the value is a number (integer or double)
    return !isNaN(value);
  };
  

  const handleLabelStyling = () => {
    const labels = document.querySelectorAll('.ADD_jucator-labels');
  
    labels.forEach((label) => {
      const id = label.getAttribute('for');
      const input = document.getElementById(id);
  
      if (input && input.value.trim() === '') {
        label.classList.add('unfilled-field');
      } else {
        label.classList.remove('unfilled-field');
      }
    });
  };

  const handleEditeazaJucator = async () => {
    console.log('handleAdaugaJucator called');
    console.log('isImageSelected:', isImageSelected);
    console.log('allFieldsFilled:', allFieldsFilled);

    if (!isImageSelected || !allFieldsFilled) {
      console.log('Not all fields filled.');

      emptyFields.forEach((field) => {
        const labelElement = document.querySelector(`label[for=${field}]`);
        if (labelElement) {
          labelElement.classList.add('unfilled-field');
        }
      });

      alert('ALL FIELDS REQUIRED');
      return;
    }
    try {
      const updatedData = {
        nume: playerData.nume,
        prenume: playerData.prenume,
        nationalitate: playerData.nationalitate,
        tipLot: 1,
        post: playerData.pozitie,
        urlPoza: imgSrc,
        dataNastere: playerData.datan,
        inaltime: parseFloat(playerData.inaltime),
        descriere: playerData.descriere,
      };
      console.log('Request Payload:', updatedData); // Log the payload

      const response = await fetch(
        `https://handballdevsbe.azurewebsites.net/api/staff/?tipLot=1&id=${playerId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        window.location.reload();
        // Add any further logic or state updates as needed
      } else {
        console.error('API Error:', response.statusText);
      }
    } catch (error) {
      console.error('API Error:', error.message);
    }
  };

  return (
    <div className="app-container">
      <Meniusus />

      <div className="title-EDIT">
        <img src={FrameImage} alt="" className="frame-image-EDIT" />
        <div className="label-container-EDIT">
          <label className="label_title-EDIT">Panou Administrator</label>
          <div className="row-title-EDIT">
            <label className="label_subtitle-EDIT">Acasa</label>
            <label className="label_subtitle-EDIT">/</label>
            <label className="label_subtitle_Admin-EDIT">Panou Administrator</label>
          </div>
        </div>
      </div>
      <div className="edit_jucator-title">
        <label className="edit_jucator-title_label">Editeaza jucator lot seniori</label>
      </div>
      <div className="edit_jucator">
        <div className="edit_jucator-collumn">
          <label className="edit_jucator-labels" htmlFor="nume">
            Nume
          </label>
          <label className="edit_jucator-labels" htmlFor="prenume">
            Prenume
          </label>
          <label className="edit_jucator-labels" htmlFor="pozitie">
            Pozitie joc
          </label>
          <label className="edit_jucator-labels" htmlFor="datan">
            Data nastere
          </label>
          <label className="edit_jucator-labels" htmlFor="nationalitate">
            Nationalitate
          </label>
          <label className="edit_jucator-labels" htmlFor="inaltime">
            Inaltime
          </label>
          <label className="edit_jucator-labels" htmlFor="descriere">
            Descriere
          </label>
        </div>
        <div className="edit_jucator-collumn">
          <input
            type="text"
            id="nume"
            className="edit_jucator-input"
            onChange={handleInputChange}
            value={playerData.nume ?? ''}
          />
          <input
            type="text"
            id="prenume"
            className="edit_jucator-input"
            onChange={handleInputChange}
            value={playerData.prenume ?? ''}
          />
          <input
            type="text"
            id="pozitie"
            className="edit_jucator-input"
            onChange={handleInputChange}
            value={playerData.pozitie ?? ''}
          />
          <input
            type="text"
            id="datan"
            className="edit_jucator-input"
            onChange={handleInputChange}
            value={playerData.datan ?? ''}
          />
          <input
            type="text"
            id="nationalitate"
            className="edit_jucator-input"
            onChange={handleInputChange}
            value={playerData.nationalitate ?? ''}
          />
          <input
            type="text"
            id="inaltime"
            className="edit_jucator-input"
            onChange={handleInputChange}
            value={playerData.inaltime ?? ''}
          />
          <input
            type="text"
            id="descriere"
            className="edit_jucator-input"
            onChange={handleInputChange}
            value={playerData.descriere ?? ''}
          />
        </div>
        <div className="edit_jucator-collumn1">
          <img src={originalImageSrc} alt="" className="iamgine_jucator-edit" />
          <label htmlFor="imageInput" className="custom-label">
            Incarca Imagine
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            className="Incarca-imagine-jucator"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          
        </div>
      </div>
      <div className="edit_jucator2">
      {(!isImageSelected || !allFieldsFilled) ? (
          <button
            className="Incarca-imagine-jucator-ADD"
            onClick={() => {
              emptyFields.forEach((field) => {
                const labelElement = document.querySelector(`label[for=${field}]`);
                if (labelElement) {
                  labelElement.classList.add('unfilled-field');
                }
              });
              
              handleLabelStyling();
            }}
          >
            Editeaza jucator
          </button>
        ) : (
          <Link to="/adminjuniori" className="Incarca-imagine-jucator-ADD">
            <button
              className="Incarca-imagine-jucator-ADD"
              onClick={handleEditeazaJucator}
            >
              Editeaza jucator
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default EditeazaJunior;
