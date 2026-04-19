

const API_KEY = 955741533572627
const API_SECRET = f6wMOKz9L5OPArIYLDuFbdA14oU
const CLOUD_NAME = dsbl6zcl8

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "student_images");
    formData.append("api_key", API_KEY);
    formData.append("api_secret", API_SECRET);
    formData.append("cloud_name", CLOUD_NAME);
    const response = await fetch("https://api.cloudinary.com/v1_1/dsbl6zcl8/image/upload", {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    return data.secure_url;
}