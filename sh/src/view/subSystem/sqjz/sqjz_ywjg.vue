<template>
  <iframe id="google_ads_frame2" name="google_ads_frame2" width="100%" height="100%" frameborder="0"
          :src="this.fanruan_location+'decision/view/form?viewlet=sqjz%2FdataAnalysis%2F%5B4e1a%5D%5B52a1%5D%5B76d1%5D%5B7ba1%5D.frm'"
          marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true"></iframe>
</template>
<script>
  import fanruan from "../../../fanruan";
  export default {
    name: 'data',
    data: function () {
      return {
        fanruan_location: fanruan.BASE_URL
      }
    }
  }
</script>