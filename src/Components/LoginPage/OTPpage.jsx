import React from 'react'
import PinBox from './PinBox'

export const OTPpage = ({setOtpLength}) => {
  return (
    <div>
    <PinBox length={4} perBox={1} otpLength={setOtpLength} />
    </div>
  )
}
