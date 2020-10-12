<template>
  <main class="subscriptions">
    <div class="container">
      <div class="header-section mt-4 mb-5">
        <h1 class="title">اشتراكاتي</h1>
        <div class="buttons-nav">
          <button
            :class="active === 'current' ? 'active' : ''"
            @click.prevent="addActiveClass('current')"
            v-text="'الحالية'"
          ></button>
          <button
            :class="active === 'previous' ? 'active' : ''"
            @click.prevent="addActiveClass('previous')"
            v-text="'السابقة'"
          ></button>
        </div>
      </div>

      <transition-group name="sub" tag="div" class="subscriptions-container">
        <div class="current" v-if="active == 'current'" :key="1">
          <div
            class="box"
            v-for="(subscription, i) in currentSubscriptions"
            :key="i"
          >
            <div class="about-sub">
              <div class="image">
                <img :src="subscription.image" alt="subscription image" />
              </div>
              <div class="info">
                <div class="category">{{ subscription.category }}</div>
                <div class="location">{{ subscription.location }}</div>
                <h3 class="sub-title">{{ subscription.title }}</h3>
                <div class="introducing">
                  تقديم : {{ subscription.introducing }}
                </div>
                <div class="date">
                  <h3 class="title-date">موعد الفعالية</h3>
                  <div class="year-date">{{ subscription.date }}</div>
                  <div class="hour-date">{{ subscription.dateHours }}</div>
                </div>
              </div>
            </div>
            <div class="pay text-center">
              <div class="price">{{ subscription.price }}</div>
              <div
                class="status"
                :class="[
                  subscription.status == 'online' ? 'online' : '',
                  subscription.status == 'bank' ? 'bank' : '',
                  subscription.status == 'cash' ? 'cash' : '',
                ]"
              >
                <div class="pay-title" v-if="subscription.status == 'online'">
                  تم الدفع أونلاين
                </div>
                <div
                  class="pay-title fs-14"
                  v-if="subscription.status == 'bank'"
                >
                  في إنتظار أرفاق صورة التحويل البنكي
                </div>
                <div
                  class="pay-title"
                  v-if="subscription.status == 'cash' && subscription.cashCode"
                >
                  <span>في أنتظار الدفع في المقر</span>
                  <div class="code">{{ subscription.cashCode }}</div>
                </div>
                <form v-if="subscription.status == 'bank'" class="upload-image">
                  <div class="position-relative">
                    <input type="file" name="myImage" accept="image/*" />
                    <div class="label">
                      <img
                        src="/img/svg/upload.svg"
                        alt="upload"
                        class="img-fluid ml-2"
                      />
                      إرفاق الصورة
                    </div>
                  </div>
                  <button type="send" class="send">
                    <img
                      src="/img/svg/send.svg"
                      alt="upload"
                      class="img-fluid"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="previous" v-if="active == 'previous'" :key="2">
          <div
            class="box"
            v-for="(subscription, i) in previousSubscriptions"
            :key="i"
          >
            <div class="about-sub">
              <div class="image">
                <img :src="subscription.image" alt="subscription image" />
              </div>
              <div class="info">
                <div class="category">{{ subscription.category }}</div>
                <div class="location">{{ subscription.location }}</div>
                <h3 class="sub-title">{{ subscription.title }}</h3>
                <div class="introducing">
                  تقديم : {{ subscription.introducing }}
                </div>
                <div class="date prev">
                  <h3 class="title-date">موعد الفعالية</h3>
                  <div class="year-date">{{ subscription.date }}</div>
                  <div class="hour-date">{{ subscription.dateHours }}</div>
                </div>
              </div>
            </div>
            <!-- Rating -->
            <div class="rating text-center">
              <h2 class="rating-title">
                {{ subscription.rating ? "تقييمك" : "قيمنا" }}
              </h2>
              <div
                class="stars-rating d-flex align-items-center justify-content-center"
              >
                <div
                  class="star ml-2"
                  v-for="i in 5"
                  :key="i"
                  :id="i"
                  :class="subscription.rating ? 'voted' : ''"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24.983"
                    height="25.02"
                    viewBox="0 0 24.983 25.02"
                  >
                    <path
                      d="M11.821,18.995,18.9,22.908,17.548,14.62l5.727-5.87L15.36,7.541,11.821,0,8.281,7.541.367,8.75l5.727,5.87L4.742,22.908Z"
                      transform="translate(0.67 1.177)"
                      :fill="
                        subscription.rating && i <= subscription.ratingLevel
                          ? '#F7AD0E'
                          : 'none'
                      "
                      :stroke="
                        subscription.rating && i <= subscription.ratingLevel
                          ? '#F7AD0E'
                          : '#9f9f9f'
                      "
                      stroke-linecap="round"
                      stroke-width="1"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div class="pay text-center">
              <div class="price">{{ subscription.price }}</div>
              <div class="status online">
                <div
                  class="pay-title fs-14"
                  v-if="subscription.status == 'online'"
                >
                  تم الدفع أونلاين
                </div>
                <div
                  class="pay-title fs-14"
                  v-if="subscription.status == 'bank'"
                >
                  تم الدفع أونلاين
                </div>
                <div
                  class="pay-title fs-14"
                  v-if="subscription.status == 'cash'"
                >
                  <span>تم الدفع في المقر</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </main>
