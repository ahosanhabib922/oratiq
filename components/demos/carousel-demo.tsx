import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <div className="w-full max-w-sm px-10">
      <Carousel>
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((n) => (
            <CarouselItem key={n}>
              <Card padding="none" className="aspect-video">
                <div className="flex size-full items-center justify-center text-2xl font-medium tnum">
                  {n}
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots className="mt-4" />
      </Carousel>
    </div>
  );
}
