import React, { useState } from 'react';
import { Smartphone, Bluetooth, Lock, Clock, Building, Plus, Send, History, UserCheck, AlertTriangle } from 'lucide-react';

const AccessManagementScreen = () => {
  const [selectedTab, setSelectedTab] = useState('current');

  const currentAccess = [
    {
      id: 1,
      type: "배달기사",
      issuedAt: "2024-11-05 14:30",
      expireAt: "2024-11-05 15:00",
      accessType: "NFC",
      status: "active"
    },
    {
      id: 2,
      type: "방문자",
      issuedAt: "2024-11-05 13:15",
      expireAt: "2024-11-05 14:15",
      accessType: "도어락 코드",
      status: "expired"
    }
  ];

  return (
    <div className="h-screen w-1/2 mx-auto bg-gray-50 flex flex-col">
      {/* 상단 탭 */}
      <div className="bg-white px-4 pt-3 pb-2 border-b">
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          <button 
            className={`flex-1 py-2 rounded-md text-sm font-medium ${
              selectedTab === 'current' 
                ? 'bg-white shadow' 
                : 'text-gray-500'
            }`}
            onClick={() => setSelectedTab('current')}
          >
            출입 관리
          </button>
          <button 
            className={`flex-1 py-2 rounded-md text-sm font-medium ${
              selectedTab === 'settings' 
                ? 'bg-white shadow' 
                : 'text-gray-500'
            }`}
            onClick={() => setSelectedTab('settings')}
          >
            설정
          </button>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto">
        {selectedTab === 'current' ? (
          <>
            {/* 빠른 액션 버튼들 */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button className="bg-teal-400 text-white p-4 rounded-xl flex flex-col items-center">
                <Plus className="h-6 w-6 mb-2" />
                <span className="font-medium">새 출입권한 발급</span>
              </button>
              <button className="bg-white border-2 border-teal-400 text-teal-400 p-4 rounded-xl flex flex-col items-center">
                <UserCheck className="h-6 w-6 mb-2" />
                <span className="font-medium">허용된 사용자</span>
              </button>
            </div>

            {/* 출입 수단 관리 */}
            <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
              <h3 className="font-medium mb-4">출입 수단 설정</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-teal-400" />
                    <div>
                      <div className="font-medium">NFC 출입</div>
                      <div className="text-sm text-gray-500">태그하여 출입</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-teal-400 text-white rounded-full text-sm">
                    관리
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bluetooth className="h-5 w-5 text-teal-400" />
                    <div>
                      <div className="font-medium">블루투스 출입</div>
                      <div className="text-sm text-gray-500">자동 감지</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-teal-400 text-white rounded-full text-sm">
                    설정
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-teal-400" />
                    <div>
                      <div className="font-medium">도어락 코드</div>
                      <div className="text-sm text-gray-500">비밀번호 발급</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-teal-400 text-white rounded-full text-sm">
                    발급
                  </button>
                </div>
              </div>
            </div>

            {/* 현재 발급된 출입권한 */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-medium mb-4">발급된 출입권한</h3>
              <div className="space-y-3">
                {currentAccess.map((access) => (
                  <div key={access.id} className="bg-gray-50 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{access.type}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          access.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {access.status === 'active' ? '활성화' : '만료됨'}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {access.status === 'active' && (
                          <>
                            <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                              <Send className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-500 hover:bg-gray-50 rounded">
                              <History className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 space-y-1">
                      <div>접근 방식: {access.accessType}</div>
                      <div>발급: {access.issuedAt}</div>
                      <div>만료: {access.expireAt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          // 설정 탭
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-medium mb-4">출입 설정</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <div>
                      <div className="font-medium">중복 출입 제한</div>
                      <div className="text-sm text-gray-500">30분 이내 재발급 제한</div>
                    </div>
                  </div>
                  <button className="w-12 h-6 bg-teal-400 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium">유효 시간 설정</div>
                      <div className="text-sm text-gray-500">기본 30분</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm">
                    변경
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-gray-500" />
                    <div>
                      <div className="font-medium">출입 구역 설정</div>
                      <div className="text-sm text-gray-500">공동현관, 주차장</div>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm">
                    관리
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessManagementScreen;