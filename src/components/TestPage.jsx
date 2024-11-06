import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TestPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto h-screen bg-gray-50 flex flex-col">
      {/* 헤더 */}
      <div className="bg-white p-4 flex items-center">
        <ArrowLeft 
          className="w-6 h-6 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-medium ml-4">테스트 페이지 123</h1>
      </div>

      {/* 콘텐츠 */}
      <div className="mt-4 p-4 bg-white">
        <h2 className="text-xl font-bold">이것은 테스트 페이지입니다</h2>
        <p className="mt-2 text-gray-600">
          라우팅이 제대로 작동하는지 확인하기 위한 페이지입니다.
        </p>
        <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
          <p>현재 경로: /B/123</p>
        </div>
      </div>
    </div>
  );
};

export default TestPage;