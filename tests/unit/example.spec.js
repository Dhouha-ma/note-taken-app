import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Log in to your Note Taken Application'
    const wrapper = shallowMount(Login, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
