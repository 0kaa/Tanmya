<template>
  <section class="contact-us pb-100">
    <div class="container">
      <div class="contact-form">
        <div class="text-center">
          <h1 class="section-title mb-5">تواصل معنا</h1>
        </div>
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="الإسم"
              v-model="form.name"
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              v-model="form.number"
              class="form-control"
              placeholder="رقم الجوال"
            />
          </div>
          <div class="form-group">
            <input
              v-model="form.email"
              type="email"
              class="form-control"
              placeholder="البريد الإلكتروني"
            />
          </div>
          <div class="form-group">
            <textarea
              v-model="form.message"
              class="form-control"
              placeholder="أترك رسالتك"
              rows="8"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-tanmya-primary">ارسال</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        number: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.contact-us {
  .contact-form {
    .btn {
      width: 350px;
      display: block;
      margin: auto;
      margin-top: 50px;
      @media (max-width: 576px) {
        width: auto;
        padding: 5px 40px;
        margin-top: 20px;
      }
    }
  }
}
</style>