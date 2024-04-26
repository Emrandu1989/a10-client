import React from 'react';

const CraftCard = ({myCraft}) => {
    console.log(myCraft);
    
    const {Customization, Description,ImageUrl,ItemName,Price,Processing_time,Ratings,StockStatus,Subcategory_name,UserEmail,UserName,_id} = myCraft;
    return (
        <>
            <div className=" flex flex-row justify-between items-center bg-base-100 px-5 shadow-xl">
  <figure><img className='w-[300px] h-[350px] rounded-xl' src={ImageUrl} alt="Movie"/></figure>
  <div className='space-y-3'>
    <h2 className="card-title">{ItemName}</h2>
    <p>Price: $ {Price}</p>
    <p>Ratings: {Ratings}</p>
    <p>Customization: {Customization}</p>
    <p>StockStatus: {StockStatus}</p>
  </div>
  <div className="flex flex-col gap-6 ">
      <button className="btn btn-primary">Update</button>
      <button className="btn btn-primary">Delete</button>
    </div>
</div>   
        </>
    );
};

export default CraftCard;