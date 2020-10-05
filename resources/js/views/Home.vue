<template>
  <main class="home">
    <Slider></Slider>
    <ProgramsAndEvents
      title="البرامج والفعاليات الحالية ( الحضورية )"
      theme="primary"
    ></ProgramsAndEvents>
    <ProgramsAndEvents
      title="البرامج والفعاليات الحالية ( عن بعد )"
      class="pt-100"
      theme="secondary"
    ></ProgramsAndEvents>
    <ProgramsAndEvents
      title="البرامج والفعاليات الحالية ( الحضورية )"
      theme="primary"
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
    return {};
  },
};
</script>
