function Start()
{
  navigator.mediaDevices.getUserMedia({audio: true})
  classifer = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QRke97RdZ/model.json', modelReady);
} 

function modelReady()
{
  console.log('modelReady');
}

function gotResults(error,results)
{
  if (error) {
    console.error(error);
  }

  else{
    console.log(results);
    
  }
}

