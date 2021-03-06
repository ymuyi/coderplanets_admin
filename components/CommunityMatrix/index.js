/*
 *
 * CommunityMatrix
 *
 */

import React from 'react'
import R from 'ramda'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'

import { ICON_CMD } from '../../config'

import {
  MatrixWrapper,
  CommunityLogo,
  GeneralPLogo,
  AddOnWrapper,
} from './styles'

import { makeDebugger, uid } from '../../utils'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('c:CommunityMatrix:index')
/* eslint-enable no-unused-vars */

const tooltipOffset = JSON.stringify({ top: 5, right: -5 })

const Communities = ({ list, onSelect, activeRaw, lens }) => (
  <React.Fragment>
    {list.map(c => (
      <div
        key={uid.gen()}
        onClick={onSelect.bind(this, c)}
        data-place="right"
        data-tip={c.title}
        data-for="permission_editor"
        data-offset={tooltipOffset}
      >
        <CommunityLogo
          src={c.logo}
          active={c.raw === activeRaw}
          len={R.contains(c.raw, lens)}
        />
      </div>
    ))}
  </React.Fragment>
)

class CommunityMatrix extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 1000)
  }

  render() {
    const {
      data,
      array,
      activeRaw,
      lens,
      onSelect,
      onAddOnSelect,
      hasAddon,
    } = this.props

    const safedata = data === null ? { entries: [] } : data
    const entries = R.concat(safedata.entries, array)

    return (
      <MatrixWrapper>
        <Communities
          list={entries}
          onSelect={onSelect}
          activeRaw={activeRaw}
          lens={lens}
        />

        <AddOnWrapper
          data-place="right"
          data-tip="基础权限"
          data-for="permission_editor"
          data-offset={tooltipOffset}
          onClick={onAddOnSelect}
          show={hasAddon}
        >
          <GeneralPLogo src={`${ICON_CMD}/all.svg`} />
        </AddOnWrapper>
      </MatrixWrapper>
    )
  }
}

CommunityMatrix.propTypes = {
  // https://www.npmjs.com/package/prop-types
  data: PropTypes.shape({
    // TODO add shape
    entries: PropTypes.array.isRequired,
    pageNumber: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
  }),
  array: PropTypes.array,
  onSelect: PropTypes.func,
  onAddOnSelect: PropTypes.func,
  activeRaw: PropTypes.string,
  lens: PropTypes.arrayOf(PropTypes.string),
  hasAddon: PropTypes.bool,
}

CommunityMatrix.defaultProps = {
  data: {
    entries: [],
    pageNumber: 1,
    pageSize: 20,
    totalCount: 0,
  },
  array: [],
  onSelect: debug,
  onAddOnSelect: debug,
  lens: [],
  hasAddon: true,
  activeRaw: '',
}

export default CommunityMatrix
