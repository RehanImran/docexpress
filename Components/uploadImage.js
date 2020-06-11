import ImagePicker from 'react-native-image-crop-picker';
export function uploadImage() {
  //alert('Do not toch me ')
  ImagePicker.openPicker({
    width: 300,
    height: 200,
    cropping: true,
  }).then(image => {
    console.log("image console==>", image);
  });
}
