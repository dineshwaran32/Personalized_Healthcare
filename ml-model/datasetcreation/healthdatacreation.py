import pandas as pd
import numpy as np

# Set the random seed for reproducibility
np.random.seed(42)

# Generate 1000+ entries
num_entries = 1000

# Simulate the data for each column
heart_rate = np.random.randint(60, 100, size=num_entries)  # Heart rate between 60 and 100 bpm
steps = np.random.randint(5000, 15000, size=num_entries)  # Steps between 5000 and 15000
calories = np.random.randint(1500, 3500, size=num_entries)  # Calories between 1500 and 3500

# Generate ActivityScore based on a combination of heart rate, steps, and calories
activity_score = (heart_rate / 10) + (steps / 1000) + (calories / 500)
activity_score = np.clip(activity_score, 0, 10)  # Clip the values between 0 and 10

# Create a DataFrame
df = pd.DataFrame({
    'HeartRate': heart_rate,
    'Steps': steps,
    'Calories': calories,
    'ActivityScore': activity_score
})

# Save to CSV
df.to_csv('health_data.csv', index=False)

print(f"Dataset with {num_entries} entries generated and saved to 'health_data.csv'")
