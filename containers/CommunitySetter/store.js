/*
 * CommunitySetterStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { PagedCommunities } from '../../stores/SharedModel'
import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommunitySetterStore')
/* eslint-enable no-unused-vars */

const CommunitySetterStore = t
  .model('CommunitySetterStore', {
    pagedCommunities: t.maybeNull(PagedCommunities),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get pagedCommunitiesData() {
      return stripMobx(self.pagedCommunities)
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitySetterStore
