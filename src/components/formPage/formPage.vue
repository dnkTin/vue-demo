<template>
  <div>
    <div class="form-group">
      <!-- tim xem bootstrap co khoi tao form mnhu nao la chuan -->
      <div class="form-control">
        <label for="">Name</label>
        <input type="text" v-model="user.name" />
      </div>
      <div class="fom-control">
        <p>Farovite thing</p>
        <input type="checkbox" v-model="user.type" value="" id="fruit" />
        <label for="fruit">Fruit</label>
        <input type="checkbox" v-model="user.type" value="sport" id="sport" />
        <label for="sport">Sport</label>
        <input type="checkbox" v-model="user.type" value="gaming" id="gaming" />
        <label for="gaming">Gaming</label>
        <input
          type="checkbox"
          v-model="user.type"
          value="reading"
          id="reading"
        />
        <label for="reading">Reading</label>
      </div>
      <div class="form-control">
        <input type="radio" value="male" v-model="user.gender" id="male" />
        <label for="male">Male</label>
        <input type="radio" value="female" v-model="user.gender" id="female" />
        <label for="female">Femsale</label>
        <input
          type="radio"
          value="notRefer"
          v-model="user.gender"
          id="notRefer"
        />
        <label for="notRefer">Not refer</label>
      </div>
      <div class="form-control">
        <label for="">Something you interest:</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="user.story"
        ></textarea>
      </div>
      <div class="form-control">
        <button class="btn-primary" @click="submitted = true">
          Submmit
        </button>
      </div>
    </div>
    <div class="content" v-if="submitted">
      <p>Name: {{ user.name }}</p>
      <p>Gender: {{ user.gender }}</p>
      <p>Story: {{ user.story }}</p>
      <p>Favorite thing: {{ user.type }}</p>
    </div>
    <div>
      <input type="checkbox" v-model="checkVal1" />
      <input type="checkbox" v-model="checkVal2" />
      <p>{{ checkVal1 }}</p>
      <p>{{ checkVal2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        story: "",
        type: [],
        gender: ""
      },
      submitted: false,
      checkVal1: false,
      checkVal2: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
