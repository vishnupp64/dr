<template>
  <form class="contact_form" @submit.prevent="sendEmail">
    <fieldset>
      <div class="row">
        <div class="column">
          <label for="nameField">Name</label>
          <input type="text" id="nameField" name="name" v-model="name" />
          <label for="emailField">E-mail</label>
          <input type="email" id="emailField" name="email" v-model="email" />
          <label for="mobileField">Mobile</label>
          <input
            type="number"
            id="mobileField"
            name="mobile"
            v-model="mobile"
          />
        </div>
        <div class="column">
          <label for="commentField">Your Message</label>
          <textarea
            id="your_message"
            name="message"
            v-model="message"
          ></textarea>
        </div>
      </div>

      <!-- <label for="ageRangeField">Age Range</label>
      <select id="ageRangeField">
        <option value="0-13">0-13</option>
        <option value="14-17">14-17</option>
        <option value="18-23">18-23</option>
        <option value="24+">24+</option>
      </select> -->

      <!-- <div class="float-right">
        <input type="checkbox" id="confirmField" />
        <label class="label-inline" for="confirmField"
          >Send a copy to yourself</label
        >
      </div> -->
      <!-- <input class="button-primary" type="submit" value="Send" /> -->
      <!-- <Button  on-cli text="SEND" /> -->
      <input class="float_right" type="submit" value="Send" />
    </fieldset>
  </form>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      mobile: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          process.env.EMAILJS_SERVICE_ID,
          process.env.EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.EMAILJS_USER_ID,
          {
            from_name: this.name,
            from_email: this.email,
            message: this.message,
            from_phone: this.mobile,
          }
        );
        console.log("it works!!!");
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
      this.mobile = "";
    },
  },
};
</script>
<style scoped>
.float_right {
  float: left;
}

@media (min-width: 40rem) {
  .contact_form {
    text-align: left;
    max-width: 100%;
    /* margin: 0 auto; */
  }
  .contact_form input {
    text-align: left;
  }
  .contact_form textarea {
    text-align: left;
    resize: none;
    /* min-height: 20em; */
    min-height: 12.8em;
  }

  .float_right {
    float: right;
  }
}
</style>
