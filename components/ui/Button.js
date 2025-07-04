import React from 'react';

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  // Basic styling; can be extended with variants
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  // Example variants (can be expanded)
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-700",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "underline-offset-4 hover:underline text-primary",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };

  const variantClass = variants[variant] || variants.default;
  const sizeClass = sizes[size] || sizes.default;

  return (
    <Comp
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className || ''}`}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

// Slot component to allow passing props to a child component
const Slot = React.forwardRef((props, ref) => {
  const { children, ...slotProps } = props;
  if (React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...slotProps,
      ...children.props,
      ref: ref ? mergeRefs([ref, children.ref]) : children.ref,
      className: `${slotProps.className || ''} ${children.props.className || ''}`.trim() || undefined,
    });
  }
  return null;
});

Slot.displayName = "Slot";

// Helper to merge refs
function mergeRefs(refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

export { Button }; 