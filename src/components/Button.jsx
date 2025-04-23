import React from 'react'
import PropTypes from 'prop-types'

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = ''
}) => {
  const buttonClasses =
    'inline-flex items-center gap-2 rounded-full bg-sky-500 text-white px-5 py-2 font-medium hover:bg-sky-600 transition-colors duration-200 cursor-pointer' + classes

  const iconElement = icon && (
    <span className="text-lg material-symbols-rounded" aria-hidden="true">
      {icon}
    </span>
  )

  if (href) {
    return (
      <a href={href} target={target} className={buttonClasses}>
        {label} {iconElement}
      </a>
    )
  } else {
    return (
      <button className={buttonClasses}>
        {label} {iconElement}
      </button>
    )
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
}

export { ButtonPrimary }
