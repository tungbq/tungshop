const arrayBufferToBase64 = (buffer) => {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};


export const loadImage = (image_data) => {

  if (!image_data) {
    return null
  }
  const base64Flag = 'data:image/jpeg;base64,';
  const imageStr = arrayBufferToBase64(image_data.data.data);

  return base64Flag + imageStr
}