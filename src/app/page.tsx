'use client'

import { GiftFactory } from 'gift-sdk'
import { useState } from 'react'

const PK_RECEIPT_1 = ''

export default function Home() {
  const giftFactory = new GiftFactory()

  const [adminText, setAdminText] = useState({
    address: '',
    result: '',
    isAdmin: false
  })

  const [receiver, setReceiver] = useState({
    address: '',
    giftIndex: '',
    result: '',
  })


  const [claims, setClaims] = useState({
    address: '',
    privateKey: '',
    giftIndex: '',
    result: '',
  })


  const [gift, setGift] = useState({
    tokenAddress: '',
    tokenDecimals: 0,
    totalReward: 0,
    totalSlots: 0,
    randomPercent: 0,
    result: '',
  })

  const setAdmin = async () => {
    const result = await giftFactory.setAdmin(adminText.address)
    setAdminText({
      ...adminText,
      result
    })
  }


  const checkAdmin = async () => {
    const isAdmin = await giftFactory.isAdmin(adminText.address)
    setAdminText({
      ...adminText,
      isAdmin
    })
  }

  const createGift = async () => {
    const createGift = await giftFactory.createGifts({
      rewardToken:{
        address: gift.tokenAddress,
        decimal: gift.tokenDecimals
      } ,
      totalReward: gift.totalReward,
      totalSlots: gift.totalSlots,
      randomPercent: gift.randomPercent
    })
    console.log("🚀 ~ setAdmin ~ createGift:", createGift)

    setGift({
      ...gift,
      result: createGift
    })
  }

  const submitReceiver = async () =>{
    const createdGift = await giftFactory.getCreatedGift(receiver.giftIndex)
    console.log("🚀 ~ submitReceiver ~ createdGift:", createdGift)

      const submit = await giftFactory.submitRewardRecipient(receiver.address, createdGift)
      setReceiver({
        ...receiver,
        result: submit
      })
  }

  const claim = async () => {
    const createdGift = await giftFactory.getCreatedGift(claims.giftIndex)

    const abc = await giftFactory.claimGift({wallet:{
      privateKey: claims.privateKey,
      address: claims.address
    },
    giftContractAddress: createdGift
    
  })
  setClaims({
    ...claims,
    result: abc
  })
  }

  return (
    <main className="flex min-h-screen gap-4 w-full flex-col items-center justify-between p-12">
      <p>Victoria xao quyet</p>
      <div className='text-center  flex flex-col  w-full bg-red-300'>
      <input type="text" placeholder='Address admin' value={adminText.address} onChange={(e) => setAdminText({
          ...adminText,
          address: e.target.value
        })}  className='text-black'/>
        <button onClick={setAdmin}>Set admin</button>
        {adminText.result && (
          <p>{adminText.result}</p>
        )}
      </div>
      <div className='text-center  flex flex-col w-full gap-2 bg-cyan-700'>
        <input type="text" placeholder='Address admin' value={adminText.address} onChange={(e) => setAdminText({
          ...adminText,
          address: e.target.value
        })}  className='text-black'/>
        <button onClick={checkAdmin}>Check admin</button>
        {adminText.isAdmin && (
          <p>{String(adminText.isAdmin)}</p>
        )}
      </div>
      <div className=' flex flex-col w-full gap-2 bg-purple-800'>
        <p>Token addrress</p>
        <input type="text" placeholder='Token address' value={gift.tokenAddress} onChange={(e) => setGift({
          ...gift,
          tokenAddress: e.target.value
        })}  className='text-black'/>
        <p>Token decimal</p>
        <input type="text" placeholder='Token decimal' value={gift.tokenDecimals} onChange={(e) => setGift({
          ...gift,
          tokenDecimals: Number(e.target.value)
        })}  className='text-black'/>
        <p>Total rewards</p>
         <input type="text" placeholder='Total rewards' value={gift.totalReward} onChange={(e) => setGift({
          ...gift,
          totalReward: Number(e.target.value)
        })}  className='text-black'/>
        <p>Total slots</p>
         <input type="text" placeholder='Total slots' value={gift.totalSlots} onChange={(e) => setGift({
          ...gift,
          totalSlots: Number(e.target.value)
        })}  className='text-black'/>
         <p>Random percent</p>
         <input type="text" placeholder='Random percent' value={gift.randomPercent} onChange={(e) => setGift({
          ...gift,
          randomPercent: Number(e.target.value)
        })}  className='text-black'/>
        <button onClick={createGift}>Create gift</button>
        {gift.result && (
          <p>{String(gift.result)}</p>
        )}
      </div>
      <div className='text-center  flex flex-col w-full gap-2 bg-green-600'>
      <input type="text" placeholder='Gift index' value={receiver.giftIndex} onChange={(e) => setReceiver({
          ...receiver,
          giftIndex: e.target.value
        })}  className='text-black'/>
        <input type="text" placeholder='Address receiver' value={receiver.address} onChange={(e) => setReceiver({
          ...receiver,
          address: e.target.value
        })}  className='text-black'/>
        <button onClick={submitReceiver}>Add receiver</button>
        {receiver.result && (
          <p>{String(receiver.result)}</p>
        )}
      </div>
      <div className='text-center  flex flex-col w-full gap-2 bg-green-600'>
      <input type="text" placeholder='Gift index' value={claims.giftIndex} onChange={(e) => setClaims({
          ...claims,
          giftIndex: e.target.value
        })}  className='text-black'/>
        <input type="text" placeholder='Address ' value={claims.address} onChange={(e) => setClaims({
          ...claims,
          address: e.target.value
        })}  className='text-black'/>
          <input type="text" placeholder='Private key ' value={claims.privateKey} onChange={(e) => setClaims({
          ...claims,
          privateKey: e.target.value
        })}  className='text-black'/>
        <button onClick={claim}>Claim rewards</button>
        {claims.result && (
          <p>{String(claims.result)}</p>
        )}
      </div>
  
    </main>
  );
}
