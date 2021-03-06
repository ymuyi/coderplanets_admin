import { pagedPosts, post } from './post'
import { pagedJobs, job } from './job'
import { pagedVideos, video } from './video'
import { pagedRepos, repo } from './repo'
import { user, pagedUsers, sessionState } from './user'
import {
  community,
  communitySubscribers,
  subscribedCommunities,
  pagedCommunities,
} from './community'
import { pagedComments } from './comment'
import { pagedCategories } from './misc'
import { pagedTags, partialTags } from './tag'
import { pagedThreads } from './thread'
import cheatsheet from './cheatsheet'
import wiki from './wiki'

const P = {
  // community
  community,
  subscribedCommunities,
  pagedCommunities,
  communitySubscribers,
  // comment
  pagedComments,
  // misc
  pagedTags,
  pagedThreads,
  pagedCategories,
  partialTags,
  // post
  pagedPosts,
  post,
  // job
  pagedJobs,
  job,
  // video
  pagedVideos,
  video,
  // repo
  pagedRepos,
  repo,
  // user
  user,
  pagedUsers,
  sessionState,
  // cheatsheet
  cheatsheet,
  // wiki
  wiki,
}

export default P
