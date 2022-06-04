import React from 'react';

const TopBanner = () => {
    return (
        <div className='container mx-auto'>
            <div class="hero min-h-screen"
                style={{
                    "background-image": 'url(https://i.ibb.co/5rDyc6B/homebg.jpg?w=1000&h=800)'
                }}
            >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold text-Black">WELLCOME TO CHAT APPLICATION</h1>
                        <p class="mb-5 text-black font-bold">This Application is mainly used for global chat Application</p>
                        <button class="btn btn-primary">Go To Messege Board</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TopBanner;