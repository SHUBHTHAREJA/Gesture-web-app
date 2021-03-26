Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    img_quality:90
    });

    camera=document.getElementById("camera");

Webcam.attach('#camera');

function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'" />';
    })    
    }

    console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AYGpZsYXv/",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakData1="perdection 1 is "+pridection1;
    speakData2="perdection 2 is "+pridection2;
    var utter_this= new SpeechSynthesisUtterance (speakData1+speakData2);
    synth.speak(utter_this);
}

function check(){
    img=document.getElementById('capture_img');
    classifier.classify(img,got_result)
}