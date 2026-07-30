"use client";

import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useDirection } from "@/components/providers";

type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];
type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1];

interface CarouselContextValue {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
  selectedIndex: number;
  scrollSnaps: number[];
  scrollTo: (index: number) => void;
}

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a <Carousel>.");
  return context;
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

export function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: CarouselProps) {
  const { direction: writingDirection } = useDirection();

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
      // Embla scrolls in physical space; without this, "next" moves the wrong
      // way in an RTL layout.
      direction: orientation === "horizontal" ? writingDirection : undefined,
    },
    plugins,
  );

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = React.useCallback((embla: CarouselApi) => {
    if (!embla) return;
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
    setSelectedIndex(embla.selectedScrollSnap());
  }, []);

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);
  const scrollTo = React.useCallback((i: number) => api?.scrollTo(i), [api]);

  React.useEffect(() => {
    if (!api) return;
    setApi?.(api);
    setScrollSnaps(api.scrollSnapList());
    onSelect(api);
    api.on("reInit", onSelect).on("select", onSelect);
    return () => {
      api.off("reInit", onSelect).off("select", onSelect);
    };
  }, [api, onSelect, setApi]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    // Arrow keys map to previous/next, which Embla has already resolved
    // against the writing direction — so no branching is needed here.
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      writingDirection === "rtl" ? scrollNext() : scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      writingDirection === "rtl" ? scrollPrev() : scrollNext();
    }
  }

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
        orientation,
        selectedIndex,
        scrollSnaps,
        scrollTo,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { carouselRef, orientation } = useCarousel();
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ms-4" : "-mt-4 flex-col",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export function CarouselItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const { orientation } = useCarousel();
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "ps-4" : "pt-4",
        className,
      )}
      {...props}
    />
  );
}

export function CarouselPrevious({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev, orientation } = useCarousel();
  return (
    <Button
      variant="outline"
      size="icon"
      shape="pill"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      className={cn(
        "absolute",
        orientation === "horizontal"
          ? "-start-4 top-1/2 -translate-y-1/2"
          : "-top-4 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
        className,
      )}
      {...props}
    >
      <ArrowLeft className="rtl-flip" />
    </Button>
  );
}

export function CarouselNext({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext, orientation } = useCarousel();
  return (
    <Button
      variant="outline"
      size="icon"
      shape="pill"
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      className={cn(
        "absolute",
        orientation === "horizontal"
          ? "-end-4 top-1/2 -translate-y-1/2"
          : "-bottom-4 start-1/2 -translate-x-1/2 rtl:translate-x-1/2",
        className,
      )}
      {...props}
    >
      <ArrowRight className="rtl-flip" />
    </Button>
  );
}

/** Slide indicators. */
export function CarouselDots({ className }: { className?: string }) {
  const { scrollSnaps, selectedIndex, scrollTo } = useCarousel();
  return (
    <div className={cn("flex items-center justify-center gap-1.5", className)}>
      {scrollSnaps.map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => scrollTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === selectedIndex}
          className={cn(
            "h-1.5 rounded-full transition-all duration-200",
            "outline-none focus-visible:ring-2 focus-visible:ring-ring",
            i === selectedIndex ? "w-4 bg-primary" : "w-1.5 bg-border",
          )}
        />
      ))}
    </div>
  );
}

export type { CarouselApi };
