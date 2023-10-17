new Vue({
  el: "#app",
  data: {
    products: [],
    cart: {},
    showCart: false,
    checkoutData: {
      name: "",
      phone: "",
    },
    validName: true,
    validPhone: true,
    orderBySpace: "ascending", // Initialize the sorting order
  },
  created() {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  computed: {
    isFormValid() {
      return (
        this.validName &&
        this.validPhone &&
        this.checkoutData.name &&
        this.checkoutData.phone
      );
    },
    sortedProductsBySpace() {
      if (this.orderBySpace === "ascending") {
        return this.products.slice().sort((a, b) => a.available - b.available);
      } else {
        return this.products.slice().sort((a, b) => b.available - a.available);
      }
    },
  },
  methods: {
    addToCart(product) {
      if (product.available > 0) {
        const productId = product.id.toString();
        if (!this.cart[productId]) {
          this.cart[productId] = 0;
        }
        this.cart[productId] += 1;
        product.available -= 1;
      }
    },
    removeFromCart(productId) {
      if (this.cart[productId] > 0) {
        this.cart[productId] -= 1;
        const product = this.products.find((p) => p.id === parseInt(productId));
        product.available += 1;
        if (this.cart[productId] === 0) {
          delete this.cart[productId];
        }
        if (Object.keys(this.cart).length === 0) {
          this.showCart = false; // Hide the cart when it becomes empty
        }
      }
    },
    
    
    toggleCart() {
      this.showCart = !this.showCart;
    },
    validateName() {
      this.validName = true; // You can add validation logic for the name field here
    },
    validatePhone() {
      this.validPhone = true; // You can add validation logic for the phone field here
    },
    placeOrder() {
      alert("Order has been submitted.");
      this.checkoutData.name = "";
      this.checkoutData.phone = "";
    },
    order1() {
      this.products.sort((a, b) => a.name.localeCompare(b.name));
    },
    order2() {
      this.products.sort((a, b) => b.name.localeCompare(a.name));
    },
    order3() {
      this.products.sort((a, b) => a.location.localeCompare(b.location));
    },
    order4() {
      this.products.sort((a, b) => b.location.localeCompare(a.location));
    },
    order5() {
      this.products.sort((a, b) => a.price - b.price);
    },
    order6() {
      this.products.sort((a, b) => b.price - a.price);
    },

    toggleOrderBySpace() {
      // Toggle the sorting order when clicking the button
      if (this.orderBySpace === "ascending") {
        this.orderBySpace = "descending";
      } else {
        this.orderBySpace = "ascending";
      }
    },

   toggleCart: function () {
      this.showCart = !this.showCart;
    },
  },
});







function search() {
  // Get the search input value
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Check if the search term is "math"
  if (searchTerm === "a") {
    document.getElementById("searchResults").innerHTML =
      "Subject: Math  Location: London <br> Subject: Bengali Location: Dhaka <br> Subject: Chemistry Location: Wales ";
  } else if (searchTerm === "b") {
    document.getElementById("searchResults").innerHTML =
      "Subject:Bengali Location: Dhaka <br> Subject:Physics Location:Brighton <br> Subject:Biology Location:London";
  } else if (searchTerm === "c") {
    document.getElementById("searchResults").innerHTML =
      " Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br>  Subject:French Location:London <br> Subject:Cooking Location:London";
  } else if (searchTerm === "d") {
    document.getElementById("searchResults").innerHTML =
      " Subject:Bengali <br> Location:Dhaka";
  } else if (searchTerm === "e") {
    document.getElementById("searchResults").innerHTML =
      "  Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br>";
  } else if (searchTerm === "f") {
    document.getElementById("searchResults").innerHTML =
      " Subject:English Location:Oxford <br> Subject:French Location:London";
  } else if (searchTerm === "g") {
    document.getElementById("searchResults").innerHTML =
      " Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton <br> Subject:Biology Location:London <br> Subject:Cooking Location:London";
  } else if (searchTerm === "h") {
    document.getElementById("searchResults").innerHTML =
      " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton <br> Subject:French Location:London";
  } else if (searchTerm === "i") {
    document.getElementById("searchResults").innerHTML =
      " Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton <br> Subject:Music Location:Troy <br> Subject:Chemistry Location:Wales <br> Subject:Biology Location:London <br> Subject:Cooking Location:London";
  } else if (searchTerm === "k") {
    document.getElementById("searchResults").innerHTML =
      " Subject:Sculpture Location:Cork <br> Subject:Cooking Location:London";
  } else if (searchTerm === "l") {
    document.getElementById("searchResults").innerHTML =
      " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Sculpture Location:Cork  <br> Subject:Chemistry Location:Wales <br> Subject:Biology Location:London <br> Subject:French Location:London <br> Subject:Cooking Location:London";
  } else if (searchTerm === "m") {
    document.getElementById("searchResults").innerHTML =
      " Subject: Math Location:London <br> Subject:Music Location:Troy <br> Subject:Chemistry Location:Wales";
  } else if (searchTerm === "n") {
    document.getElementById("searchResults").innerHTML =
      " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton <br> Subject:Biology Location:London <br> Subject:French Location:London <br> Subject:Cooking Location:London";
  } else if (searchTerm === "0") {
    document.getElementById("searchResults").innerHTML =
      " Subject: Math Location:London <br> Subject:English Location:Oxford <br> Subject:Physics Location:Brighton <br> Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Biology Location:London <br> Subject:French Location:London <br> Subject:Cooking Location:London";
  } else if (searchTerm === "p") {
    document.getElementById("searchResults").innerHTML =
      " Subject:Physics Location:Brighton <br> Subject:Sculpture Location:Cork";
  } else if (searchTerm === "r") {
    document.getElementById("searchResults").innerHTML =
      " Subject:English Location:Oxford <br> Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br> Subject:French Location:London";
  } else if (searchTerm === "s") {
    document.getElementById("searchResults").innerHTML =
      " Subject:Physics Location:Brighton <br> Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales";
  } else if (searchTerm === "t") {
    document.getElementById("searchResults").innerHTML =
      " Subject: Math Location:London <br> Subject:Physics Location:Brighton <br> Subject:Music Location:Troy <br>  Subject:Chemistry Location:Wales";
  } else if (searchTerm === "u") {
    document.getElementById("searchResults").innerHTML =
      " Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork";
  } else if (searchTerm === "w") {
    document.getElementById("searchResults").innerHTML =
      "Subject:Chemistry <br> Location:Wales";
  } else if (searchTerm === "x") {
    document.getElementById("searchResults").innerHTML =
      " Subject:English Location:Oxford";
  } else if (searchTerm === "math") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: Math <br> Location: London";
  } else if (searchTerm === "english") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: English <br> Location: Oxford";
  } else if (searchTerm === "bengali") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: Bengali <br> Location: Dhaka";
  } else if (searchTerm === "physics") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: Physics <br> Location: Brighton";
  } else if (searchTerm === "music") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: Music <br> Location: Troy";
  } else if (searchTerm === "sculpture") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: Sculpture<br>  Location: Cork";
  } else if (searchTerm === "chemistry") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: Chemistry <br> Location: Wales";
  } else if (searchTerm === "biology") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: Biology <br> Location: London";
  } else if (searchTerm === "french") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: French <br> Location: London";
  } else if (searchTerm === "cooking") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      "Subject: Cooking <br> Location: London";
  } else if (searchTerm === "50") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      " Subject: Math Location:London <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton";
  } else if (searchTerm === "60") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      " Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br> Subject:Biology Location:London ";
  } else if (searchTerm === "70") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      " Subject:French Location:London <br>  Subject:English Location:Oxford";
  } else if (searchTerm === "90") {
    // Display the search result
    document.getElementById("searchResults").innerHTML =
      " Subject:French Location:London <br>  Subject:Cooking Location:London";
  } else {
    // Display a message for other search terms
    document.getElementById("searchResults").innerHTML = "No results found";
  }
}

