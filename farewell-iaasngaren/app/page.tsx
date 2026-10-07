'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// --- DATA SQUAD ---
const squadData = [
  { id: 1, pos: { x: 10, y: 25 }, color: '#FF595E', name: 'Andi', role: 'Si Paling Ide', msg: 'Makasih udah selalu ngasih ide out-of-the-box! Jangan lupa sama kita ya!' },
  { id: 2, pos: { x: 25, y: 15 }, color: '#FFCA3A', name: 'Bunga', role: 'Desainer Magis', msg: 'Tangan dinginmu bikin project kita estetik terus. Keep shining bright!' },
  { id: 3, pos: { x: 45, y: 20 }, color: '#8AC926', name: 'Ciko', role: 'Raja Debugging', msg: 'Penyelamat kodingan error di detik terakhir! Good luck master!' },
  { id: 4, pos: { x: 65, y: 15 }, color: '#1982C4', name: 'Dina', role: 'Mood Maker', msg: 'Ketawamu selalu bikin rapat yang tegang jadi santai.' },
  { id: 5, pos: { x: 85, y: 25 }, color: '#6A4C93', name: 'Eko', role: 'Si Santuy', msg: 'Ilmu kebal deadline-mu harus diwariskan, Ko!' },
  { id: 6, pos: { x: 75, y: 45 }, color: '#FF595E', name: 'Fara', role: 'Copywriter', msg: 'Kata-katamu selalu menyihir para juri. Karir menulismu pasti meroket!' },
  { id: 7, pos: { x: 50, y: 50 }, color: '#FFCA3A', name: 'Gilang', role: 'Tukang Kopi', msg: 'Tanpa kopi buatanmu jam 3 pagi, kita udah tumbang.' },
  { id: 8, pos: { x: 25, y: 60 }, color: '#8AC926', name: 'Hana', role: 'Presentator Kece', msg: 'Panggung presentasi selalu jadi milikmu, Hana!' },
  { id: 9, pos: { x: 10, y: 75 }, color: '#1982C4', name: 'Irfan', role: 'Si Analis', msg: 'Data yang kamu kumpulkan selalu on point.' },
  { id: 10, pos: { x: 35, y: 85 }, color: '#6A4C93', name: 'Jihan', role: 'Ibu Peri Tim', msg: 'Makasih udah cerewet ngingetin kita makan!' },
  { id: 11, pos: { x: 60, y: 80 }, color: '#FF595E', name: 'Kiki', role: 'Audio Master', msg: 'Sound effect bikinanmu epic banget, Ki. Ditunggu karyanya!' },
  { id: 12, pos: { x: 85, y: 70 }, color: '#FFCA3A', name: 'Lian', role: 'Sang Leader', msg: 'Captain, terima kasih sudah menahkodai kapal ini sampai akhir!' },
];

