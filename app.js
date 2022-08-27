const videoElement = document.getElementById("video");
const btnElement = document.getElementById('btn')

async function pictureDisplay() {
  btnElement.disabled = true;
  await videoElement.requestPictureInPicture();
  btnElement.disabled = false;
}

async function selectStreamMedia() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {}
}

btnElement.addEventListener('click', pictureDisplay)

selectStreamMedia();
