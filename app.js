new Vue({
  el: "#box1",
  data: {
    contents: "Subject:Math Location:London Price:$100 Spaces:5",
  },
});

new Vue({
  el: "#box2",
  data: {
    contents: "Subject:English Location:Oxford Price:$80 Spaces:5",
  },
});
new Vue({
  el: "#box3",
  data: {
    contents: "Subject:Bengali Location:Dhaka Price:$70     Spaces:5",
  },
});
new Vue({
  el: "#box4",
  data: {
    contents: "Subject:Physics Location:Brighton Price:$60 Spaces:5",
  },
});
new Vue({
  el: "#box5",
  data: {
    contents: "Subject:Music Location:Troy Price:$98 Spaces:5",
  },
});
new Vue({
  el: "#box6",
  data: {
    contents: "Subject:Sculpture Location:Cork Price:$65 Spaces:5",
  },
});
new Vue({
  el: "#box7",
  data: {
    contents: "Subject:Chemistry Location:Wales Price:$97   Spaces:5",
  },
});
new Vue({
  el: "#box8",
  data: {
    contents: "Subject:Biology Location:London Price:$77 Spaces:5",
  },
});
new Vue({
  el: "#box9",
  data: {
    contents: "Subject:French Location:London Price:$87 Spaces:5",
  },
});
new Vue({
  el: "#box10",
  data: {
    contents: "Subject:Cooking Location:London Price:$66 Spaces:5",
  },
});
new Vue({
  el: "#sort1",
  data: {
    names: [
      "Math",
      "English",
      "Bengali",
      "Physics",
      "Music",
      "Sculpture",
      "Chemistry",
      "Chemistry",
      "Biology",
      "French",
      "Cooking",
    ],
    ascending: true, // Initial sorting order
  },
  computed: {
    sortedNames() {
      // Create a copy of the names array and sort it
      const sorted = [...this.names];
      sorted.sort((a, b) => {
        if (this.ascending) {
          return a.localeCompare(b); // Ascending order
        } else {
          return b.localeCompare(a); // Descending order
        }
      });
      return sorted;
    },
  },
  methods: {
    sortNames() {
      this.ascending = !this.ascending; // Toggle sorting order
    },
  },
});
new Vue({
  el: "#sort3",
  data: {
    numbers: [100, 80, 70, 60, 98, 65, 97, 77, 87, 66],
    ascending: true, // Initial sorting order
  },
  computed: {
    sortedNumbers() {
      // Create a copy of the numbers array and sort it
      const sorted = [...this.numbers];
      sorted.sort((a, b) => {
        if (this.ascending) {
          return a - b; // Ascending order
        } else {
          return b - a; // Descending order
        }
      });
      return sorted;
    },
  },
  methods: {
    sortNumbers() {
      this.ascending = !this.ascending; // Toggle sorting order
    },
  },
});
