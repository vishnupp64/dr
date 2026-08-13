<template>
  <div class="invention_wrpr">
    <div class="container">
      <SubHeading text="Inventions" />
      <p>
        One of the most remarkable contributions of Dr Panicker is his expertise in handling complicated and critical cases. His inventions are an extension of his experiences and knowledge. A few of his inventions are as below. Three Sections
      </p>
      <div class="row split_inventions" >
          <div class="column" v-for="p in products" :key="p.id"><InventionsCard :invention="p" :href=url(p) /></div>
        </div>
      <!-- <div class="row">
        <div class="column"><InventionsCard href="/inventions/1" /></div>
        <div class="column"><InventionsCard href="/inventions/1" /></div>
        <div class="column"><InventionsCard href="/inventions/1" /></div>
      </div>
      <div class="row">
        <div class="column"><InventionsCard href="/inventions/1" /></div>
        <div class="column"><InventionsCard href="/inventions/1" /></div>
        <div class="column"><InventionsCard href="/inventions/1" /></div>
      </div> -->
      <Button text="View all" href="/inventions" class="viewall" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["storedata"]),
    products() {
      // console.log(this.storedata)
      return this.storedata
    },
  },
  methods:{
    url(p){
      return `/inventions/${p.id}`;
    }
  }
}
</script>
<style scoped>

.invention_wrpr{
  width: 100%;
  float: left;
  overflow: hidden;
}

.viewall{
  display: block;
  margin: 0 auto;
  width: max-content;
}

.invention_wrpr 

p {
  font-family: IBM Plex Sans Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  line-height: 140.62%;

  color: #000000;
}


.split_inventions{
  width: 100%;
  float: left;
  display: flex;
  flex-wrap: wrap;
}

.split_inventions .column{
  width: calc(33.33% - 15px);
  float: left;
  margin-right: 20px;
  margin-bottom: 9rem;
  max-width: calc(33.33% - 15px);
}

.split_inventions .column:nth-child(3n){
  margin-right: 0;
}


@media (max-width:900px) {
  
  .split_inventions .column{
    width: calc(50% - 15px);
    margin-right: 30px;
    max-width: calc(50% - 15px);
  }

  .split_inventions .column:nth-child(3n){
    margin-right: 30px;
  }

  .split_inventions .column:nth-child(2n){
    margin-right: 0px;
  }

}



@media (max-width:640px) {
  
  .split_inventions .column{
    width: 100%;
    margin-right: 0px;
    max-width: 100%;
  }

  .split_inventions .column:nth-child(3n){
    margin-right: 0px;
  }

  .split_inventions .column:nth-child(2n){
    margin-right: 0px;
  }

}





</style>
