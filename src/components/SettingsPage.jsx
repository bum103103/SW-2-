// SettingsPage.jsx
import React from 'react';
import { ArrowLeft, Home, ShoppingBag, Heart, Menu, Smile } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-md mx-auto h-screen bg-gray-50 flex flex-col">
      {/* 헤더 */}
      <div className="bg-white p-4 flex items-center">
        <ArrowLeft 
          className="w-6 h-6 cursor-pointer" 
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lg font-medium ml-4">환경설정</h1>
      </div>

      {/* 로그인 섹션 */}
      <div className="mt-4">
        <div className="px-4 py-2 text-sm text-gray-500">로그인</div>
        <div className="bg-white">
          <div className="px-4 py-4 flex justify-between items-center">
            <div>
              <div className="font-medium">여러 기기 로그인</div>
              <div className="text-sm text-gray-500 mt-1">
                최대 5개의 휴대폰에 동시 로그인 할 수 있어요
              </div>
            </div>
            <div className="w-12 h-6 bg-teal-400 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 주문 섹션 */}
      <div className="mt-4">
        <div className="px-4 py-2 text-sm text-gray-500">주문</div>
        <div className="bg-white">
          <div className="px-4 py-4 border-b flex justify-between items-center">
            <div>
              <div className="font-medium">안심번호/안심콜 항상 사용</div>
              <div className="text-sm text-gray-500 mt-1">
                라이더님이나 가게에 내 전화번호가 보이지 않아요
              </div>
            </div>
            <div className="w-12 h-6 bg-teal-400 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="px-4 py-4 border-b flex justify-between items-center">
            <div>
              <div className="font-medium">가게번호 자동 저장</div>
              <div className="text-sm text-gray-500 mt-1">
                전화 주문 시 연락처에 가게번호를 저장해요
              </div>
            </div>
            <div className="w-12 h-6 bg-gray-200 rounded-full relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="px-4 py-4 flex justify-between items-center">
            <div>
              <div className="font-medium">가게 주문 횟수 제공</div>
              <div className="text-sm text-gray-500 mt-1">
                최근 6개월 주문 횟수를 가게에서 볼 수 있어요
              </div>
            </div>
            <div className="w-12 h-6 bg-teal-400 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 서비스 알림 섹션 */}
      <div className="mt-4">
        <div className="px-4 py-2 text-sm text-gray-500">서비스 알림</div>
        <div className="bg-white">
          <div className="px-4 py-4 border-b flex justify-between items-center">
            <div>
              <div className="font-medium">배달현황 알림</div>
              <div className="text-sm text-gray-500 mt-1">
                배달 상태를 실시간으로 알려드려요
              </div>
            </div>
            <div className="w-12 h-6 bg-teal-400 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          {/* 새로 추가된 도어락 설정 */}
          <div className="px-4 py-4 flex justify-between items-center relative">
            <div>
              <div className="font-medium">공유 도어락 1회용 비밀번호 발급</div>
              <div className="text-sm text-gray-500 mt-1">
                고객님의 소중한 비밀번호를 지켜드려요
              </div>
            </div>
            <div className="w-12 h-6 bg-teal-400 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
            {/* 튜토리얼 강조 효과 */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-300 rounded-full animate-ping opacity-30" />
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-300 rounded-full animate-ping opacity-40" />
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-yellow-300 rounded-full animate-ping opacity-50" />
          </div>
        </div>
      </div>

      {/* 하단 네비게이션 */}
      <div className="mt-auto bg-white border-t">
        <div className="grid grid-cols-5 py-2">
          <button className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-gray-500" />
            <span className="text-xs text-gray-500">홈</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <ShoppingBag className="w-6 h-6 text-gray-500" />
            <span className="text-xs text-gray-500">장보기·선물</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Heart className="w-6 h-6 text-gray-500" />
            <span className="text-xs text-gray-500">찜</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Menu className="w-6 h-6 text-gray-500" />
            <span className="text-xs text-gray-500">주문내역</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Smile className="w-6 h-6 text-teal-400" />
            <span className="text-xs text-teal-400">마이배민</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;