// Get the input element
const input = document.getElementById('imageInput');

// Add an event listener to the input element
input.addEventListener('change', (e) => {
  // Get the uploaded file
  const file = input.files[0];

  // Create a new FileReader instance
  const reader = new FileReader();

  // Add an event listener to the FileReader instance
  reader.addEventListener('load', (e) => {
    // Get the image data
    const imageData = e.target.result;

    // Create a new image element
    const image = document.createElement('img');

    // Set the image source to the uploaded image data
    image.src = imageData;

    // Add the image to the page
    document.body.appendChild(image);
  });

  // Read the uploaded file as a data URL
  reader.readAsDataURL(file);
});