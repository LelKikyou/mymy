<template>
  <iframe id="google_ads_frame2" name="google_ads_frame2" width="100%" height="850" frameborder="0"
          :src="this.fanruan_location+'decision/view/report?viewlet=jiedu%2FdataAnalysis%2F%5B6212%5D%5B6bd2%5D%5B673a%5D%5B6784%5D%5B5217%5D%5B8868%5D.cpt'"
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
