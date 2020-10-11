<template>
  <main class="edit-account">
    <div class="container">
      <h1 class="title mt-50 mb-50">تعديل بياناتي</h1>
      <div class="form">
        <form>
          <div class="form-row">
            <div class="col-sm-6">
              <div class="form-group">
                <label for="name">الاسم</label>
                <input type="text" name="name" class="form-control" id="name" />
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
                  ><img src="/img/svg/eye.svg" alt="eye" class="img-fluid"
                /></span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <label for="date">تاريخ الميلاد</label>
                <input type="date" name="date" class="form-control" id="date" />
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
  name: "EditAccount",
  data() {
    return {
      password: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.edit-account {
  padding: 100px 0;
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
