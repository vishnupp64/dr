<template>
  <div class="awards_wrpr">
    <div class="container">
      <div class="row">
        <div class="column">
          <AwardsCard
            bg_color="#f9cbb1"
            given="KERLA MEDICAL ASSOCIATION"
            what_award="kerala s no: 1 doctor for gynocology."
          />
        </div>
        <div class="column">
          <AwardsCard
            bg_color="#FEE193"
            color="#5FE81F"
            given="KERLA MEDICAL ASSOCIATION111"
            what_award="kerala s no: 1 doctor for gynocology."
          />
        </div>
        <div class="column">
          <AwardsCard
            bg_color="#FF9267"
            color="#FD353F"
            given="KERLA MEDICAL ASSOCIATION111"
            what_award="kerala s no: 1 doctor for gynocology."
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.awards_wrpr{
  width: 100%;
  float: left;
  overflow: hidden;
}

.awards_wrpr .row{
  display: flex;
  flex-wrap: wrap;
}

.column{
  flex: 1 1 33.33%;
}


</style>