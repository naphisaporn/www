<template>
  <div id="Form">
    <form v-on:submit.prevent="submit">
      <div>
        <label for="first_name">Firstname</label>
        <input
          type="text"
          name="first_name"
          v-model.trim="applicant.first_name"
        />
      </div>

      <div>
        <label for="last_name">Lastname</label>
        <input
          type="text"
          name="last_name"
          v-model.trim="applicant.last_name"
        />
      </div>

      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
        <label for="sex">Female</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <div>
        <label for="age">Age</label>
        <input type="number" v-model.number="applicant.age" />
      </div>

      <div>
        <select name="course" v-model="applicant.course">
          <option value="react">React</option>
          <option value="angula">Angula</option>
          <option value="vuejs">Vue</option>
        </select>
      </div>

      <button type="button" @click.exact="clear" @click.alt="useDefault">Clear</button>
      <button type="submit">Submit</button>
    </form>

    <div style="margin-top: 16px; color: red;">
      #Spy {{ JSON.stringify(applicant) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "From",
  data() {
    return {
      applicant: {
        first_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: "vue"
      }
    };
  },
  methods: {
    submit() {
      //event.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        first_name: "",
        last_name: "",
        sex: "male",
        age: 0,
        course: "vue"
      };
    },
    useDefault() {
      this.applicant = {
        first_name: "None",
        last_name: "None",
        sex: "male",
        age: 10,
        course: "vue"
      };
    }
  }
};
</script>

<style></style>
