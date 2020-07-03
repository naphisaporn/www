<template>
  <div id="Loop">
    <ul>
      <li v-for="(item, index) in ['Angula', 'Vue', 'React']" :key="index">
        {{ item }}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="(item, index) in mCourses" :key="index">
        {{ item.title }} price{{ item.price }}
      </li>
    </ul>
<!-- Destructuring -->
    <ul>
      <li v-for="({ title, price }, index) in mCourses" :key="index">
        {{ title }} price{{ price }}
      </li>
    </ul>
<hr/>
    <!-- Dynamic -->
    <input type="text" placeholder="Title" v-model="course.title"><br>
    <input type="number" placeholder="Price" v-model="course.price"><br>
    <button @click="addCourse">Submit</button>
     <ul>
      <li v-for="(course, index) in dynamicCourse" :key="index">
        {{ course.title }} price{{ course.price }} <button @click="removeCourse(index)">x</button>
      </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Loop",
  methods: {
      addCourse(){
          this.dynamicCourse.push(this.course)
          this.course = {title: "", price: 0}
      },
      removeCourse(index) {
          this.dynamicCourse.splice(index, 1)
      }
  },
  data() {
    return {
        course:{title: "", price:0},
        dynamicCourse:[],
      mCourses: [
        { title: "iOS", price: 11 },
        { title: "Android", price: 10 }
      ]
    };
  }
};
</script>

<style></style>
