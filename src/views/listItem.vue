<template>
  <ul>
    <li>{{ acct.owner }}</li>
    <li>{{ acct.bankName }}</li>
    <li>{{ acct.IFSC_code }}</li>
    <li>{{ acct.accountNumber }}</li>
    <li>{{ acct.balance }}</li>
  </ul>
</template>
<script>
export default {
  name: "listItem",
  components: {},
  props: ["acct"],
};
</script>
