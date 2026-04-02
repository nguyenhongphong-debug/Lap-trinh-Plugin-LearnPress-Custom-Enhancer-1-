import React from 'react';
import { MOCK_COURSES } from '../data/courses';
import { BookOpen, Clock, CheckCircle, Lock, PlayCircle } from 'lucide-react';

interface CourseInfoProps {
  id: string;
}

export const CourseInfo: React.FC<CourseInfoProps> = ({ id }) => {
  const course = MOCK_COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
        Không tìm thấy khóa học với ID: {id}
      </div>
    );
  }

  const getStatusDisplay = () => {
    if (course.completed) {
      return {
        label: "Đã hoàn thành",
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        bg: "bg-green-50",
        text: "text-green-700"
      };
    }
    if (course.enrolled) {
      return {
        label: "Đã đăng ký",
        icon: <PlayCircle className="w-5 h-5 text-blue-500" />,
        bg: "bg-blue-50",
        text: "text-blue-700"
      };
    }
    return {
      label: "Chưa đăng ký",
      icon: <Lock className="w-5 h-5 text-gray-400" />,
      bg: "bg-gray-50",
      text: "text-gray-600"
    };
  };

  const status = getStatusDisplay();

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-indigo-600 rounded-full"></span>
        Thống kê khóa học
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <BookOpen className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Bài học</p>
            <p className="text-base font-bold text-gray-900">{course.lessonsCount} bài</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
          <div className="p-2 bg-white rounded-lg shadow-sm">
            <Clock className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Thời lượng</p>
            <p className="text-base font-bold text-gray-900">{course.duration}</p>
          </div>
        </div>

        <div className={`flex items-center gap-3 p-3 rounded-xl ${status.bg}`}>
          <div className="p-2 bg-white rounded-lg shadow-sm">
            {status.icon}
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase font-semibold">Trạng thái</p>
            <p className={`text-base font-bold ${status.text}`}>{status.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
