import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import ColorPicker from '@/components/ColorPicker.vue'

describe('App', () => {
  it('should trigger updateColor when a color is selected', async () => {
    const wrapper = mount(App)
    const colorPicker = wrapper.findComponent(ColorPicker)

    colorPicker.vm.$emit('color-selected', '#f99595d7')
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.backgroundColor).toBe('#f99595d7')
  })
})
