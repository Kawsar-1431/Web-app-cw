// Create a JSON array to store the data
const jsonData = [];

// Function to parse the data and add it to the JSON array
function parseData(contents) {
  const data = {
    subject: "",
    location: "",
    price: "",
    spaces: "",
  };

  const subjectMatch = contents.match(/Subject:(.*?)Location:/);
  data.subject = subjectMatch ? subjectMatch[1].trim() : "";

  const locationMatch = contents.match(/Location:(.*?)Price:/);
  data.location = locationMatch ? locationMatch[1].trim() : "";

  const priceMatch = contents.match(/Price:(.*?)Spaces:/);
  data.price = priceMatch ? priceMatch[1].trim() : "";

  const spacesMatch = contents.match(/Spaces:(\d+)/);
  data.spaces = spacesMatch ? spacesMatch[1].trim() : "";

  jsonData.push(data);
}

// Create Vue instances and parse data for all boxes
new Vue({
  el: "#box1",
  data: {
    contents: "Subject: Math Location:London Price:£100 Spaces:5",
     
  },
  created() {
    parseData(this.contents);
  },
  
});

new Vue({
  el: "#box2",
  data: {
    contents: "Subject:English Location:Oxford Price:£80 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

new Vue({
  el: "#box3",
  data: {
    contents: "Subject:Bengali Location:Dhaka Price:£70 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

new Vue({
  el: "#box4",
  data: {
    contents: "Subject:Physics Location:Brighton Price:£60 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

new Vue({
  el: "#box5",
  data: {
    contents: "Subject:Music Location:Troy Price:£98 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

new Vue({
  el: "#box6",
  data: {
    contents: "Subject:Sculpture Location:Cork Price:£65 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

new Vue({
  el: "#box7",
  data: {
    contents: "Subject:Chemistry Location:Wales Price:£97 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

new Vue({
  el: "#box8",
  data: {
    contents: "Subject:Biology Location:London Price:£77 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

new Vue({
  el: "#box9",
  data: {
    contents: "Subject:French Location:London Price:£87 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

new Vue({
  el: "#box10",
  data: {
    contents: "Subject:Cooking Location:London Price:£66 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
});

// Now you have the data in the jsonData array
console.log(jsonData);
