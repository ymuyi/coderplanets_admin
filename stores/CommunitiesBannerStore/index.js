/*
 * CommunitiesBannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger, stripMobx } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommunitiesBannerStore')
/* eslint-enable no-unused-vars */

const CommunitiesBannerStore = t
  .model('CommunitiesBannerStore', {
    // communities: totalCount of all
    totalCount: t.optional(t.number, 0),
    filteredTotalCount: t.maybe(t.number),
    // posts
    postsTotalCount: t.optional(t.number, 0),
    filteredPostsCount: t.maybe(t.number),
    // categories
    categoriesTotalCount: t.optional(t.number, 0),
    filterdCategoriesCount: t.maybe(t.number),
    // tags
    tagsTotalCount: t.optional(t.number, 0),
    filterdTagsCount: t.maybe(t.number),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get route() {
      const { mainQuery, subQuery } = stripMobx(self.root.route)
      return {
        mainQuery,
        subQuery,
      }
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunitiesBannerStore
