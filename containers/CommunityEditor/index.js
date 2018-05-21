/*
 *
 * CommunityEditor
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

// import Link from 'next/link'

import { makeDebugger, storePlug } from '../../utils'

// TODO: EditableImage
import {
  Button,
  Icon,
  FormInputer,
  Space,
  FileUploader,
  StatusBox,
} from '../../components'
import { Wrapper, Logo, Divider, ActionBtns, ImageWrapper } from './styles'

import * as logic from './logic'

/* eslint-disable no-unused-vars */
const debug = makeDebugger('C:CommunityEditor')
/* eslint-enable no-unused-vars */

class CommunityEditorContainer extends React.Component {
  componentWillMount() {
    logic.init(this.props.communityEditor)
  }

  render() {
    const updating = false
    const { communityEditor } = this.props
    const { communityData, success, error, warn, statusMsg } = communityEditor

    return (
      <Wrapper>
        <h3>创建社区</h3>
        <br />
        <div>
          {communityData.logo ? (
            <FileUploader
              onUploadDone={logic.uploadPic}
              dir="communities"
              nestDir={false}
            >
              <Logo src={communityData.logo} />
            </FileUploader>
          ) : (
            <FileUploader
              onUploadDone={logic.uploadPic}
              dir="communities"
              nestDir={false}
            >
              <ImageWrapper>
                <Icon type="plus" />
              </ImageWrapper>
            </FileUploader>
          )}
        </div>

        <FormInputer
          label="名称:"
          value={communityData.title}
          onChange={logic.profileChange('title')}
        />
        <FormInputer
          label="raw:"
          value={communityData.raw}
          note="用作 router 的唯一值，只能用英文。建议用社区的 translate 作为 raw 值， 比如 'javascript 中文社区'， 对应的 raw 值为 'javascript'"
          onChange={logic.profileChange('raw')}
        />
        <FormInputer
          label="类别:"
          value={communityData.category}
          onChange={logic.profileChange('category')}
        />
        <FormInputer
          label="描述:"
          textarea
          value={communityData.desc}
          onChange={logic.profileChange('desc')}
        />

        <br />
        <StatusBox
          success={success}
          error={error}
          warn={warn}
          msg={statusMsg}
        />
        <Divider />
        <ActionBtns>
          <Button type="primary" ghost onClick={logic.cancleEdit}>
            取消
          </Button>
          <Space right="20px" />
          {updating ? (
            <Button type="primary" disabled>
              <Icon type="loading" /> 保存中
            </Button>
          ) : (
            <Button type="primary" onClick={logic.updateConfirm}>
              保存
            </Button>
          )}
        </ActionBtns>
      </Wrapper>
    )
  }
}

export default inject(storePlug('communityEditor'))(
  observer(CommunityEditorContainer)
)
