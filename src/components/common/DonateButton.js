// src/components/common/DonateButton.js
/*import Link from 'next/link';

export default function DonateButton({ label = "Donate Now", href = "/donate", className = "" }) {
  return (
    <Link href={href}>
      <a
        className={`bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300 inline-block ${className}`}
      >
        {label}
      </a>
    </Link>
  );
}

*/
// src/components/common/DonateButton.js
import { useRouter } from 'next/router'; // For navigation

export default function DonateButton({ label = "Donate Now", href = "/donate" }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)} // Redirect to donation page
      className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300"
    >
      {label}
    </button>
  );
}