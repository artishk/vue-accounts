<template>
  <div>
    <b-form>
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
        <b-form-group
          id="input-group-2"
          label="Your AccountNumber:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.accountNumber"
            placeholder="Enter AccountNumber"
            required
          ></b-form-input>
        </b-form-group>
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
                v-model="form.Address.street"
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
              <b-form-input id="nested-state" v-model="form.Address.state">
              </b-form-input>
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

      <b-button @click="updateAcct" type="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "editAccount",

  data() {
    return {
      form: {},
    };
  },
  methods: {
    updateAcct() {
      const userId = this.$route.params.id;
      axios({
        method: "post",
        url: "http://localhost:9191/updateAccountByID/" + userId,
        data: this.form,
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response);
          router.push({ name: "Home" });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  mounted() {
    const userId = this.$route.params.id;
    axios
      .get("http://localhost:9191/getAccountByID/" + userId)
      .then((response) => {
        console.log(response.data);
        this.form = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
