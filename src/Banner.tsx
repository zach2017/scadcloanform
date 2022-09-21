import React from "react";




export default function Banner() {


    return (
        <>
            <div className="d-flex w-80 h-100 p-3 mx-center  border flex-column ">
                <main className="px-3">
                    <h1>Program Description</h1>
                    <p> Our business and project loans are ideal for Startups and Expanding businesses and financing is available for up to 100% of project costs. Our aim is to address the following Six (6) Needs:</p>
                    <ol>
                        <li>Business Support</li>
                        <li>Entrepreneurship</li>
                        <li>Expansion and Growth</li>
                        <li>Sustainable Development</li>
                        <li>Workforce Development</li>
                        <li>Economic Leadership and Funding</li>
                    </ol>
                </main>

                <h3>Additional Information on the Revolving Loan Fund</h3>
                <table>
                    <tr >
                        <td className="border"> Business Needs
                        </td>
                        <td className="border">Almost any business reason.
                            Real Estate, Construction, Machinery, Equipment, Inventory, Payroll
                        </td>
                    </tr>
                    <tr className="border">
                        <td>Types of Businesses</td>
                        <td className="border">	Industry, Commercial, and Service Businesses
                        </td>
                    </tr>
                </table>
                <div className="row text-left">
                    <div className="col-xl-6 themed-grid-col border">Minimum Years in Business</div>
                    <div className="col-xl-6 themed-grid-col border">None
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-xl-6 themed-grid-col border">Interest Rates	</div>
                    <div className="col-xl-6 themed-grid-col border">Dependent upon the use, but VERY Competitive
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-xl-6 themed-grid-col border">Terms	Working Capital              </div>
                    <div className="col-xl-6 themed-grid-col border"> Up to 7 Years
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-xl-6 themed-grid-col border">Machinery/Equipment     </div>
                    <div className="col-xl-6 themed-grid-col border"> 5 – 10 Years
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-xl-6 themed-grid-col border">Real Property                     </div>
                    <div className="col-xl-6 themed-grid-col border"> 7 - 12 Years
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-xl-6 themed-grid-col border">Payments	                  </div>
                    <div className="col-xl-6 themed-grid-col border">Fixed Monthly Payments
                    </div>
                </div>
                <div className="row text-left">
                    <div className="col-xl-6 themed-grid-col border">Loan Amounts	</div>
                    <div className="col-xl-6 themed-grid-col border"> $  10,000 Minimum
                        $200,000 Maximum
                    </div>
                </div>


                <hr />
                <div className="text-center">
                    <h2>TAKE YOUR FIRST STEP TODAY</h2>

                    <a className="w-20 btn btn-lg btn-primary" href="https://form.jotform.com/222563727700151">Fillout the Pre-Qualify Application</a>
                </div>
            </div>

        </>
    );
}
