// MyBaeminPageLogin.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings, MessageCircle, MapPin, ChevronRight, ShoppingBag, Home, Heart, Menu, Smile, User } from 'lucide-react';

const MyBaeminPageLogin = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-md mx-auto h-screen bg-gray-50 flex flex-col">
            {/* 헤더 */}
            <div className="bg-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">마이배민</h1>
                <div className="flex items-center gap-4">
                    <Bell className="w-6 h-6" />
                    <Settings className="w-6 h-6" />
                </div>
            </div>

            {/* 로그인 섹션 */}
            <div className="bg-white px-4 py-4 flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-400" />
                </div>
                <div className="flex-1 relative cursor-pointer" onClick={() => navigate('/login')}>
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg">로그인하고 시작하기</h2>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex gap-4 mt-2">
                        <div className="flex items-center gap-1 text-gray-600">
                            <MessageCircle className="w-4 h-4" />
                            <span>리뷰관리</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>주소관리</span>
                        </div>
                    </div>
                    {/* 강조 효과 */}
                    <div className="absolute left-20 top-1/2 -translate-y-1/2">
                        <div className="w-10 h-10 bg-yellow-300 rounded-full animate-ping opacity-40" />
                    </div>
                </div>
            </div>

           {/* 배민클럽 섹션 */}
           <div className="bg-white mt-2 p-4">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <span className="bg-cyan-100 text-cyan-500 px-2 py-0.5 rounded-sm text-sm">배민클럽★</span>
                        <span className="ml-2">배달팁 혜택</span>
                    </div>
                    <span className="text-gray-400">알아보기 &gt;</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center text-cyan-500">
                    지금 가입하고 배달팁 무료 혜택 받아요
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                        <span className="text-gray-600">혜택 모아보기</span>
                        <p className="text-sm text-gray-400">등급별 혜택까지 한눈에</p>
                    </div>
                    <div className="text-center">
                        <span className="text-gray-600">배민포인트 모으기</span>
                        <p className="text-sm text-gray-400">미션 완료하면 최대 17만원</p>
                    </div>
                </div>
            </div>

            {/* 포인트/쿠폰/선물 섹션 */}
            <div className="bg-white mt-2 p-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                    <span className="inline-block bg-purple-100 p-2 rounded-lg mb-2">
                        <span className="text-lg font-bold">0</span>장
                    </span>
                    <p className="text-sm text-gray-600">쿠폰함</p>
                </div>
                <div className="text-center">
                    <span className="inline-block bg-yellow-100 p-2 rounded-lg mb-2">
                        <span className="text-lg font-bold">0</span>원
                    </span>
                    <p className="text-sm text-gray-600">포인트</p>
                </div>
                <div className="text-center">
                    <span className="inline-block bg-red-100 p-2 rounded-lg mb-2">
                        <span className="text-lg font-bold">0</span>원
                    </span>
                    <p className="text-sm text-gray-600">받은 선물</p>
                </div>
            </div>


            {/* 간편 등록하기 섹션 */}
            <div className="bg-white mt-2 p-4">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-900">배민페이</span>
                    <div className="flex items-center text-gray-400">
                        <span>간편하게 등록하기</span>
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center text-gray-600">
                    배민페이로 빠르고 간편하게 결제해보세요!
                </div>
            </div>

            {/* 배민커넥트 섹션 */}
            <div className="bg-white mt-2 p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-400 font-medium">배민커넥트</span>
                    <button className="px-3 py-1 rounded-full border border-gray-300 text-sm text-gray-600 flex items-center">
                        더 알아보기 <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
                <div className="text-gray-600 text-sm">
                    언제든 걸어서, 자전거로 배달하고 수입 만들어요
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

export default MyBaeminPageLogin;