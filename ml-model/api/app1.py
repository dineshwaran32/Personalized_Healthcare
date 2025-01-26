from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load('./health_model.pkl')

@app.route('/analyze', methods=['POST'])
def analyze_data():
    try:
        # Parse incoming JSON request
        data = request.json
        heart_rate = data.get("heartRate")
        steps = data.get("steps")
        calories = data.get("calories")

        # Ensure all required fields are provided
        if heart_rate is None or steps is None or calories is None:
            return jsonify({"error": "Missing input data"}), 400

        # Prepare data for prediction
        features = np.array([[heart_rate, steps, calories]])

        # Predict using the model
        prediction = model.predict(features)[0]

        # Send response
        insights = {
            "predicted_activity_score": prediction,
            "recommendation": "Increase steps for better activity score!" if prediction < 7 else "Great job! Keep it up!"
        }
        return jsonify({"success": True, "insights": insights}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001, debug=True)
