<template>
  <main class="subscriptions">
    <div class="container">
      <h1 class="title mt-50 mb-50">اشتراكاتي</h1>
      <div class="buttons-nav mb-20">
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
            <div class="rating">tatete</div>
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
  .title {
    font-size: 24px;
    font-weight: bold;
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
      }
      &:first-child {
        margin-left: 70px;
        &:before {
          content: "";
          left: inherit;
          right: 200%;
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
  .subscriptions-container {
    overflow: hidden;
    position: relative;
    .box {
      padding: 30px 0;
      border-bottom: 1px solid #cbcbcb;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .about-sub {
        display: flex;
        .image {
          margin-left: 20px;
          border-radius: 8px;
          overflow: hidden;
        }
        .info {
          align-self: center;
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
            justify-content: space-between;
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
            }
            .year-date {
              margin-left: 40px;
            }
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
  transition: all 0.5s linear;
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
