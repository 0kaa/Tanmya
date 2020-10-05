<template>
  <main class="home">
    <Slider></Slider>
    <ProgramsAndEvents
      title="البرامج والفعاليات الحالية ( الحضورية )"
      :events="firstSection"
      theme="primary"
    ></ProgramsAndEvents>
    <ProgramsAndEvents
      title="البرامج والفعاليات الحالية ( عن بعد )"
      :events="secoundSection"
      class="pt-100"
      theme="secondary"
    ></ProgramsAndEvents>
    <ProgramsAndEvents
      title="البرامج والفعاليات الحالية ( الحضورية )"
      theme="primary"
      :events="thirtySection"
      class="pt-100"
    ></ProgramsAndEvents>

    <RegisterNow></RegisterNow>
    <DownloadApp></DownloadApp>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      firstSection: [
        {
          image: "/img/events/event1.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event2.jpg",
          category: "رجال و نساء",
          location: "بريدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event3.jpg",
          category: "شباب",
          location: "جدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event4.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event5.jpg",
          category: "نساء",
          location: "بريدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event6.jpg",
          category: "شباب",
          location: "جدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event7.jpg",
          category: "رجال",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event8.jpg",
          category: "رجال و نساء",
          location: "بريدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
      ],
      secoundSection: [
        {
          image: "/img/events/event9.jpg",
          category: "رجال و نساء",
          location: "جدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event10.jpg",
          category: "رجال و نساء",
          location: "جدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event11.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event12.jpg",
          category: "رجال و نساء",
          location: "بريدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event13.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event14.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event15.jpg",
          category: "رجال و نساء",
          location: "جدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event16.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
      ],
      thirtySection: [
        {
          image: "/img/events/event17.jpg",
          category: "رجال و نساء",
          location: "جدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event18.jpg",
          category: "رجال و نساء",
          location: "جدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event19.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event20.jpg",
          category: "رجال و نساء",
          location: "بريدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event21.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event22.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event23.jpg",
          category: "رجال و نساء",
          location: "جدة",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
        {
          image: "/img/events/event24.jpg",
          category: "رجال و نساء",
          location: "الرياض",
          date: "2020/10/21",
          title: "إسم الفعالية",
          price: "120 ريال",
        },
      ],
    };
  },
};
</script>
