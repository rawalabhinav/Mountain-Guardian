import React from 'react';

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

        </div>
    );
};

export default About;
