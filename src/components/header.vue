<template>
  <header>
    <h1>Let's share</h1>
    <div class="buttons">
      <el-button class="sign-in">Sign in</el-button>
      <el-button class="sign-up">Sign up</el-button>
    </div>
  </header>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="scss">
  @import '../assets/base.scss';
  @import '../assets/common.scss';
  header {
    background: $theme-color;
    color: #fff;
    padding: 30px 0;
    h1 {
      font-size: 48px;
      margin-bottom: 20px;
    }
    .buttons {

      .el-button {
        padding: 12px 24px;
        transition: all 300ms;
      }
      .el-button.sign-in {
        background: #fff;
        color: $theme-color;
        border: none;
      }
      .el-button.sign-up {
        background: none;
        color: #fff;
      }
    }
  }
</style>