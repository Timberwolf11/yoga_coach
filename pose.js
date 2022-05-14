
let videoElement = document.getElementById("input_video");
let prev = "";



function onResults(results) {
  // pose detection
  if (results.poseWorldLandmarks) {
    let inputs = []
    for(let i=0; i<33; i++){
        inputs.push(results.poseWorldLandmarks[i].x)
        inputs.push(results.poseWorldLandmarks[i].y)
        inputs.push(results.poseWorldLandmarks[i].z)
    }
    if(classification) brain.classify(inputs, gotResult);
    if(poseLabel){ 
      console.log(poseLabel)
      // added
      if(poseLabel != prev){
        prev = poseLabel
        var msg = new SpeechSynthesisUtterance();
        msg.text = poseLabel
        window.speechSynthesis.speak(msg);
      }
    }

  }
}

let pose = new Pose({
  locateFile: (file) => {
    //console.log(file);
    return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
  },
});
pose.setOptions({
  modelComplexity: 0,
  smoothLandmarks: true,
  enableSegmentation: true,
  smoothSegmentation: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});
pose.onResults(onResults);

let camera = new Camera(videoElement, {
  onFrame: async () => {
    await pose.send({ image: videoElement });
  },
  width: 1280,
  height: 720,
});
camera.start();
// trained model
let opt = {
    inputs: 99,
    outputs: 1,
    task: "classification",
    debug: true,
  };

let brain = ml5.neuralNetwork(opt);

const modelInfo = {
model: "model/model.json",
metadata: "model/model_meta.json",
weights: "model/model.weights.bin",
};

brain.load(modelInfo, brainLoaded);

let classification = false;
let poseLabel;

function brainLoaded() {
    console.log('classification ready')
    classification = true; 
}

function gotResult(error, results) {
    if (results[0].confidence > 0.75) {
        poseLabel = results[0].label
    }
}