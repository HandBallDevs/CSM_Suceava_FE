import React, { useState, useEffect } from 'react';
import './AdaugaJucator.css';
import Meniusus from './Meniusus';
import FrameImage from './imagini/frame.png';
import ImgJucator from './imagini/PozaJucaror.png';
import { Link } from 'react-router-dom';
import { isDisabled } from '@testing-library/user-event/dist/utils';
const AdaugaJucator = () => {
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    pozitie: '',
    datan: '',
    nationalitate: '',
    inaltime: '',
    descriere: '',
  });

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [emptyFields, setEmptyFields] = useState([]);
  const [originalImageSrc, setOriginalImageSrc] = useState(ImgJucator);
  const [imgSrc, setImgSrc] = useState(ImgJucator);
  const [isImageSelected, setIsImageSelected] = useState(false);

  useEffect(() => {
    const isFilled = Object.values(formData).every((value) => value !== '');
    setAllFieldsFilled(isFilled);
  }, [formData]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Image = e.target.result;

        if (base64Image) {
          const imageWithoutPrefix = base64Image.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
          setImgSrc(imageWithoutPrefix);
          setIsImageSelected(true);
          console.log('Base64 Image without prefix:', imageWithoutPrefix);
        } else {
          console.error('Error loading image.');
        }
      };

      reader.readAsDataURL(file);

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
    setFormData({
      ...formData,
      [id]: value,
    });

    const isFieldFilled = value.trim() !== '';
    setAllFieldsFilled(Object.values({ ...formData, [id]: value }).every((value) => value !== ''));
    setEmptyFields((prevEmptyFields) =>
      isFieldFilled ? prevEmptyFields.filter((field) => field !== id) : [...prevEmptyFields, id]
    );
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

  const handleAdaugaJucator = async () => {
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
      const newData = {
        nume: formData.nume,
        prenume: formData.prenume,
        nationalitate: formData.nationalitate,
        tipLot: 0,
        post: formData.pozitie,
        urlPoza: imgSrc,
        dataNastere: formData.datan,
        inaltime: parseFloat(formData.inaltime),
        descriere: formData.descriere,
      };
      console.log('Request Payload:', newData);

      const response = await fetch('https://handballdevsbe.azurewebsites.net/api/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('API Response:', data);
        window.location.reload();
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

      <div className="title-ADD">
        <img src={FrameImage} alt="" className="frame-image-ADD" />
        <div className="label-container-ADD">
          <label className="label_title-ADD">Panou Administrator</label>
          <div className="row-title-ADD">
            <label className="label_subtitle-ADD">Acasa</label>
            <label className="label_subtitle-ADD">/</label>
            <label className="label_subtitle_Admin-ADD">Panou Administrator</label>
          </div>
        </div>
      </div>

      <div className='ADD_jucator-title'>
        <label className="ADD_jucator-title_label">Adauga jucator lot seniori</label>
      </div>

      <div className='ADD_jucator'>
        <div className='ADD_jucator-collumn'>
        <label className="ADD_jucator-labels" htmlFor="nume">Nume</label>
             <label className="ADD_jucator-labels" htmlFor="prenume">Prenume</label>
             <label className="ADD_jucator-labels" htmlFor="pozitie">Pozitie joc</label>
             <label className="ADD_jucator-labels" htmlFor="datan">Data nastere</label>
             <label className="ADD_jucator-labels" htmlFor="nationalitate">Nationalitate</label>
             <label className="ADD_jucator-labels" htmlFor="inaltime">Inaltime</label>
             <label className="ADD_jucator-labels" htmlFor="descriere">Descriere</label>
        </div>
        <div className='ADD_jucator-collumn'>
        <input type="text" id="nume" className="ADD_jucator-input" onChange={handleInputChange} placeholder={'Nume...'}/>
          <input type="text" id="prenume" className="ADD_jucator-input" onChange={handleInputChange} placeholder={'Prenume...'}/>
          <input type="text" id="pozitie" className="ADD_jucator-input" onChange={handleInputChange} placeholder={'Pozitie jucator...'}/>
          <input type="text" id="datan" className="ADD_jucator-input" onChange={handleInputChange} placeholder={'Data : yyyy-dd-mm...'}/>
          <input type="text" id="nationalitate" className="ADD_jucator-input" onChange={handleInputChange} placeholder={'Nationalitete...'}/>
          <input type="text" id="inaltime" className="ADD_jucator-input" onChange={handleInputChange} placeholder={'Inaltime...'}/>
          <input type="text" id="descriere" className="ADD_jucator-input" onChange={handleInputChange} placeholder={'Descriere...'}/>

        </div>
        <div className='ADD_jucator-collumn1'>
        <img src={originalImageSrc} alt=""  className="iamgine_jucator-ADD"  />
        <label htmlFor="imageInput" className="custom-label">
        Incarca Imagine
      </label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        className="Incarca-imagine-jucator-ADD"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
       {isImageSelected || (
          <label className="red-label">Require photo</label>
        )}
        </div>
      </div>

      <div className='ADD_jucator2'>
      
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
            Adauga jucator
          </button>
        ) : (
          <Link to="/adminjucatori">
            <button
              className="Incarca-imagine-jucator-ADD"
              onClick={handleAdaugaJucator}
            >
              Adauga jucator
            </button>
          </Link>
        )}
</div>
    </div>
  );
};

export default AdaugaJucator;
