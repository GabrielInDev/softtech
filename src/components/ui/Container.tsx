
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div 
      id={id}
      className={cn(
        "w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
