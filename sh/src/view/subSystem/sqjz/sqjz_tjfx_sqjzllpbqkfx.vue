<template>
  <iframe id="google_ads_frame2" name="google_ads_frame2" width="100%" height="100%" frameborder="0"
          :src="this.fanruan_location+'decision/view/report?viewlet=sqjz%2FdataAnalysis%2F%5B77eb%5D%5B6b63%5D%5B529b%5D%5B91cf%5D%5B914d%5D%5B6bd4%5D%5B60c5%5D%5B51b5%5D%5B5206%5D%5B6790%5D.cpt'"
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