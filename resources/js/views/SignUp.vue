<template>
  <main class="sign-up">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-xl-6 align-self-center">
          <div class="sign-form">
            <router-link to="/" class="backlink mb-40">
              <img
                src="/img/svg/left-arrow.svg"
                alt="left-arrow"
                class="img-fluid"
              />
            </router-link>
            <h3 class="text-tanmya-primary">تسجيل جديد</h3>
            <p class="description mb-30">
              سجل عن طريق البريد الإلكتروني أو رقم الجوال
            </p>
            <div class="form">
              <form class="text-center">
                <div class="form-row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="name">الاسم</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="email">البريد الإلكتروني</label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="email"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="phone">رقم الجوال</label>
                      <input
                        type="number"
                        name="phone"
                        class="form-control"
                        id="phone"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="country">الدولة</label>
                      <select class="custom-select" id="country">
                        <option selected disabled value="">الدولة</option>
                        <option value="السعودية">السعودية</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="region">الدولة</label>
                      <select class="custom-select" id="region">
                        <option selected disabled value="">المنطقة</option>
                        <option value="الرياض">الرياض</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="gender">الجنس</label>
                      <select class="custom-select" id="gender">
                        <option selected disabled value="">الجنس</option>
                        <option value="ذكر">ذكر</option>
                        <option value="انثي">انثي</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="city">المدينة</label>
                      <select class="custom-select" id="city">
                        <option selected disabled value="">المدينة</option>
                        <option value="العليا">العليا</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="password">كلمة المرور</label>
                      <input
                        name="password"
                        class="form-control"
                        id="password"
                        :type="password ? 'password' : 'text'"
                      />
                      <span class="eye" @click.prevent="password = !password"
                        ><img
                          src="/img/svg/eye.svg"
                          alt="eye"
                          class="img-fluid"
                      /></span>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="date">تاريخ الميلاد</label>
                      <input
                        type="date"
                        name="date"
                        class="form-control"
                        id="date"
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" class="btn btn-tanmya-secondary mb-30">
                  تسجيل دخول
                </button>
              </form>

              <router-link to="/signin" class="btn btn-tanmya-primary-outline"
                >لديك حساب</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      password: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  overflow: hidden;
  background-image: url("/img/signup.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 1200px) {
    background: #fff;
    text-align: center;
  }
  .sign-form {
    max-width: 730px;
    padding: 100px 0;
    width: 730px;
    @media (max-width: 1200px) {
      max-width: 100%;
      width: 100%;
    }
    .backlink {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #92187b;
      border-radius: 50%;
      @media (max-width: 1200px) {
        margin: auto;
        margin-bottom: 20px;
      }
    }
    .form {
      .form-group {
        position: relative;
        margin-bottom: 30px;
        label {
          font-size: 12px;
          background-color: #fafafa;
          padding: 4px;
          position: absolute;
          top: -15px;
          right: 15px;
          color: #92187b;
          font-weight: 500;
          border-radius: 50px;
        }
        .form-control {
          border-radius: 50px;
          border-color: #92187b;
          padding: 25px 20px;
          font-weight: 600;
          width: 100%;
          margin: 0 10px;
        }
        select {
          border-radius: 50px;
          border-color: #92187b;
          padding: 14px 20px;
          margin: 0 10px;
          height: inherit;
        }
        span.eye {
          position: absolute;
          left: 0;
          top: 0;
          padding: 10px 15px;
          cursor: pointer;
        }
      }
      .btn.btn-tanmya-secondary {
        width: 350px;

        padding: 10px;
        @media (max-width: 768px) {
          width: auto;
          padding: 10px 60px;
        }
      }
      .btn-tanmya-primary-outline {
        width: 160px;
        margin: auto;
        display: inherit;
      }
    }
  }
}
</style>