'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// --- DATA SQUAD ---
const squadData = [
  { id: 1, pos: { x: 12, y: 28 }, color: '#FF595E', name: 'Ibnu', role: 'Frontend Developer', msg: 'UI/UX dan state management-nya selalu keren. Makasih udah selalu ngasih ide out-of-the-box! Jangan lupa sama kita ya!' },
  { id: 2, pos: { x: 35, y: 25 }, color: '#FFCA3A', name: 'Bunga', role: 'Desainer Magis', msg: 'Tangan dinginmu bikin project kita estetik terus. Keep shining bright!' },
  { id: 3, pos: { x: 55, y: 35 }, color: '#8AC926', name: 'Ciko', role: 'Raja Debugging', msg: 'Penyelamat kodingan error di detik terakhir! Good luck master!' },
  { id: 4, pos: { x: 75, y: 25 }, color: '#1982C4', name: 'Dina', role: 'Mood Maker', msg: 'Ketawamu selalu bikin rapat yang tegang jadi santai.' },
  { id: 5, pos: { x: 88, y: 45 }, color: '#6A4C93', name: 'Eko', role: 'Si Santuy', msg: 'Ilmu kebal deadline-mu harus diwariskan, Ko!' },
  { id: 6, pos: { x: 65, y: 55 }, color: '#FF595E', name: 'Fara', role: 'Copywriter', msg: 'Kata-katamu selalu menyihir para juri. Karir menulismu pasti meroket!' },
  { id: 7, pos: { x: 42, y: 50 }, color: '#FFCA3A', name: 'Gilang', role: 'Tukang Kopi', msg: 'Tanpa kopi buatanmu jam 3 pagi, kita udah tumbang.' },
  { id: 8, pos: { x: 22, y: 60 }, color: '#8AC926', name: 'Hana', role: 'Presentator Kece', msg: 'Panggung presentasi selalu jadi milikmu, Hana!' },
  { id: 9, pos: { x: 15, y: 80 }, color: '#1982C4', name: 'Irfan', role: 'Si Analis', msg: 'Data yang kamu kumpulkan selalu on point.' },
  { id: 10, pos: { x: 40, y: 85 }, color: '#6A4C93', name: 'Jihan', role: 'Ibu Peri Tim', msg: 'Makasih udah cerewet ngingetin kita makan!' },
  { id: 11, pos: { x: 65, y: 75 }, color: '#FF595E', name: 'Kiki', role: 'Audio Master', msg: 'Sound effect bikinanmu epic banget, Ki. Ditunggu karyanya!' },
  { id: 12, pos: { x: 88, y: 85 }, color: '#FFCA3A', name: 'Lian', role: 'Sang Leader', msg: 'Captain, terima kasih sudah menahkodai kapal ini sampai akhir!' },
];

