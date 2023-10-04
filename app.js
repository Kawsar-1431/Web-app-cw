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
      "Biology",
      "French",
      "Cooking",
    ],
    ascendingNames: true,
    showNames: false,
    sortingBy: "", // Add a property to keep track of sorting
  },
  computed: {
    sortedNames() {
      const sorted = [...this.names];
      if (this.ascendingNames) {
        sorted.sort((a, b) => a.localeCompare(b));
      } else {
        sorted.sort((a, b) => b.localeCompare(a));
      }
      return sorted;
    },
  },
  methods: {
    toggleNames() {
      this.showNames = !this.showNames;
      this.sortingBy = "names"; // Update sorting property
    },
  },
});

new Vue({
  el: "#sort3",
  data: {
    numbers: [100, 80, 70, 60, 98, 65, 97, 77, 87, 66],
    ascendingNumbers: true,
    showNumbers: false,
  },
  computed: {
    sortedNumbers() {
      const sorted = [...this.numbers];
      if (this.ascendingNumbers) {
        sorted.sort((a, b) => a - b);
      } else {
        sorted.sort((a, b) => b - a);
      }
      return sorted;
    },
  },
  methods: {
    toggleNumbers() {
      this.showNumbers = !this.showNumbers;
      this.sortingBy = "numbers"; // Update sorting property
    },
  },
});
new Vue({
  el: "#sort5",
  methods: {
    order1() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);
      
      // Extract subject names and corresponding box elements
      const subjectsAndBoxes = boxElements.map(boxElement => {
        const contents = boxElement.textContent;
        const subjectMatch = contents.match(/Subject:(.*?)Location:/);
        return {
          subject: subjectMatch ? subjectMatch[1].trim() : "",
          box: boxElement,
        };
      });

      // Sort the box elements based on subject names
      subjectsAndBoxes.sort((a, b) => a.subject.localeCompare(b.subject));

      // Clear the main div
      mainDiv.innerHTML = "";

      // Append the sorted box elements back to the main div
      subjectsAndBoxes.forEach(item => mainDiv.appendChild(item.box));
    },
  },
});
new Vue({
  el: "#sort6",
  methods: {
    order2() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract subject names and corresponding box elements
      const subjectsAndBoxes = boxElements.map(boxElement => {
        const contents = boxElement.textContent;
        const subjectMatch = contents.match(/Subject:(.*?)Location:/);
        return {
          subject: subjectMatch ? subjectMatch[1].trim() : "",
          box: boxElement,
        };
      });

      // Sort the box elements in descending order based on subject names
      subjectsAndBoxes.sort((a, b) => b.subject.localeCompare(a.subject));

      // Clear the main div
      mainDiv.innerHTML = "";

      // Append the sorted box elements back to the main div
      subjectsAndBoxes.forEach(item => mainDiv.appendChild(item.box));
    },
  },
});

