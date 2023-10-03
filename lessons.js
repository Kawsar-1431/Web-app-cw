new Vue({
    el: "#app2",
    data: {
        lessons: [
            { lesson: "Math" },
            { lesson: "English" },
            { lesson: "Bengali" },
            { lesson: "Physics" },
            { lesson: "Music" },
            { lesson: "Sculpture" },
            { lesson: "Chemistry" },
            { lesson: "Biology" },
            { lesson: "French" },
            { lesson: "Cooking" }
        ],
        showingLessons: false
    },
    methods: {
        toggleLessons: function() {
            this.showingLessons = !this.showingLessons; // Toggle the value
        }
    }
});