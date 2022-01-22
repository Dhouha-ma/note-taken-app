import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
  it('renders login message when passed', () => {
    const msg = 'Log in to your Note Taken Application'
    const wrapper = shallowMount(Login, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
