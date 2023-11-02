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
    orderBySpace: "ascending",
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
    sortProductsBySpaceAscending() {
      // Sort products by space in ascending order
      this.orderBySpace = "ascending";
      this.products.sort((a, b) => a.available - b.available);
    },

    toggleCart() {
      this.showCart = !this.showCart;
    },
    
    validateName() {
      this.validName = true;
    },
    validatePhone() {
      this.validPhone = true;
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
      // Toggles the sorting order when the button is clicked
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
  var searchResults = document.getElementById("searchResults");

  //Object to store search results
  var searchResultData = {
    a: "Subject: Math  Location: London <br> Subject: Bengali Location: Dhaka <br> Subject: Chemistry Location: Wales",
    b: "Subject: Bengali Location: Dhaka <br> Subject: Physics Location: Brighton <br> Subject: Biology Location: London",
    c: "Subject: Sculpture Location: Cork <br> Subject: Chemistry Location: Wales <br> Subject: French Location: London <br> Subject: Cooking Location: London",
    d: "Subject: Bengali <br> Location: Dhaka",
    e: "Subject: English Location: Oxford <br> Subject: Bengali Location: Dhaka <br> Subject: Sculpture Location: Cork <br> Subject: Chemistry Location: Wales",
    f: "Subject: English Location: Oxford <br> Subject: French Location: London",
    g: "Subject: English Location: Oxford <br> Subject: Bengali Location: Dhaka <br> Subject: Physics Location: Brighton <br> Subject: Biology Location: London <br> Subject: Cooking Location: London",
    h: "Subject: Math Location: London <br> Subject: English Location: Oxford <br> Subject: Bengali Location: Dhaka <br> Subject: Physics Location: Brighton <br> Subject: French Location: London",
    i: "Subject: English Location: Oxford <br> Subject: Bengali Location: Dhaka <br> Subject: Physics Location: Brighton <br> Subject: Music Location: Troy <br> Subject: Chemistry Location: Wales <br> Subject: Biology Location: London <br> Subject: Cooking Location: London",
    k: "Subject: Sculpture Location: Cork <br> Subject: Cooking Location: London",
    l: "Subject: Math Location: London <br> Subject: English Location: Oxford <br> Subject: Bengali Location: Dhaka <br> Subject: Sculpture Location: Cork  <br> Subject: Chemistry Location: Wales <br> Subject: Biology Location: London <br> Subject: French Location: London <br> Subject: Cooking Location: London",
    m: "Subject: Math Location: London <br> Subject: Music Location: Troy <br> Subject: Chemistry Location: Wales",
    n: "Subject: Math Location: London <br> Subject: English Location: Oxford <br> Subject: Bengali Location: Dhaka <br> Subject: Physics Location: Brighton <br> Subject: Biology Location: London <br> Subject: French Location: London <br> Subject: Cooking Location: London",
    0: "Subject: Math Location: London <br> Subject: English Location: Oxford <br> Subject: Physics Location: Brighton <br> Subject: Music Location: Troy <br> Subject: Sculpture Location: Cork <br> Subject: Biology Location: London <br> Subject: French Location: London <br> Subject: Cooking Location: London",
    p: "Subject: Physics Location: Brighton <br> Subject: Sculpture Location: Cork",
    r: "Subject: English Location: Oxford <br> Subject: Music Location: Troy <br> Subject: Sculpture Location: Cork <br> Subject: Chemistry Location: Wales <br> Subject: French Location: London",
    s: "Subject: Physics Location: Brighton <br> Subject: Music Location: Troy <br> Subject: Sculpture Location: Cork <br> Subject: Chemistry Location: Wales",
    t: "Subject: Math Location: London <br> Subject: Physics Location: Brighton <br> Subject: Music Location: Troy <br> Subject: Chemistry Location: Wales",
    u: "Subject: Music Location: Troy <br> Subject: Sculpture Location: Cork",
    w: "Subject: Chemistry <br> Location: Wales",
    x: "Subject: English Location: Oxford",
    math: "Subject: Math <br> Location: London",
    english: "Subject: English <br> Location: Oxford",
    bengali: "Subject: Bengali <br> Location: Dhaka",
    physics: "Subject: Physics <br> Location: Brighton",
    music: "Subject: Music <br> Location: Troy",
    sculpture: "Subject: Sculpture<br>  Location: Cork",
    chemistry: "Subject: Chemistry <br> Location: Melbourne",
    biology: "Subject: Biology <br> Location: London",
    french: "Subject: French <br> Location: London",
    cooking: "Subject: Cooking <br> Location: London",
    50: " Subject: Math Location:London <br> Subject:Bengali Location:Dhaka <br> Subject:Physics Location:Brighton",
    60: " Subject:Music Location:Troy <br> Subject:Sculpture Location:Cork <br> Subject:Chemistry Location:Wales <br> Subject:Biology Location:London ",
    70: "Subject:French Location:London <br>  Subject:English Location:Oxford",
    90: " Subject:French Location:London <br>  Subject:Cooking Location:London",
  };

  if (searchTerm === searchResults.getAttribute("data-search-term")) {
    // If the search term matches the one in the results, clear the results and input field
    searchResults.innerHTML = "";
    document.getElementById("searchInput").value = "";
    searchResults.removeAttribute("data-search-term");
  } else {
    // Check if the search term is in the searchResultData object
    if (searchResultData.hasOwnProperty(searchTerm)) {
      // Display the search result
      searchResults.innerHTML = searchResultData[searchTerm];
      searchResults.setAttribute("data-search-term", searchTerm);
    } else {
      searchResults.innerHTML = "No results found";
      searchResults.setAttribute("data-search-term", searchTerm);
    }
  }
}
