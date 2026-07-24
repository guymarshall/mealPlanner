const breakfasts = [
    "Cereal",
    "Pancakes",
    "Huel",
    "Shake",
];

const dinners = [
    "Lasagne",
    "Spaghetti Bolognese",
    "Cereal",
    "Ravioli",
    "Huel",
    "Smiley faces and fishcakes",
    "Sandwiches",
];

// TODO: Add weighting
// TODO: Add isMultiDay

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

const slots = ["breakfast", "lunch", "tea"];

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const mealPlan = {
    monday: { breakfast: pickRandom(breakfasts), lunch: pickRandom(dinners), tea: pickRandom(dinners) },
    tuesday: { breakfast: pickRandom(breakfasts), lunch: pickRandom(dinners), tea: pickRandom(dinners) },
    wednesday: { breakfast: pickRandom(breakfasts), lunch: pickRandom(dinners), tea: pickRandom(dinners) },
    thursday: { breakfast: pickRandom(breakfasts), lunch: pickRandom(dinners), tea: pickRandom(dinners) },
    friday: { breakfast: pickRandom(breakfasts), lunch: pickRandom(dinners), tea: pickRandom(dinners) },
    saturday: { breakfast: pickRandom(breakfasts), lunch: pickRandom(dinners), tea: pickRandom(dinners) },
    sunday: { breakfast: pickRandom(breakfasts), lunch: pickRandom(dinners), tea: pickRandom(dinners) },
};

days.forEach(day => {
    slots.forEach(slot => {
        const element = document.getElementById(`meal-${day}-${slot}`);
        if (element) {
            element.textContent = mealPlan[day][slot];
        }
    });
});