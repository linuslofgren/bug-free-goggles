/* globals describe, expect, it */
import filter from './filter'

describe('Filter reducer', () => {
  describe('when receiving SET_PLACE', () => {
    it('updates placeName', () => {
      expect(filter({}, {type: 'SET_PLACE', payload: 'Rome'}).placeName).toBe('Rome')
    })
  })
  describe('when receiving SET_MONTH', () => {
    it('updates monthName', () => {
      expect(filter({}, {type: 'SET_MONTH', payload: 'April'}).monthName).toBe('April')
    })
  })
  describe('when receiving SET_TYPE', () => {
    it('adds type to types', () => {
      let state = {types: []}
      state = filter(state, {type: 'SET_TYPE', payload: 'car'})
      expect(state.types).toEqual(['car'])
    })
    it('does not add the type again', () => {
      let state = {types: []}
      state = filter(state, {type: 'SET_TYPE', payload: 'car'})
      expect(filter(state, {type: 'SET_TYPE', payload: 'car'}).types).not.toEqual(['car', 'car'])
    })
  })
  describe('when receiving REMOVE_TYPE', () => {
    it('removes type from types', () => {
      let state = {types: ['car', 'ped']}
      state = filter(state, {type: 'REMOVE_TYPE', payload: 'car'})
      expect(state.types).toEqual(['ped'])
    })
    it('can handle removing a type that is already removed', () => {
      let state = {types: ['car', 'ped']}
      state = filter(state, {type: 'REMOVE_TYPE', payload: 'car'})
      expect(filter(state, {type: 'REMOVE_TYPE', payload: 'car'}).types).toEqual(['ped'])
    })
  })
  describe('when receiving REQUEST_DATA', () => {
    it('sets fetching to true', () => {
      let state = {fetching: false}
      state = filter(state, {type: 'REQUEST_DATA'})
      expect(state.fetching).toBe(true)
    })
  })
  describe('when receiving RECEIVE_DATA', () => {
    it('sets fetching to false again', () => {
      let state = {fetching: false}
      state = filter(state, {type: 'REQUEST_DATA'})
      state = filter(state, {type: 'RECEIVE_DATA'})
      expect(state.fetching).toBe(false)
    })
  })
  describe('when receiving an unknown type', () => {
    it('returns the state', () => {
      let state = {shouldBeTheSame: '16dhg91h'}
      state = filter(state, {type: '___UNKNOWN_TYPE', payload: 'jf91gal'})
      expect(state).toEqual({shouldBeTheSame: '16dhg91h'})
    })
  })
})
