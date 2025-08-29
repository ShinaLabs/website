import React, { useEffect, useState } from "react";
const HOSTING_URL = import.meta.env.VITE_HOSTING_URL;

const Pricing = () => {
  const [pricingData, setPricingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual backend endpoint
    fetch(`${HOSTING_URL}/api/pricing`)
      .then((res) => res.json())
      .then((data) => {
        setPricingData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Fallback to static text if backend is not ready
  const staticTable = (
    <div className="bg-gradient-to-tr from-[#eae6f7] to-[#cfc6e6] min-h-screen flex flex-col items-center py-12">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8">
        <p className="text-gray-700 text-lg mb-8">
          This sheet presents marketing services as tiered packages, often billed on a monthly retainer basis, to highlight ongoing value.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-4">
            <thead>
              <tr>
                <th className="text-left font-bold text-gray-900 text-base pb-2">Service</th>
                <th className="text-left font-bold text-gray-900 text-base pb-2">Basic Package</th>
                <th className="text-left font-bold text-gray-900 text-base pb-2">Standard Package</th>
                <th className="text-left font-bold text-gray-900 text-base pb-2">Premium Package</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="align-top font-semibold text-gray-800 py-2">SEO &amp; Content Strategy</td>
                <td className="text-gray-700 py-2">
                  On-page SEO for 5 pages, keyword research, and a content plan for one month.
                </td>
                <td className="text-gray-700 py-2">
                  On-page/Off-page SEO for 15 pages, blog content creation (2 articles/month), monthly performance reports.
                </td>
                <td className="text-gray-700 py-2">
                  Full SEO audit, on-page/off-page SEO for unlimited pages, weekly blog content, backlinks, and detailed monthly ROI analysis.
                </td>
              </tr>
              <tr>
                <td className="align-top font-semibold text-gray-800 py-2">Social Media</td>
                <td className="text-gray-700 py-2">
                  Management of one social media platform (e.g., Facebook). Includes 10 posts per month and basic engagement monitoring.
                </td>
                <td className="text-gray-700 py-2">
                  Management of two platforms (e.g., Facebook &amp; Instagram). Includes 20 posts per month, community management, and a monthly report.
                </td>
                <td className="text-gray-700 py-2">
                  Management of all key platforms (up to 4). Includes daily posts, dedicated community manager, and paid ad campaign management (ad spend not included).
                </td>
              </tr>
              <tr>
                <td className="align-top font-semibold text-gray-800 py-2">Pricing</td>
                <td className="text-gray-900 font-bold py-2">₹20,000/month</td>
                <td className="text-gray-900 font-bold py-2">₹45,000/month</td>
                <td className="text-gray-900 font-bold py-2">₹80,000+/month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // If backend data is available, render it. Otherwise, show static table.
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-gray-700">
        Loading pricing...
      </div>
    );
  }

  if (!pricingData) {
    return staticTable;
  }

  // Example backend data rendering (structure should match your backend)
  return (
    <div className="bg-gradient-to-tr from-[#eae6f7] to-[#cfc6e6] min-h-screen flex flex-col items-center py-12">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg p-8">
        <p className="text-gray-700 text-lg mb-8">
          {pricingData.description}
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-4">
            <thead>
              <tr>
                {pricingData.headers.map((header, idx) => (
                  <th key={idx} className="text-left font-bold text-gray-900 text-base pb-2">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData.rows.map((row, idx) => (
                <tr key={idx}>
                  {row.map((cell, cidx) => (
                    <td
                      key={cidx}
                      className={`py-2 ${idx === pricingData.rows.length - 1 ? "font-bold text-gray-900" : "text-gray-700"} ${cidx === 0 ? "align-top font-semibold text-gray-800" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;