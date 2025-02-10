# Plate Planner App

## Description
A smart meal planning app that offers personalized recipe suggestions, meal plans, and nutritional insights based on user preferences.

## Features
- User authentication
- Ingredient-based recipe suggestions
- Real-time nutritional analysis
- Filter recipes by season, occasion, type, meal category, time and difficulty
- Weather-based meal recommendations

## Run the app
Run the app locally in any VS Code terminal
1. Open the folder "Smart Recipe Planner" with VS Code
2. Open a new terminal and write the following code
   - cd backend
   - npm run start
3. Open a new terminal and write the following code
   - cd frontend
   - npm run dev
4. In the browser enter "http://localhost:5173/"

## Routes

### User Endpoints

| Method | Route | Description | Request Parameters | Response |
|-|-|-|-|-|
| POST | `/user/register` | Register a new user | `name`, `email`, `pass`, `cPass` | `message`: `User Created`, `user`: `{ name, email }` |
| POST | `/user/login` | Log in a user | `email`, `pass` | `message`: `Login success`, `token`: `JWT token for authentication`, `user`: `{ name, email }` |
| DELETE | `/user/delete/example12345@gmail.com` | Delete a user profile | `Authorization : Bearer token`, `pass` | `message`: `User Deleted`|

### Recipe Endpoints

| Method | Route | Description | Request Parameters | Response |
|-|-|-|-|-|
| POST | `recipe/create-recipe` | Create a new recipe | `Authorization : Bearer token`, `name`, `image`, `ingredients` , `quantity`, `season`, `occasion`, `type`, `recipeType`, `time`, `difficulty`, `servings`, `instructions` | `recipe`: `{ userId, name, image, ingredients : name, quantity, calories, season, occasion, type, recipeType, time, difficulty, servings, nutritionPerServing, instructions }` |
| POST | `recipe/search` | Search recipes based on user request | `name / image / ingredients / season / occasion / type / recipeType / time / difficulty / servings / instructions` | `[recipes]` |
| PUT | `recipe/update-recipe/675c4061cb02739e81df2126` | Update recipe | `Authorization : Bearer token`, `name / image / ingredients / season / occasion / type / recipeType / time / difficulty / servings / instructions` | `updated recipe` |
| POST | `recipe/delete-recipe/675c4061cb02739e81df2126` | Delete recipe | `Authorization : Bearer token` | `message` : `Recipe deleted successfully` |
| POST | `recipe/weather-suggestions` | Suggest weather based on location | `lat`, `lon` | `temperature`, `weatherDescription`, `placeName`, `season`, `recipes` |
| POST | `recipe/get-recipe-by-userId` | Find recipes based on the user who created | `Authorization : Bearer token`, `userId` | `recipes` |
| GET | `recipe/get-recipe-by-id/675c4061cb02739e81df2126` | Find recipes based on recipe id |  | `recipes` |
| GET | `recipe/get-recipes` | Get all recipes |  | `recipes` |
