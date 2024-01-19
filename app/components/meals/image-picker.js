'use client'
import Image from 'next/image';
import classes from './image-picker.module.css';
import { useRef, useState } from 'react';

export default function ImagePicker({label, name}) {
  const [image, setImage] = useState(null);
  const inputRef =  useRef();

  const onSelect = () => {
    inputRef.current?.click();
  }

  const onPickImage = (event) => {
    const file = event.target.files[0];

    if(!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
    }

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!image && <p>No file selected</p>}
          {image && <Image src={image} fill alt='image' />}
        </div>
        <input
          ref={inputRef}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          required
          onChange={onPickImage}
          multiple={false}
        />
        <button onClick={onSelect} className={classes.button} type='button'>Pick an Image</button>
      </div>
    </div>
  );
}