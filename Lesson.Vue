<template>
    <div>
      <h2>Lessons</h2>
      <ul v-if="lessons.length">
        <li v-for="lesson in lessons" :key="lesson.id">
          {{ lesson.name }} - Price: {{ lesson.price }} - Available: {{ lesson.available }}
        </li>
      </ul>
      <p v-else>No lessons available</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        lessons: []
      };
    },
    created() {
      this.fetchLessons();
    },
    methods: {
      fetchLessons() {
        fetch('/products.json') 
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.lessons = data;
          })
          .catch(error => {
            console.error('Error fetching lessons:', error);
          });
      }
    }
  };
  </script>
  
  
  