import React from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const { id } = useParams();
  const decodedUrl = decodeURIComponent(id);

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <iframe
        src={decodedUrl}
        title="News Article"
        width="100%"
        height="700"
        className="border rounded-lg"
      />
    </section>
  );
}
