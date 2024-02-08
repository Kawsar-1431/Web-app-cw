new Vue({
  el: "#app",
  data: {
    products: [],
  },
  methods: {
    // Fetch all lessons from the server and update the products array
    fetchLessons() {
      fetch("https://mobile-app-jv52.onrender.com/lessons")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("All Lessons:", data);
          if (Array.isArray(data)) {
            // Clear the existing products and push new data
            this.products.length = 0;
            this.products.push(...data);
          } else {
            console.error("Invalid data structure received:", data);
          }
        })
        .catch((error) => {
          console.error("Error fetching all lessons:", error);
        });
    },
  },
  created() {
    // On component creation, fetch all lessons
    this.fetchLessons();
  },
});