export default function FarewellPage() {
  const [scene, setScene] = useState<'scrapbook' | 'boardgame'>('scrapbook');

  // --- SCRAPBOOK STATE ---
  const [spreadIndex, setSpreadIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPage = () => {
    if (spreadIndex < spreads.length - 1 && !isFlipping) setIsFlipping(true);
  };

  const spreads = [
    {
      left: (
        <div className="w-full h-full p-8 flex flex-col items-center justify-center relative">
          <div className="absolute -top-10 -left-10 w-48 h-64 bg-[#d2b48c] shadow-lg" style={{ clipPath: 'polygon(0% 0%, 100% 5%, 95% 50%, 100% 95%, 0% 100%, 5% 50%)' }}></div>
          <h1 className="text-6xl font-black text-white z-10 text-center leading-tight">SQUAD<br/>2026</h1>
          <p className="text-xl text-gray-400 mt-4 font-serif italic z-10">Our Farewell Journal</p>
        </div>
      ),
      right: (
        <div className="w-full h-full p-8 relative">
          <div className="absolute top-12 left-10 bg-white p-3 pb-8 shadow-xl rotate-[4deg] w-64">
            <img src="https://placehold.co/400x300/FFD166/000?text=Hari+Pertama" alt="Foto" className="w-full h-40 object-cover" />
            <p className="text-center mt-3 font-bold text-gray-700">Awal Cerita Kita</p>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-pink-400/60 backdrop-blur-sm rotate-3"></div>
          </div>
          <p className="absolute bottom-20 left-10 text-white text-2xl rotate-3 font-bold italic opacity-80">"Gak nyangka bakal se-klop ini!"</p>
        </div>
      )
    },
    {
      left: (
        <div className="w-full h-full p-8 relative">
          <div className="absolute top-8 right-8 bg-white p-3 pb-8 shadow-xl rotate-[-3deg] w-64 z-10">
            <img src="https://placehold.co/400x300/EF476F/FFF?text=Kerja+Keras" alt="Foto" className="w-full h-40 object-cover" />
            <p className="text-center mt-3 font-bold text-gray-700">Lembur Tanpa Henti</p>
            <div className="absolute -top-4 -right-4 w-24 h-6 bg-blue-400/60 backdrop-blur-sm rotate-[-10deg]"></div>
          </div>
        </div>
      ),
      right: (
        <div className="w-full h-full p-8 relative flex flex-col justify-center items-center">
          <div className="w-4/5 border-4 border-dashed border-gray-600 p-6 rounded-lg text-center">
            <h2 className="text-3xl font-black text-white mb-4">Banyak Drama,<br/>Banyak Tawa</h2>
            <p className="text-gray-400 italic">Dari yang awalnya canggung, sampai akhirnya jadi keluarga.</p>
          </div>
        </div>
      )
    },
    {
      left: (
        <div className="w-full h-full p-8 relative flex items-center justify-center">
          <div className="grid grid-cols-2 gap-4 w-4/5 rotate-[-2deg]">
            <img src="https://placehold.co/200x200/118AB2/FFF?text=Tim+1" className="w-full rounded shadow-md border-4 border-white" />
            <img src="https://placehold.co/200x200/06D6A0/000?text=Tim+2" className="w-full rounded shadow-md border-4 border-white" />
            <img src="https://placehold.co/200x200/FF9F1C/000?text=Tim+3" className="w-full rounded shadow-md border-4 border-white" />
            <img src="https://placehold.co/200x200/FF595E/FFF?text=Tim+4" className="w-full rounded shadow-md border-4 border-white" />
          </div>
        </div>
      ),
      right: (
        <div className="w-full h-full p-8 relative flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-black text-white mb-6">Perjalanan Belum<br/>Berakhir!</h2>
          <p className="text-gray-300 italic mb-10">Siap melihat jejak perjalanan kita?</p>
          <button 
            onClick={() => setScene('boardgame')}
            className="bg-[#FF9F1C] text-white text-xl font-black py-4 px-8 rounded-xl shadow-[6px_6px_0_#fff] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_#fff] transition-all z-20"
          >
            Mulai Peta Perjalanan 🗺️
          </button>
        </div>
      )
    }
  ];

  // --- MAP & MODAL STATE ---
  const [activePerson, setActivePerson] = useState<any>(null);
  const [letterStage, setLetterStage] = useState<'closed' | 'opening' | 'fullscreen'>('closed');
  const [pathD, setPathD] = useState('');

  // Perhitungan Jalur Setapak Berliku (Bezier Curve)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let d = '';
      squadData.forEach((person, index) => {
        if (index === 0) {
          d += `M ${person.pos.x} ${person.pos.y} `;
        } else {
          const prev = squadData[index - 1];
          const ctrlX = (prev.pos.x + person.pos.x) / 2;
          const ctrlY = prev.pos.y;
          d += `S ${ctrlX} ${ctrlY}, ${person.pos.x} ${person.pos.y} `;
        }
      });
      setPathD(d);
    }
  }, []);

  const openLetter = () => {
    setLetterStage('opening');
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setTimeout(() => setLetterStage('fullscreen'), 800);
    }, 600);
  };

  const closeLetter = () => {
    setActivePerson(null);
    setLetterStage('closed');
  };

  return (
    <main className="w-screen h-screen overflow-hidden bg-[#2c2a27] relative font-sans">
      
      <motion.div
        className="flex w-[200vw] h-[100vh]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 4px)' }}
        initial={{ scale: 1, x: '0vw' }}
        animate={{
          scale: scene === 'scrapbook' ? 1 : [1, 0.5, 0.5, 1],
          x: scene === 'scrapbook' ? '0vw' : ['0vw', '0vw', '-100vw', '-100vw']
        }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1], ease: 'easeInOut' }}
      >
        
        {/* --- SCENE 1: SCRAPBOOK --- */}
        <div className="w-[100vw] h-full flex flex-col items-center justify-center relative px-10">
          <div className="w-full max-w-5xl h-[70vh] flex shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-sm relative z-10" style={{ perspective: '2000px' }}>
            
            <div className="w-1/2 h-full bg-[#1a1a1a] border-r border-dashed border-gray-600 relative overflow-hidden z-0">
              {spreads[spreadIndex].left}
            </div>

            <div className="w-1/2 h-full bg-[#1a1a1a] border-l border-dashed border-gray-700 relative overflow-hidden z-0">
              {isFlipping ? spreads[spreadIndex + 1]?.right : spreads[spreadIndex].right}
              
              {!isFlipping && spreadIndex < spreads.length - 1 && (
                <button 
                  onClick={handleNextPage}
                  className="absolute bottom-8 right-8 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 transition-all font-bold z-50 animate-pulse"
                >
                  Buka Lembar Selanjutnya ➔
                </button>
              )}
            </div>

            <AnimatePresence>
              {isFlipping && (
                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full z-20 origin-left"
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  onAnimationComplete={() => {
                    setSpreadIndex(prev => prev + 1);
                    setIsFlipping(false);
                  }}
                >
                  <div className="absolute inset-0 bg-[#1a1a1a] overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                    {spreads[spreadIndex].right}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 bg-[#1a1a1a] overflow-hidden border-r border-dashed border-gray-600" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    {spreads[spreadIndex + 1].left}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <h1 className="mt-8 text-white/50 font-serif font-bold tracking-widest uppercase text-sm">Interactive Journal</h1>
        </div>


        {/* --- SCENE 2: REALISTIC EXPEDITION MAP --- */}
        <div className="w-[100vw] h-full flex items-center justify-center relative p-8">
          
          <div 
            className="w-full h-full rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-4 border-white/20 relative overflow-hidden group"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all group-hover:backdrop-blur-[1px]"></div>
            
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-3xl font-black text-white bg-black/30 backdrop-blur-md px-12 py-4 rounded-full z-20 border border-white/20 shadow-xl tracking-widest uppercase">
              Jejak Ekspedisi 2026
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d={pathD} fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <path d={pathD} fill="none" stroke="#4a3018" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <path d={pathD} fill="none" stroke="#7a5533" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              <path d={pathD} fill="none" stroke="#c0946b" strokeWidth="8" strokeDasharray="10 20" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* Label START & FINISH (Digeser ke Kiri Luar & Kanan Luar) */}
            <div className="absolute z-20 font-bold text-white bg-green-800/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 text-xs tracking-widest shadow-lg" style={{ top: '28%', left: '2%', transform: 'translateY(-50%)' }}>START</div>
            <div className="absolute z-20 font-bold text-white bg-red-800/80 backdrop-blur-md px-5 py-2 rounded-full border border-white/30 text-xs tracking-widest shadow-lg" style={{ top: '85%', right: '2%', transform: 'translateY(-50%)' }}>FINISH</div>

            {/* Render Foto Orang */}
            {squadData.map((person) => (
              <div
                key={person.id}
                className="absolute cursor-pointer z-30"
                style={{ left: `${person.pos.x}%`, top: `${person.pos.y}%`, transform: 'translate(-50%, -50%)' }}
                onClick={() => {
                  setActivePerson(person);
                  setLetterStage('closed');
                }}
              >
                <div 
                  className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full p-[4px] shadow-[0_10px_20px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all hover:scale-125 hover:z-40 group"
                  style={{ borderColor: person.color }}
                >
                  <img 
                    src={`https://placehold.co/100x100/${person.color.replace('#','')}/FFF?text=${person.name.substring(0,2).toUpperCase()}`} 
                    alt={person.name} 
                    className="w-full h-full object-cover rounded-full border-2 border-white/80" 
                  />
                  <div className="absolute -top-14 bg-black/80 backdrop-blur-md text-white font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap border border-white/20 pointer-events-none flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0">
                    {person.name} <span className="text-xs font-normal text-gray-300">| {person.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>


      {/* --- MODAL SURAT --- */}
      <AnimatePresence>
        {activePerson && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={closeLetter}></div>

            {/* STAGE 1: AMPLOP */}
            {letterStage !== 'fullscreen' && (
              <div className="relative w-[400px] h-[280px] perspective-1000 z-10">
                <motion.div 
                  className="absolute top-4 left-6 right-6 bottom-4 bg-[#fdfbf7] shadow-xl rounded-t-xl p-8 border border-gray-200 z-20"
                  animate={{ y: letterStage === 'opening' ? -150 : 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-gray-800 mb-1">Pesan Rahasia</h3>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Membuka...</p>
                </motion.div>

                <div className="absolute inset-0 bg-[#d9d9d9] rounded-xl shadow-2xl z-10"></div>
                <div className="absolute inset-0 bg-[#f5f5f5] rounded-xl flex items-end justify-center pb-4 z-30" style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)' }}>
                  <p className="text-gray-400 font-black tracking-widest opacity-80 uppercase text-xs">Pesan Tersegel</p>
                </div>

                {/* Perbaikan Z-Index: Saat membuka, z-index segitiga dikurangi agar surat naik tidak terhalang */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[60%] bg-[#e0e0e0] rounded-t-xl origin-top"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                  animate={{ 
                    rotateX: letterStage === 'opening' ? 180 : 0,
                    zIndex: letterStage === 'opening' ? 15 : 40 
                  }}
                  transition={{ duration: 0.6 }}
                />

                {letterStage === 'closed' && (
                  <motion.div 
                    className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-red-800 rounded-full z-50 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.5)] flex items-center justify-center border-2 border-red-900"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={openLetter}
                  >
                    <span className="text-white/90 text-2xl font-serif font-black italic">S</span>
                  </motion.div>
                )}
              </div>
            )}

            {/* STAGE 2: FULLSCREEN SURAT (DESAIN KERTAS BINDER LOOSE LEAF) */}
            {letterStage === 'fullscreen' && (
              <motion.div 
                className="relative bg-white w-full max-w-3xl pt-16 pb-8 px-10 rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-gray-200 z-20 flex flex-col items-center"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 120 }}
              >
                {/* Foto Profil */}
                <div className="absolute -top-12 w-24 h-24 rounded-full border-4 shadow-lg overflow-hidden bg-white z-10" style={{ borderColor: activePerson.color }}>
                   <img src={`https://placehold.co/100x100/${activePerson.color.replace('#','')}/FFF?text=${activePerson.name.substring(0,2).toUpperCase()}`} alt="Foto" className="w-full h-full object-cover" />
                </div>
                
                <h3 className="text-4xl font-black text-gray-900 mb-2 mt-2">{activePerson.name}</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 pb-2 w-1/2 text-center border-b border-gray-300">{activePerson.role}</p>
                
                {/* Kertas Binder Container */}
                <div className="w-full mb-8 relative bg-[#fafafa] border border-gray-300 shadow-inner rounded-r-lg overflow-hidden min-h-[300px]"
                     style={{ 
                       backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #93c5fd 39px, #93c5fd 40px)',
                       backgroundAttachment: 'local'
                     }}>
                  
                  {/* Lubang Binder */}
                  <div className="absolute left-4 top-10 w-5 h-5 bg-gray-900/60 rounded-full shadow-inner"></div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-900/60 rounded-full shadow-inner"></div>
                  <div className="absolute left-4 bottom-10 w-5 h-5 bg-gray-900/60 rounded-full shadow-inner"></div>
                  
                  {/* Garis Margin Merah Vertikal */}
                  <div className="absolute left-14 top-0 bottom-0 w-[2px] bg-red-400 opacity-70"></div>
                  
                  {/* Konten Teks */}
                  <div className="pl-20 pr-8 py-2">
                    <p className="text-2xl text-gray-800 font-serif italic whitespace-pre-wrap" style={{ lineHeight: '40px' }}>
                      {activePerson.msg}
                      <br/><br/>
                      (Dan kamu bisa terus menulis di sini. Kertas bindernya akan memanjang dan teks akan tetap rapi duduk di atas garis birunya!)
                    </p>
                  </div>
                </div>
                
                <button 
                  onClick={closeLetter}
                  className="bg-gray-900 text-white text-lg font-bold py-3 px-8 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.4)] transition-all"
                >
                  Tutup Kertas Binder
                </button>
              </motion.div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
      
    </main>
  );
}