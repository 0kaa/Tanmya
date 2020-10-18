<template>
  <section class="tanmya-slider">
    <div class="d-flex align-items-center justify-content-center h-100">
      <div class="container">
        <div class="content text-center">
          <h2 v-if="title" class="text-tanmya-primary">{{ title }}</h2>
          <p v-if="description" class="description">{{ description }}</p>
          <div v-if="search" class="search-container">
            <form class="search-form">
              <select class="form-control">
                <option>المكان</option>
              </select>
              <select class="form-control">
                <option>النوع</option>
              </select>
              <select class="form-control">
                <option>الفئة</option>
              </select>
              <select class="form-control">
                <option>العمر</option>
              </select>
              <select class="form-control large">
                <option>التاريخ من- الي</option>
              </select>

              <button type="submit" class="btn btn-tanmya-secondary">
                بحث
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Slider',
  props: {
    title: {
      type: String,
      default: ''
    },
    search: {
      type: Boolean,
      default: true
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tanmya-slider {
  height: 100vh;
  padding: 100px 0;
  margin-bottom: 100px;
  background-image: url('/img/slider.jpg');
  background-size: cover;
  background-position: 100% 100%;
  .text-tanmya-primary {
    font-size: 37px;
    font-weight: 600;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
  .description {
    width: 65%;
    margin: auto;
    font-size: 22px;
    @media (max-width: 992px) {
      width: 100%;
    }
  }
  .search-form {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    .form-control {
      border-radius: 50px;
      padding: 0 10px;
      flex: 0 1 50%;
      margin-left: 20px;
      @media (max-width: 768px) {
        margin-bottom: 2%;
        flex: 0 1 48%;
        margin-left: 2%;
      }
      &.large {
        flex: 0 1 100%;
      }
    }
    .btn {
      flex: 0 1 50%;
      @media (max-width: 992px) {
        margin-top: 20px;
      }
    }
  }
}
</style>
