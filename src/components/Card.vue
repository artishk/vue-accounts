<template>
  <div id="card">
    <div :key="acc.ID" v-for="acc in accounts">
      <b-container class="bv-example-row">
        <b-row>
          <b-col align="center">
            <b-card
              img-src="/static/bank.png"
              title="Account-Details"
              img-alt="image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                <list-item :acct="acc" />
              </b-card-text>

              <div>
                <b-button
                  class="edit"
                  variant="primary"
                  @click="$emit('edit-acc', acc.ID)"
                  >Edit
                </b-button>
                <div class="divider" />
                <b-button
                  type="submit"
                  @click="$emit('del-acc', acc.ID)"
                  class="del"
                  variant="primary"
                  >Delete</b-button
                >
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import listItem from "./listItem";

export default {
  name: "Card",
  props: ["accounts"],
  components: {
    listItem,
  },
};
</script>

<style scoped>
.divider {
  width: 5px;
  height: auto;
  display: inline-block;
}
</style>
