import React, { useState } from 'react';
import { MapPin, ArrowRight, Clock, Building } from 'lucide-react';

const DeliveryFlow = () => {
  const [step, setStep] = useState(1); // 1~5단계
  const [isDoorLockExpanded, setIsDoorLockExpanded] = useState(false);

  // 슬라이드업 패널 컴포넌트
  const SlideUpPanel = ({ children }) => (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg transition-transform duration-300">
      {children}
    </div>
  );

  return (
    <div className="h-screen w-1/2 mx-auto relative">
      {/* 지도 영역 (플레이스홀더) */}
      <div className="h-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">지도 영역</span>
      </div>

      {/* 각 단계별 슬라이드업 패널 */}
      {step === 1 && (
        <SlideUpPanel>
          <div className="p-4">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>예상 배달료</span>
                <span className="font-bold">3,100원</span>
              </div>
              <div className="text-sm text-gray-500">
                엔터앤스프레드롤 롯데백화점... • 1.8km
              </div>
            </div>
            <button 
              className="w-full bg-purple-600 text-white p-4 rounded-lg"
              onClick={() => setStep(2)}
            >
              밀어서 배달 수락
            </button>
          </div>
        </SlideUpPanel>
      )}

      {step === 2 && (
        <SlideUpPanel>
          <div className="p-4">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="font-bold mb-2">매장 도착</h3>
              <div className="text-sm text-gray-600">
                엔터앤스프레드롤 롯데백화점...
              </div>
            </div>
            <button 
              className="w-full bg-green-600 text-white p-4 rounded-lg"
              onClick={() => setStep(3)}
            >
              매장 도착
            </button>
          </div>
        </SlideUpPanel>
      )}

      {step === 3 && (
        <SlideUpPanel>
          <div className="p-4">
            <div className="space-y-3 mb-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="text-purple-600 font-bold">0E4HR0</div>
                <div>홍삼도시락 (150g) x 1개</div>
                <div className="text-right mt-2 text-lg font-bold">
                  14,400원
                </div>
              </div>

              {/* 도어락 섹션 */}
              <div className="bg-white rounded-lg shadow p-4">
                <div 
                  className="flex justify-between items-center"
                  onClick={() => setIsDoorLockExpanded(!isDoorLockExpanded)}
                >
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-teal-400" />
                    <span>공동현관 출입</span>
                  </div>
                  <span className="text-teal-400">
                    {isDoorLockExpanded ? '접기' : '펼치기'}
                  </span>
                </div>
                {isDoorLockExpanded && (
                  <div className="mt-3 space-y-2">
                    {/* 도어락 컨텐츠 */}
                  </div>
                )}
              </div>
            </div>
            <button 
              className="w-full bg-green-600 text-white p-4 rounded-lg"
              onClick={() => setStep(4)}
            >
              픽업 완료
            </button>
          </div>
        </SlideUpPanel>
      )}

      {step === 4 && (
        <SlideUpPanel>
          <div className="p-4">
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="font-bold mb-2">배달 완료</h3>
              <div className="text-sm text-gray-600 mb-2">
                서울 관악구 신림동5가길 31
              </div>
              {/* 도어락 섹션 (접은 상태와 동일) */}
              <div className="flex justify-between items-center pt-2 border-t">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-teal-400" />
                  <span>공동현관 출입</span>
                </div>
                <span className="text-teal-400">펼치기</span>
              </div>
            </div>
            <button 
              className="w-full bg-green-600 text-white p-4 rounded-lg"
              onClick={() => setStep(5)}
            >
              밀어서 배달 완료
            </button>
          </div>
        </SlideUpPanel>
      )}

      {step === 5 && (
        <SlideUpPanel>
          <div className="p-4 text-center">
            <div className="bg-green-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="font-bold mb-2">배달 완료</h3>
            <p className="text-gray-600 mb-4">배달이 완료되었습니다.</p>
            <button 
              className="w-full bg-gray-200 text-gray-700 p-4 rounded-lg"
              onClick={() => setStep(1)}
            >
              확인
            </button>
          </div>
        </SlideUpPanel>
      )}
    </div>
  );
};

export default DeliveryFlow;