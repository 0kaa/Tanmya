<template>
  <nav class="navbar">
    <div class="blur"></div>
    <div class="container">
      <div class="d-flex align-items-center justify-content-between w-100">
        <div class="logo d-flex align-items-center">
          <router-link to="/">
            <img src="/img/logo.png" alt="Logo" class="img-fluid"
          /></router-link>
        </div>
        <ul class="d-flex align-items-center nav-menu">
          <li class="nav-item">
            <router-link exact to="/" class="nav-link">الرئيسية</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              href="#"
              class="nav-link"
              @click.prevent="dropdownToggle"
              :class="this.$store.state.menuDropdown ? 'active' : ''"
              >الاقسام</a
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              :class="this.$store.state.menuDropdown ? 'active' : ''"
            >
              <g id="arrowdown" transform="translate(0.474 16.526) rotate(-90)">
                <g
                  id="Group_837"
                  data-name="Group 837"
                  transform="translate(5.568 3.476)"
                >
                  <path
                    id="Path_2299"
                    data-name="Path 2299"
                    d="M1.862,4.714,5.391,8.243a.517.517,0,0,1,0,.73l-.309.309a.517.517,0,0,1-.73,0L.15,5.08a.521.521,0,0,1,0-.732l4.2-4.2a.517.517,0,0,1,.73,0L5.387.46a.517.517,0,0,1,0,.73Z"
                    transform="translate(0)"
                    :fill="
                      this.$store.state.menuDropdown ? '#246284' : '#a4a4a4'
                    "
                  />
                </g>
                <rect
                  id="Rectangle_837"
                  data-name="Rectangle 837"
                  width="17"
                  height="17"
                  transform="translate(-0.474 -0.474)"
                  fill="none"
                />
              </g>
            </svg>

            <div
              class="dropdown-menu"
              :class="this.$store.state.menuDropdown ? 'active' : ''"
              aria-labelledby="navbarDropdown"
            >
              <a class="dropdown-item" href="#">البرامج والفعاليات الحضورية</a>
              <a class="dropdown-item" href="#">البرامج والفعاليات عن بعد</a>
              <a class="dropdown-item" href="#">البرامج والفعاليات السابقة</a>
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/aboutus" class="nav-link">عن المنصة</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contactus" class="nav-link">اتصل بنا</router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center register-menu">
          <router-link to="/signin" class="btn btn-tanmya-primary ml-3 fs-14"
            >تسجيل دخول</router-link
          >
          <router-link to="/signup" class="btn btn-tanmya-secondary fs-14"
            >تسجيل جديد</router-link
          >
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
  methods: {
    dropdownToggle() {
      if (this.$store.state.menuDropdown) {
        this.$store.commit("menuDropdownToggle", false);
      } else {
        this.$store.commit("menuDropdownToggle", true);
      }
    },
  },
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
      &.dropdown {
        svg {
          position: absolute;
          left: 8px;
          top: 0;
          bottom: 0;
          margin: auto;
          border-bottom: 2px solid transparent;
          transition: all 0.3s ease;
          height: 100%;
          &.active {
            border-color: #246284;
          }
        }
        .dropdown-menu {
          right: 0;
          left: inherit;
          text-align: start;
          &.active {
            display: block;
          }
          .dropdown-item {
            border-bottom: 1px solid #f2f2f2;
            margin-left: 10px;
            margin-right: 10px;
            width: auto;
            color: #191919;
            font-weight: 600;
          }
        }
      }
      .nav-link {
        color: #a4a4a4;
        transition: all 0.3s ease;
        position: relative;
        padding-left: 0;
        padding-right: 0;
        margin: 0 1.5rem;
        &:after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          border-radius: 50px;
          background-color: transparent;
          transition: all 0.3s ease;
        }
        &.router-link-active,
        &.active {
          color: #246284;
          &:after {
            background-color: #246284;
          }
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