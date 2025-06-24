//json
const str = '{"name": "Arif", "age": 25}';
const obj = JSON.parse(str);        // Parse the JSON string into an object
console.log(obj.name);
console.log(JSON.stringify(obj)); // Convert the object back to a JSON string

