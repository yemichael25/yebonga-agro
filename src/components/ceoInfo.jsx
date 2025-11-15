import React from "react";
import TiltedCard from "../assets/TiltedCard";
import Owner from '../assets/owner.png';

export default function CEOInfo() {
    return (
        <section className="ceo-info-section px-4 py-12 bg-gray-100 flex flex-col items-center">

        <TiltedCard
        imageSrc={Owner}
        altText="Getachew Kebede - General Manager of Yebonga Agro"
        captionText="Getachew Kebede - General Manager of Yebonga Agro"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
            <p className="tilted-card-demo-text bg-bg-white/20 backdrop-blur-sm m-5">
            Getachew Kebede, General Manager
            </p>
        }
        />
        <div className="mt-8 text-center max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Message from the General Manager</h2>
            <p className="text-gray-700">
            At Yebonga Agro, our mission is to revolutionize agriculture through innovation and sustainability. We are committed to empowering farmers with cutting-edge technology and practices that enhance productivity while preserving the environment. Together, we can cultivate a brighter future for agriculture.
            </p>
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=getachewkebede38@gmail.com"
                target="blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors mt-4 bg-blue-100 hover:bg-gray-100 transform-300 px-2 rounded duration-300"
              >
                Email
              </a>
        </div>
        </section>
    )
}
