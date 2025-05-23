
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  className 
}: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-8 md:mb-12",
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
