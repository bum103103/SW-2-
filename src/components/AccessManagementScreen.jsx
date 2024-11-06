// AccessManagementScreen.jsx
import React, { useState } from 'react';
import { Smartphone, Bluetooth, Lock, Clock, Building, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 토글 스위치 컴포넌트
const ToggleSwitch = ({ isOn, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      type="button"
      className={`w-12 h-6 rounded-full relative focus:outline-none transition-colors duration-300
        ${isOn ? 'bg-teal-400' : 'bg-gray-200'}`}
    >
      <div 
        className={`
          absolute w-4 h-4 bg-white rounded-full top-1
          transition-transform duration-300 ease-in-out
          ${isOn ? 'left-7' : 'left-1'}
        `}
      />
    </button>
  );
};

const AccessManagementScreen = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('current');
  
  // 각 출입 수단의 상태 관리
  const [nfcAccess, setNfcAccess] = useState(false);
  const [bluetoothAccess, setBluetoothAccess] = useState(false);
  const [doorlockAccess, setDoorlockAccess] = useState(false);
  const [duplicateLimit, setDuplicateLimit] = useState(true);

  // 토글 상태 변경 시 서버와 통신하는 함수들
  const handleNfcToggle = async () => {
    try {
      // const response = await fetch('/api/access/nfc', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ enabled: !nfcAccess }),
      // });
      // if (response.ok) {
      //   setNfcAccess(prev => !prev);
      // }
      setNfcAccess(prev => !prev);
      console.log('NFC 상태 변경:', !nfcAccess);
    } catch (error) {
      console.error('NFC 토글 에러:', error);
    }
  };

  const handleBluetoothToggle = async () => {
    try {
      // const response = await fetch('/api/access/bluetooth', { ... });
      setBluetoothAccess(prev => !prev);
      console.log('블루투스 상태 변경:', !bluetoothAccess);
    } catch (error) {
      console.error('블루투스 토글 에러:', error);
    }
  };

  const handleDoorlockToggle = async () => {
    try {
      // const response = await fetch('/api/access/doorlock', { ... });
      setDoorlockAccess(prev => !prev);
      console.log('도어락 상태 변경:', !doorlockAccess);
    } catch (error) {
      console.error('도어락 토글 에러:', error);
    }
  };

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
    <div className="h-screen w-full max-w-md mx-auto bg-gray-50 flex flex-col">
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
                  <ToggleSwitch 
                    isOn={nfcAccess} 
                    onToggle={handleNfcToggle}
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bluetooth className="h-5 w-5 text-teal-400" />
                    <div>
                      <div className="font-medium">블루투스 출입</div>
                      <div className="text-sm text-gray-500">자동 감지</div>
                    </div>
                  </div>
                  <ToggleSwitch 
                    isOn={bluetoothAccess}
                    onToggle={handleBluetoothToggle}
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-teal-400" />
                    <div>
                      <div className="font-medium">도어락 코드</div>
                      <div className="text-sm text-gray-500">비밀번호 발급</div>
                    </div>
                  </div>
                  <ToggleSwitch 
                    isOn={doorlockAccess}
                    onToggle={handleDoorlockToggle}
                  />
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
                  <ToggleSwitch 
                    isOn={duplicateLimit}
                    onToggle={() => setDuplicateLimit(prev => !prev)}
                  />
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