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
    contents: "Subject: Math Location:London Price:£50 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "Math");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject1() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});



new Vue({
  el: "#box2",
  data: {
    contents: "Subject:English Location:Oxford Price:£50 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "English");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject2() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});


new Vue({
  el: "#box3",
  data: {
    contents: "Subject:Bengali Location:Dhaka Price:£50 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "Bengali");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject3() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});



new Vue({
  el: "#box4",
  data: {
    contents: "Subject:Physics Location:Brighton Price:£50 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "Physics");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject4() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});




new Vue({
  el: "#box5",
  data: {
    contents: "Subject:Music Location:Troy Price:£60 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "Music");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject5() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});




new Vue({
  el: "#box6",
  data: {
    contents: "Subject:Sculpture Location:Cork Price:£60 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "Sculpture");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject6() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});




new Vue({
  el: "#box7",
  data: {
    contents: "Subject:Chemistry Location:Wales Price:£60 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "Chemistry");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject7() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});




new Vue({
  el: "#box8",
  data: {
    contents: "Subject:Biology Location:London Price:£60 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "Biology");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject8() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});



new Vue({
  el: "#box9",
  data: {
    contents: "Subject:French Location:London Price:£90 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "French");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject9() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});



new Vue({
  el: "#box10",
  data: {
    contents: "Subject:Cooking Location:London Price:£60 Spaces:5",
  },
  created() {
    parseData(this.contents);
  },
  computed: {
    spaces() {
      // Get the value of "Spaces" from the parsed data
      const item = jsonData.find((item) => item.subject === "Cooking");
      return item ? parseInt(item.spaces) : 0;
    },
  },
  methods: {
    subject10() {
      // Check if "Spaces" is greater than 0 before performing the action
      if (this.spaces > 0) {
        // Perform the action here (e.g., add to cart)
        alert("Item added to cart");
      }
    },
  },
});






// Now you have the data in the jsonData array
console.log(jsonData);


