<template>
  <main class="sign-in">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col-xl-6 align-self-center">
          <div class="sign-form">
            <nuxt-link to="/" class="backlink mb-40">
              <img
                src="/img/svg/left-arrow.svg"
                alt="left-arrow"
                class="img-fluid"
              />
            </nuxt-link>
            <h3 class="text-tanmya-secondary">تسجيل دخول</h3>
            <p class="description mb-30">
              سجل عن طريق البريد الإلكتروني أو رقم الجوال
            </p>
            <div class="form">
              <form @submit.prevent="handleSubmit()">
                <div class="form-group">
                  <label for="email">البريد الإلكتروني أو رقم الجوال</label>
                  <input
                    id="email"
                    v-model="form.email"
                    name="email"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="password">كلمة المرور</label>
                  <input
                    id="password"
                    v-model="form.password"
                    name="password"
                    class="form-control"
                    :type="password ? 'password' : 'text'"
                  />
                  <span class="eye" @click.prevent="password = !password"
                    ><img src="/img/svg/eye.svg" alt="eye" class="img-fluid"
                  /></span>
                </div>

                <button type="submit" class="btn btn-tanmya-primary mb-30">
                  تسجيل دخول
                </button>
              </form>
              <a
                href="#"
                class="forget-pass text-tanmya-secondary text-left d-block"
                >نسيت كلمة المرور ؟</a
              >
              <nuxt-link to="/signup" class="btn btn-tanmya-secondary-outline"
                >ليس لديك حساب ؟</nuxt-link
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
  name: 'SignIn',
  data() {
    return {
      password: true,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$store.commit('userAuth', true)
      this.$router.push('/')
    }
  },
  head() {
    return {
      title: 'تسجيل دخول'
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-in {
  overflow: hidden;
  background-image: url('/img/signin.jpg');
  background-size: cover;
  @media (max-width: 1200px) {
    background: #fff;
    text-align: center;
    height: auto;
    padding: 100px 0 50px;
  }
  .sign-form {
    max-width: 350px;
    @media (max-width: 1200px) {
      max-width: 100%;
    }
    .backlink {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #246284;
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
          color: #246284;
          font-weight: 500;
          border-radius: 50px;
        }
        input {
          border-radius: 50px;
          border-color: #246284;
          padding: 25px 20px;
          font-weight: 600;
        }
        span.eye {
          position: absolute;
          left: 0;
          top: 0;
          padding: 10px 15px;
          cursor: pointer;
        }
      }
      .btn.btn-tanmya-primary {
        width: 100%;
        padding: 10px;
        @media (max-width: 768px) {
          width: auto;
          padding: 10px 60px;
        }
      }
      .btn-tanmya-secondary-outline {
        width: 160px;
        margin: auto;
        display: inherit;
        margin-top: 30px;
      }
    }
  }
}
</style>
