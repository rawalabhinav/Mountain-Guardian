import React from 'react';
import dhruv from '../assets/Dhruv.jpeg'
import nanak from '../assets/nanak.jpg'
import saira from '../assets/saira.jpg'
import rawal from '../assets/rawal.jpeg'
import sarthak from '../assets/sarthak-garg.jpeg'
import uttam from '../assets/uttam.jpg'

const About = () => {
    return (
        <div className="container mx-auto mt-4">
            <div className="max-w-8xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-4xl font-semibold text-center mb-6">About Our Website</h2>

                <p className="text-lg">
                    Welcome to <b>Mountain Guardian</b>, your trusted source for real-time avalanche risk assessments. Our platform combines advanced technology with satellite imagery to deliver timely predictions regarding the potential for avalanches in specific areas.
                </p>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Key features</h3>
                    <ul className="list-disc pl-6">
                        <li className="text-lg "> <b>Location-Specific Predictions</b> : Input the latitude and longitude of your desired location, and our cutting-edge CNN-based classifier will analyze terrain and environmental data.</li>
                        <li className="text-lg"> <b>Sentinel-1 Satellite Imagery</b>: We leverage Sentinel-1 satellite images to monitor changes in snow cover, terrain conditions, and other factors crucial for assessing avalanche risks.</li>
                        <li className="text-lg"> <b>10-Day Forecast</b>: Receive predictions for the next 10 days, allowing you to plan activities and make informed decisions about safety in avalanche-prone regions.</li>
                        <li className="text-lg"> <b>User-Friendly Interface</b>: Our intuitive interface ensures easy access to critical avalanche risk information.</li>
                        <li className="text-lg"> <b>Safety First</b>: Your safety is paramount to us. If our predictions indicate potential risk, we provide guidance on safety measures and precautions.</li>
                    </ul>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Why Choose Mountain Guardian ?</h3>
                    <ul className="list-disc pl-6">
                        <li className="text-lg">Accurate Predictions: Our state-of-the-art CNN classifier and Sentinel-1 imagery deliver highly precise avalanche risk assessments.</li>
                        <li className="text-lg">Real-Time Updates: We continuously monitor and update predictions to provide you with the latest information.</li>
                        <li className="text-lg">Plan with Confidence: Whether you're an outdoor enthusiast, a professional, or a local resident, Avalanche Alert empowers you to make informed, safe decisions.</li>
                    </ul>
                </div>

                <p className="text-lg mt-8">
                    Stay ahead of avalanche risks with <b>Mountain Guardian</b>. Your safety is our top priority.
                </p>
            </div>


            <h1 className="text-4xl font-semibold text-center m-5 mt-8">Developers Team</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 mx-auto justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <img
                        src={uttam}
                        alt="Uttam Mittal"
                        className="w-48 h-48 object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Uttam Mittal</h3>
                        <p className="text-base text-gray-600">ML Engineer</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <img
                        src={dhruv}
                        alt="Dhruv Bansal"
                        className="w-48 h-48 object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Dhruv Bansal</h3>
                        <p className="text-base text-gray-600">Frontend Developer</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <img
                        src={nanak}
                        alt="Nanakjot Singh"
                        className="w-48 h-48 object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Nanakjot Singh</h3>
                        <p className="text-base text-gray-600">Backend Developer</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <img
                        src={rawal}
                        alt="Abhinav Rawal"
                        className="w-48 h-48 object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Abhinav Rawal</h3>
                        <p className="text-base text-gray-600">Backend Developer</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mx-auto justify-center place-items-center">
                <div className="bg-white p-6 rounded-lg flex">
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold"></h3>
                        <p className="text-base text-gray-600"></p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <img
                        src={sarthak}
                        alt="Sarthak Garg"
                        className="w-48 h-48 object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Sarthak Garg</h3>
                        <p className="text-base text-gray-600">ML Engineer</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <img
                        src={saira}
                        alt="Saira Garg"
                        className="w-48 h-48 object-cover rounded-full"
                    />
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold">Saira Garg</h3>
                        <p className="text-base text-gray-600">Data analyst</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg flex">
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold"></h3>
                        <p className="text-base text-gray-600"></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
