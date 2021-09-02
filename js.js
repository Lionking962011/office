Webcam.set({
    height:350,
    width:350,
    image_format:'png',
    png_quality:90
  });

  camera = document.getElementById("camera");
  Webcam.attach('#camera');

function takeimage()
{
   Webcam.snap(function(data_uri)
   {
     document.getElementById("result").innerHTML = '<img id="captureimage" src="'+data_uri+'"/>';
     save()
    });
}
 console.log("ml5 version:" , ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Yz0wkEk9E/models/rEj6nL-va/model.json',modelloaled);

 function modelloaled()
 {
     console.log("modelloaded!!");
 }

 function save()
{
    link = document.getElementById("link");
    image = document.getElementById("captureimage").src;
    link.href = image;
    link.click();
}