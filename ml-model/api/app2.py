from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load the trained model
model = joblib.load("health_model.pkl")

@app.route("/")
def home():
    return "Health Data Prediction API is Running!"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get JSON data from the request
        input_data = request.json
        
        # Extract features from the JSON data
        heart_rate = input_data.get("HeartRate", None)
        steps = input_data.get("Steps", None)
        calories = input_data.get("Calories", None)
        
        if heart_rate is None or steps is None or calories is None:
            return jsonify({"error": "Invalid input. Ensure HeartRate, Steps, and Calories are provided."}), 400
        
        # Create a DataFrame for the input
        input_df = pd.DataFrame([[heart_rate, steps, calories]], columns=["HeartRate", "Steps", "Calories"])
        
        # Make a prediction
        predicted_score = model.predict(input_df)[0]
        
        # Generate feedback
        if predicted_score > 8.0:
            feedback = "Great job! You're highly active. Keep it up!"
        elif 5.0 <= predicted_score <= 8.0:
            feedback = "You're doing well, but there's room for improvement. Consider increasing your steps or calorie burn."
        else:
            feedback = "Your activity score is low. Aim for 10,000 steps per day and try to stay more active."
        
        # Return the result with feedback
        return jsonify({
            "HeartRate": heart_rate,
            "Steps": steps,
            "Calories": calories,
            "PredictedActivityScore": round(predicted_score, 2),
            "Feedback": feedback
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
