<template>
  <main class="edit-account">
    <div class="container">
      <h1 class="title mt-4 mb-4">تعديل بياناتي</h1>
      <div class="form">
        <form>
          <div class="form-row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name">الاسم</label>
                <input id="name" type="text" name="name" class="form-control" />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="email">البريد الإلكتروني</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="phone">رقم الجوال</label>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="country">الدولة</label>
                <select id="country" class="custom-select">
                  <option selected disabled value="">الدولة</option>
                  <option value="السعودية">السعودية</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="region">الدولة</label>
                <select id="region" class="custom-select">
                  <option selected disabled value="">المنطقة</option>
                  <option value="الرياض">الرياض</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="gender">الجنس</label>
                <select id="gender" class="custom-select">
                  <option selected disabled value="">الجنس</option>
                  <option value="ذكر">ذكر</option>
                  <option value="انثي">انثي</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="city">المدينة</label>
                <select id="city" class="custom-select">
                  <option selected disabled value="">المدينة</option>
                  <option value="العليا">العليا</option>
                </select>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="password">كلمة المرور</label>
                <input
                  id="password"
                  name="password"
                  class="form-control"
                  :type="password ? 'password' : 'text'"
                />
                <span class="eye" @click.prevent="password = !password"
                  ><img src="/img/svg/eye.svg" alt="eye" class="img-fluid"
                /></span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="date">تاريخ الميلاد</label>
                <input id="date" type="date" name="date" class="form-control" />
              </div>
            </div>
          </div>

          <button type="submit" class="btn btn-tanmya-secondary mt-30">
            حفظ
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Edit',
  data() {
    return {
      password: true
    }
  },
  head() {
    return {
      title: 'تعديل بياناتي'
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-account {
  padding: 100px 0;
  @media (max-width: 992px) {
    padding: 50px 0;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .sub-title {
    font-size: 20px;
    font-weight: 400;
    color: #2d2d2d;
  }
  .form {
    .form-group {
      position: relative;
      margin-bottom: 30px;
      margin-left: 10px;
      margin-right: 10px;
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
