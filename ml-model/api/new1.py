import joblib
import numpy as np
import warnings

# Suppress warnings
warnings.filterwarnings("ignore", category=UserWarning)

# Load the trained machine learning model
model = joblib.load('./health_model.pkl')  # Replace with the correct model path

def main():
    try:
        # Prompt user for inputs
        heart_rate = float(input("Enter heart rate: "))
        steps = float(input("Enter steps: "))
        calories = float(input("Enter calories: "))

        # Prepare the input as a NumPy array
        features = np.array([heart_rate, steps, calories]).reshape(1, -1)

        # Make the prediction
        prediction = model.predict(features)

        # Print the prediction result
        print(f'Prediction: {prediction[0]}')
    except ValueError:
        print("Please enter valid numeric inputs.")

if __name__ == '__main__':
    main()
