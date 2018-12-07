<style lang="less">
  @import './login.less';
  .login img{
    width: 100%;
    height: -webkit-fill-available;
  }
</style>

<template>
  <div class="login">
    <img src="@/assets/images/login-bg.jpg">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapState, mapGetters ,mapMutations, mapActions } from 'vuex'

export default {
  components: {
    LoginForm
  },
  computed: {
    ...mapState ({
      userName : state => {
        return state.user.userName
      },
      version : state => {
        return state.user.version
      }
    }),
    ...mapGetters([
      'userNameVersion'
    ]),
    ...mapMutations ([

    ])
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    },
  },
  
}
</script>

<style>

</style>
