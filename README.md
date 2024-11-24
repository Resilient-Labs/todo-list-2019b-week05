# To-Do List Application 

A minimalist, interactive to-do list application where users can add, mark, and clear their tasks with ease.


<img width="502" alt="Screenshot 2024-11-24 at 9 12 59 AM" src="https://github.com/user-attachments/assets/7f8f6059-30de-43a5-b3cf-56d2aae2ce80">



## Features
- **Add To-Dos**: Type in a task and click the **`+`** button to add it to the list.
- **Mark as Complete**: Click on any to-do to toggle its completion status (visually represented with a strikethrough).
- **Clear All Tasks**: Remove all tasks from the list with a single button click.
- **Alerts for Empty Input**: Ensures the user is reminded to type something before adding.

## How It Works
### Key Functionalities
1. **Add To-Dos**:
   - A new `<li>` element is dynamically created and appended to the `<ul>` list.
   - If the input field is empty, an alert reminds the user to type a task.
   - After adding, the input field is cleared for the next task.

2. **Mark Tasks**:
   - Clicking a task toggles a `checkedoff` class, which visually marks it as completed using CSS.

3. **Clear All Tasks**:
   - Removes all `<li>` elements from the list, resetting it completely.

## Future Improvements
- Add local storage to save the list across browser sessions.
- Enable task editing functionality.
- Implement priority tags (e.g., High, Medium, Low).
- Add a search bar to filter tasks.
