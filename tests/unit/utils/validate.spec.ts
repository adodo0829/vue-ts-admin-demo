import { isValidUsername } from '@/utils/validate'

describe('Utils:validate', () => {
  it('isValidUsername', () => {
    expect(isValidUsername('admin')).toBe(true)
    expect(isValidUsername('editor')).toBe(true)
    expect(isValidUsername('xxxx')).toBe(false)
  })
})
