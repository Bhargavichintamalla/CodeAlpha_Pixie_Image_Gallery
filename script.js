// script.js
const imageData = [
  ["Forest Morning", "Nature", 98, "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80"],
  ["Leaf Closeup", "Nature", 86, "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=80"],
  ["Soft Flowers", "Nature", 79, "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80"],
  ["Calm Lake", "Nature", 91, "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80"],
  ["Lizard", "Nature", 91, "https://images.unsplash.com/photo-1780698355626-820363a01adf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
  ["Sky", "Nature", 98, "https://images.unsplash.com/photo-1777508921732-646da5428adf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2NHw2c01WalRMU2tlUXx8ZW58MHx8fHx8"],
  ["Deer", "Nature", 84, "https://images.unsplash.com/photo-1775134743520-b3b50baa160f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"],
  ["Moon", "Nature", 91, "https://images.unsplash.com/photo-1777195680731-454a40402349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"],
  ["River", "Nature", 98, "https://images.unsplash.com/photo-1779332317860-ddf6f5ee74a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"],
  ["Flower", "Nature", 79, "https://images.unsplash.com/photo-1780711229729-e9f371e8b602?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"],
  ["Parrot", "Nature", 95, "https://images.unsplash.com/photo-1776518535233-0aa2517549ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"],
  ["Lion", "Nature", 94, "https://images.unsplash.com/photo-1780054694213-869dbdee8c9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"],
  ["Leaves", "Nature", 92, "https://images.unsplash.com/photo-1777287514156-ba7eabea01f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"],
  ["dandelions", "Nature", 97, "https://images.unsplash.com/photo-1779781238799-7194caec2b28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D"],
  ["Butterfly", "Nature", 90, "https://images.unsplash.com/photo-1779235475756-c8109adb5ec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNXw2c01WalRMU2tlUXx8ZW58MHx8fHx8"],
  ["Bird", "Nature", 87, "https://images.unsplash.com/photo-1778899522035-7dcab3d4b557?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0OXw2c01WalRMU2tlUXx8ZW58MHx8fHx8"],

  ["Coastal Sunset", "Travel", 98, "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80"],
  ["Desert Dunes", "Travel", 89, "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80"],
  ["Ocean Blue", "Travel", 94, "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"],
  ["Golden Canyon", "Travel", 93, "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=900&q=80"],
  ["Effiel", "Travel", 88, "https://images.unsplash.com/photo-1767675294054-35a551a7ea16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["Cafe", "Travel", 90, "https://images.unsplash.com/photo-1780246073200-16ef364fc0a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["Statue", "Travel", 80, "https://plus.unsplash.com/premium_photo-1697729873318-6626b15d2c05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["Historic", "Travel", 78, "https://images.unsplash.com/photo-1779997671024-11e7c114145b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["Bridge", "Travel", 93, "https://images.unsplash.com/photo-1777362034754-84ba4516812e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["River", "Travel", 84, "https://images.unsplash.com/photo-1778166188937-0fb2393ab8cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["Tower of Pisa", "Travel", 93, "https://images.unsplash.com/photo-1777400589227-49874a37ed7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["Island", "Travel", 83, "https://plus.unsplash.com/premium_photo-1720886184688-308104caef90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["street", "Travel", 91, "https://images.unsplash.com/photo-1740367218018-4abf9b67c2af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["Desert", "Travel", 90, "https://images.unsplash.com/photo-1779032667524-1fe4a25f3770?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk1fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D"],
  ["China Temple", "Travel", 87, "https://images.unsplash.com/photo-1769089220494-686431afcee9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXxGem8zenVPSE42d3x8ZW58MHx8fHx8"],
  ["mountain", "Travel", 93, "https://images.unsplash.com/photo-1778546978122-fd73f59d77c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNXxGem8zenVPSE42d3x8ZW58MHx8fHx8"],

  ["Forest Deer", "Animals", 96, "https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=900&q=80"],
  ["Wild Fox", "Animals", 83, "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=900&q=80"],
  ["Cat Eyes", "Animals", 88, "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=900&q=80"],
  ["Soft Puppy", "Animals", 81, "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80"],
  ["Turtle", "Animals", 92, "https://plus.unsplash.com/premium_photo-1675432656807-216d786dd468?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"],
  ["Bear", "Animals", 89, "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"],
  ["Tiger", "Animals", 81, "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"],
  ["Panda", "Animals", 95, "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],
  ["Fish", "Animals", 93, "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],
  ["Rabbit", "Animals", 81, "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],
  ["eagle", "Animals", 71, "https://images.unsplash.com/photo-1486578077620-8a022ddd481f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],
  ["Peacock", "Animals", 96, "https://images.unsplash.com/photo-1536514900905-0d5511b9d489?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],
  ["Sheep", "Animals", 85, "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],
  ["Squirrel", "Animals", 87, "https://images.unsplash.com/photo-1507666405895-422eee7d517f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],
  ["Dolphin", "Animals", 94, "https://plus.unsplash.com/premium_photo-1664302180868-7d4be774ea23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],
  ["elephant", "Animals", 91, "https://images.unsplash.com/photo-1527161153332-99adcc6f2966?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"],

  ["Morning Coffee", "Food", 90, "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"],
  ["Fresh Salad", "Food", 81, "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80"],
  ["Breakfast Plate", "Food", 76, "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80"],
  ["Sweet Dessert", "Food", 85, "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80"],
  ["vegetable Bowl", "Food", 80, "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"],
  ["Pizza", "Food", 90, "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3Ds"],
  ["cake", "Food", 92, "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D"],
  ["Eggs", "Food", 81, "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"],
  ["Pancakes", "Food", 95, "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D"],
  ["Pasta", "Food", 87, "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D"],
  ["Ice Cream", "Food", 85, "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2R8ZW58MHx8MHx8fDA%3D"],
  ["Juice", "Food", 75, "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D"],
  ["Noodles", "Food", 96, "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2R8ZW58MHx8MHx8fDA%3D"],
  ["Strawberry", "Food", 85, "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGZvb2R8ZW58MHx8MHx8fDA%3D"],
  ["Burger", "Food", 95, "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxmb29kfGVufDB8fDB8fHww"],
  ["Biriyani", "Food", 90, "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmlyaXlhbml8ZW58MHx8MHx8fDA%3D"],

  ["Dinning", "Architecture", 84, "https://images.unsplash.com/photo-1777997992181-babb8f4b5480?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NHxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"],
  ["Glass Tower", "Architecture", 77, "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"],
  ["Modern Workspace", "Architecture", 82, "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"],
  ["Clean Building", "Architecture", 87, "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80"],
  ["Kitchen", "Architecture", 84, "https://images.unsplash.com/photo-1778074976002-6e5d96cc294a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"],
  ["Dinning", "Architecture", 87, "https://plus.unsplash.com/premium_photo-1734543932040-4ac39e52317a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"],
  ["Japanese Building", "Architecture", 84, "https://images.unsplash.com/photo-1780248121038-9904510b631d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D"],
  ["Sofa", "Architecture", 90, "https://images.unsplash.com/photo-1780317307778-a853511d11e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"],
  ["Bed Room", "Architecture", 78, "https://plus.unsplash.com/premium_photo-1733864775783-c09d0a570b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"],
  ["Living room", "Architecture", 87, "https://plus.unsplash.com/premium_photo-1736194029008-6e8bfd6f7a74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"],
  ["red Door", "Architecture", 94, "https://images.unsplash.com/photo-1779372371052-b2b3f32154c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg3fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"],
  ["Stairs", "Architecture", 96, "https://images.unsplash.com/photo-1777997288469-79b1965b3239?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D"],
  ["Building", "Architecture", 87, "https://plus.unsplash.com/premium_photo-1681553602523-5dadbbf66fa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"],
  ["Room Corner", "Architecture", 92, "https://images.unsplash.com/photo-1778880509934-0ab4843d9ed2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExMXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"],
  ["Ornate Building", "Architecture", 82, "https://images.unsplash.com/photo-1777906625569-44b2c335bf0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3MXxNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"],
  ["living room", "Architecture", 89, "https://plus.unsplash.com/premium_photo-1734549547944-cd118bca8e14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxM3xNOGpWYkxiVFJ3c3x8ZW58MHx8fHx8"],

  ["Creative Portrait", "People", 95, "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"],
  ["Street Portrait", "People", 85, "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"],
  ["Warm Smile", "People", 82, "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"],
  ["Studio Look", "People", 79, "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"],
  ["Person Holding Flowers", "People", 84, "https://plus.unsplash.com/premium_photo-1780950401958-765c22b825e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"],
  ["Girl", "People", 99, "https://images.unsplash.com/photo-1780327289787-b83c2ff5255a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"],
  ["Father", "People", 92, "https://plus.unsplash.com/premium_photo-1779749454595-115955f1f2a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"],
  ["Woman", "People", 88, "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"],
  ["Man Sitting", "People", 86, "https://plus.unsplash.com/premium_photo-1727942418440-d085b3b5f065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"],
  ["Old man", "People", 79, "https://images.unsplash.com/photo-1776728029175-c6b9d807c6b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"],
  ["Baby", "People", 89, "https://images.unsplash.com/photo-1778076115016-4253671abfd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"],
  ["Woman with Rose", "People", 90, "https://images.unsplash.com/photo-1779175731608-055c70bfa99b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"],
  ["Old couple", "People", 79, "https://plus.unsplash.com/premium_photo-1777023616744-05bb1f9e7620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"],
  ["children", "People", 94, "https://images.unsplash.com/photo-1778382500405-9bc201fe9bf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2Nnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"],
  ["Two Men", "People", 80, "https://images.unsplash.com/photo-1777036212397-790f832df680?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3Mnx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"],
  ["Girl pose", "People", 86, "https://plus.unsplash.com/premium_photo-1707816501449-3c51bb9f93e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwOXx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8"],

  ["Minimal Chair", "Minimal", 80, "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80"],
  ["Clean Interior", "Minimal", 74, "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"],
  ["Quiet Room", "Minimal", 78, "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Simple Desk", "Minimal", 70, "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"],
  ["White Waves", "Minimal", 80, "https://plus.unsplash.com/premium_photo-1667587245819-2bea7a93e7a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW1hbGlzdHxlbnwwfHwwfHx8MA%3D%3D"],
  ["Small vase", "Minimal", 70, "https://plus.unsplash.com/premium_photo-1681382743881-6afac0a7a556?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Minimal Plant", "Minimal", 85, "https://plus.unsplash.com/premium_photo-1681807326535-621ae5ef9da3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["White vase", "Minimal", 74, "https://plus.unsplash.com/premium_photo-1681046751337-740b6433b725?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Moon", "Minimal", 79, "https://plus.unsplash.com/premium_photo-1701091956254-8f24ea99a53b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Type Writer", "Minimal", 80, "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Cup With Book", "Minimal", 91, "https://images.unsplash.com/photo-1638657527755-ca3e0d217260?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Statue", "Minimal", 98, "https://plus.unsplash.com/premium_photo-1719864933065-6639a2d32e56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Cross road", "Minimal", 84, "https://images.unsplash.com/photo-1543390323-b3ddcde80598?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Coffe", "Minimal", 96, "https://images.unsplash.com/photo-1458819714733-e5ab3d536722?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Desk", "Minimal", 78, "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fG1pbmltYWxpc3R8ZW58MHx8MHx8fDA%3D"],
  ["Birds", "Minimal", 97, "https://images.unsplash.com/photo-1571028634586-ae87c1a42432?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],

  ["Number Pattern", "Patterns", 78, "https://images.unsplash.com/photo-1559142382-6fe8aaed14c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Brick Wall", "Patterns", 72, "https://plus.unsplash.com/premium_photo-1674514923661-033f3b045d55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwYXR0ZXJuc3xlbnwwfHwwfHx8MA%3D%3D"],
  ["Red Stripes", "Patterns", 75, "https://images.unsplash.com/photo-1606429437134-9d975fcc508f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Water Waves", "Patterns", 73, "https://images.unsplash.com/photo-1432251407527-504a6b4174a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Wavy Paper", "Patterns", 78, "https://plus.unsplash.com/premium_photo-1673795754005-214e3e1fccba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGF0dGVybnN8ZW58MHx8MHx8fDA%3D"],
  ["Blue Pattern", "Patterns", 90, "https://images.unsplash.com/photo-1581345331960-d1b0a223ef96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGF0dGVybnN8ZW58MHx8MHx8fDA%3D"],
  ["Stripe Wall", "Patterns", 75, "https://images.unsplash.com/photo-1558244661-d248897f7bc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGF0dGVybnN8ZW58MHx8MHx8fDA%3D"],
  ["Circle pattern", "Patterns", 77, "https://images.unsplash.com/photo-1550537687-c91072c4792d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGF0dGVybnN8ZW58MHx8MHx8fDA%3D"],
  ["Abstract Pianting", "Patterns", 88, "https://plus.unsplash.com/premium_photo-1673288397715-12c2fbb9f52b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Title Pattern", "Patterns", 85, "https://images.unsplash.com/photo-1551893478-d726eaf0442c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Semi circle pattern", "Patterns", 73, "https://images.unsplash.com/photo-1620052569626-dcbc8ee3a269?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Vertical Stripes", "Patterns", 83, "https://images.unsplash.com/photo-1517196084897-498e0abd7c2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Flower Pattern", "Patterns", 87, "https://images.unsplash.com/photo-1597259058442-f107bcb02fc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Multi Color", "Patterns", 94, "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Diamond", "Patterns", 79, "https://plus.unsplash.com/premium_photo-1675855723466-fd4729e23d5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBhdHRlcm5zfGVufDB8fDB8fHww"],
  ["Hexagon pattern", "Patterns", 76, "https://plus.unsplash.com/premium_photo-1661960093795-6c011395e90c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBhdHRlcm5zfGVufDB8fDB8fHww"]
];

const images = imageData.map((item, index) => ({
  id: index + 1,
  title: item[0],
  category: item[1],
  popular: item[2],
  src: item[3],
  date: Date.now() - index * 86400000
}));

const page = document.body.dataset.page || "Featured";
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const favoriteBtn = document.getElementById("favoriteBtn");
const toast = document.getElementById("toast");

let favorites = JSON.parse(localStorage.getItem("pixieFavorites")) || [];
let favoritesOnly = false;
let visibleImages = [];
let currentIndex = 0;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function getImages() {
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  let result = [...images];

  if (page !== "Featured") {
    result = result.filter(img => img.category === page);
  }

  if (favoritesOnly) {
    result = result.filter(img => favorites.includes(img.id));
  }

  if (query) {
    result = result.filter(img =>
      img.title.toLowerCase().includes(query) ||
      img.category.toLowerCase().includes(query)
    );
  }

  if (sortSelect && sortSelect.value === "popular") {
    result.sort((a, b) => b.popular - a.popular);
  } else {
    result.sort((a, b) => b.date - a.date);
  }

  return result;
}

function saveFavorites() {
  localStorage.setItem("pixieFavorites", JSON.stringify(favorites));
}

function renderGallery() {
  if (!gallery) return;

  visibleImages = getImages();
  gallery.innerHTML = "";

  if (!visibleImages.length) {
    gallery.innerHTML = `<p>No images found.</p>`;
    return;
  }

  visibleImages.forEach((img, index) => {
    const card = document.createElement("article");
    card.className = "card";

    const liked = favorites.includes(img.id);

    card.innerHTML = `
      <img src="${img.src}" alt="${img.title}" loading="lazy">
      <button class="like ${liked ? "active" : ""}" title="Like">
        <i class="bx ${liked ? "bxs-heart" : "bx-heart"}"></i>
      </button>
      <button class="download" title="Download">
        <i class="bx bx-download"></i>
      </button>
      <div class="overlay">
        <div>
          <h3>${img.title}</h3>
          <p>${img.category}</p>
        </div>
      </div>
    `;

    card.querySelector("img").addEventListener("click", () => openLightbox(index));

    card.querySelector(".like").addEventListener("click", e => {
      e.stopPropagation();

      if (favorites.includes(img.id)) {
        favorites = favorites.filter(id => id !== img.id);
      } else {
        favorites.push(img.id);
      }

      saveFavorites();
      renderGallery();
    });

    card.querySelector(".download").addEventListener("click", e => {
      e.stopPropagation();
      window.open(img.src, "_blank");
    });

    gallery.appendChild(card);
  });
}

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  document.getElementById("lightbox").classList.add("show");
}

function updateLightbox() {
  const img = visibleImages[currentIndex];

  document.getElementById("lightImg").src = img.src;
  document.getElementById("lightTitle").textContent = img.title;
  document.getElementById("lightCategory").textContent = img.category;
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
}

function nextImage() {
  currentIndex = (currentIndex + 1) % visibleImages.length;
  updateLightbox();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  updateLightbox();
}

if (searchInput) searchInput.addEventListener("input", renderGallery);
if (sortSelect) sortSelect.addEventListener("change", renderGallery);

document.getElementById("clearSearch")?.addEventListener("click", () => {
  searchInput.value = "";
  renderGallery();
});

favoriteBtn?.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  favoriteBtn.classList.toggle("active", favoritesOnly);
  renderGallery();
});

document.getElementById("hamburger")?.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("open");
});

document.getElementById("exploreBtn")?.addEventListener("click", () => {
  document.getElementById("galleryStart").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("premiumBtn")?.addEventListener("click", () => {
  showToast("Premium visuals coming soon");
});

document.getElementById("notifyBtn")?.addEventListener("click", () => {
  showToast("No new notifications");
});

const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("pixieTheme") === "dark") {
  document.body.classList.add("dark");
  themeBtn?.querySelector("i")?.classList.replace("bx-moon", "bx-sun");
}

themeBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const darkMode = document.body.classList.contains("dark");
  localStorage.setItem("pixieTheme", darkMode ? "dark" : "light");

  const icon = themeBtn.querySelector("i");
  icon.className = darkMode ? "bx bx-sun" : "bx bx-moon";

  showToast(darkMode ? "Dark mode on" : "Light mode on");
});

document.getElementById("closeLightbox")?.addEventListener("click", closeLightbox);
document.getElementById("nextImg")?.addEventListener("click", nextImage);
document.getElementById("prevImg")?.addEventListener("click", prevImage);

document.addEventListener("keydown", e => {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox || !lightbox.classList.contains("show")) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
});

if (localStorage.getItem("pixieWelcome") === "yes") {
  const name = localStorage.getItem("pixieUser") || "friend";
  showToast(`Welcome, ${name}`);
  localStorage.removeItem("pixieWelcome");
}

renderGallery();