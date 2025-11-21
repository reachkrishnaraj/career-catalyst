import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import tbdHealthHomepage from "@/assets/work_artifact/tbd_health/tbd_health_homepage.png";
import tbdHealthKit from "@/assets/work_artifact/tbd_health/tbd_health_kit.jpg";
import tbdHealthKit2 from "@/assets/work_artifact/tbd_health/tbd_health_kit2.webp";
import tbdHealthClinic from "@/assets/work_artifact/tbd_health/tbd_las_vegas_clinic_front.jpg";

const TBDHealthCarousel = () => {
  const images = [
    { src: tbdHealthHomepage, alt: "TBD Health Platform Homepage" },
    { src: tbdHealthKit, alt: "TBD Health Test Kit" },
    { src: tbdHealthKit2, alt: "TBD Health Test Kit Package" },
    { src: tbdHealthClinic, alt: "TBD Health Las Vegas Clinic" },
  ];

  return (
    <div className="my-8 animate-fade-in">
      <h4 className="text-lg font-semibold text-foreground mb-4 text-center">
        TBD Health Platform & Products
      </h4>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default TBDHealthCarousel;
