import React from 'react';


const Plantable = ({plans}) => {
//  console.log(plans[0])

  // Common features for all plans
  const commonFeatures = [
    { label: 'Responses via WhatsApp'  },
    { label: 'Number of Forms' },
    { label: 'Responses in Dashboard' },
    { label: 'Custom SEO Meta Data'},
    { label: 'Custom WhatsForm link'},
    { label: 'Custom Script & Integrations'},
    { label: 'Remove WhatsForm branding' },
    { label: 'File upload in form' },
    { label: 'Team routing' },
  ];

  return (
    <div className="flex flex-col space-y-4 w-[100%] sm:w[200%] sm:overflow-x-scroll">
      
        <div  className="  bg-white lg:p-7 sm:p-4 rounded-md shadow-md">
          <table className="w-full p-4 ">
            <tbody style={{display:'flex'}} className=' overflow-x-scroll'>
              {/* Render common features for each plan */}
              <div className='w-[25%]'style={{flexDirection:"column",alignItems:'center',justifyContent:'center'}}>
              <h2 className="text-md text-white " >dummy</h2>
          <h2 className='text-white'>dummy</h2>
          <p className='text-white'>dummy</p>
              {commonFeatures.map((commonFeature, featureIndex) => (
                <tr className='h-20 bottom-1 font-medium text-gray-700 p-3 sm:p-1 sm:text-sm' key={featureIndex}>
                  <td className="p-4 sm:p-2 text-nowrap">{commonFeature.label}</td>
                </tr>
              ))}
              </div>
      {/* Render plan-specific features */}
              {plans[0].map((plan, index) => (
              <div key={index} className='w-[20%] flex flex-col items-center'>
              <h2 className="text-lg font-semibold">{plan.plan}</h2>
          <h2>${plan.price}</h2>
          <p>{plan.dur}</p>
              {plan.features.map((feature, featureIndex) => (
              <tr className='h-20  jusify-center bottom-1 font-md text-gray-700 p-5 sm:p-1 sm:text-sm' key={featureIndex}>
              <td className="p-4 sm:p-2 text-nowrap">{feature.value}</td>
            </tr>
              ))}
              </div>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default Plantable;
