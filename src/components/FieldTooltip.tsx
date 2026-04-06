import React from "react";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type FieldTooltipProps = {
  /** The explanatory text displayed inside the tooltip */
  content: React.ReactNode;
  /** Optional additional class names for the trigger icon */
  className?: string;
  /** Tooltip side (default: "top") */
  side?: "top" | "right" | "bottom" | "left";
  /** Max width class for the tooltip content box (default: "max-w-xs") */
  maxWidthClass?: string;
};

/**
 * A small "?" icon that shows an explanatory tooltip on hover.
 * Wraps the ShadCN Tooltip primitives with a consistent style.
 *
 * Usage:
 *   <label>Valor do Lance <FieldTooltip content="O lance é um valor adicional..." /></label>
 */
const FieldTooltip: React.FC<FieldTooltipProps> = ({
  content,
  className,
  side = "top",
  maxWidthClass = "max-w-xs",
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label="Mais informações"
          className={cn(
            "inline-flex items-center justify-center w-4 h-4 rounded-full",
            "text-slate-400 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
            "transition-colors duration-150 cursor-help align-middle",
            className,
          )}
        >
          <HelpCircle className="w-4 h-4" aria-hidden="true" />
        </button>
      </TooltipTrigger>
      <TooltipContent
        side={side}
        className={cn(
          maxWidthClass,
          "text-xs leading-relaxed text-popover-foreground",
        )}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
};

export default FieldTooltip;
