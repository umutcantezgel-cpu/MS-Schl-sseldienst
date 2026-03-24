import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const containerVariants = cva(
  "mx-auto w-full px-4 sm:px-6 lg:px-8",
  {
    variants: {
      variant: {
        narrow: "max-w-2xl",
        standard: "max-w-5xl",
        wide: "max-w-6xl",
        xl: "max-w-7xl",
        full: "max-w-[1440px]",
      },
    },
    defaultVariants: {
      variant: "standard",
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

export { Container, containerVariants };
