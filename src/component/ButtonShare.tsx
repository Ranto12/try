"use client";

const ButtonShare = () => {
  const handleShare = async () => {
    const imgUrl =
      "https://storage.googleapis.com/crm-go/REVAMP-LOYALTY/714c1700-288e-41d5-9dcf-e9e215bdf496.jpg";
    const eventUrl = `${process.env.NEXT_PUBLIC_URL}/event/detail/1`;
    const title = "Lihat detail event kami";
    const text = `${title} di ${eventUrl}`;

    try {
      // Check if sharing to WhatsApp
      const isWhatsApp = navigator.userAgent.toLowerCase().includes("whatsapp");
      if (isWhatsApp) {
        // Share via WhatsApp (title and URL only)
        const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(waUrl, "_blank");
        return;
      }

      // If not WhatsApp, use Web Share API
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], "event-image.jpg", { type: blob.type });

      if (navigator.share) {
        if (
          navigator.canShare &&
          navigator.canShare({ files: [file], text, title, url: eventUrl })
        ) {
          await navigator.share({
            files: [file],
            title,
            text,
            url: eventUrl,
          });
        } else {
          await navigator.share({
            title,
            text,
            url: eventUrl,
          });
        }
      } else {
        alert("Web Share API tidak didukung di perangkat ini.");
      }
    } catch (error) {
      console.error("Error saat mencoba berbagi:", error);
    }
  };

  return <button onClick={handleShare}>Share Event</button>;
};

export default ButtonShare;
