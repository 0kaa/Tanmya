<template>
  <main class="single-event">
    <div class="container">
      <div class="event">
        <div class="image">
          <img :src="event.image" alt="Single Header" class="img-fluid" />
        </div>
        <div
          class="event-content"
          :class="
            $store.state.subscribeStatus == 'subscribe' ? 'subscribe' : ''
          "
        >
          <div class="header">
            <div class="category">{{ event.category }}</div>
            <h1 class="title">{{ event.title }}</h1>
            <div class="introducing">تقديم : {{ event.introducing }}</div>
            <div class="description">
              <h2 class="description-title">تفاصيل الفعالية</h2>
              <p class="description-content">{{ event.description }}</p>
            </div>
          </div>
          <div class="info">
            <div class="details d-flex">
              <div class="location">
                <h3 class="location-title">مكان الفعالية</h3>
                <div>{{ event.location }}</div>
              </div>

              <div class="date">
                <h4 class="title-date">موعد الفعالية</h4>
                <div class="date-content">
                  <span class="year-date">{{ event.date }}</span>
                  <span class="hour-date">{{ event.dateHours }}</span>
                </div>
              </div>

              <div class="years-between">
                <h5 class="between-title">الفعالية متاحة لأعمار بين</h5>
                <div class="between-content">{{ event.yearsBetween }}</div>
              </div>
            </div>

            <a :href="event.locationUrl" class="location-url"
              >الموقع على الخريطة</a
            >
            <div
              class="price"
              :class="$store.state.subscribeStatus == 'subscribe' ? 'mb-0' : ''"
            >
              {{ event.price }}
            </div>
            <div
              v-if="$store.state.subscribeStatus == 'event'"
              class="subscribe-btn btn btn-tanmya-secondary"
              @click="subscribeStep()"
            >
              اشتراك
            </div>
          </div>
        </div>
      </div>
      <transition-group name="fade" tag="div" class="routing-animation">
        <div
          v-if="$store.state.subscribeStatus == 'event'"
          :key="'related'"
          class="related"
        >
          <SectionProgramsAndEvents
            title="فعاليات مشابهة"
            :events="firstSection"
            theme="primary"
          />
        </div>
        <BaseSubscribeForm
          v-if="$store.state.subscribeStatus == 'subscribe'"
          :key="'SubscribeForm'"
        />

        <BasePayment
          v-if="$store.state.subscribeStep == true"
          :key="'Payment'"
        />
      </transition-group>
    </div>
  </main>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'SingleEvent',
  data() {
    return {
      status: 'event',
      firstSection: [
        {
          image: '/img/events/event1.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event2.jpg',
          category: 'رجال و نساء',
          location: 'بريدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event3.jpg',
          category: 'شباب',
          location: 'جدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event4.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event5.jpg',
          category: 'نساء',
          location: 'بريدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event6.jpg',
          category: 'شباب',
          location: 'جدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event7.jpg',
          category: 'رجال',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event8.jpg',
          category: 'رجال و نساء',
          location: 'بريدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        }
      ],
      event: {
        image: '/img/single-header.jpg',
        category: 'رجال و نساء',
        title: 'إسم الفعالية',
        introducing: 'شركة ميديا',
        description:
          'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع',
        location: 'الرياض',
        date: '2020/10/21',
        dateHours: '12:30 مساءا',
        yearsBetween: '45   -  21',
        locationUrl: '#',
        price: '120 ريال'
      }
    }
  },
  methods: {
    subscribeStep() {
      this.$store.commit('subscribeStatus', 'subscribe')
      if ($('.routing-animation')) {
        $('html,body').animate(
          {
            scrollTop: $('.routing-animation').offset().top - 100
          },
          500
        )
      }
    }
  },
  head() {
    return {
      title: this.event.title
    }
  }
}
</script>

<style lang="scss" scoped>
.single-event {
  padding: 100px 0 50px;
  @media (max-width: 992px) {
    padding: 50px 0;
  }
  .event {
    .event-content {
      padding: 30px 95px;
      background: #fff;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 1px 1px rgb(0, 0, 0, 16%);
      transition: 0.3s ease;
      &.subscribe {
        padding: 30px 95px 50px;
        border-radius: 0;
        box-shadow: none;
        border-bottom: 1px solid #cecece;
        @media (max-width: 992px) {
          padding: 30px;
        }
        @media (max-width: 768px) {
          padding: 30px 20px;
        }
      }
      @media (max-width: 992px) {
        padding: 30px;
      }
      @media (max-width: 768px) {
        padding: 30px 20px;
      }
      .introducing {
        @media (max-width: 768px) {
          margin-bottom: 10px;
        }
      }
      .introducing,
      .description-title,
      .location-title,
      .title-date,
      .between-title {
        font-weight: 600;
        line-height: 30px;
        font-size: 16px;
      }
      .header {
        .category {
          text-align: center;
          background-color: rgb(36, 98, 132, 14%);
          padding: 5px 10px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
          @media (max-width: 768px) {
            margin-bottom: 10px;
          }
        }
        .title {
          font-size: 20px;
          font-weight: 600;
          margin: 0;
          line-height: 37px;
        }

        .description-content {
          font-size: 14px;
          line-height: 26px;
        }
      }
      .info {
        .details {
          margin-bottom: 20px;
          @media (max-width: 768px) {
            display: block !important;
          }
          .location,
          .date {
            margin-left: 80px;
            @media (max-width: 768px) {
              margin-left: 0;
              margin-bottom: 10px;
            }
          }
          .year-date {
            margin-left: 30px;
          }
        }
        .location-url {
          display: block;
          margin-bottom: 20px;
          text-decoration: underline !important;
          color: #246284;
        }
        .price {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 30px;
        }
        .btn {
          width: 350px;
          @media (max-width: 576px) {
            width: 100%;
          }
          &:hover {
            background-color: #51d8b8;
          }
        }
      }
    }
  }
  .related {
    padding-top: 100px;
  }
}
</style>
