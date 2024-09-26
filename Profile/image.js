const profilePic = document.getElementByClassName("profile-image");
const userFile = document.querySelector(".user-file");

userFile.onchange = function () {
    profilePic.src = URL.createObjectURL(userFile.files[0]);
}