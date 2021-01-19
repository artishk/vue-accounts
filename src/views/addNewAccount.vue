<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.owner"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your BankName:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.bankName"
          placeholder="Enter Bankname"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="IFSC code:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.IFSC_code"
          placeholder="Enter IFSC code"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Account Balance:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.balance"
          placeholder="Enter Balance Amount"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="AccountId:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.ID"
          placeholder="AccountID...."
          required
        ></b-form-input>
      </b-form-group>

      <div>
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Address"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-group
              label="Street:"
              label-for="nested-street"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.Address['street']"
                id="nested-street"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="City:"
              label-for="nested-city"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.Address.city"
                id="nested-city"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              label="State:"
              label-for="nested-state"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input id="nested-state"></b-form-input>
            </b-form-group>

            <b-form-group
              label="Pincode:"
              label-for="nested-pincode"
              label-cols-sm="3"
              label-align-sm="right"
            >
              <b-form-input
                v-model="form.Address.pincode"
                id="nested-pincode"
              ></b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
      </div>

      <b-button
        @click="$emit('add-acc', form.ID)"
        type="submit"
        variant="primary"
        >Submit</b-button
      >
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        owner: "",
        bankName: "",

        Address: {
          street: "",
          city: "",
          state: "",
          pincode: "",
        },
        ID: uuidv4(),
      },
      show: true,
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.owner = "";
      this.form.bankName = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    created() {
      const formData = new FormData();
      formData.append(this.form);
      axios({
        method: "post",
        url: "http://localhost:9191/createNewAccount",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
