import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  SmartphoneNfc,
  Download,
  Star,
  ShoppingBag,
  Clock,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AppDownload = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".app-section")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="app-section py-1 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-stone-900 to-stone-700 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content Section */}
          <div ref={appRef} className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Download Our App For{" "}
              <span className="text-[#F4E3B2]">Enhanced Experience</span>
            </h2>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 mt-6 sm:mt-10 leading-8">
              {[
                {
                  icon: (
                    <SmartphoneNfc className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ),
                  title: "Virtual Try-On",
                  description:
                    "Our app features advanced AR technology that lets you virtually try on outfits before renting.",
                },
                {
                  icon: (
                    <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ),
                  title: "Easy Booking",
                  description:
                    "Book your favorite fashion items with just a few taps and have them delivered to your doorstep.",
                },
                {
                  icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "Rental Reminders",
                  description:
                    "Get timely notifications about your rental period and upcoming return dates.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-white/10 p-2 sm:p-3 rounded-full flex-shrink-0 mt-0.5 sm:mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-row gap-3 sm:gap-4 max-w-xs mx-auto sm:mx-0 sm:max-w-none mb-10 md:mb-4">
              <Button className="bg-[#F4E3B2] hover:bg-[#E8D49E] text-[#74070E] gap-2 py-2 sm:py-2 flex-1">
                <Download size={16} className="shrink-0" />
                <span>App Store</span>
              </Button>
              <Button className="bg-[#F4E3B2] hover:bg-[#E8D49E] text-[#74070E] gap-2 py-2 sm:py-2 flex-1">
                <Download size={16} className="shrink-0" />
                <span>Google Play</span>
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative lg:pl-8">
            <div className="bg-pink-300/40 w-48 h-48 sm:w-64 sm:h-64 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="relative md:flex md:justify-center z-10 max-w-xs mx-auto">
              <img
                src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Mobile App"
                className="hidden md:block shadow-2xl rounded-2xl sm:rounded-3xl border-4 sm:border-8 border-white/10"
                loading="lazy"
              />

              {/* Rating Badge */}
              {!isMobile && (
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white/20 p-2 sm:p-3 backdrop-blur-md rounded-xl shadow-lg z-20 animate-float">
                  <div className="flex items-center gap-1 sm:gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 fill-yellow-300"
                      />
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs mt-0.5">4.9 Rating</p>
                </div>
              )}

              {/* Downloads Badge */}
              {!isMobile && (
                <div
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white/20 p-2 sm:p-3 backdrop-blur-md rounded-xl shadow-lg z-20 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <p className="text-[10px] sm:text-xs font-bold">
                    10K+ Downloads
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
