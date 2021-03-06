import F from '../fragments'

export const post = `
  query post($id: ID!) {
    post(id: $id) {
      ${F.post}
      body
      length
      linkAddr
      copyRight
      author {
        ${F.author}
        bio
        location
        achievement {
          reputation
        }
        followersCount
        followingsCount
      }
      favoritedCount
      starredCount
      pagedCommentsParticipators {
        entries {
          ${F.author}
        }
        totalCount
      }
      communities {
        ${F.community}
      }
      tags {
        ${F.tag}
      }
    }
  }
`
export const pagedPosts = `
  query($filter: PagedPostsFilter) {
    pagedPosts(filter: $filter) {
      entries {
        ${F.post}
        digest
        linkAddr
        copyRight
        communities {
          ${F.community}
        }
        commentsCount
        tags {
          ${F.tag}
        }
        author {
          ${F.author}
        }
        insertedAt
        updatedAt
      }
      ${F.pagedCounts}
    }
  }
`
