const fs = require('fs');

function generateRandomPlan(index) {
  const titles = ['Weight Loss Plan', 'Muscle Gain Plan', 'Balanced Nutrition', 'Vegan Plan', 'Keto Plan'];
  const tags = ['Low Carb', 'High Protein', 'Gluten Free', 'Mass Gain', 'Performance', 'Vegetarian', 'Keto'];
  const features = [
    'Personalized portions',
    'Grocery lists',
    'Recipe instructions',
    'Weekly check-ins',
    'Nutrition coaching',
    'Supplement guide',
    'Workout nutrition',
    'Expert support',
    'Flexible meals',
    'Seasonal menus',
  ];

  const randomTitle = titles[index % titles.length];
  const randomCalories = `${1800 + Math.floor(Math.random() * 1200)}-${2000 + Math.floor(Math.random() * 1000)}`;
  const randomDuration = `${4 + Math.floor(Math.random() * 8)} weeks`;
  const randomRating = (4 + Math.random()).toFixed(1);
  const randomReviews = Math.floor(Math.random() * 500) + 1;
  const randomPrice = `$${(29.99 + Math.random() * 30).toFixed(2)}/month`;

  return {
    title: `${randomTitle} ${index + 1}`,
    calories: randomCalories,
    duration: randomDuration,
    image: `https://picsum.photos/800/800?random=${index}`,
    meals: ['Breakfast', 'Lunch', 'Dinner', '2 Snacks'],
    features: features.sort(() => 0.5 - Math.random()).slice(0, 5),
    tags: tags.sort(() => 0.5 - Math.random()).slice(0, 3),
    rating: parseFloat(randomRating),
    reviews: randomReviews,
    price: randomPrice,
    description: `Description for ${randomTitle} ${index + 1}.`,
    nutritionInfo: {
      protein: `${20 + Math.floor(Math.random() * 20)}%`,
      carbs: `${40 + Math.floor(Math.random() * 20)}%`,
      fats: `${10 + Math.floor(Math.random() * 20)}%`,
      fiber: `${20 + Math.floor(Math.random() * 10)}g/day`,
    },
    sampleMenu: [
      {
        day: 'Monday',
        meals: [
          { type: 'Breakfast', name: `Meal ${index} Breakfast`, calories: '300' },
          { type: 'Lunch', name: `Meal ${index} Lunch`, calories: '400' },
          { type: 'Dinner', name: `Meal ${index} Dinner`, calories: '500' },
        ],
      },
    ],
  };
}

const mealPlans = [];
for (let i = 0; i < 5000; i++) {
  mealPlans.push(generateRandomPlan(i));
}

fs.writeFileSync('mealPlans.json', JSON.stringify(mealPlans, null, 2));
console.log('mealPlans.json file created with 5000+ plans!');
