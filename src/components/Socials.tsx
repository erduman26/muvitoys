const socials = [
    { name: "Instagram", icon: "📸", link: "https://instagram.com/muvitoys" },
    { name: "TikTok", icon: "🎵", link: "https://tiktok.com/@muvitoys" },
    { name: "WhatsApp", icon: "💬", link: "https://wa.me/905000000000" },
  ];
  
  export default function Socials() {
    return (
      <div className="flex gap-4 mt-2">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.link}
            target="_blank"
            className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-xl active:scale-95 transition"
          >
            {s.icon}
          </a>
        ))}
      </div>
    );
  }
  