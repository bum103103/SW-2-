import React from 'react';
import { Search, ChevronDown, QrCode, RefreshCw, Lock } from 'lucide-react';

const BaeminMain = () => {
  return (
    <div className="w-1/2 mx-auto bg-gray-50 h-screen flex flex-col">
      {/* 상단 헤더 */}
      <div className="bg-teal-400 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center text-white">
            <span className="font-medium">송파구 잠실동</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </div>
          <div className="flex gap-2">
            <RefreshCw className="h-5 w-5 text-white" />
            <QrCode className="h-5 w-5 text-white" />
          </div>
        </div>
        {/* 검색바 */}
        <div className="bg-white rounded-md flex items-center px-3 py-2">
          <Search className="h-5 w-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="찾는 내용을 검색해보세요"
            className="w-full text-sm outline-none"
          />
        </div>
      </div>

      {/* 메인 메뉴 그리드 */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold mb-1">배달</h3>
              <p className="text-sm text-gray-500">세상은 넓고 맛집은 많다</p>
            </div>
            <img src="/api/placeholder/40/40" alt="배달 아이콘" className="w-10 h-10" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold mb-1">배민1</h3>
              <p className="text-sm text-gray-500">한 번에 한 집만</p>
            </div>
            <img src="/api/placeholder/40/40" alt="배민1 아이콘" className="w-10 h-10" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold mb-1">포장</h3>
              <p className="text-sm text-gray-500">가까운 가게는 직접 가보자</p>
            </div>
            <img src="/api/placeholder/40/40" alt="포장 아이콘" className="w-10 h-10" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold mb-1">B마트</h3>
              <p className="text-sm text-gray-500">장보기도 배달가능</p>
            </div>
            <img src="/api/placeholder/40/40" alt="B마트 아이콘" className="w-10 h-10" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold mb-1">스토어</h3>
              <p className="text-sm text-gray-500">배민스토어</p>
            </div>
            <img src="/api/placeholder/40/40" alt="스토어 아이콘" className="w-10 h-10" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold mb-1">선물하기</h3>
              <p className="text-sm text-gray-500">마음을 선물하세요</p>
            </div>
            <img src="/api/placeholder/40/40" alt="선물하기 아이콘" className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* 하단 도어락 버튼 */}
      <div className="mt-auto p-4 border-t bg-white">
        <div className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-teal-400" />
              <span className="text-sm font-medium">도어락 출입</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">배달기사님을 위한 공동현관 출입 서비스</p>
          </div>
          <button className="bg-teal-400 text-white px-3 py-1 rounded-full text-sm">
            이용하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaeminMain;