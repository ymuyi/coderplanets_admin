import React from 'react'

// import { ICON_CMD } from '../../config'
import { Wrapper, CommunityLogo } from './styles/communities_logo_list'

import { uid } from '../../utils'

const tooltipOffset = JSON.stringify({ top: 1 })
const CommunitiesLogoList = ({ array }) => (
  <Wrapper>
    {array.map(c => (
      <Wrapper key={uid.gen()}>
        <div
          data-tip={c.title}
          data-for="community_cell"
          data-offset={tooltipOffset}
        >
          <CommunityLogo src={c.logo} />
        </div>
      </Wrapper>
    ))}
  </Wrapper>
)

export default CommunitiesLogoList
