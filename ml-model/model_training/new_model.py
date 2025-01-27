import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import joblib

# Load the dataset
data = pd.read_csv("./health_data.csv")  # Ensure healthdata.csv exists in the same directory

# Features and target variable
X = data[["HeartRate", "Steps", "Calories"]]
y = data["ActivityScore"]

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print("Model Trained!")
print(f"Mean Squared Error: {mse:.2f}")
print(f"R^2 Score: {r2:.2f}")

# Save the trained model
joblib.dump(model, "health_model.pkl")  # Save model as a .pkl file
print("Model saved as 'health_model.pkl'")
