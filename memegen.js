const imageLink = document.querySelector('.imageLink');
const topImageText = document.querySelector('#topImageText');
const bottomImageText = document.querySelector('#bottomImageText');

// imageLink.addEventListener("change", () => {
//     const imageDataURL = URL.createObjectURL(imageLink.files[0]);
//
//     image = newImage();
//     image.src = imageDataURL;
// })

const newImgButton = document.querySelector('#submitMeme');
const memeContainer = document.querySelector('#memeContainer');

function handleClick () {
    const imageLinkValue = imageLink.value;
    if (imageLinkValue) {
        const url = imageLinkValue;
        const newMeme = document.createElement('img');
        newMeme.src=url;
        memeContainer.append(newMeme)
    }

    const topImageTextValue = topImageText.value;
}

newImgButton.addEventListener("click", handleClick);