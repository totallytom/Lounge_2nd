const input = document.getElementById('image-input');
const img = document.getElementById('image-display');

input.addEventListener('change', (e) => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
});