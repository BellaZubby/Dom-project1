# Shopping Cart Interaction Project

## Overview

This project enhances a shopping cart by implementing interactive features using JavaScript DOM events. Users can:
- Adjust the quantity of each item using the "+" and "-" buttons.
- Delete items from the cart.
- Like items by clicking a heart-shaped button, which changes color.
- See the total price automatically adjusted based on quantity and deletions.

## Features

### Quantity Adjustment:
    Users can increase or decrease item quantities using the "+" and "-" buttons.
### Item Deletion:
    Clicking the delete button removes an item from the cart, updating the total price.
### Like Button Interaction:
    A heart-shaped button allows users to like an item. The button changes color when clicked.
### Dynamic Price Updates:
    The total price automatically recalculates when items are added, removed, or modified.

## Technologies Used

- HTML & CSS (Provided in the project).
- JavaScript (DOM Manipulation for interactivity).

## Implementation Details

- Event Listeners are attached to buttons to handle interactions dynamically.
- DOM Manipulation updates the quantity, likes, and total price in real-time.
- Conditional checks prevent unwanted behavior (e.g., negative quantities or incorrect price calculations).