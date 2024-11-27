import React from 'react'

const Card = ({name,email="user3@gmail.com"}) => {
    return (
        <>
            <div className="w-60 flex flex-col rounded-xl bg-black mh-50">
                <div>
                    <img
                        src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                        alt="test"
                        className="object-cover object-center rounded w-25"
                    />
                </div>
                <div className="flex flex-col py-3 px-3 pb-10">
                    <div className="flex justify-between ">
                        <h1 className="font-bold ">{name}</h1>
                        <h1>{email}</h1>
                    </div>
                    
                </div>
            </div>


        </>
    )
}

export default Card