<style type="less">
  .switch_ul li{
    display: inline-block;
    margin-right: 14px;
    margin-bottom: 6px;
  }
</style>
<template>
  <div class="nwswitch">
    <Divider>Switch</Divider>
    <ul class="switch_ul">
      <li v-for="(item, index) in msg">
        <span class="switch_name">{{item.authority}}</span>
        <i-switch size="default" v-model="item.permission" @on-change="change (item.authority,item.permission) ">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </i-switch>
      </li>
    </ul>
</div>
  </div>
</template>

<script>
export default {
  name: 'NWSwitch',
  props: {
    msg: Array
  },
  data () {
      return {
          switchFlag: false
      }  
  },
  methods: {
      change (name,status) {
        if(status) {
          this.$Notice.success({
            title: '权限状态',
            desc: name ? name+'打开' : '操作不当'
          });
          
        }else{
          this.$Notice.warning({
            title: '权限状态',
            desc: name ? name+'关闭' : '操作不当'
          });
        }
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
