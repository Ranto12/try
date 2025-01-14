"use client";

const ButtonShare = () => {
  const handleShare = async () => {
    const imgUrl =
      "https://storage.googleapis.com/crm-go/REVAMP-LOYALTY/714c1700-288e-41d5-9dcf-e9e215bdf496.jpg";

    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], "event-image.jpg", { type: blob.type });

      if (navigator.share) {
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: `Lihat detail event kami di ${process.env.NEXT_PUBLIC_URL}/event/detail/1`,
            text: `Lihat detail event kami di ${process.env.NEXT_PUBLIC_URL}/event/detail/1`,
            url: `Lihat detail event kami di ${process.env.NEXT_PUBLIC_URL}/event/detail/1`,
          });
        } else {
          await navigator.share({
            title: `Lihat detail event kami di ${process.env.NEXT_PUBLIC_URL}/event/detail/1`,
            text: `Lihat detail event kami di ${process.env.NEXT_PUBLIC_URL}/event/detail/1`,
            url: `Lihat detail event kami di ${process.env.NEXT_PUBLIC_URL}/event/detail/1`,
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
