interface BotanicalProps {
  className?: string;
  variant?: 'leaf' | 'branch' | 'sprig';
}

export function Botanical({ className = '', variant = 'leaf' }: BotanicalProps) {
  if (variant === 'branch') {
    return (
      <svg
        className={className}
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M5 20 Q 40 20, 75 20" stroke="#B9C5B0" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="20" cy="16" rx="7" ry="3.5" fill="#B9C5B0" opacity="0.6" transform="rotate(-25 20 16)" />
        <ellipse cx="20" cy="24" rx="7" ry="3.5" fill="#B9C5B0" opacity="0.4" transform="rotate(25 20 24)" />
        <ellipse cx="40" cy="15" rx="7" ry="3.5" fill="#B9C5B0" opacity="0.5" transform="rotate(-20 40 15)" />
        <ellipse cx="40" cy="25" rx="7" ry="3.5" fill="#B9C5B0" opacity="0.5" transform="rotate(20 40 25)" />
        <ellipse cx="60" cy="14" rx="6" ry="3" fill="#B9C5B0" opacity="0.45" transform="rotate(-15 60 14)" />
        <ellipse cx="60" cy="26" rx="6" ry="3" fill="#B9C5B0" opacity="0.45" transform="rotate(15 60 26)" />
      </svg>
    );
  }

  if (variant === 'sprig') {
    return (
      <svg
        className={className}
        viewBox="0 0 40 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M20 80 Q 20 50, 20 15" stroke="#B9C5B0" strokeWidth="1" strokeLinecap="round" />
        <ellipse cx="13" cy="55" rx="5" ry="9" fill="#B9C5B0" opacity="0.5" transform="rotate(-35 13 55)" />
        <ellipse cx="27" cy="45" rx="5" ry="9" fill="#B9C5B0" opacity="0.5" transform="rotate(35 27 45)" />
        <ellipse cx="14" cy="35" rx="4.5" ry="8" fill="#B9C5B0" opacity="0.45" transform="rotate(-40 14 35)" />
        <ellipse cx="26" cy="25" rx="4.5" ry="8" fill="#B9C5B0" opacity="0.45" transform="rotate(40 26 25)" />
        <circle cx="20" cy="12" r="3" fill="#EBCFD0" opacity="0.7" />
        <circle cx="16" cy="16" r="2" fill="#EBCFD0" opacity="0.5" />
        <circle cx="24" cy="15" r="2" fill="#EBCFD0" opacity="0.5" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M40 55 Q 38 35, 40 10" stroke="#B9C5B0" strokeWidth="1" strokeLinecap="round" />
      <ellipse cx="25" cy="30" rx="14" ry="6" fill="#B9C5B0" opacity="0.45" transform="rotate(-25 25 30)" />
      <ellipse cx="55" cy="25" rx="14" ry="6" fill="#B9C5B0" opacity="0.45" transform="rotate(25 55 25)" />
      <ellipse cx="30" cy="18" rx="10" ry="4.5" fill="#B9C5B0" opacity="0.35" transform="rotate(-30 30 18)" />
      <ellipse cx="50" cy="14" rx="10" ry="4.5" fill="#B9C5B0" opacity="0.35" transform="rotate(30 50 14)" />
    </svg>
  );
}
