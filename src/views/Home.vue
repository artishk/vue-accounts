<template>
  <div id="home">
    <Card :accounts="accounts" v-on:del-acc="deleteAcc" />
  </div>
</template>

<script>
import Card from "../views/Card";
import axios from "axios";

// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      accounts: [],
    };
  },
  methods: {
    deleteAcc(id) {
      this.accounts = this.accounts.filter((acc) => acc.ID !== id);
    },
  },
  created() {
    axios
      .get("http://localhost:9191/getAllAccounts")
      .then((response) => {
        console.log(response.data);
        this.accounts = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>
