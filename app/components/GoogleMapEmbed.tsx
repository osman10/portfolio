import React from 'react';

interface GoogleMapEmbedProps {
  height?: string;
  className?: string;
}

export default function GoogleMapEmbed({
  height = "450px",
  className = "",
}: GoogleMapEmbedProps) {
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3646.6350374658814!2d88.99180484773275!3d23.937974372635573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1794197710601!5m2!1sen!2sbd";

  return (
    <div className={`w-full overflow-hidden rounded-lg shadow-md ${className}`} style={{ height }}>
      <iframe
        title="Google Map Location"
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}