<template>
  <div id="home">
    <Card
      :accounts="accounts"
      v-on:del-acc="deleteAcc"
      v-on:edit-acc="editAcc"
    />
  </div>
</template>

<script>
import Card from "../components/Card";
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
    editAcc(id) {
      this.$router.push({
        name: "editAccount",
        params: {
          id: id,
        },
      });
    },
  },
  mounted() {
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
