<template>
  <div class="disclaimer_main">
    <div class="title">
      <p class="title_name">Disclaimer</p>
    </div>
    <div class="content">
      <p>
        The information and predictions provided by Seekastrology.com website
        are for entertainment purposes only, and it cannot be considered as a
        replacement for the advice or consultation of any kind that you may
        receive from a licenced professional such as a doctor, lawyer, or a
        financial advisor. These are mere predictions that indicate a
        possibility of instances or occurrences. Seekastrology.com does not
        offer warranties, assurance or guarantees of any kind, and will not be
        responsible for any interpretation or usage of the information mentioned
        above by the recipient.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.disclaimer_main {
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
    padding: 32px 0 120px 0;
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
  .disclaimer_main {
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
      padding: 24 * $pr 0 0 0;
      font-size: 14 * $pr;
      line-height: 24 * $pr;
      color: rgba(255, 255, 255, 0.6);
      .subtitle {
        padding-left: 10 * $pr;
      }
    }
  }
}
</style>
