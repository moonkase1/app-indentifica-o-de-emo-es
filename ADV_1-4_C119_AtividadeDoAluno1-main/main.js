Webcam.set({
windth:350,
height:300,
imageFormat : 'png',
pngQuality:100
});

camera=document.getElementById("camera");

Webcam.attch('#camera');

function takeSnapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>' ;
    });
}

console.log('ml5 version:', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

function modelLoaded() {
    console.log('model Loded!');
}

function check()
{
 img = document.getElementById('captured_image');
 classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = result[0].label;
        document.getElementById("resultEmotionName2").innerHTML = result[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;

        speak();
        if(results[o].label == "feliz")
        {
            document.getElementById(updateEmoji).innerHTML = "&#128522;";
        }
        if(results[0].label == "triste")
        {
            document.getElementById(updateEmoji).innerHTML = "&#128532;";
        }
if(results[o].label == "irritado")
        {
            document.getElementById(updateEmoji).innerHTML = "&#128548;";
        }   
        if(results[1].label == "feliz")
        {
            document.getElementById(updateEmoji2).innerHTML = "&#128522;";
        }
        if(results[1].label == "triste")
        {
            document.getElementById(updateEmoji2).innerHTML = "&#128532;";
        }
        if(results[1].label == "irritade")
        {
            document.getElementById(updateEmoji).innerHTML = "&#128548;";
        }
    }
}









function speak(){
    var synth = window.speechSynthesis;
    speakData1 = "A primeira previsão é" + prediction1
    speakData2 = "A segunda previsão é" + prediction2;
    var utterThis = new SpeechSynthesisUtterance(speafData1 + speakData2);
    synth.speak(utterThis);
}