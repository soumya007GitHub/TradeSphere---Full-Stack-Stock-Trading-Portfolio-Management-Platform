import React from 'react'
import { CirclePlus } from "lucide-react";

const RaiseTicket = () => {
  const style = {
    color: "#3483eb",
    textDecoration: "none",
    lineHeight: "2.5"
  }
  return (
    <div className="w-full flex flex-col justify-center items-center mb-20 px-5 md:px-10 lg:px-48 text-gray-700">
      <h1 className="text-3xl font-semibold my-5 text-gray-800">To create a ticket, select a relevant topic</h1>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 lg:w-1/3  p-5 mt-2 mb-2">
          <h4 className="text-xl font-bold text-gray-800 my-3">
            <CirclePlus className='inline' /> Account Opening
          </h4>
          <a href="" style={style}>
            Online Account Opening
          </a>
          <br />
          <a href="" style={style}>
            Offline Account Opening
          </a>
          <br />
          <a href="" style={style}>
            Company, Partnership and HUF Account
          </a>
          <br />
          <a href="" style={style}>
            Opening
          </a>
          <br />
          <a href="" style={style}>
            NRI Account Opening
          </a>
          <br />
          <a href="" style={style}>
            Charges at Zerodha
          </a>
          <br />
          <a href="" style={style}>
            Zerodha IDFC FIRST Bank 3-in-1 Account
          </a>
          <br />
          <a href="" style={style}>
            Getting Started
          </a>
          <br />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3  p-5 mt-2 mb-2">
          <h4 className="text-xl font-bold text-gray-800 my-3">
            <CirclePlus className='inline' /> Funds & Payments
          </h4>
          <a href="" style={style}>
            Add Money (UPI / Net Banking / IMPS)
          </a>
          <br />
          <a href="" style={style}>
            Withdrawal Issues
          </a>
          <br />
          <a href="" style={style}>
            Failed Transactions
          </a>
          <br />
          <a href="" style={style}>
            Refund Status
          </a>
          <br />
          <a href="" style={style}>
            Payment Delays
          </a>
          <br />
          <a href="" style={style}>
            Bank Account Linking
          </a>
          <br />
          <a href="" style={style}>
            Auto Settlement Queries
          </a>
          <br />
          <a href="" style={style}>
            Margin Funding Issues
          </a>
          <br />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3  p-5 mt-2 mb-2">
          <h4 className="text-xl font-bold text-gray-800 my-3">
            <CirclePlus className='inline' /> Trading & Orders
          </h4>
          <a href="" style={style}>
            Order Not Executed
          </a>
          <br />
          <a href="" style={style}>
            Order Rejected
          </a>
          <br />
          <a href="" style={style}>
            Order Modification / Cancellation
          </a>
          <br />
          <a href="" style={style}>
            Intraday vs Delivery Issues
          </a>
          <br />
          <a href="" style={style}>
            Stop Loss / Trigger Issues
          </a>
          <br />
          <a href="" style={style}>
            Margin Requirement Queries
          </a>
          <br />
          <a href="" style={style}>
            Holdings Not Visible
          </a>
          <br />
          <a href="" style={style}>
            Trade Confirmation Issues
          </a>
          <br />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-5 mt-2 mb-2">
          <h4 className="text-xl font-bold text-gray-800 my-3">
            <CirclePlus className='inline' /> Account Management
          </h4>
          <a href="" style={style}>
            Profile Update (Email / Mobile)
          </a>
          <br />
          <a href="" style={style}>
            Bank Account Change
          </a>
          <br />
          <a href="" style={style}>
            Nominee Update
          </a>
          <br />
          <a href="" style={style}>
            Segment Activation (F&O, Currency)
          </a>
          <br />
          <a href="" style={style}>
            Password Reset
          </a>
          <br />
          <a href="" style={style}>
            2FA / Login Issues
          </a>
          <br />
          <a href="" style={style}>
            Account Closure
          </a>
          <br />
          <a href="" style={style}>
            KYC Update
          </a>
          <br />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-5 mt-2 mb-2">
          <h4 className="text-xl font-bold text-gray-800 my-3">
            <CirclePlus className='inline' /> Technical Issues
          </h4>
          <a href="" style={style}>
            App Not Loading
          </a>
          <br />
          <a href="" style={style}>
            Login Errors
          </a>
          <br />
          <a href="" style={style}>
            Chart Not Working
          </a>
          <br />
          <a href="" style={style}>
            Order Placement Errors
          </a>
          <br />
          <a href="" style={style}>
            Slow Performance
          </a>
          <br />
          <a href="" style={style}>
            API Issues
          </a>
          <br />
          <a href="" style={style}>
            Website Bugs
          </a>
          <br />
          <a href="" style={style}>
            Mobile App Crashes
          </a>
          <br />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-5 mt-2 mb-2">
          <h4 className="text-xl font-bold text-gray-800 my-3">
            <CirclePlus className='inline' /> Reports & Statements
          </h4>
          <a href="" style={style}>
            P&L Statement
          </a>
          <br />
          <a href="" style={style}>
            Tax Reports
          </a>
          <br />
          <a href="" style={style}>
            Contract Notes
          </a>
          <br />
          <a href="" style={style}>
            Ledger Issues
          </a>
          <br />
          <a href="" style={style}>
            Holdings Mismatch
          </a>
          <br />
          <a href="" style={style}>
            Trade History
          </a>
          <br />
          <a href="" style={style}>
            Download Reports Issue
          </a>
          <br />
          <a href="" style={style}>
            Capital Gains Report
          </a>
          <br />
        </div>
      </div>
    </div>
  )
}

export default RaiseTicket