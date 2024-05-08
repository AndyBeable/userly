import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

describe('Card', () => {
  it('Card should display user data correctly', async () => {
    const user = {
      name: { first: 'John', last: 'Doe' },
      email: 'john.doe@example.com',
      phone: '123-456-789',
      location: { city: 'City', country: 'Country' },
      picture: { large: 'https://example.com/profile.jpg' }
    }

    const backgroundColor = '#f99595d7'

    const wrapper = mount(Card, { props: { user, backgroundColor } })

    expect(wrapper.find('.user__name').text()).toBe('John Doe')
    expect(wrapper.find('.user__email').text()).toBe(user.email)
    expect(wrapper.find('.user__phone').text()).toBe(user.phone)
    expect(wrapper.find('.user__location').text()).toBe('City, Country')
    expect(wrapper.find('.user__image').attributes('src')).toBe(user.picture.large)
  })
})
