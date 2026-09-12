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
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 rounded-full bg-[#25D366] p-3.5 text-forest-950 shadow-[0_12px_40px_-8px_rgba(37,211,102,0.7)] hover:bg-[#1ebe5b] transition sm:py-3 sm:pl-3 sm:pr-4"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden" />
      <MessageCircle className="size-6 relative sm:size-5" />
      <span className="relative hidden text-sm font-semibold sm:inline">Chat with us</span>
    </motion.a>
  );
}
