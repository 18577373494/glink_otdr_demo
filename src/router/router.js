import Home from '@/views/Home.vue'

export default  [
  	{
	    path: '/',
	    name: 'Home',
	    component: Home
  	},
  	{
		path: '/login',
		name: 'login',
		meta: {
		    title: '登录',
		    hideInMenu: true
		},
		component: () => import('@/views/login/login.vue')
	}
]

