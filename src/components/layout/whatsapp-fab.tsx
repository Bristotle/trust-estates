"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { waLink } from "@/lib/utils";

export function WhatsAppFab() {
  return (
    <motion.a
      href={waLink("Hello Estates Trust, I'd like to enquire about a property.")}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 rounded-full bg-[#25D366] pl-3 pr-4 py-3 text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.7)] hover:bg-[#1ebe5b] transition"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden" />
      <MessageCircle className="size-5 relative" />
      <span className="relative text-sm font-semibold">Chat with us</span>
    </motion.a>
  );
}
