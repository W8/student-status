import React from 'react'
import IframeResizer from 'iframe-resizer-react'
import styles from './styles.module.css'

export const StudentStatusDefault = () => (
  <IframeResizer
    autoResize={false}
    src='https://studentstat.us/form'
    style={{ width: '1px', minWidth: '100%', border: 'none' }}
  />
)

export const StudentStatusCard = () => (
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
      src='https://studentstat.us/form'
      style={{ width: '1px', minWidth: '100%', border: 'none' }}
    />
  </div>
)

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
