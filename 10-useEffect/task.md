# Tasks

Thank you for watching and learning. Here are the tasks for you:

## Random Joke Generator with Categories & Loading State
create a React component that:
- Fetches a random joke based on a selected category.
- Displays a loading indicator while fetching.
- Handles API errors gracefully.

Fetch Jokes Based on Category:
- Use this API:  https://official-joke-api.appspot.com/jokes/{category}/random
- Available categories: "general", "programming", "knock-knock".
- You should have a select box to select a category.
- On selcting a category, the joke for that category will be rendered.
- You should have a loading indicator to show loading when data is being fetched.

## Expected Output

- ✅ On load → Fetches and displays a joke from the general category.
- ✅ Selecting “Programming” → Fetches a programming joke.
- ✅ Selecting “Knock-Knock” → Fetches a knock-knock joke.
- ✅ Clicking “Get New Joke” → Fetches a new joke from the selected category.
- ✅ If the API fails → Shows "Failed to fetch joke" in red.




