import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './frame32.css'

const Frame32 = (props) => {
  return (
    <div className={`frame32-frame32 ${props.rootClassName} `}>
      <span>
        {props.text ?? (
          <Fragment>
            <span className="frame32-text2">
              Describe yourself/company or the types of freelancers you’re
              looking to hire
            </span>
          </Fragment>
        )}
      </span>
    </div>
  )
}

Frame32.defaultProps = {
  rootClassName: '',
  text: undefined,
}

Frame32.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
}

export default Frame32
