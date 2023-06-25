<template>
  <div class="aboutus_main">
    <div class="title">
      <p class="title_name">About Us</p>
    </div>
    <div class="content">
      <p>
        This is a page free of prejudice, where you can find extraordinary
        insights about different Seekastrology signs, their compatibility with
        others, and the stars that guide them. However, it is important to note
        that all information given here is based on the position of the Sun in
        your natal chart, and any interpretations without the image of the
        entire Seekastrology are only partially accurate.
      </p>
      <p>
        When you start developing an interest in astrology, you start to realize
        that its beauty is in not knowing what you will find. It will excite and
        fascinate you, however skeptical you might be, if you only stay open to
        scratch beneath its surface. The true function of astrology is not to
        predict our future, but to help us develop, grow, and understand
        ourselves better. Unfortunately, it has been used too often as a tool to
        gain some quick money, and since there is no real, in-depth astrological
        education on a state level in any country in the world, anyone can
        practice it, no matter the quality or quantity of one's knowledge.
      </p>
      <p>
        However, there is a world behind the scenes, one that not many have
        seen. There are international certifications, three or four-year studies
        in many countries of the world, and a different approach to astrology as
        a helping tool to psychology and alternative medicine. If so many people
        practice it and try to incorporate it in very serious branches of
        science, how is it possible that we still think of it as something
        vaguely accurate, a shady tool to make predictions for our health,
        marriages, and career?
      </p>
      <p>What We Stand For</p>
      <p class="subtitle">• Authentic</p>
      <p>
        We are passionate about creating high-quality content, products, and
        code that mirror the standards of both our customers and our team
      </p>
      <p class="subtitle">• Reliable</p>
      <p>
        We cultivate an integrity-driven work environment that allows us to
        deliver dependable results for our customers
      </p>
      <p class="subtitle">• Insightful</p>
      <p>
        We embrace new perspectives and innovative thinking that will benefit
        our customers, our colleagues, and ourselves
      </p>
      <p class="subtitle">• Experiential</p>
      <p>
        We believe in our immersive, participatory experiences that have the
        power to create positive outcomes
      </p>
      <p class="subtitle">• Supportive</p>
      <p>
        We care for each other, our customers, and our communities,
        understanding that empathy makes us stronger
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.aboutus_main {
  width: 100%;
  .title {
    padding-bottom: 32px;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50.52%,
        rgba(255, 255, 255, 0) 100%
      );
    }
    &_name {
      font-family: 'Cinzel Decorative';
      font-style: normal;
      font-weight: 700;
      font-size: 46px;
      line-height: 64px;
      color: #ffffff;
      text-align: center;
    }
  }
  .content {
    padding: 32px 0 0;
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #d2d3d7;
    .subtitle {
      padding-left: 10px;
    }
  }
}
@media (max-width: (750px)) {
  $pr: math.div(1vw, 3.75);
  .aboutus_main {
    .title {
      padding-bottom: 24 * $pr;
      &::after {
        height: 1 * $pr;
      }
      &_name {
        font-size: 36 * $pr;
        line-height: 48 * $pr;
      }
    }
    .content {
      padding: 24 * $pr 0 0;
      font-size: 14 * $pr;
      line-height: 24 * $pr;
      color: rgba(255, 255, 255, 0.7);
      .subtitle {
        padding-left: 10 * $pr;
      }
    }
  }
}
</style>
