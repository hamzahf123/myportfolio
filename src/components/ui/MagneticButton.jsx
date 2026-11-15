import React, { useRef } from "react";

/**
 * Button / link that drifts toward the cursor. Mouse only; touch and
 * keyboard users get the plain button.
 */
const MagneticButton = ({ href, children, className = "btn-gold", strength = 0.28, ...rest }) => {
  const ref = useRef(null);
  const inner = useRef(null);
  const Tag = href ? "a" : "button";

  const move = (e) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    if (inner.current) inner.current.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0)`;
  };

  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
    if (inner.current) inner.current.style.transform = "";
  };

  return (
    <Tag
      ref={ref}
      href={href}
      onPointerMove={move}
      onPointerLeave={leave}
      className={className}
      {...rest}
    >
      <span
        ref={inner}
        className="relative z-10 inline-block transition-transform duration-500 ease-silk"
      >
        {children}
      </span>
    </Tag>
  );
};

export default MagneticButton;
