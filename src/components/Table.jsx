import React,{useState} from 'react'

import Plantable from './Column';
import { subscriptionPlansForMonth } from '../data/month';
import { subscriptionPlansForYear } from '../data/year';

const Table = () => {
    const [plans, setPlan] = useState([subscriptionPlansForMonth]);
  const [selectedPlan, setSelectedPlan] = useState(subscriptionPlansForMonth);

  const handlePlanClick = (collection) => {
    const newArray = collection === 'monthly' ? [subscriptionPlansForMonth] : [subscriptionPlansForYear];
    setPlan(newArray);
    setSelectedPlan(collection);
  };
  return (
    <div className='mt-10 mb-10'>
        <div className='flex justify-center gap-10'>
          <button
            className={`text-bold   ${selectedPlan === 'monthly' ? 'text-green-500' :  'text-indigo-950'}`}
            onClick={() => handlePlanClick('monthly')}
          >
            Pay Monthly
          </button>
          <button
            className={`text-bold  ${selectedPlan === 'yearly' ? 'text-green-500' : 'text-indigo-950'}`}
            onClick={() => handlePlanClick('yearly')}
          >
            Pay Yearly
          </button>
          <span className='p-3 rounded-full bg-orange-600 text-white relative'>3 months Free</span>
        </div>
        <Plantable plans={plans} />
      </div>
  )
}

export default Table