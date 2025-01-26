from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained machine learning model
model = joblib.load('./health_model.pkl')  # Replace with the correct model path

@app.route('/predict', methods=['POST'])
def predict():
    # Extract data from the request
    data = request.get_json()
    
    # Assuming the data contains the health metrics
    heart_rate = data['heart_rate']
    steps = data['steps']
    calories = data['calories']
    
    # Example of features for prediction (you may need to preprocess the data)
    features = np.array([heart_rate, steps, calories]).reshape(1, -1)
    
    # Make the prediction
    prediction = model.predict(features)
    
    # Return the prediction result as a JSON response
    return jsonify({'prediction': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
