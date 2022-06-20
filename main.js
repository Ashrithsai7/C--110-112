//https://teachablemachine.withgoogle.com/models/1xpr0yieT///

var prediction1
var prediction2

Webcam.set({
    width: 350,
    Height: 300,
    Image_format: "png",
    png_quality: 100
})

Webcam.attach("#camera")

function Take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Result").innerHTML = "<img id='captured_img' src='" + data_uri + "'>"
    })
}

console.log("ml5 version:-", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1xpr0yieT/model.json", teachable_loaded)

function teachable_loaded() {
    console.log("The teachable has loaded")
}

function speak() {
    var synth = window.speechSynthesis
    speak1 = "The prediction is " + prediction1;
    var say_this = new SpeechSynthesisUtterance(speak1)
    synth.speak(say_this)
}

function Predict_The_Emotion() {
    img = document.getElementById("captured_img");
    classifier.classify(img, Got_the_result)
}

function Got_the_result(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("result_emotion_name_1").innerHTML = result[0].label
        prediction1 = result[0].label
        if (prediction1 == "Amazing") {
            document.getElementById("REN").innerHTML = "&#128076;"
        }
        if (prediction1 == "Best") {
            document.getElementById("REN").innerHTML = "&#128077;"
        }
        if (prediction1 == "Victory") {
            document.getElementById("REN").innerHTML = "&#9996;"
        }
        speak()
    }
}