const profilePic = document.querySelector("profile-image");
const userFile = document.querySelector(".user-file");

userFile.onchange = function () {
    profilePoic.src = URL.createObjectURL(userFile.files[0]);
}