<template>
  <main class="notification">
    <div class="container">
      <div
        class="header-section d-flex align-items-center justify-content-between mt-4 mb-4"
      >
        <h1 class="title">الإشعارات</h1>
        <div class="new-notification">جديد <span class="count">2</span></div>
      </div>
      <section
        v-for="i in 4"
        :id="i"
        :key="i"
        class="notifications-layout"
        :class="i == 1 || i == 2 ? 'new' : ''"
        @click="unSeen(i)"
      >
        <h2 class="title">عنوان الإشعار</h2>
        <p class="description">
          إنه مجرد تفاصيل لهذا الإشعار يمكن أن يكون أكثر من سطرين
        </p>
        <div class="date">منذ 32 دقيقة</div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    unSeen(e) {
      const id = e
      const el = document.getElementById(id)
      const elClass = el.classList

      if (elClass.contains('new')) {
        el.classList.remove('new')
      }
    }
  },
  head() {
    return {
      title: 'الاشعارات'
    }
  }
}
</script>

<style lang="scss" scoped>
.notification {
  padding: 100px 0;
  @media (max-width: 992px) {
    padding: 50px 0;
  }
  .header-section {
    .title {
      font-size: 24px;
      font-weight: bold;
      margin: 0;
    }
    .new-notification {
      font-size: 14px;
      .count {
        background-color: rgb(146, 24, 123, 13%);
        border-radius: 50%;
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        color: #92187b;
        font-weight: 500;
        margin-right: 10px;
      }
    }
  }
  .notifications-layout {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
    &:last-child {
      margin-bottom: 0;
    }
    &.new {
      background-color: #fff7f8;
      &:after {
        content: '';
        position: absolute;
        left: 30px;
        top: 30px;
        border-radius: 50%;
        background-color: #92187b;
        width: 10px;
        height: 10px;
      }
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #000;
    }
    .description {
      color: #000;
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 30px;
    }
    .date {
      color: #a3adb8;
      font-size: 12px;
      font-weight: 500;
    }
  }
}
</style>
