import Image from "next/image"
import config from "@/config"

export default function Logo({ className = "size-7", priority = false }) {
  if (config.brand.logoSrc) {
    return (
      <span className={`relative inline-block overflow-hidden ${className}`}>
        <Image
          src={config.brand.logoSrc}
          alt={`Logo de ${config.app.name}`}
          fill
          sizes="160px"
          className="object-contain"
          priority={priority}
        />
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-primary text-primary-content ${className}`}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-[62%]">
        <path
          d="M3.5 12 H7 L10.5 18 L15.5 6 H20.5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
