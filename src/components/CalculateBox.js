import React from 'react'
import './calculatebox.css'
import './texts.css'
import './buttons.css'
import './textfield.css'
import './icons.css'
import resetImg from '../images/reset_icon.png'
import ellipseImg from '../images/ellipse.png'
import crossImg from '../images/cross.png'

export default function CalculateBox() {
  const getInputSalary = (event) =>{
    const basicSalary = event.target.value
  }
  const getInputAllowance1 = (event) =>{
    const earnings_etfEPF1 = event.target.value
  }
  const getInputAllowance2 = (event) =>{
    const earningsetfEPF2 = event.target.value
  }
  const getInputDeduction = (event) =>{
    const grossDeduction = event.target.value
  }
  return (
    <div className='calculateBox'>
        <span className='topicText'>Calculate Your Salary</span>
        <img src={resetImg} alt='reset' className='resetIcon'/>
        <button className='resetButton'>Reset</button>
        <span className='basicSalaryText'>Basic Salary</span>
        <input type='text' onChange={getInputSalary} className='salaryInput'/>
        <span className='earningsText'>Earnings</span>
        <span className='allowanceText'>Allowance, Fixed Allowance, Bonus and etc.</span>
        <img src={ellipseImg} alt='ellipse' className='ellipse1'/>
        <button className='clearButton1'><img src={crossImg} alt='clear' className='cross1'/></button>
        <img src={ellipseImg} alt='ellipse' className='ellipse2'/>
        <input type='checkbox' className='checkbox1'/>
        <input type='checkbox' className='checkbox2'/>
        <button className='clearButton2'><img src={crossImg} alt='clear' className='cross2'/></button>
        <input type='text' onChange={getInputAllowance1} className='allowanceInput1'/>
        <span className='epfEtfText1'>EPF/ETF</span>
        <input type='text' onChange={getInputAllowance2} className='allowanceInput2'/>
        <span className='epfEtfText2'>EPF/ETF</span>
        <button className='newAllowanceButton'>+ Add New Allowance</button>
        <span className='deductionsText'>Deductions</span>
        <button className='newDeductionButton'>+ Add New Deduction</button>
        <span className='salaryAdvancesText'>Salary Advances, Loan Deductions and all</span>
        <img src={ellipseImg} alt='ellipse' className='ellipse3'/>
        <button className='clearButton3'><img src={crossImg} alt='clear' className='cross3'/></button>
        <input type='text' onChange={getInputDeduction} className='deductionInput'></input>
    </div>
  )
}
