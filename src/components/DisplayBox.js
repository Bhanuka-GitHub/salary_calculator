import React from 'react'
import './displaybox.css'
import './texts.css'
import './icons.css'

export default function DisplayBox() {
  const basicSalary = 100000
  const grossEarnings = 30000
  const grossDeduction = 5000
  const totalEPFETF = 10000
  const employeeEPF8 = [(basicSalary+totalEPFETF)*(8/100)]
  const grossSalary = basicSalary+grossEarnings
  const netSalary = grossSalary-grossDeduction-employeeEPF8
  const employeeEPF12 = [(basicSalary+totalEPFETF)*(12/100)]
  const employeeEPF3 = [(basicSalary+totalEPFETF)*(3/100)]
  const ctc = grossSalary-grossDeduction+employeeEPF12+employeeEPF3
  return (
    <div className='displayBox'>
      <span className='displayTopicText'>Your salary</span>
      <span className='itemsText'>Items</span>
      <span className='amountText'>Amount</span>
      <span className='displayBasicSalaryText'>Basic Salary</span>
      <span className='salaryAmountText'>{basicSalary + '.00'}</span>
      <span className='grossEarningText'>Gross Earning</span>
      <span className='earningAmountText'>{grossEarnings + '.00'}</span>
      <span className='grossDeductionText'>Gross Deduction</span>
      <span className='deductionAmountText'>{grossDeduction + '.00'}</span>
      <span className='epf8Text'>Employee EPF (8%)</span>
      <span className='epf8AmountText'>{employeeEPF8 + '.00'}</span>
      <div className='netSalaryBox'>
        <span className='netSalaryText'>Net Salary (Take Home)</span>
        <span className='netSalaryAmounyText'>{netSalary + '.00'}</span>
      </div>
      <span className='contributionText'>Contribution from the Employer</span>
      <span className='epf12Text'>Employeer EPF (12%)</span>
      <span className='epf12AmountText'>{employeeEPF12 + '.00'}</span>
      <span className='etf3Text'>Employeer ETF (3%)</span>
      <span className='etf3AmountText'>{employeeEPF3 + '.00'}</span>
      <span className='ctcText'>CTC (Cost to Company)</span>
      <span className='ctcAmountText'>{ctc + '.00'}</span>
    </div>
  )
}
