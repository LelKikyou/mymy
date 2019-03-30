<template>
  <iframe id="google_ads_frame2" name="google_ads_frame2" width="100%" height="1450" frameborder="0"
          :src="this.fanruan_location+'decision/view/report?viewlet=jiedu%2FdataAnalysis%2F%5B7edf%5D%5B8ba1%5D%5B5206%5D%5B6790%5D%5B6212%5D%5B6bd2%5D%5B5728%5D%5B518c%5D%5B4eba%5D%5B5458%5D.cpt'"
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
