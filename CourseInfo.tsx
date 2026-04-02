import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X } from 'lucide-react';

interface NotificationBarProps {
  user: { name: string } | null;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ user }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-indigo-600 text-white py-3 px-4 shadow-md sticky top-0 z-50 flex items-center justify-between"
      >
        <div className="flex items-center gap-3 max-w-7xl mx-auto w-full">
          <Bell className="w-5 h-5 animate-bounce" />
          <p className="text-sm md:text-base font-medium">
            {user 
              ? `Chào ${user.name}, bạn đã sẵn sàng bắt đầu bài học hôm nay chưa?`
              : "Đăng nhập để lưu tiến độ học tập!"}
          </p>
          {!user && (
            <button className="ml-4 bg-white text-indigo-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-indigo-50 transition-colors">
              Đăng nhập
            </button>
          )}
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="hover:bg-indigo-700 p-1 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