</template>

<script>
export default {
  name: "Subscriptions",
  data() {
    return {
      active: "current",
      currentSubscriptions: [
        {
          image: "/img/subscriptions/current/1.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          title: "إسم الفعالية",
          introducing: "شركة ميديا",
          date: "2020/10/21",
          dateHours: "12:30 مساءا",
          price: "120 ريال",
          status: "online",
          cashCode: "",
        },
        {
          image: "/img/subscriptions/current/2.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          title: "إسم الفعالية",
          introducing: "شركة ميديا",
          date: "2020/10/21",
          dateHours: "12:30 مساءا",
          price: "120 ريال",
          status: "bank",
          cashCode: "",
        },
        {
          image: "/img/subscriptions/current/3.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          title: "إسم الفعالية",
          introducing: "شركة ميديا",
          date: "2020/10/21",
          dateHours: "12:30 مساءا",
          price: "120 ريال",
          status: "cash",
          cashCode: "JK - 2378",
        },
      ],
      previousSubscriptions: [
        {
          image: "/img/subscriptions/prev/1.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          title: "إسم الفعالية",
          introducing: "شركة ميديا",
          date: "2020/10/21",
          dateHours: "12:30 مساءا",
          price: "120 ريال",
          status: "online",
          cashCode: "",
          rating: false,
          ratingLevel: 0,
        },
        {
          image: "/img/subscriptions/prev/2.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          title: "إسم الفعالية",
          introducing: "شركة ميديا",
          date: "2020/10/21",
          dateHours: "12:30 مساءا",
          price: "120 ريال",
          status: "bank",
          cashCode: "",
          rating: true,
          ratingLevel: 4,
        },
        {
          image: "/img/subscriptions/prev/3.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          title: "إسم الفعالية",
          introducing: "شركة ميديا",
          date: "2020/10/21",
          dateHours: "12:30 مساءا",
          price: "120 ريال",
          status: "cash",
          cashCode: "JK - 2378",
          rating: true,
          ratingLevel: 4,
        },
      ],
    };
  },
  methods: {
    addActiveClass(className) {
      this.active = className;
    },
  },
};
</script>

