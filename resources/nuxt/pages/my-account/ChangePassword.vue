<template>
  <main class="change-password">
    <div class="container">
      <h1 class="title mt-4 mb-4">تغيير كلمة المرور</h1>
      <form class="form">
        <div class="form-group">
          <label for="password">كلمة المرور القديمة</label>
          <input
            id="password"
            name="password"
            class="form-control"
            :type="oldPassword ? 'password' : 'text'"
          />
          <span class="eye" @click.prevent="oldPassword = !oldPassword"
            ><img src="/img/svg/eye.svg" alt="eye" class="img-fluid"
          /></span>
        </div>

        <div class="form-group">
          <label for="password">كلمة المرور الجديدة</label>
          <input
            id="password"
            name="password"
            class="form-control"
            :type="newPassword ? 'password' : 'text'"
          />
          <span class="eye" @click.prevent="newPassword = !newPassword"
            ><img src="/img/svg/eye.svg" alt="eye" class="img-fluid"
          /></span>
        </div>

        <button type="submit" class="btn btn-tanmya-secondary mt-30">
          حفظ
        </button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ChangePassword',
  data() {
    return {
      oldPassword: true,
      newPassword: true
    }
  },
  head() {
    return {
      title: 'تغير كلمة المرور'
    }
  }
}
</script>

<style lang="scss" scoped>
.change-password {
  padding: 100px 0;
  @media (max-width: 992px) {
    padding: 50px 0;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .form {
    .form-group {
      position: relative;
      margin-bottom: 30px;
      margin-left: 10px;
      margin-right: 10px;
      max-width: 350px;
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
      }
      select {
        border-radius: 50px;
        border-color: #92187b;
        padding: 14px 20px;
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
      padding: 10px 60px;
    }
  }
}
</style>
