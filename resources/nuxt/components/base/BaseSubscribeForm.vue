<template>
  <div class="subscribe-form">
    <h3 class="subscribe-title">استمارة الاشتراك في الفعالية</h3>
    <form class="form">
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
            <input id="email" type="email" name="email" class="form-control" />
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="phone">رقم الجوال</label>
            <input id="phone" type="number" name="phone" class="form-control" />
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
            <label for="date">تاريخ الميلاد</label>
            <input id="date" type="date" name="date" class="form-control" />
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
            <label for="region">المنطقة</label>
            <select id="region" class="custom-select">
              <option selected disabled value="">المنطقة</option>
              <option value="الرياض">الرياض</option>
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
        <div class="col-sm-12">
          <div class="form-group">
            <label for="city">ملاحظات</label>
            <textarea
              name="message"
              class="form-control"
              rows="3"
              placeholder="هل لديك أي ملاحظات"
            ></textarea>
          </div>
        </div>
      </div>

      <div
        v-if="!this.$store.state.subscribeStep"
        class="buttons d-flex align-items-center"
      >
        <div class="btn btn-tanmya-secondary" @click="nextStep">تاكيد</div>
        <div class="btn" @click="backStep">الغاء</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SubscribeForm',
  methods: {
    backStep() {
      this.$store.commit('subscribeStatus', 'event')
    },
    nextStep() {
      this.$store.commit('subscribeStep', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.subscribe-form {
  background-color: #fff;
  padding: 50px 95px;
  @media (max-width: 992px) {
    padding: 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
  .subscribe-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    line-height: 45px;
  }
}
.form {
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }

  .form-group {
    position: relative;
    margin-bottom: 30px;
    margin-left: 30px;
    @media (max-width: 768px) {
      margin-left: 0;
    }
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
    textarea.form-control {
      border-radius: 28px;
      resize: none;
      padding: 20px;
    }
    select {
      border-radius: 50px;
      border-color: #92187b;
      padding: 14px 20px;
      height: inherit;
    }
  }
  .btn.btn-tanmya-secondary {
    width: 350px;
    padding: 10px;
    margin-left: 3rem;
    @media (max-width: 768px) {
      width: auto;
      padding: 5px 30px;
      margin-left: 1rem;
    }
  }
  .btn {
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>
