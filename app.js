new Vue({
  el: "#sort1",
  methods: {
    order1() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract subject names and corresponding box elements
      const subjectsAndBoxes = boxElements.map((boxElement) => {
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
      subjectsAndBoxes.forEach((item) => mainDiv.appendChild(item.box));
    },
  },
});
new Vue({
  el: "#sort2",
  methods: {
    order2() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract subject names and corresponding box elements
      const subjectsAndBoxes = boxElements.map((boxElement) => {
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
      subjectsAndBoxes.forEach((item) => mainDiv.appendChild(item.box));
    },
  },
});
new Vue({
  el: "#sort3",
  methods: {
    order3() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract location names and corresponding box elements
      const locationsAndBoxes = boxElements.map((boxElement) => {
        const contents = boxElement.textContent;
        const locationMatch = contents.match(/Location:(.*?)Price:/);
        return {
          location: locationMatch ? locationMatch[1].trim() : "",
          box: boxElement,
        };
      });

      // Sort the box elements based on location names
      locationsAndBoxes.sort((a, b) => a.location.localeCompare(b.location));

      // Clear the main div
      mainDiv.innerHTML = "";

      // Append the sorted box elements back to the main div
      locationsAndBoxes.forEach((item) => mainDiv.appendChild(item.box));
    },
  },
});

new Vue({
  el: "#sort4",
  methods: {
    order4() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract location names and corresponding box elements
      const locationsAndBoxes = boxElements.map((boxElement) => {
        const contents = boxElement.textContent;
        const locationMatch = contents.match(/Location:(.*?)Price:/);
        return {
          location: locationMatch ? locationMatch[1].trim() : "",
          box: boxElement,
        };
      });

      // Sort the box elements in descending order based on location names
      locationsAndBoxes.sort((a, b) => b.location.localeCompare(a.location));

      // Clear the main div
      mainDiv.innerHTML = "";

      // Append the sorted box elements back to the main div
      locationsAndBoxes.forEach((item) => mainDiv.appendChild(item.box));
    },
  },
});
new Vue({
  el: "#sort5",
  methods: {
    order5() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract price values and corresponding box elements
      const pricesAndBoxes = boxElements.map((boxElement) => {
        const contents = boxElement.textContent;
        const priceMatch = contents.match(/Price:(.*?)Spaces:/);
        return {
          price: priceMatch ? parseFloat(priceMatch[1].trim().substring(1)) : 0,
          box: boxElement,
        };
      });

      // Sort the box elements based on price values
      pricesAndBoxes.sort((a, b) => a.price - b.price);

      // Clear the main div
      mainDiv.innerHTML = "";

      // Append the sorted box elements back to the main div
      pricesAndBoxes.forEach((item) => mainDiv.appendChild(item.box));
    },
  },
});

new Vue({
  el: "#sort6",
  methods: {
    order6() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract price values and corresponding box elements
      const pricesAndBoxes = boxElements.map((boxElement) => {
        const contents = boxElement.textContent;
        const priceMatch = contents.match(/Price:(.*?)Spaces:/);
        return {
          price: priceMatch ? parseFloat(priceMatch[1].trim().substring(1)) : 0,
          box: boxElement,
        };
      });

      // Sort the box elements in descending order based on price values
      pricesAndBoxes.sort((a, b) => b.price - a.price);

      // Clear the main div
      mainDiv.innerHTML = "";

      // Append the sorted box elements back to the main div
      pricesAndBoxes.forEach((item) => mainDiv.appendChild(item.box));
    },
  },
});
new Vue({
  el: "#cart",
  data: {
    showShoppingCart: false, // Initialize the shopping cart as hidden
  },
  methods: {
    toggleShoppingCart() {
      this.showShoppingCart = !this.showShoppingCart;

      // Redirect to the shopping cart page
      if (this.showShoppingCart) {
        window.location.href = "shopping.html";
      } else {
        // Redirect back to the main page
        window.location.href = "app.html";
      }
    },
  },
});
