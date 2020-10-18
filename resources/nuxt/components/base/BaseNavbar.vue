<template>
  <nav
    class="navbar"
    @click="
      menuDropdown = false
      myaccountDropdown = false
    "
  >
    <div class="container">
      <div class="d-flex align-items-center justify-content-between w-100">
        <div class="logo d-flex align-items-center">
          <nuxt-link to="/">
            <img src="/img/logo.png" alt="Logo" class="img-fluid"
          /></nuxt-link>
        </div>
        <ul
          class="d-flex align-items-center nav-menu"
          :class="mobileMenu ? 'mobile' : ''"
        >
          <nuxt-link to="/" class="logo-mobile">
            <img src="/img/logo.png" alt="Logo" class="img-fluid"
          /></nuxt-link>
          <button
            type="button"
            class="close"
            aria-label="Close"
            @click.prevent="toggleMobileMenu"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <li class="nav-item">
            <nuxt-link exact to="/" class="nav-link">الرئيسية</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a
              href="#"
              class="nav-link"
              :class="menuDropdown ? 'active' : ''"
              @click.prevent="dropdownToggle"
              @click.stop
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
            <nuxt-link to="/aboutus" class="nav-link">عن المنصة</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/contactus" class="nav-link">اتصل بنا</nuxt-link>
          </li>
        </ul>
        <div
          v-if="!$store.state.user"
          class="d-flex align-items-center register-menu"
        >
          <nuxt-link to="/signin" class="btn btn-tanmya-primary fs-14"
            >تسجيل دخول</nuxt-link
          >
          <nuxt-link to="/signup" class="btn btn-tanmya-secondary fs-14"
            >تسجيل جديد</nuxt-link
          >
        </div>
        <div v-else class="d-flex align-items-center login-nav">
          <nuxt-link
            to="/my-account/notification"
            class="notification-btn ml-4"
          >
            <span class="notification-count">{{ notificationCount }}</span>
            <img
              src="/img/svg/notifications.svg"
              alt="notifications"
              class="img-fluid"
            />
          </nuxt-link>

          <a
            href="#"
            class="my-account-btn"
            @click.prevent="accountDropdown"
            @click.stop
          >
            <img
              src="/img/svg/myaccount.svg"
              alt="my-account"
              class="img-fluid"
            />
            <img src="/img/arrowdown.svg" alt="accountdown" class="img-fluid" />
            <div
              class="dropdown-menu"
              :class="myaccountDropdown ? 'active' : ''"
              aria-labelledby="navbarDropdown"
            >
              <nuxt-link class="dropdown-item" to="/my-account"
                >حسابي</nuxt-link
              >
              <nuxt-link class="dropdown-item" to="/my-account/subscriptions"
                >اشتراكاتي</nuxt-link
              >
              <a class="dropdown-item register-trainer" href="#"
                >التسجيل كمدرب</a
              >
            </div>
          </a>
        </div>
        <div class="d-flex align-items-center mobile-menu">
          <a href="#" class="menu-icon" @click.prevent="toggleMobileMenu">
            <img src="/img/svg/menu.svg" alt="menu" class="img-fluid" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuDropdown: false,
      myaccountDropdown: false,
      notificationCount: 2,
      mobileMenu: false
    }
  },
  watch: {
    $route() {
      this.mobileMenu = false
      this.menuDropdown = false
      this.myaccountDropdown = false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenu = !this.mobileMenu
    },
    dropdownToggle() {
      this.menuDropdown = !this.menuDropdown
    },
    accountDropdown() {
      this.myaccountDropdown = !this.myaccountDropdown
    }
  }
}
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
      position: fixed;
      right: 100%;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      flex-direction: column;
      padding: 10px 0;
      z-index: 1;
      align-items: flex-start !important;
      transition: 0.3s ease;
      &.mobile {
        right: 0;
        .nav-item {
          border-bottom: 1px solid #f2f2f2;
        }
        .dropdown-menu {
          position: relative;
          top: inherit;
          left: inherit;
          right: 0;
          bottom: inherit;
          float: none;
          border: none;
          margin: 0;
          padding: 0;
          .dropdown-item {
            font-size: 12px;
            &:active {
              background-color: transparent;
            }
          }
        }
      }
    }
    .logo-mobile {
      display: none;
      @media (max-width: 992px) {
        display: block;
        margin: 0 1.5rem 1.5rem;
      }
      img {
        max-width: 150px;
      }
    }
    .close {
      display: none;
      @media (max-width: 992px) {
        text-align: center;
        position: absolute;
        top: 5px;
        left: 0;
        color: #fff;
        width: 42px;
        height: 32px;
        border-radius: 0 30px 30px 0px;
        background-color: #000000;
        z-index: 1444;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .nav-item {
      @media (max-width: 992px) {
        width: 100%;
        margin-bottom: 10px;
        .nav-link {
          margin: 0;
          color: #191919 !important;
          font-weight: bold;
          @media (max-width: 992px) {
            font-size: 12px;
          }
          &:after {
            display: none;
          }
        }
      }
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
          @media (max-width: 992px) {
            left: inherit;
            right: 70px;
            top: 10px;
            margin: 0;
            height: auto;
            border: none;
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
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          border-radius: 50px;
          background-color: transparent;
          transition: all 0.3s ease;
        }
        &.nuxt-link-active,
        &.active {
          color: #246284 !important;
          &:after {
            background-color: #246284;
          }
        }
      }
    }
  }
  .register-menu {
    .btn-tanmya-primary {
      margin-left: 1rem;
    }
    @media (max-width: 992px) {
      .btn-tanmya-primary {
        margin-left: 5px;
      }
      .btn {
        font-size: 10px;
        padding: 5px 10px;
      }
    }
  }
  .login-nav {
    .notification-btn {
      position: relative;
      img {
        margin-right: 20px;
        @media (max-width: 992px) {
          width: 14px;

          margin-right: 15px;
        }
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
        @media (max-width: 992px) {
          width: 14px;
          height: 14px;
          font-size: 7px;
        }
      }
    }
    .my-account-btn {
      position: relative;
      img {
        @media (max-width: 992px) {
          width: 14px;
        }
      }
      .dropdown-menu {
        .dropdown-item {
          color: #191919;
          font-weight: 600;
          border-bottom: 2px solid #f2f2f2;
          @media (max-width: 992px) {
            font-size: 12px;
            padding: 10px;
          }
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
  }
  .mobile-menu {
    display: none !important;
    @media (max-width: 992px) {
      display: block !important;
    }
    .menu-icon {
      display: none;
      width: 35px;
      text-align: center;
      align-items: center;
      justify-content: center;
      @media (max-width: 992px) {
        display: flex;
        width: 25px;
      }
    }
  }
}
.dropdown-menu {
  right: 0;
  left: inherit;
  text-align: right;
  .dropdown-item {
    padding: 10px 0.75rem;
    font-size: 14px;
    &:active {
      background-color: transparent;
    }
  }
  &.active {
    display: block !important;
  }
}
</style>
