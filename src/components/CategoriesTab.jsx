import React from 'react'

const CategoriesTab = () => {

        const tabsData = [
          { id: 1, title: 'All' },
          { id: 2, title: 'Fresh' },
          { id: 3, title: 'Amazon miniTV' },
          { id: 4, title: 'Sell' },
          { id: 5, title: 'Best Sellers' },
          { id: 6, title: 'Mobiles' },
          { id: 7, title: 'Today Deals' },
          { id: 8, title: 'Prime' },
          { id: 9, title: 'Customer Service' },
          { id: 10, title: 'Electronics' },
          { id: 11, title: 'New Releases' },
          { id: 12, title: 'Home & Kitchen' },
          { id: 13, title: 'Fashion' },
          { id: 14, title: 'Amazon Pay' },
          { id: 15, title: 'Gift Ideas' },
          { id: 16, title: 'Books' },
          
        ];


  return (
    
    <div className='bg-gray-700 py-6 flex items-center justify-around'>
      {tabsData.map(tab => (
        <div key={tab.id}>
          <h4 className='text-sm font-medium text-white'>{tab.title}</h4>
        </div>
      ))}
    </div>


  )
};

export default CategoriesTab;