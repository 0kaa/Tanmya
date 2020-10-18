<template>
  <main class="contact">
    <BaseSlider
      :search="false"
      title="تواصل معنا"
      description="وضح مشكلتك أو إقتراحك في الرساله وسيتم الرد عليك في أقرب وقت ممكن
فقط عليك ترك بريدك الإلكتروني ورقم جوالك"
    />
    <SectionContactUs />
    <SectionRegisterNow />
    <SectionDownloadApp />
  </main>
</template>
<script>
export default {
  name: 'Contactus',
  head() {
    return {
      title: 'اتصل بنا'
    }
  }
}
</script>
