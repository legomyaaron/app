import { useState, useEffect } from "react";
import "@/App.css";
import { Gift, Zap, Award, Star, ChevronRight, Clock } from "lucide-react";

const MONETAG_LINK = "https://otieu.com/4/9790686";

function App() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [showModal, setShowModal] = useState(false);
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    // Show modal after 3 seconds
    const modalTimer = setTimeout(() => setShowModal(true), 3000);
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => {
      clearTimeout(modalTimer);
      clearInterval(timer);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleRewardClick = () => {
    setClicks(prev => prev + 1);
    window.open(MONETAG_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-red-600">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm mb-4 animate-bounce">
            <Zap className="w-4 h-4" fill="currentColor" />
            LIMITED TIME OFFER
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
            🎁 CLAIM YOUR REWARD! 🎁
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-300 font-bold mb-6">
            Get Your Prize NOW - 100% FREE!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-md mx-auto mb-8 bg-black/30 backdrop-blur-sm rounded-2xl p-6 border-4 border-yellow-400">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-semibold">Offer Expires In:</span>
          </div>
          <div className="text-6xl font-bold text-center text-yellow-400">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-12">
          <button
            onClick={handleRewardClick}
            data-testid="main-claim-button"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-110 transition-transform duration-200 animate-pulse"
          >
            <Gift className="w-8 h-8" />
            CLAIM REWARD NOW
            <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
          <p className="text-white mt-4 text-lg">👆 Click Above To Get Your Reward! 👆</p>
        </div>

        {/* Reward Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-transform cursor-pointer" onClick={handleRewardClick} data-testid="reward-card-1">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">$100 Bonus</h3>
            <p className="text-gray-600 mb-4">Instant Cash Reward</p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600" data-testid="claim-bonus-1">
              CLAIM NOW
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-transform cursor-pointer" onClick={handleRewardClick} data-testid="reward-card-2">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-10 h-10 text-white" fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium Gift</h3>
            <p className="text-gray-600 mb-4">Exclusive Prize Pack</p>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-600" data-testid="claim-bonus-2">
              CLAIM NOW
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-2xl transform hover:scale-105 transition-transform cursor-pointer" onClick={handleRewardClick} data-testid="reward-card-3">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Mystery Box</h3>
            <p className="text-gray-600 mb-4">Surprise Reward Inside</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600" data-testid="claim-bonus-3">
              CLAIM NOW
            </button>
          </div>
        </div>

        {/* Features/Benefits */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Why Choose Your Reward?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-white">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">100% Free</h3>
                <p className="text-white/80">No payment required, completely free rewards</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Instant Access</h3>
                <p className="text-white/80">Get your reward immediately after claiming</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">No Strings Attached</h3>
                <p className="text-white/80">Simple one-click claim process</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Limited Time Only</h3>
                <p className="text-white/80">Don't miss out on this exclusive offer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mb-8">
          <button
            onClick={handleRewardClick}
            data-testid="bottom-claim-button"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-110 transition-transform duration-200"
          >
            <Zap className="w-8 h-8" fill="currentColor" />
            GET MY REWARD NOW
            <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-300">50,000+</div>
            <div className="text-white text-sm">Rewards Claimed</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-300">$5M+</div>
            <div className="text-white text-sm">Total Rewards Given</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-300">4.9★</div>
            <div className="text-white text-sm">User Rating</div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-bounce" onClick={(e) => e.stopPropagation()} data-testid="reward-modal">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
              data-testid="close-modal"
            >
              ×
            </button>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
              <p className="text-xl mb-6 text-gray-700">You've been selected for a <span className="text-green-600 font-bold">SPECIAL REWARD!</span></p>
              <button
                onClick={handleRewardClick}
                data-testid="modal-claim-button"
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition-transform"
              >
                CLAIM MY REWARD NOW
              </button>
              <p className="text-sm text-gray-500 mt-4">⏰ Limited time offer - Claim before it expires!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
