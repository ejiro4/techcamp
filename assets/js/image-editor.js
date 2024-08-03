document.getElementById('upload').addEventListener('change', loadImage);
document.getElementById('rotate').addEventListener('click', rotateImage);
document.getElementById('crop').addEventListener('click', cropImage);
document.getElementById('resize').addEventListener('click', resizeImage);

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let img = new Image();
let angle = 0;

function loadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function rotateImage() {
    angle = (angle + 90) % 360;
    canvas.width = (angle === 90 || angle === 270) ? img.height : img.width;
    canvas.height = (angle === 90 || angle === 270) ? img.width : img.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();
}

function cropImage() {
    const cropWidth = 100;  // Example crop size
    const cropHeight = 100; // Example crop size
    const croppedImage = ctx.getImageData(0, 0, cropWidth, cropHeight);
    canvas.width = cropWidth;
    canvas.height = cropHeight;
    ctx.putImageData(croppedImage, 0, 0);
}

function resizeImage() {
    const newWidth = prompt("Enter new width:", canvas.width);
    const newHeight = prompt("Enter new height:", canvas.height);
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = newWidth;
    tempCanvas.height = newHeight;
    tempCtx.drawImage(canvas, 0, 0, newWidth, newHeight);
    canvas.width = newWidth;
    canvas.height = newHeight;
    ctx.drawImage(tempCanvas, 0, 0);
}
