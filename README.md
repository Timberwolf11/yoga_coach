# Yoga Pose Recognition Web Application

This web application utilizes MediaPipe Pose and ml5.js neural network to recognize and classify yoga poses in real-time through a webcam. The program displays the recognized pose along with an accuracy score.

### Before running the application, make sure you have the following:

* A web browser with webcam access.
* A stable internet connection.

## Getting Started

* Clone the repository to your local machine:

   ```
    git clone https://github.com/your-username/yoga-pose-recognition.git
   ```
* Open the index.html file in your preferred web browser.

* Ensure your webcam is enabled and accessible.

* Strike a yoga pose in front of the webcam, and the application will display the recognized pose and accuracy score.

## Pose Recognition

The application recognizes yoga poses in real-time using the MediaPipe Pose library. Detected poses are then processed and classified using a pre-trained neural network model.

The program uses ml5.js to load and utilize a pre-trained neural network model (model/model.json). The model has been trained to classify yoga poses based on input features.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
