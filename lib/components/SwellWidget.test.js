import { mount } from '@vue/test-utils'
import SwellWidget from './SwellWidget.vue'

const wrapper = mount(SwellWidget, {
  stubs: ['client-only']
})

describe('SwellWidget', () => {
  it('should mount', () => {
    const component = wrapper.find('#swell-customer-identification')
    expect(component).not.toBeUndefined()
  })
})
