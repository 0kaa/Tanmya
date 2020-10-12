<template>
  <div class="payment">
    <h3 class="payment-title">الدفع</h3>
    <div class="content">
      <ul class="header-select">
        <li
          v-for="(item, index) in selectList"
          :key="index + 1"
          :class="currentTap == index + 1 ? 'active' : ''"
          @click="currentTap = index + 1"
        >
          {{ item }}
        </li>
      </ul>
      <div class="taps">
        <div v-if="currentTap == 1" class="online-tap">
          <div class="buttons d-flex align-items-center">
            <div class="btn btn-tanmya-secondary ml-5">تاكيد الدفع</div>
            <div class="btn" @click="backStep">الغاء</div>
          </div>
        </div>
        <div v-if="currentTap == 2" class="bank-tap">
          <div class="banks">
            <div class="bank">
              <h3 class="bank-title">البنك الأهلي</h3>
              <h4 class="bank-subtitle">رقم الحساب البنكي</h4>
              <div class="bank-number">239974305298347022</div>
            </div>
            <div class="bank">
              <h3 class="bank-title">البنك المتحد</h3>
              <h4 class="bank-subtitle">رقم الحساب البنكي</h4>
              <div class="bank-number">239974305298347022</div>
            </div>
          </div>
          <div class="buttons d-flex align-items-center">
            <div class="btn btn-tanmya-secondary ml-5">تاكيد الدفع</div>
            <div class="btn" @click="backStep">الغاء</div>
          </div>
        </div>
        <div v-if="currentTap == 3" class="cash-tap">
          <div class="cash">
            <h3 class="cash-title">كود الدفع في المقر</h3>
            <div class="cash-number">JK - 2378</div>
          </div>
          <div class="buttons d-flex align-items-center">
            <div class="btn btn-tanmya-secondary ml-5">تاكيد الدفع</div>
            <div class="btn" @click="backStep">الغاء</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      selectList: ["أونلاين", "تحويل بنكي", "دفع بالمقر"],
      currentTap: 1,
    };
  },
  methods: {
    backStep() {
      this.$store.state.subscribeStep = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.payment {
  background-color: #fff;
  padding: 50px 95px;
  border-top: 1px solid #cecece;
  @media (max-width: 992px) {
    padding: 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  .payment-title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 30px;
    line-height: 45px;
  }
  .buttons {
    margin-top: 40px;
  }
  .btn.btn-tanmya-secondary {
    width: 350px;
    padding: 10px;
    @media (max-width: 768px) {
      width: auto;
      padding: 10px 60px;
    }
  }
  .content {
    width: 80%;
    .header-select {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      li {
        margin-left: 80px;
        position: relative;
        display: flex;
        align-items: center;
        cursor: pointer;
        &:before {
          content: "";
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid #898989;
          background-color: transparent;
          display: inline-block;
          margin-left: 10px;
          transition: 0.3s ease;
        }
        &:after {
          content: "";
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: transparent;
          display: inline-block;
          margin-left: 10px;
          position: absolute;
          right: 5px;
          transition: 0.3s ease;
        }
        &.active:before {
          border-color: #92187b;
        }
        &.active:after {
          background-color: #92187b;
        }
      }
    }
    .taps {
      .bank-tap {
        .banks {
          display: flex;
          align-items: center;
          .bank {
            margin-left: 30px;
            padding: 30px 50px;
            background-color: #f8f8f8;
            text-align: center;
            border-radius: 10px;
            display: inline-block;
            .bank-title,
            .bank-subtitle {
              font-size: 16px;
              font-weight: 600;
            }
            .bank-number {
              font-size: 24px;
            }
          }
        }
      }
      .cash-tap {
        .cash {
          padding: 30px 50px;
          background-color: #f8f8f8;
          text-align: center;
          border-radius: 10px;
          display: inline-block;
          .cash-title {
            font-size: 16px;
            font-weight: 600;
          }
          .cash-number {
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>