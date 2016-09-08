# fcc
Timeserver API In Node.js
Takes a either a natural date or a unix timestamp and returns the date in both natural format and unix timestamp format.

Created as an exercise.

Usage:-
1. GET localhost:3000/timestring
Where timestring is a valid date string or unix timestamp.

Returns a json object with both the natural date and unix timestamp.

Example usage:

GET localhost:3000/December%2015,%202015
GET localhost:3000/1450137600

Example output:
{ "unix": 1450137600, "natural": "December 15, 2015" }


