<template >

  <iframe id="google_ads_frame2" name="google_ads_frame2" width="100%" height="850" frameborder="0"
          :src="this.fanruan_location+'decision/view/form?viewlet=jiedu%2FdataAnalysis%2F5%5B4e00%5D%5B5e74%5D%5B5185%5D%5B5404%5D%5B5730%5D%5B5438%5D%5B98df%5D%5B6bd2%5D%5B54c1%5D%5B5f02%5D%5B5e38%5D%5B5206%5D%5B6790%5D.frm'"
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
