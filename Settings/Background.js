import React, { useState, useEffect } from 'react';

function ImageUploadForm() {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setBackgroundImage(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (backgroundImage) {
      // Apply the background image to all target elements
      const elements = document.querySelectorAll('.target-element');
      elements.forEach((element) => {
        element.style.backgroundImage = `url(${backgroundImage})`;
      });
    }
  }, [backgroundImage]);

  return (
    <form onSubmit={handleImageUpload}>
      <input type="file" id="imageInput" name="image" onChange={handleImageUpload} />
      <button type="submit">Upload and Apply</button>
    </form>
  );
}