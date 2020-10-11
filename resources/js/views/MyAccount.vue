<template>
  <main class="my-account">
    <div class="container">
      <h1 class="title mt-4">حسابي</h1>
      <h2 class="sub-title mt-40 mb-40">
        <span class="d-inline-block ml-3">بياناتي</span>
        <router-link class="edit" to="/my-account/edit"
          ><img
            src="/img/svg/pencil.svg"
            alt="pencil"
            class="img-fluid"
            width="24"
            height="24"
        /></router-link>
      </h2>
      <ul class="my-data row">
        <li class="col-md-4">
          <div class="box">
            <div class="label">اسم المستخدم</div>
            <div class="name">محمد فاروق</div>
          </div>
          <div class="box">
            <div class="label">الدولة</div>
            <div class="name">السعودية</div>
          </div>
          <div class="box">
            <div class="label">الجنس</div>
            <div class="name">ذكر</div>
          </div>
        </li>

        <li class="col-md-4">
          <div class="box">
            <div class="label">البريد الإلكتروني</div>
            <div class="name">user@example.com</div>
          </div>
          <div class="box">
            <div class="label">المنطقة</div>
            <div class="name">الرياض</div>
          </div>
          <div class="box">
            <div class="label">تاريخ الميلاد</div>
            <div class="name">1990/02/18</div>
          </div>
        </li>
        <li class="col-md-4">
          <div class="box">
            <div class="label">رقم الجوال</div>
            <div class="name">059003030303</div>
          </div>
          <div class="box">
            <div class="label">المدينة</div>
            <div class="name">العليا</div>
          </div>
        </li>
      </ul>

      <h2 class="sub-title change-password mt-40 mb-40">
        <span class="d-inline-block ml-3">كلمة المرور</span>
        <router-link class="edit" to="/my-account/change-password"
          ><img
            src="/img/svg/pencil.svg"
            alt="pencil"
            class="img-fluid"
            width="24"
            height="24"
        /></router-link>
      </h2>
      <router-link class="logout" to="/">تسجيل خروج</router-link>
    </div>
  </main>
</template>

<script>
export default {
  name: "MyAccount",
};
</script>

<style lang="scss" scoped>
.my-account {
  padding: 100px 0;
  .title {
    font-size: 24px;
    font-weight: bold;
  }
  .sub-title {
    font-size: 20px;
    font-weight: 400;
    color: #2d2d2d;
    &.change-password {
      padding: 30px 0;
      border-top: 1px solid #cbcbcb;
      border-bottom: 1px solid #cbcbcb;
    }
  }
  .logout {
    color: #aa4040;
  }
  .box {
    margin-bottom: 30px;
  }
}
</style>
