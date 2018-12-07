<template>
  <div class="home">
    <NWSwitch :msg="switchDataList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NWSwitch from '_c/nwswitch/NWSwitch.vue'

export default {
  name: 'home',
  components: {
    NWSwitch
  },
  data () {
  	return  {
  		switchDataList :[
  			{
          authority : '权限1',
          permission: true
        },
        {
          authority : '权限2',
          permission: true
        },
        {
          authority : '权限3',
          permission: false
        },
        {
          authority : '权限4',
          permission: true
        },
        {
          authority : '权限5',
          permission: true
        },
        {
          authority : '权限6',
          permission: false
        },
        {
          authority : '权限7',
          permission: true
        },
        {
          authority : '权限8',
          permission: false
        },
        {
          authority : '权限9',
          permission: false
        },
        {
          authority : '权限10',
          permission: false
        }
  		]
  	}
  }
}
</script>
