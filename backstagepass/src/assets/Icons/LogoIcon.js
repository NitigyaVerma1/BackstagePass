export default function BroadcastIcon({ size = 32, color = "#b07d12" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* center dot */}
      <circle cx="12" cy="12" r="1.5" fill={color} stroke="none" />

      {/* inner waves */}
      <path d="M8.5 9.5a4.5 4.5 0 0 1 7 0" />
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />

      {/* outer waves */}
      <path d="M5.5 7a8 8 0 0 1 13 0" />
      <path d="M5.5 17a8 8 0 0 0 13 0" />
    </svg>
  );
}