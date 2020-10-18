<template>
  <main class="about">
    <BaseSlider
      :search="false"
      title="منصة تنمية"
      description="هي منصة للفعاليات والدورات والمؤتمرات الحضورية والأونلاين والاشتراك في
الفعاليات والمؤتمرات والدورات بطريقة سهلة وبسيطة"
    />
    <SectionAboutUs />
    <SectionRegisterNow />
    <SectionDownloadApp />
  </main>
</template>

<script>
export default {
  name: 'AboutUs',
  head() {
    return {
      title: 'عن المنصة'
    }
  }
}
</script>
