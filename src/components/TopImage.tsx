import React from 'react';

const TopImage: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video - Same for both renting and thrifting */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/src/components/Video/Video.mp4" type="video/mp4" />
        <source src="/src/components/Video/Video.mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 md:bg-opacity-40"></div>

      {/* Content Container (empty since you removed the text) */}
      <div className="relative w-full px-4 md:w-3/4 h-3/4 flex items-center justify-center text-center">
        {/* Empty container - add content here if needed later */}
      </div>

      {/* Mobile-specific optimizations */}
      <style jsx>{`
        @media (max-width: 768px) {
          video {
            object-position: 50% 50%;
          }
          .relative {
            padding: 0 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TopImage;