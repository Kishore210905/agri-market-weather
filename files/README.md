# AgriMarket & Weather – Smart Farmer Information Platform

## 1. Problem Statement
Farmers often lack timely, easy access to crop market prices and weather forecasts, which leads to poor selling and field-planning decisions.

## 2. Aim
Design a simple web platform that lets farmers view market prices and weather forecasts in one place.

## 3. Objectives
- Show crop prices by crop, category and market
- Show current weather, today's outlook and a 5-day forecast
- Give simple weather-based farming advice
- Provide a basic crop information guide

## 4. Proposed Solution
A static, responsive website built with HTML, CSS and JavaScript. Demo data stored in `script.js` stands in for real price and weather services.

## 5. Key Features
Price search and filters, trend indicators, location weather search, farming advice, crop guide, friendly error messages, LocalStorage for the last searched location.

## 6. Functional Modules
Home dashboard, Market Price module, Weather module, Crop Guide, About.

## 7. Technologies Used
HTML5, CSS3, JavaScript, browser LocalStorage.

## 8. System Requirements
Any modern browser (Chrome, Edge, Firefox). VS Code with Live Server is optional.

## 9. System Architecture
```
Farmer
  ↓
Web Application
  ↓
Market Price Module + Weather Module
  ↓
JavaScript / Demo Data
  ↓
Information displayed to Farmer
```

## 10. Implementation Steps
1. Create the folder and files.
2. Build the HTML pages with shared navigation and footer (injected by `script.js`).
3. Style with `style.css` (green theme, responsive grid).
4. Add demo data arrays in `script.js`.
5. Write render, search, filter and advice functions.
6. Test every feature.

## 11. How to Run in VS Code
1. Open VS Code, choose File > Open Folder, select `agri-market-weather`.
2. Right-click `index.html` and choose **Open with Live Server** (install the Live Server extension first), or double-click `index.html` to open it in a browser.
3. Use the navigation bar to reach every page.

## 12. Testing
| # | Feature | Steps | Expected result |
|---|---|---|---|
| 1 | Navigation | Click each nav link | Correct page opens, active link highlighted |
| 2 | Home stats | Open Home | 8 crops, 6 markets, weather shown |
| 3 | Crop search | Market page, type "tomato" | Only tomato rows |
| 4 | Invalid search | Type "xyz" | "No data found. Please try another crop or market." |
| 5 | Input validation | Type "12@" | Letters-only message |
| 6 | Category filter | Choose Cereal | Rice and Wheat rows only |
| 7 | Market filter | Choose Madurai Market | Madurai rows only |
| 8 | Reset | Click Reset | All rows return |
| 9 | Weather search | Enter "Chennai" | Chennai weather and forecast |
| 10 | Unknown location | Enter "Paris" | Fallback message and Salem demo weather |
| 11 | Empty location | Submit empty | "Please enter a location name." |
| 12 | Advice | Search Thanjavur (rain 65%) | Postpone irrigation advice |
| 13 | LocalStorage | Search Madurai, reload, open Home | Madurai remembered |
| 14 | Crop filter | Crops page, season Rabi | Only Rabi crops |
| 15 | Responsive | Resize to 375px wide | Single column, table scrolls sideways |

## 13. Expected Output
Home dashboard with stats and featured prices; filterable price table; weather dashboard with 5-day cards and advice; crop cards; about page.

## 14. Advantages
Simple, no installation, works offline, easy to explain, mobile-friendly.

## 15. Limitations
All data is demo data and not real-time. Only five weather locations. No login or database.

## 16. Future Enhancements
Real government market-price API, real weather API, farmer login, database, multilingual support (including Tamil), SMS alerts, mobile application, crop price notifications.

## 17. Conclusion
The project meets the assignment by giving farmers one place to see market prices and weather forecasts, and shows how real APIs can be added later.

## Demo Guide for Faculty
1. Show the Home dashboard and explain the architecture.
2. Market page: search "onion", filter by category and market, show a "no data" search.
3. Weather page: search Salem, then Thanjavur (rain advice), then an unknown place.
4. Crops page: filter by season.
5. Open `script.js` and point to the demo data arrays and the `advice()` function.
6. State clearly that data is demo data.

## Screenshots to Take
Home (top and lower sections), Market table, Market filtered, Market "no data" message, Weather current + advice, Weather 5-day cards, Weather fallback message, Crops page, Crops filtered, About page, mobile view of Home and Market, VS Code folder structure.
