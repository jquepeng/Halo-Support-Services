import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoadImage({ src, alt, className }: { src: string; alt: string, className?: string }){
  const [loading, setLoading] = useState(true);

  return (
    <div className={`${className}`}>
      {/* Spinner */}
      {loading && (
        <Loader2 className="absolute w-6 h-6 text-muted-foreground animate-spin" />
      )}

      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
