<template>

  <div class="aboutPage_wrpr">
    <div class="container">
      <div class="row">
        <div class="column">

          <div class="about_img_wrpr">
            <img
              class="doctor_image"
              src="~/static/about_img.jpg"
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div class="column about_info_content">
          <BackButton label="Back To Home" href="/" />          
          <h4 class="name">DR. V paniker</h4>
          <div class="degrees_wrpr">
            <span class="degrees">gynocologist</span>
            <span class="degrees">, MBBS, MD</span>
          </div>
          <p class="short_desc">
            Rich in experiences and knowledge, Dr Panicker has worked with the Government in facilitating safe easy labor in remote areas with limited resource availabilities. Taking a notch further, with his inventions, Dr Panicker has successfully reduced complications during child births at affordable costs. Today, he conducts workshops, classes and has invented machinery and equipment to assist other Doctors towards the cause. 
          </p>
        </div>
      </div>

      <div class="about_para_wrpr">
          <ParaGraph
            heading="Early Life and Education"
            para="Dr Panicker was born into a humble lower middle class agricultural family in Nedumudi, Alappuzha [formerly known as Alleppey] in the state of Kerala. Being a bright and hard working student with a strong desire to learn, Dr Panicker completed his schooling at the prestigious St. Mary’s School in Chambakulam. He successfully completed his graduation from the SD College in Alappuzha and enrolled himself at the esteemed Government Medical College at Trivandrum for MBBS. He continued his Post Graduation specialization in Anesthesia with Government Medical College at Trivandrum and also completed his Post Graduation in Gynecology at the renowned Calicut Medical College. 
            Dr Panicker is married to a Pediatrician and has two sons one of whom has joined him in continuing the service. His oldest son is an Engineer in Bangalore, Karnataka."
          />
          <ParaGraph
            heading="Career"
            para="While pursuing his studies further for attaining his Post Graduation specialization, Dr Panicker had the opportunity to be a part of Government Services. His decade long tenure was mostly in the rural regions where facilities were minimal and resources were on the lower side. It was this tenure and his compassionate and passionate mind-set that paved way for the inventions. Al together Dr Panicker served in the Government Services for 30 long years. Post retirement, he opened a Maternity Hospital in Kodungallur in Thrissur District. "
          />
          <ParaGraph
            heading="Enquery .?"
            para="Do you want to know more about .? Please feel free to messaage me.I am happy to give you more information"
          />
      </div>


      <div class="row">
        <div class="column">
          <div class="form_wrpr">
            <FormsContact />
          </div>
        </div>
      </div>





      <!-- <div class="row">
        <div class="column">
          div.about_
        </div>
      </div> -->



    </div>
  </div>



  
</template>

<style scoped>
* {
  font-family: IBM Plex Sans;
}
.doctor_image {
  width: 100%;
}
.name {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 26px;
  letter-spacing: 0.11em;
  text-transform: uppercase;

  color: #000000;
}
.degrees {
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 16px;
  letter-spacing: 0.11em;
  text-transform: uppercase;

  color: #868686;
}
.short_desc {
  font-family: IBM Plex Sans Condensed;
  font-style: normal;
  font-weight: 300;
  font-size: 1.6rem;
  margin-top: 2.4rem;
  /* line-height: 140.62%; */

  color: rgba(0, 0, 0, 0.72);
}

/* --------------------- */
.aboutPage_wrpr{
  width: 100%;
  float: left;
  padding: 15px 0;
}

.about_img_wrpr{
  width: 100%;
  float: left;
}

.form_wrpr{
  width: 100%;
  float: left;
}

.about_para_wrpr{
  width: 100%;
  float: left;
}

.degrees_wrpr{
  width: 100%;
  float: left;
}

@media (min-width:40rem) {
  .about_para_wrpr{
    padding-top: 55px;
    margin-bottom: -30px;
  }

  .about_para_wrpr .row{
    margin-bottom: 2rem;
  }

  .aboutPage_wrpr{
    padding: 35px 0;
  }

  .button.button-clear{
    display: none;
  }

  .about_info_content{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding-left: 2rem;
  }


}


@media (min-width:80rem) {
  .about_info_content{
    padding-left: 10rem;
  }
}

</style>
