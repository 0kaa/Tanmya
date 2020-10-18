<template>
  <section
    v-if="events.length"
    class="programs-and-events"
    :class="[events.length > 8 ? 'pb-70' : 'pb-100', theme]"
  >
    <div class="container">
      <div class="text-center">
        <h3 class="section-title text-center mb-5">
          {{ title }}
        </h3>
      </div>
      <div class="events-boxes">
        <div class="events row">
          <div v-for="(event, i) in events" :key="i" class="col-md-3">
            <router-link
              :to="`/event/${event.slug}`"
              class="inner-box"
              :class="events.length > 4 ? 'mb-30' : ''"
            >
              <div class="img">
                <img
                  :src="event.image"
                  alt="event-image"
                  class="img-fluid rounded"
                />
              </div>
              <div class="details">
                <div class="category text-center">{{ event.category }}</div>
                <div
                  class="info d-flex align-items-center justify-content-between"
                >
                  <div class="location">{{ event.location }}</div>
                  <div class="date">{{ event.date }}</div>
                </div>
                <div class="title">{{ event.title }}</div>
                <div class="price">{{ event.price }}</div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="text-center">
          <button
            v-if="events.length >= 8"
            class="load-more btn"
            :class="
              theme == 'primary' ? 'btn-tanmya-primary' : 'btn-tanmya-secondary'
            "
          >
            عرض المزيد
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ProgramsAndEvents',
  props: {
    title: {
      default: 'البرامج والفعاليات الحالية ( الحضورية )',
      type: String
    },
    events: {
      default: null,
      type: Array
    },
    theme: {
      default: 'primary',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.programs-and-events {
  color: #191919;
  border-bottom: 1px solid #d3d3d3;
  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
  &.secondary {
    .section-title {
      color: #92187b;
    }
    .events-boxes .inner-box .details .category {
      background-color: #92187b24;
    }
  }
  .events-boxes {
    .inner-box {
      display: block;
      color: #191919;
      @media (max-width: 768px) {
        margin-bottom: 60px;
      }
      &:hover {
        .details {
          box-shadow: 0 14px 40px #00000044;
        }
      }
      .img {
        img {
          width: 100%;
        }
      }
      .details {
        padding: 12px;
        background-color: #fff;
        box-shadow: 0 1px 1px #00000016;
        transition: all 0.3s ease;
        border-radius: 0px 0px 10px 10px;
        .category {
          background-color: rgb(36, 98, 132, 14%);
          color: #191919;
          font-size: 12px;
          border-radius: 50px;
          padding: 5px;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .location,
        .date {
          font-weight: 400;
          font-size: 12px;
        }
        .title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .price {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    .load-more {
      width: 350px;
      @media (max-width: 576px) {
        width: 250px;
      }
    }
  }
}
</style>
