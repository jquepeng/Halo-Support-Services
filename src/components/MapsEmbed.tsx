import {cn} from "@/lib/utils.ts";

export default function MapEmbed({
  query = 'aegis gym',
  zoom = 14,
  className = ''
}) {
  const src = `https://maps.google.com/maps?width=600&height=400&hl=en&q=${encodeURIComponent(query)}&t=&z=${zoom}&ie=UTF8&iwloc=B&output=embed`;

  return (
    <div className={cn(`relative w-full`, className)} aria-hidden={false}>
      <iframe
        title={`map-${query}`}
        src={src}
        className={`absolute inset-0 w-full h-full border-0`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Accessible fallback and attribution */}
      <div className="mt-2 text-sm text-gray-600">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Open {query} in Google Maps
        </a>
      </div>
    </div>
  );
}
