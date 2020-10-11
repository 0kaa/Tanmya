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
              :class="menuDropdown ? 'active' : ''"
              >الاقسام</a
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              :class="menuDropdown ? 'active' : ''"
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
                    :fill="menuDropdown ? '#246284' : '#a4a4a4'"
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
              :class="menuDropdown ? 'active' : ''"
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
        <div
          class="d-flex align-items-center register-menu"
          v-if="!this.$store.state.user"
        >
          <router-link to="/signin" class="btn btn-tanmya-primary ml-3 fs-14"
            >تسجيل دخول</router-link
          >
          <router-link to="/signup" class="btn btn-tanmya-secondary fs-14"
            >تسجيل جديد</router-link
          >
        </div>
        <div class="d-flex align-items-center login-nav" v-else>
          <router-link to="/notification" class="notification-btn ml-4">
            <span class="notification-count">{{ notificationCount }}</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.705"
              height="27.489"
              viewBox="0 0 24.705 27.489"
            >
              <path
                d="M78.575,48.381a6.549,6.549,0,0,1-.516-2.552V39.487A9.869,9.869,0,0,0,70.8,30.155a3.106,3.106,0,0,0-6.071,0,9.869,9.869,0,0,0-7.258,9.332v6.341a6.549,6.549,0,0,1-.516,2.552l-1.47,3.505a.944.944,0,0,0,.1.915,1.043,1.043,0,0,0,.852.431h7.825a4.1,4.1,0,0,0,7,0h7.825a1.043,1.043,0,0,0,.852-.431.944.944,0,0,0,.1-.915l-1.47-3.505ZM57.962,51.268l.906-2.159a8.439,8.439,0,0,0,.662-3.281V39.487a8.244,8.244,0,0,1,16.47,0v6.341a8.439,8.439,0,0,0,.662,3.281l.906,2.159Z"
                transform="translate(-55.413 -27.706)"
                fill="#92187b"
              />
            </svg>
          </router-link>

          <a href="#" class="my-account-btn" @click.prevent="accountDropdown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="38"
              viewBox="0 0 65 38"
            >
              <g transform="translate(27)">
                <rect width="38" height="38" fill="none" />
                <g transform="translate(5 5)">
                  <path
                    d="M23.9,18.1a13.946,13.946,0,0,0-5.32-3.337,8.094,8.094,0,1,0-9.159,0A14.022,14.022,0,0,0,0,28H2.187a11.813,11.813,0,0,1,23.625,0H28A13.909,13.909,0,0,0,23.9,18.1ZM14,14a5.906,5.906,0,1,1,5.906-5.906A5.913,5.913,0,0,1,14,14Z"
                    transform="translate(0)"
                    fill="#246284"
                  />
                </g>
              </g>
              <g transform="translate(0.474 28.525) rotate(-90)" opacity="0.75">
                <g transform="translate(5.568 3.476)">
                  <path
                    d="M1.862,4.714,5.391,8.243a.517.517,0,0,1,0,.73l-.309.309a.517.517,0,0,1-.73,0L.15,5.08a.521.521,0,0,1,0-.732l4.2-4.2a.517.517,0,0,1,.73,0L5.387.46a.517.517,0,0,1,0,.73Z"
                    transform="translate(0)"
                    fill="#246284"
                  />
                </g>
                <rect
                  width="17"
                  height="17"
                  transform="translate(-0.474 -0.474)"
                  fill="none"
                />
              </g>
            </svg>
            <div
              class="dropdown-menu"
              :class="myaccountDropdown ? 'active' : ''"
              aria-labelledby="navbarDropdown"
            >
              <router-link class="dropdown-item" to="/my-account"
                >حسابي</router-link
              >
              <router-link class="dropdown-item" to="/my-account/subscriptions"
                >اشتراكاتي</router-link
              >
              <a class="dropdown-item register-trainer" href="#"
                >التسجيل كمدرب</a
              >
            </div>
          </a>
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
  data() {
    return {
      menuDropdown: false,
      myaccountDropdown: false,
      notificationCount: 2,
    };
  },
  methods: {
    dropdownToggle() {
      this.menuDropdown = !this.menuDropdown;
    },
    accountDropdown() {
      this.myaccountDropdown = !this.myaccountDropdown;
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
          .dropdown-item {
            border-bottom: 1px solid #f2f2f2;
            margin-left: 10px;
            margin-right: 10px;
            width: auto;
            color: #191919;
            font-weight: 600;
            &:last-child {
              border: none;
            }
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
  .login-nav {
    .notification-btn {
      position: relative;
      svg {
        margin-right: 20px;
      }
      .notification-count {
        background-color: #92187b;
        color: #fff;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;
        right: 0;
        bottom: 3px;
        font-size: 12px;
      }
    }
    .my-account-btn {
      position: relative;
      a {
        color: #191919;
        font-weight: 600;
        border-bottom: 2px solid #f2f2f2;
        &:last-child {
          border: none;
        }
        &.register-trainer {
          color: #707070;
          text-align: center;
        }
      }
    }
  }
  .mobile-menu {
    display: none !important;
    @media (max-width: 992px) {
      display: block !important;
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
}
.dropdown-menu {
  right: 0;
  left: inherit;
  text-align: start;
  .dropdown-item {
    padding: 0.75rem;
  }
  &.active {
    display: block;
  }
}
</style>