import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Clock, Building, Phone, Smartphone, Bluetooth } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const DeliveryFlow = () => {
  const [step, setStep] = useState(1);
  const [isDoorLockExpanded, setIsDoorLockExpanded] = useState(false);
  const [swipeProgress, setSwipeProgress] = useState(0);

  useEffect(() => {
    // 카카오 맵 초기화
    const container = document.getElementById('kakao-map');
    if (container && window.kakao) {
      const options = {
        center: new window.kakao.maps.LatLng(37.498095, 127.027610),
        level: 3
      };
      const kakaoMap = new window.kakao.maps.Map(container, options);

      // 마커 추가
      const markerPosition = new window.kakao.maps.LatLng(37.498095, 127.027610);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      });
      marker.setMap(kakaoMap);
    }
  }, []);

  // 스와이프 핸들러
  const swipeHandlers = useSwipeable({
    onSwiping: (e) => {
      if (e.deltaX > 0) {
        const progress = Math.min(100, (e.deltaX / 200) * 100);
        setSwipeProgress(progress);
      }
    },
    onSwiped: (e) => {
      if (swipeProgress >= 100) {
        setStep(step + 1);
      }
      setSwipeProgress(0);
    },
    trackMouse: true,
    preventDefaultTouchmoveEvent: true
  });

  return (
    <div className="h-screen w-1/2 mx-auto relative">
      {/* 지도 영역 - z-index 조정 */}
      <div id="kakao-map" className="h-full w-full absolute top-0 left-0 z-0">
        {/* 지도가 여기에 렌더링됨 */}
      </div>

      {/* UI 요소들을 감싸는 컨테이너 */}
      <div className="relative h-full z-10">
        {/* 거절 버튼 */}
        <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50">
          <span className="text-sm">× 거절</span>
        </div>

        {/* 배달 정보 카드 */}
        {step === 1 && (
          <div className="absolute bottom-32 left-4 right-4 bg-white rounded-xl p-4 shadow-lg">
            <div className="text-lg font-medium">엔터앤스프레드롤 롯데백화점...</div>
            <div className="text-sm text-gray-500">≈ 1.8km</div>
            <div className="mt-2">
              <div className="text-lg font-bold">예상 3,100원</div>
              <div className="text-sm text-gray-500">예상 누적 수입 3,100원</div>
            </div>
          </div>
        )}

        {/* 주문 상세 패널 */}
        {step === 3 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg z-20">
            <div className="p-4">
              <div className="mb-4">
                <div className="text-purple-600 font-bold">0E4HR0</div>
                <div className="mt-1">홍삼도시락 (150g) x 1개</div>
                <div className="text-right mt-2 font-bold">14,400원</div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center" onClick={() => setIsDoorLockExpanded(!isDoorLockExpanded)}>
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-teal-400" />
                    <span className="font-medium">공동현관 출입</span>
                  </div>
                  <span className="text-teal-400">{isDoorLockExpanded ? '접기' : '펼치기'}</span>
                </div>

                {isDoorLockExpanded && (
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <Smartphone className="h-6 w-6 mx-auto mb-2 text-teal-400" />
                        <div className="font-medium">NFC</div>
                        <div className="text-xs text-gray-500">태그하여 출입</div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4 text-center">
                        <Bluetooth className="h-6 w-6 mx-auto mb-2 text-teal-400" />
                        <div className="font-medium">블루투스</div>
                        <div className="text-xs text-gray-500">자동 감지</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-500">도어락 코드</div>
                        <div className="text-2xl font-bold font-mono mt-1">937482</div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-teal-400" />
                        <span className="text-sm text-gray-600">남은 시간</span>
                      </div>
                      <span className="text-sm font-medium">2일 23시간 52분</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 p-3 border rounded-xl">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">파트너 지원센터와 전화</span>
              </div>
            </div>

            <div className="p-4 bg-green-500">
              <button 
                className="w-full text-white py-4 text-center font-medium"
                onClick={() => setStep(4)}
              >
                픽업 완료
              </button>
            </div>
          </div>
        )}

        {/* 스와이프 버튼 */}
        {step === 1 && (
          <div className="absolute bottom-0 left-0 right-0 z-20" {...swipeHandlers}>
            <div className="relative h-16 bg-purple-900">
              <div 
                className="absolute top-0 left-0 h-full bg-purple-700 flex items-center justify-center"
                style={{ width: `${swipeProgress}%`, transition: 'width 0.1s' }}
              >
                <span className="text-white">밀어서 배달 수락</span>
              </div>
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-white pointer-events-none">
                밀어서 배달 수락
              </div>
            </div>
          </div>
        )}

        {/* 매장 도착 버튼 */}
        {step === 2 && (
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <button
              className="w-full bg-green-500 text-white py-4"
              onClick={() => setStep(3)}
            >
              매장 도착
            </button>
          </div>
        )}

        {/* 배달 완료 버튼 */}
        {step === 4 && (
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <button
              className="w-full bg-green-500 text-white py-4"
              onClick={() => setStep(5)}
            >
              밀어서 배달 완료
            </button>
          </div>
        )}

        {/* 확인 화면 */}
        {step === 5 && (
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg z-20">
            <div className="p-4 text-center">
              <div className="font-medium mb-4">배달 완료</div>
              <button 
                className="w-full bg-green-500 text-white py-4 rounded-lg"
                onClick={() => setStep(1)}
              >
                확인
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryFlow;