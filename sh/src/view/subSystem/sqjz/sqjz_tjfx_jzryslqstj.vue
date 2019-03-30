<template>
  <iframe id="google_ads_frame2" name="google_ads_frame2" width="100%" height="100%" fameborder="0"
          :src="this.fanruan_location+'decision/view/report?viewlet=sqjz%2FdataAnalysis%2F%5B77eb%5D%5B6b63%5D%5B4eba%5D%5B5458%5D%5B6570%5D%5B636e%5D%5B8d8b%5D%5B52bf%5D%5B7edf%5D%5B8ba1%5D.cpt'"
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