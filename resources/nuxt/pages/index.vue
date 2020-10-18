<template>
  <main class="home">
    <BaseSlider title="إبحث عن فعاليتك المناسبة .." :search="true" />
    <SectionProgramsAndEvents
      title="البرامج والفعاليات الحالية ( الحضورية )"
      :events="firstSection"
      theme="primary"
    />
    <SectionProgramsAndEvents
      title="البرامج والفعاليات الحالية ( عن بعد )"
      :events="secoundSection"
      class="pt-100"
      theme="secondary"
    />
    <SectionProgramsAndEvents
      title="البرامج والفعاليات الحالية ( الحضورية )"
      theme="primary"
      :events="thirtySection"
      class="pt-100"
    />

    <SectionRegisterNow />
    <SectionDownloadApp />
  </main>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
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
      secoundSection: [
        {
          image: '/img/events/event9.jpg',
          category: 'رجال و نساء',
          location: 'جدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event10.jpg',
          category: 'رجال و نساء',
          location: 'جدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event11.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event12.jpg',
          category: 'رجال و نساء',
          location: 'بريدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event13.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event14.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event15.jpg',
          category: 'رجال و نساء',
          location: 'جدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event16.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        }
      ],
      thirtySection: [
        {
          image: '/img/events/event17.jpg',
          category: 'رجال و نساء',
          location: 'جدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event18.jpg',
          category: 'رجال و نساء',
          location: 'جدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event19.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event20.jpg',
          category: 'رجال و نساء',
          location: 'بريدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event21.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event22.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event23.jpg',
          category: 'رجال و نساء',
          location: 'جدة',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        },
        {
          image: '/img/events/event24.jpg',
          category: 'رجال و نساء',
          location: 'الرياض',
          date: '2020/10/21',
          title: 'إسم الفعالية',
          price: '120 ريال',
          slug: 'test'
        }
      ]
    }
  },
  head() {
    return {
      title: 'الرئيسية'
    }
  }
}
</script>
