/*
 * CommunityBannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommunityBannerStore')
/* eslint-enable no-unused-vars */

const CommunityBannerStore = t
  .model('CommunityBannerStore', {
    // postsTotalCount: t.optional(t.number, 0),
    filteredPostsCount: t.maybeNull(t.number),
    filteredJobsCount: t.maybeNull(t.number),
    filteredVideosCount: t.maybeNull(t.number),
    // tagsTotalCount: t.optional(t.number, 0),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get postsTotalCount() {
      return self.root.communityContent.pagedPosts.totalCount
    },
    get jobsTotalCount() {
      return self.root.communityContent.pagedJobs.totalCount
    },
    get videosTotalCount() {
      return self.root.communityContent.pagedVideos.totalCount
    },
    get tagsTotalCount() {
      return self.root.communityContent.pagedTags.length
    },
    get curRoute() {
      const { mainPath, subPath } = self.root.route
      return {
        mainPath,
        subPath,
      }
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityBannerStore
