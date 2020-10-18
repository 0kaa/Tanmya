<template>
  <section class="register-now pd-100">
    <div class="container">
      <div class="content text-center">
        <div class="intro mb-30">
          <h3 v-if="!this.$store.state.user" class="title text-tanmya-primary">
            سجل الآن
          </h3>
          <h3 v-else class="title text-tanmya-primary">هل أنت مدرب</h3>
          <p class="description">
            واستمتع بخدمات منصة التنمية والاشتراك في الفعاليات والمؤتمرات
            والدورات
          </p>
        </div>
        <div v-if="!this.$store.state.user" class="buttons">
          <a href="#" class="btn btn-tanmya-primary">تسجيل دخول</a>
          <a href="#" class="btn btn-tanmya-secondary">تسجيل جديد</a>
        </div>
        <div v-else class="buttons">
          <a href="#" class="btn btn-tanmya-secondary">سجل كمدرب الآن</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterNow'
}
</script>

<style lang="scss" scoped>
.register-now {
  background-image: url('/img/register_now.jpg');
  background-size: cover;
  background-position: 100% 100%;
  .title {
    font-size: 37px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .description {
    font-size: 18px;
    font-weight: 500;
  }
  .buttons {
    .btn {
      width: 350px;
      margin: 0 15px;
      @media (max-width: 768px) {
        text-align: center;
        margin: 10px 0px;
        width: 200px;
      }
    }
  }
}
</style>
