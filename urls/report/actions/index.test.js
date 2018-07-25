/* globals describe, it, expect */

import { fetchData } from './index'

describe('actions', () => {
  describe('when calling fetchData', () => {
    it('dispatches REQUEST_DATA before RECEIVE_DATA', (done) => {
      let dispatch = (function () {
        let first = true
        return (r) => {
          if (first) {
            expect(r.type).toEqual('REQUEST_DATA')
            first = false
          } else {
            expect(r.type).toEqual('RECEIVE_DATA')
            done()
          }
        }
      })()
      fetchData()(dispatch)
    })
  })
})
