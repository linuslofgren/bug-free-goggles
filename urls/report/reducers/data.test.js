/* globals describe, expect, it */
import data from './data'

describe('Data reducer', () => {
  describe('when receiving an unknown type', () => {
    it('returns the original state', () => {
      let state = {shouldBeTheSame: '16dhg91h'}
      state = data(state, {type: '___UNKNOWN_TYPE', payload: 'jf91gal'})
      expect(state).toEqual({shouldBeTheSame: '16dhg91h'})
    })
  })
})