<style lang="scss" scoped>
.subscriptions {
  padding: 100px 0;
  @media (max-width: 992px) {
    padding: 50px 0;
  }
  .header-section {
    @media (max-width: 992px) {
      display: flex;
      align-content: center;
      justify-content: space-between;
      overflow: hidden;
    }
    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
      @media (max-width: 992px) {
        font-size: 20px;
        margin: 0;
      }
    }
    .buttons-nav {
      display: inline-flex;
      align-items: center;
      position: relative;
      button {
        border: none;
        background: none;
        font-weight: 600;
        font-size: 20px;
        position: relative;
        padding: 0;
        padding-bottom: 10px;
        transition: all 0.3s ease;
        &:before {
          content: "";
          position: absolute;
          left: 200%;
          bottom: 0;
          width: 100%;
          height: 3px;
          border-radius: 50px;
          background-color: transparent;
          transition: left 0.5s ease, right 0.5s ease;
          @media (max-width: 992px) {
            left: 100%;
          }
        }
        &:first-child {
          margin-left: 70px;
          @media (max-width: 992px) {
            margin-left: 20px;
          }
          &:before {
            content: "";
            left: inherit;
            right: 200%;
            @media (max-width: 992px) {
              right: 100%;
            }
          }
          &.active {
            &:before {
              content: "";
              right: 0;
            }
          }
        }
        &.active {
          color: #92187b;
          &:before {
            content: "";
            left: 0;
            background-color: #92187b;
          }
        }
      }
    }
  }

  .subscriptions-container {
    overflow: hidden;
    position: relative;
    .box {
      padding: 30px 0;
      border-bottom: 1px solid #cbcbcb;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:first-child {
        padding-top: 0;
      }

      @media (max-width: 992px) {
        display: block;
      }
      .about-sub {
        display: flex;
        @media (max-width: 992px) {
          display: block;
        }
        .image {
          margin-left: 20px;
          img {
            border-radius: 8px;
            overflow: hidden;
          }
          @media (max-width: 992px) {
            margin-left: 0;
            margin-bottom: 30px;
            img {
              width: 100%;
            }
          }
        }
        .info {
          align-self: center;
          @media (max-width: 992px) {
            margin-bottom: 30px;
            padding-right: 10px;
          }
          .category {
            font-size: 12px;
            margin-bottom: 8px;
          }
          .location {
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 5px;
          }
          .sub-title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 5px;
          }
          .introducing {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 5px;
          }
          .date {
            font-weight: bold;
            font-size: 20px;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            @media (max-width: 992px) {
              font-size: 14px;
              justify-content: inherit;
            }
            &.prev {
              font-size: 14px;
              font-weight: 500;
              .title-date {
                font-size: 14px;
                font-weight: 500;
              }
              .year-date {
                margin-left: 40px;
              }
            }
            .title-date {
              margin: 0;
              margin-left: 20px;
              font-size: 20px;
              font-weight: bold;
              @media (max-width: 992px) {
                font-size: 14px;
              }
            }
            .year-date {
              margin-left: 40px;
              @media (max-width: 992px) {
                margin-left: 20px;
              }
            }
          }
        }
      }

      .rating {
        padding: 10px 40px;
        background-color: #fff;
        border-radius: 10px;
        @media (max-width: 992px) {
          margin-bottom: 30px;
        }
        .rating-title {
          font-size: 12px;
          margin-bottom: 10px;
        }
        .star {
          cursor: pointer;
          &.voted {
            cursor: inherit;
          }
        }
      }
      .pay {
        padding: 20px;
        background-color: #eaeaea;
        border-radius: 10px;

        .price {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .status {
          .pay-title {
            font-size: 16px;
            font-weight: 500;
            &.fs-14 {
              font-size: 12px;
            }
          }
          &.online {
            .pay-title {
              color: #408b66;
            }
          }
          &.cash {
            .pay-title span {
              color: #408b66;
              margin: auto;
              margin-bottom: 10px;
              display: block;
              width: 75%;
            }
            .code {
              font-size: 24px;
              font-weight: 500;
            }
          }
          &.bank {
            .pay-title {
              color: #ce3b3b;
              width: 70%;
              margin: auto;
              margin-bottom: 20px;
            }
            .position-relative {
              @media (max-width: 992px) {
                width: 100%;
              }
            }
            .upload-image {
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              input {
                position: absolute;
                opacity: 0;
                width: 100%;
                left: 0;
                top: 0;
                height: 100%;
                z-index: 99;
              }
              .label {
                background: #efefef;
                z-index: 0;
                border-radius: 50px;
                padding: 5px 20px;
                font-size: 12px;
              }
              .send {
                width: 36px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: #246284;
                border: none;
                margin-right: 15px;
                z-index: 999;
              }
            }
          }
        }
      }
    }
  }
}

.sub-enter-active,
.sub-leave-active {
  transition: all 0.5s;
  left: 0;
  position: relative;
  &.previous {
    left: inherit;
    right: 0;
  }
}

.sub-enter,
.sub-leave-to {
  //   opacity: 0;
  position: absolute;
  left: 100%;
  width: 100%;
  &.previous {
    left: inherit;
    right: 100%;
  }
}
</style>
