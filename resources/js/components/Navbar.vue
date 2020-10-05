<template>
  <nav class="navbar">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between w-100">
        <div class="logo d-flex align-items-center">
          <router-link to="/">
            <img src="/img/logo.png" alt="Logo" class="img-fluid"
          /></router-link>
        </div>
        <ul class="d-flex align-items-center nav-menu">
          <li class="nav-item">
            <router-link to="/" class="nav-link">الرئيسية</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/test" class="nav-link">الاقسام</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/test" class="nav-link">عن المنصة</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/test" class="nav-link">اتصل بنا</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center register-menu">
          <button class="btn btn-tanmya-primary ml-3 fs-14">تسجيل دخول</button>
          <button class="btn btn-tanmya-secondary fs-14">تسجيل جديد</button>
        </div>
        <div class="d-flex align-items-center mobile-menu">
          <a href="#" class="menu-icon">
            <img src="/img/svg/menu.svg" alt="menu" class="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background-color: #fff;

  &.fixed {
    position: fixed;
  }
  .logo {
    font-weight: bold;
    margin: 0;
    max-width: 250px;
    @media (max-width: 992px) {
      max-width: 100px;
    }
    a {
      color: #fff;
    }
  }
  .nav-menu {
    @media (max-width: 992px) {
      display: none !important;
    }
    .nav-item {
      .nav-link {
        color: #a4a4a4;
        &.router-link-active {
          color: #246284;
        }
      }
    }
  }
  .register-menu {
    @media (max-width: 992px) {
      display: none !important;
    }
  }
  .menu-icon {
    display: block;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    @media (min-width: 992px) {
      display: none;
    }
  }
}
</style>