<template>
  <section class="about-us pb-100">
    <div class="container">
      <div class="text-center">
        <h1 class="section-title text-center mb-5">عن منصة تمنية</h1>
      </div>
      <div class="content">
        <div class="row mb-50">
          <div class="col-lg-6 align-self-center mb-50">
            <div class="text-content">
              <h2 class="title text-tanmya-primary">ما هي منصة تنمية ؟</h2>
              <p class="description">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
                العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
                أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة
                حقيقية لتصميم الموقع
              </p>
            </div>
          </div>
          <div class="col-lg-6 align-self-center">
            <div class="image-content">
              <img src="/img/aboutus.jpg" alt="aboutus" class="img-fluid" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 align-self-center order-mb-2">
            <div class="image-content">
              <img src="/img/aboutus2.jpg" alt="aboutus" class="img-fluid" />
            </div>
          </div>
          <div class="col-lg-6 align-self-center order-mb-1">
            <div class="text-content">
              <h2 class="title text-tanmya-primary">ماذا تقدم منصة تنمية ؟</h2>
              <p class="description">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
                التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
                العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
                أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة
                حقيقية لتصميم الموقع
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-us {
  .order-mb-1 {
    @media (max-width: 992px) {
      order: 1;
      margin-bottom: 50px;
    }
  }
  .order-mb-2 {
    @media (max-width: 992px) {
      order: 2;
    }
  }
  .text-content {
    .title {
      font-size: 37px;
      font-weight: 600;
    }
    .description {
      font-size: 18px;
      font-weight: 500;
      line-height: 33px;
    }
  }
  .image-content {
    img {
      border-radius: 37px;
    }
  }
}
</style>