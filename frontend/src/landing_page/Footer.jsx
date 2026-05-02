import React from 'react'

const Footer = () => {
  const style = {
    color: "#3483eb",
    textDecoration: "none",
    lineHeight: "1.5"
  }
  return (
    <footer className='border border-gray-300'>
      <div className="w-full flex-col flex gap-6 border-top px-5 md:px-10 lg:px-48 text-gray-700 my-7">
        <div className="w-full flex flex-col md:flex-row justify-center mt-5 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

            <div className="flex flex-col items-center md:items-start">
              <img src="/favicon.svg" className="w-1/10 md:w-1/2" />
              <p className="pt-3">
                &copy; 2010 - 2026,<br />TradeSphere Broking Ltd.<br />All rights reserved.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg mb-2 text-gray-900">Company</p>
              <a href="#" style={style}>About</a>
              <a href="#" style={style}>Products</a>
              <a href="#" style={style}>Pricing</a>
              <a href="#" style={style}>Referral programme</a>
              <a href="#" style={style}>Careers</a>
              <a href="#" style={style}>TradeSphere.tech</a>
              <a href="#" style={style}>Press & media</a>
              <a href="#" style={style}>TradeSphere cares (CSR)</a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg mb-2 text-gray-900">Support</p>
              <a href="#" style={style}>Contact</a>
              <a href="#" style={style}>Support portal</a>
              <a href="#" style={style}>Z-Connect blog</a>
              <a href="#" style={style}>List of charges</a>
              <a href="#" style={style}>Downloads & resources</a>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg mb-2 text-gray-900">Account</p>
              <a href="#" style={style}>Open an account</a>
              <a href="#" style={style}>Fund transfer</a>
              <a href="#" style={style}>60 day challenge</a>
            </div>

          </div>
        </div>
        <div className="mt-5 text-gray-700 2/3" style={{ fontSize: "14px" }}>
          <p>
            TradeSphere Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through TradeSphere Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through TradeSphere Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: TradeSphere Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@TradeSphere.com, for DP related to dp@TradeSphere.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradeSphere and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer