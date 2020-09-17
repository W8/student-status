import React from 'react'
import IframeResizer from 'iframe-resizer-react'
import styles from './styles.module.css'

export const StudentStatusDefault = ({ primaryColor }) => {
  let query
  console.log(primaryColor)

  if (primaryColor === 'gray') {
    query = encodeURIComponent('#718096').toLowerCase()
  } else if (primaryColor === 'red') {
    query = encodeURIComponent('#E53E3E').toLowerCase()
  } else if (primaryColor === 'orange') {
    query = encodeURIComponent('#DD6B20').toLowerCase()
  } else if (primaryColor === 'yellow') {
    query = encodeURIComponent('#D69E2E').toLowerCase()
  } else if (primaryColor === 'green') {
    query = encodeURIComponent('#38A169').toLowerCase()
  } else if (primaryColor === 'teal') {
    query = encodeURIComponent('#319795').toLowerCase()
  } else if (primaryColor === 'blue') {
    query = encodeURIComponent('#3182CE').toLowerCase()
  } else if (primaryColor === 'purple') {
    query = encodeURIComponent('#805AD5').toLowerCase()
  } else if (primaryColor === 'pink') {
    query = encodeURIComponent('#D53F8C').toLowerCase()
  } else {
    query = encodeURIComponent('#5A67D8').toLowerCase()
  }

  console.log(query)

  return (
    <IframeResizer
      autoResize={false}
      src={`https://studentstat.us/form?primaryColor=${query}`}
      style={{ width: '1px', minWidth: '100%', border: 'none' }}
    />
  )
}

export const StudentStatusCard = ({ primaryColor }) => {
  let query

  if (primaryColor === 'gray') {
    query = encodeURIComponent('#718096').toLowerCase()
  } else if (primaryColor === 'red') {
    query = encodeURIComponent('#E53E3E').toLowerCase()
  } else if (primaryColor === 'orange') {
    query = encodeURIComponent('#DD6B20').toLowerCase()
  } else if (primaryColor === 'yellow') {
    query = encodeURIComponent('#D69E2E').toLowerCase()
  } else if (primaryColor === 'green') {
    query = encodeURIComponent('#38A169').toLowerCase()
  } else if (primaryColor === 'teal') {
    query = encodeURIComponent('#319795').toLowerCase()
  } else if (primaryColor === 'blue') {
    query = encodeURIComponent('#3182CE').toLowerCase()
  } else if (primaryColor === 'purple') {
    query = encodeURIComponent('#805AD5').toLowerCase()
  } else if (primaryColor === 'pink') {
    query = encodeURIComponent('#D53F8C').toLowerCase()
  } else {
    query = encodeURIComponent('#5A67D8').toLowerCase()
  }

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '433px',
        maxWidth: '56rem',
        width: '100%',
        margin: 'auto',
        borderWidth: '1px',
        borderRadius: '0.5rem',
        borderColor: '#e5e7eb',
        backgroundColor: '#ffffff',
        boxShadow:
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        overflow: 'hidden'
      }}
    >
      <IframeResizer
        autoResize={false}
        src={`https://studentstat.us/form?primaryColor=${query}`}
        style={{ width: '1px', minWidth: '100%', border: 'none' }}
      />
    </div>
  )
}

export const StudentStatusButton = ({
  logoWidth,
  fontSize,
  padding,
  lineHeight
}) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <a
      href='https://studentstat.us/form'
      target='_blank'
      rel='noreferrer'
      className={styles.studentstatusBtn}
      style={{
        fontSize: fontSize || '1rem',
        padding: padding || '0.5rem 1rem',
        lineHeight: lineHeight || '1.5rem'
      }}
    >
      <img src='https://studentstat.us/logolight.svg' width={logoWidth || 20} />
      Student Status
    </a>
  </div>
)
