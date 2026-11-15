import React, { useCallback } from "react";

/**
 * A surface whose gold highlight follows the pointer.
 * Pair with the `.spotlight` class (defined in index.css).
 */
const Spotlight = ({ as: Tag = "div", className = "", onPointerMove, children, ...rest }) => {
  const handleMove = useCallback(
    (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
      if (onPointerMove) onPointerMove(e);
    },
    [onPointerMove]
  );

  return (
    <Tag className={`spotlight ${className}`} onPointerMove={handleMove} {...rest}>
      {children}
    </Tag>
  );
};

export default Spotlight;
