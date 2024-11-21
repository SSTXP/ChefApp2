MAST5020-POE-Part 2
Sohan Seeth - ST10452402

https://youtu.be/jhjhh5OFiIg - Part 2

https://youtu.be/ayJfu8jp2yA - Part 3

Changelog
Added Features
Average Price Display
Context Enhancements:

Added a function calculateAveragePriceByCategory in the DishesContext to compute the average price for each dish category (starter, main, and dessert).
Updated the DishesContextType interface to include calculateAveragePriceByCategory.
Menu Screen:

Displayed the average price for each category (starter, main, and dessert) on the MenuScreen.
Adjusted the layout to place category buttons and average price side by side.
Price Formatting
Updated the StartersScreen, MainsScreen, and DessertsScreen to prepend the "R" symbol to all displayed dish prices.
Updated Screens and Components
MenuScreen
Adjusted button width and positioning to make space for the average price display.
Added logic to fetch and display the average price for each category dynamically using the context function calculateAveragePriceByCategory.
DishesContext
Introduced calculateAveragePriceByCategory, which computes the average price of dishes based on their category.
Applied TypeScript type updates to ensure proper integration of the new feature.
StartersScreen, MainsScreen, and DessertsScreen
Enhanced price display by appending the "R" symbol to all displayed prices using Intl.NumberFormat.
Styling Updates
Adjusted styles in MenuScreen to align buttons and text properly for a clean UI.
Modified button dimensions and spacing for better readability with the average price display.
Testing and Validation
Verified the accuracy of average price calculation and display.
Tested the price formatting to ensure consistent rendering of the "R" symbol on all relevant screens.
