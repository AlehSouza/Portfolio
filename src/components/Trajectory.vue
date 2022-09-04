<template>
  <div class="container-trajectory" data-aos="fade-up" data-aos-delay="300">
    <div>
      <h1
        v-html="
          this.lang === 'pt_br'
            ? this.texts.title_trajectory.pt_br
            : this.texts.title_trajectory.eng
        "
      ></h1>
      <p
        v-html="
          this.lang === 'pt_br'
            ? this.texts.subtitle_trajectory.pt_br
            : this.texts.subtitle_trajectory.eng
        "
      ></p>
    </div>
    <div class="timeline">
      <div class="timeline">
        <div class="step completed">
          <div
            class="title"
            v-html="
              this.lang === 'pt_br'
                ? this.texts.jobs_subtitle_trajectory[0].title.pt_br
                : this.texts.jobs_subtitle_trajectory[0].title.eng
            "
          ></div>
          <div class="date">
            <span
              v-html="
                this.lang === 'pt_br'
                  ? this.texts.jobs_subtitle_trajectory[0].text.pt_br
                  : this.texts.jobs_subtitle_trajectory[0].text.eng
              "
            ></span>
            <br />
            <b>03/02/2020</b>
          </div>
        </div>

        <div class="step completed">
          <div
            class="title"
            v-html="
              this.lang === 'pt_br'
                ? this.texts.jobs_subtitle_trajectory[1].title.pt_br
                : this.texts.jobs_subtitle_trajectory[1].title.eng
            "
          ></div>
          <div class="date">
            <span
              v-html="
                this.lang === 'pt_br'
                  ? this.texts.jobs_subtitle_trajectory[1].text.pt_br
                  : this.texts.jobs_subtitle_trajectory[1].text.eng
              "
            ></span>
            <br />
            <b>30/04/2021</b>
          </div>
        </div>

        <div class="step current" data-notes-count="2">
          <div
            class="title"
            v-html="
              this.lang === 'pt_br'
                ? this.texts.jobs_subtitle_trajectory[2].title.pt_br
                : this.texts.jobs_subtitle_trajectory[2].title.eng
            "
          ></div>
          <div class="date">
            <span
              v-html="
                this.lang === 'pt_br'
                  ? this.texts.jobs_subtitle_trajectory[2].text.pt_br
                  : this.texts.jobs_subtitle_trajectory[2].text.eng
              "
            ></span>
            <br />
            <b>16/02/2022</b>
          </div>
        </div>

        <div class="step">
          <div
            class="title"
            v-html="
              this.lang === 'pt_br'
                ? this.texts.jobs_subtitle_trajectory[3].title.pt_br
                : this.texts.jobs_subtitle_trajectory[3].title.eng
            "
          ></div>
          <div class="date">
            <span
              v-html="
                this.lang === 'pt_br'
                  ? this.texts.jobs_subtitle_trajectory[3].text.pt_br
                  : this.texts.jobs_subtitle_trajectory[3].text.eng
              "
            ></span>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lang: {
      type: String,
      required: true,
    },
    texts: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../styles/styles.css");

$marker-size: 1.5rem;
$step-size: 11rem;
$line-size: 2px;

$timeline-color: #d6dce0;
$completed-step-color: #000000;
$future-step-color: #ffffff;

.container-trajectory {
  padding: 24px 10px;
  h2 {
    margin: 0px;
    padding: 15px;
  }
}
.timeline {
  position: relative;
  margin: $marker-size;
}

.step {
  position: relative;
  padding: 0.5rem;
  padding-left: $marker-size;
  border-left: $line-size solid $timeline-color;
}

.step[data-notes-count]:before {
  content: attr(data-notes-count);
  font-size: 0.8rem;
  line-height: $marker-size;
  text-align: center;
  color: var(--cor-principal);
}

.step:before {
  content: "";
  width: $marker-size;
  height: $marker-size;
  border-radius: $marker-size;
  background-color: $future-step-color;
  border: 1px solid darken($future-step-color, 15%);
  position: absolute;
  left: -$marker-size / 2;
  top: $marker-size / 2;
  margin-left: -$line-size / 2;
}

.step .date {
  font-size: 80%;
  color: gray;
}

.step .title {
  font-weight: bolder;
}

.step.completed {
  border-color: darken($completed-step-color, 10%);
}

.step.completed:before {
  border: 1px solid darken($completed-step-color, 10%);
  background-color: $completed-step-color;
}

.step.current {
  border-color: var(--cor-principal);
}

.step.current:before {
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-principal);
}

@media screen and (min-width: 40em) {
  .timeline {
    font-size: 0;
    padding-top: $marker-size;
  }
  .step {
    display: inline-block;
    font-size: 0.8rem;
    width: $step-size * 0.8;
    padding-left: 0;
    margin-bottom: 0;
    border-left: none;
    border-top: $line-size solid $timeline-color;
    padding-top: $marker-size / 2;
    text-align: center;
  }
  .step:before {
    left: $step-size * 0.8 / 2 - $marker-size / 2;
    top: -$marker-size / 2;
    margin-left: 0;
    margin-top: -$line-size / 2;
  }
}

@media screen and (min-width: 50em) {
  .step {
    font-size: 1rem;
    width: $step-size;
  }
  .step:before {
    left: $step-size / 2 - $marker-size / 2;
  }
}
@media screen and (max-width: 500px) {
  .container-trajectory {
    flex-direction: column;
    display: flex;
    div {
      h1 {
        width: 80vw;
        margin: 0 auto;
      }
      p {
        width: 80vw;
        margin: 0 auto;
      }
    }
  }
}
</style>
