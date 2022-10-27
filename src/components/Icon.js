import React from "react";

export default function Icon({
  name,
  size = 20,
  className = "",
  innerRef = null,
}) {
  return (
    <svg
      className={`fill-current ${className}`}
      width={size.toString() + "px"}
      height={size.toString() + "px"}
      ref={innerRef}
    >
      <use xlinkHref={`/icons/solid.svg#${name}`} />
    </svg>
  );
}
