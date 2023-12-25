//https://teachablemachine.withgoogle.com/models/XhoY_3DO2/model.json
Webcam.set({
    height : 300,
    width : 550,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_uri+"'>"
    })
}
console.log("Nl5 Version : ",ml5.version);
Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XhoY_3DO2/model.json", model_loaded);
function model_loaded(){
    console.log("Model is loaded")
}
function check(){
    img = document.getElementById("captured_image");
    Classifier.classify(img, gotResult);
}
function gotResult(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_family_member_name").innerHTML = result[0].label;
        document.getElementById("result_family_member_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}