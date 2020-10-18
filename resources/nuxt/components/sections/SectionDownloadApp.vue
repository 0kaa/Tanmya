<template>
  <section class="download-app">
    <div class="container">
      <div class="row">
        <div class="col-md-4 align-self-center">
          <h2 class="title text-tanmya-primary">حمل التطبيق الآن</h2>
          <p class="description">
            واستمتع بخدمات منصة التنمية والاشتراك في الفعاليات والمؤتمرات
            والدورات بطريقة أسهل
          </p>
          <a href="#" class="playstore-link ml-4">
            <img
              src="/img/playstore.png"
              alt="App Store Link"
              class="img-fluid"
            />
          </a>
          <a href="#" class="app-store-link">
            <img
              src="/img/appstore.png"
              alt="App Store Link"
              class="img-fluid"
            />
          </a>
        </div>
        <div class="col-md-8 align-self-center">
          <div class="left-container">
            <img
              src="/img/download_app.png"
              alt="iphone Image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="email-list">
      <div class="container">
        <h3 class="title">القائمة البريدية</h3>
        <p class="description mb-5">
          اشترك لمتابعة آخر أخبار مجتمع مطوري جوجل السحابي السعودي
        </p>
        <form>
          <div
            class="subscribe-form d-flex align-items-center justify-content-center"
          >
            <input
              type="email"
              class="form-control"
              placeholder="البريد الالكتروني"
            />

            <input
              type="submit"
              class="btn btn-tanmya-primary-yellow"
              value="اشترك"
            />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.download-app {
  background-color: #fff;
  .left-container {
    overflow: hidden;
    @media (max-width: 768px) {
      margin-top: 40px;
    }
    img {
      margin-bottom: -100px;
      transform: rotate(14deg);
    }
  }
  .title {
    font-size: 37px;
  }
  .description {
    font-size: 18px;
    @media (max-width: 768px) {
      margin-bottom: 30px;
    }
  }
  .email-list {
    background-color: #92187b;
    color: #fff;
    text-align: center;
    padding: 100px 0;
    .title {
      color: #fff;
    }
    .subscribe-form {
      @media (max-width: 768px) {
        flex-direction: column;
      }
      .form-control {
        border-radius: 50px;
        overflow: hidden;
        border: none;
        width: 540px;

        @media (max-width: 768px) {
          text-align: center;
          width: 80%;
          margin: auto;
        }
      }
      .btn {
        width: 160px;
        margin-right: 20px;
        @media (max-width: 768px) {
          margin: 0;
          width: auto;
          padding: 5px 40px;
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
