<template>
  <footer>
    <b-container>
      <div
        class="wrapper d-flex align-items-center justify-content-between flex-wrap"
      >
        <ul class="d-flex align-items-center social-links list-unstyled">
          <li class="youtube">
            <a href="#">
              <img src="/img/svg/youtube.svg" alt="youtube" class="img-fluid" />
            </a>
          </li>

          <li class="twitter">
            <a href="#">
              <img src="/img/svg/twitter.svg" alt="twitter" class="img-fluid" />
            </a>
          </li>
          <li class="facebook">
            <a href="#">
              <img
                src="/img/svg/facebook.svg"
                alt="facebook"
                class="img-fluid"
              />
            </a>
          </li>
        </ul>
        <div class="d-flex align-items-center download-links">
          <a href="#" class="playstore-link ml-4">
            <img
              src="/img/playstore.png"
              alt="App Store Link"
              class="img-fluid"
            />
          </a>
          <a href="#" class="app-store-link">
            <img
              src="/img/appstore.png"
              alt="App Store Link"
              class="img-fluid"
            />
          </a>
        </div>
        <div class="copyright">
          © جميع الحقوق محفوظة لـ<span>منصة التنمية</span>
        </div>
      </div>
    </b-container>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  padding: 20px 0;
  .wrapper {
    @media (max-width: 992px) {
      justify-content: center !important;
      flex-wrap: wrap;
      flex-direction: column;
    }
    .copyright {
      @media (max-width: 992px) {
        margin-top: 20px;
      }
    }

    .social-links {
      @media (max-width: 992px) {
        margin-bottom: 20px;
      }
      li {
        margin-right: 40px;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
      }
    }
  }
}
</style>