export default function FarewellPage() {
  const [scene, setScene] = useState<'scrapbook' | 'boardgame'>('scrapbook');

  // Generate SVG Path for the Winding Road
  useEffect(() => {
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
  }, []);

  const [spreadIndex, setSpreadIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNextPage = () => {
    if (spreadIndex < spreads.length - 1 && !isFlipping) {
      setIsFlipping(true);
    }
  };

  // --- KONTEN SCRAPBOOK (3 Lembar/Spread) ---
  const spreads = [
    { // Lembar 1
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
    { // Lembar 2
      left: (
        <div className="w-full h-full p-8 relative">
          <div className="absolute top-8 right-8 bg-white p-3 pb-8 shadow-xl rotate-[-3deg] w-64 z-10">
            <img src="https://placehold.co/400x300/EF476F/FFF?text=Kerja+Keras" alt="Foto" className="w-full h-40 object-cover" />
            <p className="text-center mt-3 font-bold text-gray-700">Lembur Tanpa Henti</p>
            <div className="absolute -top-4 -right-4 w-24 h-6 bg-blue-400/60 backdrop-blur-sm rotate-[-10deg]"></div>
          </div>
          <div className="absolute bottom-16 left-8 bg-[#d2b48c] p-4 shadow-lg rotate-2" style={{ clipPath: 'polygon(0% 0%, 100% 2%, 98% 100%, 2% 98%)' }}>
            <p className="text-gray-900 font-bold font-serif text-lg">Inget revisi jam 3 pagi? ☕</p>
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
    { // Lembar 3 (Terakhir)
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
          <p className="text-gray-300 italic mb-10">Siap melihat pesan untuk masing-masing dari kita?</p>
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

  const [activePerson, setActivePerson] = useState<any>(null);
  const [letterStage, setLetterStage] = useState<'closed' | 'opening' | 'fullscreen'>('closed');
  const [pathD, setPathD] = useState('');

  // Menghitung SVG Path Melengkung (Bezier)
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
    <main className="w-screen h-screen overflow-hidden bg-[#d4a373] relative font-sans">
      
      {/* KANVAS RAKSASA: Transisi Meja Bergeser */}
      <motion.div
        className="flex w-[200vw] h-[100vh]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 2px, transparent 2px, transparent 4px)' }}
        initial={{ scale: 1, x: '0vw' }}
        animate={{
          scale: scene === 'scrapbook' ? 1 : [1, 0.5, 0.5, 1],
          x: scene === 'scrapbook' ? '0vw' : ['0vw', '0vw', '-100vw', '-100vw']
        }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1], ease: 'easeInOut' }}
      >
        
        {/* --- SCENE 1: SCRAPBOOK (Buku Hitam) --- */}
        <div className="w-[100vw] h-full flex flex-col items-center justify-center relative px-10">
          
          {/* Pembungkus Buku (Perspective untuk 3D) */}
          <div className="w-full max-w-5xl h-[70vh] flex shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm relative z-10" style={{ perspective: '2000px' }}>
            
            {/* 1. Halaman Kiri (Selalu Menampilkan Halaman Saat Ini) */}
            <div className="w-1/2 h-full bg-[#1a1a1a] border-r border-dashed border-gray-600 relative overflow-hidden z-0">
              {spreads[spreadIndex].left}
            </div>

            {/* 2. Halaman Kanan Dasar (Menampilkan Halaman Berikutnya SAAT animasi flip berjalan) */}
            <div className="w-1/2 h-full bg-[#1a1a1a] border-l border-dashed border-gray-700 relative overflow-hidden z-0">
              {isFlipping ? spreads[spreadIndex + 1]?.right : spreads[spreadIndex].right}
              
              {/* Tombol Next (Hanya muncul jika belum di lembar terakhir dan tidak sedang flip) */}
              {!isFlipping && spreadIndex < spreads.length - 1 && (
                <button 
                  onClick={handleNextPage}
                  className="absolute bottom-8 right-8 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm border border-white/30 transition-all font-bold z-50 animate-pulse"
                >
                  Buka Lembar Selanjutnya ➔
                </button>
              )}
            </div>

            {/* 3. HALAMAN YANG BERPUTAR (The Flipping Page) */}
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
                  {/* Sisi Depan (Menampilkan halaman kanan yang lama) */}
                  <div className="absolute inset-0 bg-[#1a1a1a] overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                    {spreads[spreadIndex].right}
                    {/* Bayangan efek buku terlipat */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
                  </div>

                  {/* Sisi Belakang (Menampilkan halaman kiri yang baru) */}
                  <div className="absolute inset-0 bg-[#1a1a1a] overflow-hidden border-r border-dashed border-gray-600" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    {spreads[spreadIndex + 1].left}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
          
          <h1 className="mt-8 text-white font-serif font-bold opacity-50">Scrapbook Interaktif</h1>
        </div>


        {/* --- SCENE 2: BOARDGAME (Kanan 100vw) --- */}
        <div className="w-[100vw] h-full flex items-center justify-center relative p-8">
          
          <div className="w-full h-full bg-[#00b4d8] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-8 border-[#03045e] relative overflow-hidden">
            
            {/* Ornamen Peta (Pulau & Kompas) */}
            <div className="absolute top-10 right-20 text-8xl opacity-80 z-0">🏝️</div>
            <div className="absolute bottom-16 left-32 text-8xl opacity-80 z-0">🧭</div>
            <div className="absolute top-1/2 left-1/4 text-6xl opacity-80 z-0">🏴‍☠️</div>
            <div className="absolute bottom-1/3 right-1/4 text-6xl opacity-80 z-0">🐙</div>
            
            {/* Teks Judul */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-4xl font-black text-[#603808] bg-[#ffe6a7] px-10 py-3 rounded-lg z-20 border-4 border-[#603808] shadow-[4px_4px_0_#603808]" style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 50%, 95% 100%, 5% 100%, 0 50%)' }}>
              FAREWELL JOURNEY
            </div>

            {/* SVG Winding Path (Tali) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
              {/* Bayangan Tali */}
              <path d={pathD} fill="none" stroke="#0077b6" strokeWidth="22" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
              {/* Tali Utama */}
              <path d={pathD} fill="none" stroke="#e9c46a" strokeWidth="16" strokeDasharray="15 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>

            {/* Label START & FINISH */}
            <div className="absolute z-10 font-black text-white bg-red-600 px-4 py-1 rounded border-2 border-white rotate-[-10deg]" style={{ top: '12%', left: '8%' }}>START</div>
            <div className="absolute z-10 font-black text-white bg-green-600 px-4 py-1 rounded border-2 border-white rotate-[5deg]" style={{ top: '85%', left: '88%' }}>FINISH</div>

            {/* Render Nodes (Titik-Titik Lingkaran) */}
            {squadData.map((person, i) => (
              <motion.div
                key={person.id}
                className="absolute cursor-pointer z-10 group"
                style={{ left: `${person.pos.x}%`, top: `${person.pos.y}%`, x: '-50%', y: '-50%' }}
                whileHover={{ scale: 1.2, zIndex: 20 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                onClick={() => {
                  setActivePerson(person);
                  setLetterStage('closed');
                }}
              >
                {/* Node Style (Mirip pin peta / koin bernomor) */}
                <div className="relative w-16 h-16 bg-white rounded-full p-1 shadow-[0_5px_15px_rgba(0,0,0,0.5)] border-4 border-gray-800 flex items-center justify-center">
                  <div className="w-full h-full rounded-full flex items-center justify-center text-white font-black text-xl" style={{ backgroundColor: person.color }}>
                    {person.id}
                  </div>
                  
                  {/* Tooltip Nama (Muncul saat Hover) */}
                  <div className="absolute -top-10 bg-white text-gray-900 font-bold px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border-2 border-gray-800 pointer-events-none">
                    {person.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>


      {/* --- MODAL SURAT (Amplop & Fullscreen) --- testing nambah*/}
      <AnimatePresence>
        {activePerson && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop Blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeLetter}></div>

            {/* STAGE 1: AMPLOP */}
            {letterStage !== 'fullscreen' && (
              <div className="relative w-[400px] h-[280px] perspective-1000 z-10">
                {/* Isi Kertas (Naik saat opening) */}
                <motion.div 
                  className="absolute top-4 left-6 right-6 bottom-4 bg-yellow-50 shadow-xl rounded-t-xl p-8 border border-gray-200 z-20"
                  animate={{ y: letterStage === 'opening' ? -150 : 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-[#118AB2] mb-1">Surat Rahasia</h3>
                  <p className="text-sm font-bold text-[#EF476F] uppercase tracking-widest">Membuka...</p>
                </motion.div>

                {/* Badan Amplop */}
                <div className="absolute inset-0 bg-[#EF476F] rounded-xl shadow-2xl z-10"></div>
                <div className="absolute inset-0 bg-[#FF9F1C] rounded-xl flex items-end justify-center pb-4 z-30" style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)' }}>
                  <p className="text-white/50 font-black tracking-widest">RAHASIA</p>
                </div>

                {/* Penutup Amplop (Flap) */}
                <motion.div 
                  className="absolute top-0 left-0 w-full h-[60%] bg-[#d93a5e] rounded-t-xl z-40 origin-top"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
                  animate={{ rotateX: letterStage === 'opening' ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Segel Lilin */}
                {letterStage === 'closed' && (
                  <motion.div 
                    className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-600 rounded-full z-50 cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.4)] flex items-center justify-center border-2 border-red-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={openLetter}
                  >
                    <span className="text-yellow-300 text-2xl font-serif font-black italic">S</span>
                  </motion.div>
                )}
              </div>
            )}

            {/* STAGE 2: FULLSCREEN SURAT */}
            {letterStage === 'fullscreen' && (
              <motion.div 
                className="relative bg-white w-full max-w-4xl p-12 rounded-2xl shadow-2xl border-4 border-gray-800 text-center z-20 flex flex-col items-center"
                initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-5xl">📌</div>
                
                <h3 className="text-5xl font-black text-[#118AB2] mb-2">{activePerson.name}</h3>
                <p className="text-xl font-bold text-[#EF476F] uppercase tracking-widest mb-8">{activePerson.role}</p>
                
                <div className="bg-yellow-50 w-full p-10 rounded-xl border-2 border-dashed border-yellow-400 mb-10">
                  <p className="text-4xl text-gray-800 font-medium leading-relaxed italic">
                    "{activePerson.msg}"
                  </p>
                </div>
                
                <button 
                  onClick={closeLetter}
                  className="bg-[#118AB2] text-white text-xl font-black py-4 px-10 rounded-full shadow-[0_6px_0_#0a5c78] hover:translate-y-1 hover:shadow-[0_2px_0_#0a5c78] transition-all"
                >
                  Kembali ke Peta 🗺️
                </button>
              </motion.div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
      
    </main>
  );
}