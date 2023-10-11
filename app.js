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
new Vue({
  el: "#sort7", // This corresponds to the "Ascending" button for sorting by Space
  methods: {
    order7() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract space values and corresponding box elements
      const spacesAndBoxes = boxElements.map((boxElement) => {
        const contents = boxElement.textContent;
        const spacesMatch = contents.match(/Spaces:(\d+)/);
        return {
          spaces: spacesMatch ? parseInt(spacesMatch[1].trim()) : 0,
          box: boxElement,
        };
      });

      // Sort the box elements based on space values in ascending order
      spacesAndBoxes.sort((a, b) => a.spaces - b.spaces);

      // Clear the main div
      mainDiv.innerHTML = "";

      // Append the sorted box elements back to the main div
      spacesAndBoxes.forEach((item) => mainDiv.appendChild(item.box));
    },
  },
});

new Vue({
  el: "#sort8", // This corresponds to the "Descending" button for sorting by Space
  methods: {
    order8() {
      const mainDiv = document.getElementById("main");
      const boxElements = Array.from(mainDiv.children);

      // Extract space values and corresponding box elements
      const spacesAndBoxes = boxElements.map((boxElement) => {
        const contents = boxElement.textContent;
        const spacesMatch = contents.match(/Spaces:(\d+)/);
        return {
          spaces: spacesMatch ? parseInt(spacesMatch[1].trim()) : 0,
          box: boxElement,
        };
      });

      // Sort the box elements based on space values in descending order
      spacesAndBoxes.sort((a, b) => b.spaces - a.spaces);

      // Clear the main div
      mainDiv.innerHTML = "";

      // Append the sorted box elements back to the main div
      spacesAndBoxes.forEach((item) => mainDiv.appendChild(item.box));
    },
  },
});

function myFunction() {
  alert("Order has been submitted");
}
function search() {
  // Get the search input value
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Check if the search term is "math"
  if ( searchTerm === "a" ) {
    document.getElementById("searchResults").innerHTML = "Subject: Math  Location: London <br> Subject: Bengali Location: Dhaka <br> Subject: Chemistry Location: Wales " ;


  
   } else if ( searchTerm === "b" ) {
    document.getElementById("searchResults").innerHTML = "Subject:Bengali Location: Dhaka <br> Subject:Physics Location:Brighton <br> Subject:Biology Location:London" ;


   
   }else if ( searchTerm === "c" ) {
    document.getElementById("searchResults").innerHTML = " Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br>  Subject:French Location:London <br> Subject:Cooking Location:London" ;
   }else if ( searchTerm === "d" ) {
    document.getElementById("searchResults").innerHTML = " Subject:Bengali <br> Location:Dhaka";
   }else if ( searchTerm === "e" ) {
    document.getElementById("searchResults").innerHTML = "  Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br>" ; 
   }else if ( searchTerm === "f" ) {
    document.getElementById("searchResults").innerHTML = " Subject:English Location:Oxford <br> Subject:French Location:London" ;
   }else if ( searchTerm === "g" ) {
    document.getElementById("searchResults").innerHTML = " Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton <br> Subject:Biology Location:London <br> Subject:Cooking Location:London";
   }else if ( searchTerm === "h" ) {
    document.getElementById("searchResults").innerHTML = " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton <br> Subject:French Location:London";
   }else if ( searchTerm === "i" ) {
    document.getElementById("searchResults").innerHTML = " Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton <br> Subject:Music Location:Troy <br> Subject:Chemistry Location:Wales <br> Subject:Biology Location:London <br> Subject:Cooking Location:London";
   }else if ( searchTerm === "k" ) {
    document.getElementById("searchResults").innerHTML = " Subject:Sculpture Location:Cork <br> Subject:Cooking Location:London";
   }else if ( searchTerm === "l" ) {
    document.getElementById("searchResults").innerHTML = " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Sculpture Location:Cork  <br> Subject:Chemistry Location:Wales <br> Subject:Biology Location:London <br> Subject:French Location:London <br> Subject:Cooking Location:London";
   }else if ( searchTerm === "m" ) {
    document.getElementById("searchResults").innerHTML = " Subject: Math Location:London <br> Subject:Music Location:Troy <br> Subject:Chemistry Location:Wales" ;
   }else if ( searchTerm === "n" ) {
    document.getElementById("searchResults").innerHTML = " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton <br> Subject:Biology Location:London <br> Subject:French Location:London <br> Subject:Cooking Location:London";
   }else if ( searchTerm === "0" ) {
    document.getElementById("searchResults").innerHTML = " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Physics Location:Brighton <br> Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Biology Location:London <br> Subject:French Location:London <br> Subject:Cooking Location:London";
   }else if ( searchTerm === "p" ) {
    document.getElementById("searchResults").innerHTML = " Subject:Physics Location:Brighton <br> Subject:Sculpture Location:Cork";
   }else if ( searchTerm === "r" ) {
    document.getElementById("searchResults").innerHTML = " Subject:English Location:Oxford <br> Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br> Subject:French Location:London";
   }else if ( searchTerm === "s" ) {
    document.getElementById("searchResults").innerHTML = " Subject:Physics Location:Brighton <br> Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales"; 
   }else if ( searchTerm === "t" ) {
    document.getElementById("searchResults").innerHTML = " Subject: Math Location:London <br> Subject:Physics Location:Brighton <br> Subject:Music Location:Troy <br>  Subject:Chemistry Location:Wales";
   }else if ( searchTerm === "u" ) {
    document.getElementById("searchResults").innerHTML = " Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork";
   }else if ( searchTerm === "w" ) {
      document.getElementById("searchResults").innerHTML = "Subject:Chemistry <br> Location:Wales";
   }else if ( searchTerm === "x" ) {
    document.getElementById("searchResults").innerHTML = " Subject:English Location:Oxford";
   }else if (searchTerm === "math" ) {
      // Display the search result
      document.getElementById("searchResults").innerHTML = "Subject: Math <br> Location: London";
  } else if (searchTerm === "english" )  {
     // Display the search result
     document.getElementById("searchResults").innerHTML = "Subject: English <br> Location: Oxford";
  }else if (searchTerm === "bengali")  {
    // Display the search result
    document.getElementById("searchResults").innerHTML = "Subject: Bengali <br> Location: Dhaka";
}else if (searchTerm === "physics")  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = "Subject: Physics <br> Location: Brighton";
}else if (searchTerm === "music")  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = "Subject: Music <br> Location: Troy";
}else if (searchTerm === "sculpture")  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = "Subject: Sculpture<br>  Location: Cork";
}else if (searchTerm === "chemistry")  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = "Subject: Chemistry <br> Location: Wales";
}else if (searchTerm === "biology")  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = "Subject: Biology <br> Location: London";
}else if (searchTerm === "french")  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = "Subject: French <br> Location: London";


}else if (searchTerm === "cooking")  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = "Subject: Cooking <br> Location: London"; 
}else if (searchTerm === "50")  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton";
}else if (searchTerm === "60" )  {
  // Display the search result
  document.getElementById("searchResults").innerHTML = " Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br> Subject:Biology Location:London <br>  Subject:Cooking Location:London";
}else if (searchTerm === "90" )  {
    // Display the search result
    document.getElementById("searchResults").innerHTML = " Subject:French <br> Location:London";
  }else {
  // Display a message for other search terms
  document.getElementById("searchResults").innerHTML = "No results found";
}
}

