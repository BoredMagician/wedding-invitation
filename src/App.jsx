import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Phone, ArrowDown, Languages, CheckCircle2, Star, Share2 } from 'lucide-react';

// Custom Telugu Cultural Icon: Jeelakarra Bellam (Sacred Hands)
const JeelakarraBellamIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 18C4 18 6 20 12 20C18 20 20 18 20 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 16C12 16 8 15 6 12C4 9 6 6 8 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 16C12 16 16 15 18 12C20 9 18 6 16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" fill="currentColor" fillOpacity="0.8" />
    <path d="M10 14L12 16L14 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Architectural Corner Design: Royal Temple Bracket
const HeritageCorner = ({ className }) => (
  <div className={`absolute w-16 h-16 md:w-32 md:h-32 text-[#D4AF37] pointer-events-none z-30 opacity-60 ${className}`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 L10 60" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
      <path d="M10 10 L60 10" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
      <path d="M10 40 Q 40 40, 40 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M10 25 Q 25 25, 25 10" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      <rect x="7" y="7" width="6" height="6" fill="currentColor" />
      <circle cx="10" cy="75" r="2" fill="currentColor" />
      <circle cx="75" cy="10" r="2" fill="currentColor" />
      <path d="M22 22 L35 35" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </div>
);

// Uniform golden shade with Diagonal Diamond Lattice Pattern
const CardOuterFrame = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-[2rem] border-4 border-[#D4AF37]/40 shadow-2xl">
    {/* Uniform Champagne Gold Background (#F7E7CE) */}
    <div className="absolute inset-0 bg-[#F7E7CE]"></div>
    
    {/* Diagonal Diamond Lattice Pattern */}
    <div className="absolute inset-0 opacity-[0.12]" 
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='%234A0E0E' stroke-width='0.5' /%3E%3Ccircle cx='20' cy='20' r='1' fill='%234A0E0E' /%3E%3C/svg%3E")`,
           backgroundSize: '40px 40px'
         }}>
    </div>
    
    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.15)]"></div>
    <div className="absolute inset-0 border-t-2 border-l-2 border-white/40 rounded-[2rem]"></div>
    <div className="absolute inset-0 border-b-2 border-r-2 border-black/10 rounded-[2rem]"></div>
  </div>
);

const App = () => {
  const weddingCalendar = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Wedding: Sai Krishna Chaitanya weds Bhavya Sree") + "&dates=20260304T190000Z/20260305T040000Z&location=I.M.A.+Hall,+Satyanarayanapuram,+Gudivada&sf=true&output=xml";
  const receptionCalendar = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Reception: Sai Krishna Chaitanya weds Bhavya Sree") + "&dates=20260308T140000Z/20260308T180000Z&location=Sai+Madhura+Banquet+Hall,+Vanasthalipuram,+Hyderabad&sf=true&output=xml";

  // Initial language set to 'telugu'
  const [language, setLanguage] = useState('telugu');
  const [isVisible, setIsVisible] = useState(false);
  const [contentFade, setContentFade] = useState(true);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@1,700&family=Lora:ital,wght@1,500&family=Suranna&family=Merriweather:wght@400;700&display=swap');
      
      @keyframes gold-glimmer {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes drift {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        50% { opacity: 0.5; }
        100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
      }

      .font-display-english { font-family: 'Merriweather', serif; font-weight: 700; letter-spacing: 0.02em; }
      .font-script { font-family: 'Great Vibes', cursive; }
      .font-telugu-names { font-family: 'Suranna', serif; }
      .font-header-english { font-family: 'Lora', serif; font-style: italic; }
      
      .highlighted-gold-name {
        display: inline-block;
        padding: 0.1em 0.05em;
        background: linear-gradient(
          135deg, 
          #4A0E0E 0%, 
          #800000 15%, 
          #B8860B 30%, 
          #D4AF37 45%, 
          #FDE047 50%, 
          #D4AF37 55%, 
          #B8860B 70%, 
          #800000 85%, 
          #4A0E0E 100%
        );
        background-size: 300% 300%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gold-glimmer 8s ease-in-out infinite;
        filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.25));
        position: relative;
        z-index: 1;
        line-height: 1.4;
      }
      
      .name-container {
        filter: drop-shadow(0px 1px 0px rgba(128, 0, 0, 0.15));
      }

      .title-highlight-glow {
        text-shadow: 0 0 12px rgba(212, 175, 55, 0.2), 0 1px 1px rgba(0,0,0,0.05);
      }

      .gold-dust {
        position: fixed;
        width: 4px;
        height: 4px;
        background: #D4AF37;
        border-radius: 50%;
        filter: blur(1px);
        animation: drift linear infinite;
        pointer-events: none;
        z-index: 5;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  const handleLanguageToggle = () => {
    setContentFade(false);
    setTimeout(() => {
      setLanguage(lang => lang === 'english' ? 'telugu' : 'english');
      setTimeout(() => {
        setContentFade(true);
      }, 450);
    }, 450);
  };

  const handleShare = async () => {
    const shareData = {
      title: t.main_title,
      text: isTelugu 
        ? `${t.groom_name_only} మరియు ${t.bride_name_only} ల వివాహ ఆహ్వాన పత్రిక`
        : `Join us for the wedding of ${t.groom_name_only} and ${t.bride_name_only}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback: Copy to clipboard
      const textField = document.createElement('textarea');
      textField.innerText = window.location.href;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const content = {
    english: {
      header_parts: ["Sreerasthu", "Shubhamasthu", "Avighnamasthu"],
      main_title: "Chirukuri's Wedding Invitation",
      intro: "We solicit your gracious presence with family & friends on the auspicious occasion of the marriage of our only son",
      groom_prefix: "Chi.",
      groom_name_only: "Sai Krishna Chaitanya",
      bride_prefix: "Chi.La.Sow.",
      bride_name_only: "Bhavya Sree",
      bride_parents: "(Daughter of Sri Kodali Nagendra Rao - Smt. Kavitha Kumari, R/o. Gudivada)",
      invited_by: "Invited by",
      host_name1: "Sri Chirukuri Achyuta Ramayya",
      host_name2: "Smt. Satyaveni",
      compliments: "With Best Compliments from Near & Dear.",
      wedding_section: "Sumuhurtham",
      wedding_date: "Wednesday, 4th March 2026",
      wedding_time: "at 02:42 hrs (early Thursday)",
      wedding_venue_name: "I.M.A. Hall",
      wedding_venue_loc: "Satyanarayanapuram, Gudivada.",
      dinner_info: "Dinner: from 7:00 p.m. onwards",
      reception_section: "Reception",
      reception_date: "Sunday, 8th March 2026",
      reception_time: "from 7:30 p.m. onwards",
      reception_venue_name: "Sai Madhura Banquet Hall",
      reception_addr1: "3rd Floor, Panama,",
      reception_addr2: "Vanasthalipuram, Hyderabad.",
      venue_label: "Venue",
      map_label: "Map",
      calendar_label: "Add to Calendar",
      share_label: "Share Invitation",
      link_copied: "Link Copied!",
      toggle_text: "తెలుగులో చూడండి"
    },
    telugu: {
      header_parts: ["శ్రీరస్తు", "శుభమస్తు", "అవిఘ్నమస్తు"],
      main_title: "చిరుకూరి వారి వివాహ మహోత్సవ ఆహ్వాన శుభ పత్రిక",
      host_intro: "శ్రీ చిరుకూరి అచ్యుత రామయ్య & శ్రీమతి సత్యవేణి దంపతులు వ్రాయు శుభలేఖార్థములు",
      lagnam_full: "స్వస్తిశ్రీ చాంద్రమానేన శ్రీ విశ్వావసు నామ సంవత్సర ఫాల్గుణ మాస బహుళ విదియ తేది : 04-03-2026 బుధవారం రాత్రి గం|| 02:42 ని||లకు (తెల్లవారితే గురువారం) ఉత్తర నక్షత్రయుక్త ధనస్సు లగ్న పుష్కరాంశమునందు",
      relation: "మా ఏకైక పుత్రుడు",
      groom_prefix: "చి||",
      groom_name_only: "సాయి కృష్ణ చైతన్య",
      bride_prefix: "చి||ల||సౌ||",
      bride_name_only: "భవ్యశ్రీ",
      bride_parents: "(గుడివాడ వాస్తవ్యులు శ్రీ కోడాలి నాగేంద్రరావు - శ్రీమతి కవిత కుమారి దంపతుల పుత్రిక)",
      formal_request: "ఇచ్చి వివాహము జరిపించుటకు పెద్దలు నిశ్చయించినారు. కావున తామెల్లరు సకుటుంబ సమేతంగా విచ్చేసి నూతన వధూవరులను ఆశీర్వదించి, భోజన తాంబూలాది సత్కారములు స్వీకరించి మమ్మానందింపజేయ ప్రార్థన.",
      invited_by: "మీ ఆగమనాభిలాషులు",
      host_name1: "శ్రీ చిరుకూరి అచ్యుత రామయ్య",
      host_name2: "శ్రీమతి సత్యవేణి",
      compliments: "బంధుమిత్రుల అభినందనలతో...",
      wedding_section: "సుముహూర్తం",
      wedding_date: "04-03-2026 బుధవారం",
      wedding_time: "రాత్రి 02:42 గం||లకు (తెల్లవారితే గురువారం)",
      wedding_venue_name: "ఐ.ఎం.ఎ. హాల్",
      wedding_venue_loc: "సత్యనారాయణపురం, గుడివాడ.",
      dinner_info: "విందు: రాత్రి 7:00 గం||ల నుండి",
      reception_section: "రిసెప్షన్",
      reception_date: "08-03-2026 ఆదివారం",
      reception_time: "రాత్రి గం|| 7:30 ని||ల నుండి",
      reception_venue_name: "సాయి మధుర బ్యాంక్వెట్ హాల్",
      reception_addr1: "3వ అంతస్తు, పనామా,",
      reception_addr2: "వనస్థలిపురం, హైదరాబాద్.",
      venue_label: "వేదిక",
      map_label: "మ్యాప్",
      calendar_label: "క్యాలెండర్",
      share_label: "షేర్ చేయండి",
      link_copied: "లింక్ కాపీ చేయబడింది!",
      toggle_text: "Switch to English"
    }
  };

  const t = content[language];
  const isTelugu = language === 'telugu';

  const mainContainerClasses = "p-6 md:p-16 text-center relative z-10 transition-all duration-500 ease-in-out " + (contentFade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2") + (isTelugu ? " space-y-6 md:space-y-12" : " space-y-8 md:space-y-14");
  const titleClasses = "text-[#1E1B4B] title-highlight-glow bg-[#F7E7CE] border-2 border-[#1E1B4B]/10 shadow-lg px-6 md:px-14 py-3 md:py-4 rounded-full inline-block mx-auto transition-all hover:scale-[1.02] active:scale-100 relative z-10 " + 
    (isTelugu ? "text-lg md:text-2xl font-bold font-sans" : "text-[22px] md:text-[41px] lg:text-[2.93rem] font-display-english");
  const headerPartsClasses = "flex justify-between items-center text-[#800000] w-full max-w-2xl mx-auto px-2 mb-4 md:mb-2 relative z-10 transition-all " + 
    (isTelugu ? "text-[10px] md:text-sm uppercase font-black tracking-normal" : "text-xs md:text-lg font-medium font-header-english");

  return (
    <div className={"min-h-[100dvh] bg-[#1A0202] text-[#800000] overflow-x-hidden relative transition-all duration-700 " + (isTelugu ? 'font-sans' : 'font-serif')}>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[2000] bg-[#1E1B4B] text-[#F7E7CE] px-6 py-3 rounded-full shadow-2xl font-bold text-sm animate-in fade-in slide-in-from-bottom-4 flex items-center gap-2">
          <CheckCircle2 size={18} />
          {t.link_copied}
        </div>
      )}

      {/* 1. FLOATING GOLD DUST EFFECT */}
      {[...Array(12)].map((_, i) => (
        <div key={i} className="gold-dust" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDuration: `${10 + Math.random() * 20}s`, animationDelay: `${-Math.random() * 20}s` }} />
      ))}

      {/* LANGUAGE TOGGLE BUTTON */}
      <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[1000]">
        <button 
          onClick={handleLanguageToggle} 
          className="min-w-[175px] md:min-w-0 justify-center px-8 md:px-8 py-3 md:py-3 bg-[#800000] text-[#D4AF37] rounded-full font-black shadow-2xl hover:bg-[#D4AF37] hover:text-[#800000] hover:scale-105 transition-all active:scale-95 text-xs md:text-sm uppercase tracking-widest flex items-center gap-2 md:gap-3 border-2 border-[#D4AF37]"
        >
          <Languages size={18} className="md:w-5 md:h-5" />
          <span>{t.toggle_text}</span>
        </button>
      </div>

      <div className="fixed inset-0 z-0 bg-heritage-pattern opacity-20"></div>
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,#4A0E0E_0%,#1A0202_100%)] opacity-95"></div>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 flex flex-col items-center p-0 md:p-10 pt-24 md:pt-28 pb-10">
        <div className={"w-full max-w-5xl bg-transparent md:rounded-[2rem] relative overflow-hidden transition-all duration-1000 transform " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0')}>
          
          <div className="hidden md:block">
            <CardOuterFrame />
          </div>

          <div className="absolute inset-0 md:inset-8 bg-[#FFFDF5] md:rounded-[1.2rem] z-0 shadow-none md:shadow-[0_0_40px_rgba(0,0,0,0.05)] border-none md:border border-[#D4AF37]/10"></div>

          <div className="hidden md:block absolute inset-10 border-[1px] border-[#D4AF37]/20 rounded-[1rem] pointer-events-none z-40"></div>
          <div className="hidden md:block absolute inset-12 border-[2px] border-double border-[#D4AF37]/25 rounded-[0.8rem] pointer-events-none z-40 shadow-[inset_0_0_20px_rgba(212,175,55,0.05)]"></div>
          
          <HeritageCorner className="top-0 left-0 md:top-8 md:left-8" />
          <HeritageCorner className="top-0 right-0 md:top-8 md:right-8 rotate-90" />
          <HeritageCorner className="bottom-0 left-0 md:bottom-8 md:left-8 -rotate-90" />
          <HeritageCorner className="bottom-0 right-0 md:bottom-8 md:right-8 rotate-180" />

          <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0" style={{backgroundImage: `url("https://www.transparenttextures.com/patterns/old-map.png")`}}></div>
          
          <div className={mainContainerClasses}>
            <div className={headerPartsClasses}>
              <span className="flex-1 text-left">{t.header_parts[0]}</span>
              <span className="flex-1 text-center">{t.header_parts[1]}</span>
              <span className="flex-1 text-right">{t.header_parts[2]}</span>
            </div>

            {/* Ganesh Icon */}
            <div className="relative w-20 h-20 md:w-32 md:h-32 mx-auto z-10 pt-2">
               <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-3xl opacity-30 animate-pulse"></div>
               <div className="relative w-full h-full rounded-full border-4 border-double border-[#D4AF37] bg-[#FFFDF5] flex items-center justify-center p-3 md:p-4 shadow-sm">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-[#800000] drop-shadow-md" fill="currentColor">
                   <circle cx="50" cy="50" r="40" fill="#D4AF37" fillOpacity="0.08" />
                   <path d="M35 30 Q50 15 65 30 L65 35 L35 35 Z" fill="#D4AF37" />
                   <path d="M35 35 Q15 35 15 55 Q15 75 40 65" fill="currentColor" />
                   <path d="M65 35 Q85 35 85 55 Q85 75 60 65" fill="currentColor" />
                   <path d="M35 35 L65 35 L65 55 Q65 75 50 85 Q35 75 45 65" fill="currentColor" />
                   <path d="M45 65 Q40 60 42 55" stroke="white" strokeWidth="1" fill="none"/>
                   <circle cx="50" cy="25" r="2" fill="#800000" />
                 </svg>
               </div>
            </div>

            <div className="px-2 relative z-10">
              <h1 className={titleClasses}>{t.main_title}</h1>
            </div>

            {isTelugu ? (
              <div className="space-y-3 md:space-y-4 relative z-10">
                <p className="text-[#800000] font-bold text-base md:text-xl leading-relaxed border-y border-[#D4AF37]/30 py-3 md:py-5 tracking-normal">{t.host_intro}</p>
                <p className="text-[#800000] text-xs md:text-base leading-relaxed md:leading-loose italic tracking-normal px-4">
                  {t.lagnam_full}
                </p>
              </div>
            ) : (
              <p className="text-base md:text-2xl lg:text-3xl text-[#800000] italic font-medium max-w-4xl mx-auto leading-relaxed opacity-95 relative z-10 px-4 md:px-8">{t.intro}</p>
            )}

            <div className={"relative z-10 " + (isTelugu ? "py-1 space-y-1 md:space-y-2" : "py-1 space-y-2 md:space-y-4")}>
              <div className={"name-container " + (isTelugu ? "space-y-1 md:space-y-2" : "space-y-2 md:space-y-4")}>
                {isTelugu && <span className="text-[#800000] text-[10px] md:text-sm uppercase font-black opacity-70 block tracking-normal">{t.relation}</span>}
                <h2 className={"transition-all duration-500 ease-in-out " + (isTelugu ? 'text-3xl md:text-6xl lg:text-8xl tracking-normal font-bold font-telugu-names' : 'text-3xl md:text-6xl lg:text-7xl font-script tracking-tight leading-none')}>
                   <div className="flex items-baseline justify-center gap-1 md:gap-2">
                     <span className={"opacity-40 font-normal " + (isTelugu ? "text-base md:text-3xl lg:text-5xl font-sans" : "text-base md:text-3xl lg:text-5xl font-sans")}>{t.groom_prefix}</span>
                     <span className="highlighted-gold-name">{t.groom_name_only}</span>
                     <span className={"opacity-40 font-normal " + (isTelugu ? "text-base md:text-3xl lg:text-5xl font-sans" : "text-xs md:text-sm lg:text-xl font-serif")}>{isTelugu && "కు"}</span>
                   </div>
                </h2>
                
                {!isTelugu ? (
                   <div className="py-1 md:py-2">
                      <p className="text-[#D4AF37] font-serif italic text-xl md:text-3xl lg:text-4xl leading-none">with</p>
                   </div>
                ) : <div className="py-1 md:py-2"></div>}
                
                <h2 className={"transition-all duration-500 ease-in-out " + (isTelugu ? 'text-3xl md:text-6xl lg:text-8xl tracking-normal font-bold font-telugu-names' : 'text-3xl md:text-6xl lg:text-7xl font-script tracking-tight leading-none')}>
                   <div className="flex items-baseline justify-center gap-1 md:gap-2">
                     <span className={"opacity-40 font-normal " + (isTelugu ? "text-base md:text-3xl lg:text-5xl font-sans" : "text-base md:text-3xl lg:text-5xl font-sans")}>{t.bride_prefix}</span>
                     <span className="highlighted-gold-name">{t.bride_name_only}</span>
                     <span className={"opacity-40 font-normal " + (isTelugu ? "text-base md:text-3xl lg:text-5xl font-sans" : "text-xs md:text-sm lg:text-xl font-serif")}>{isTelugu && "ని"}</span>
                   </div>
                </h2>
                <p className={"text-[#800000] max-w-xl mx-auto px-4 leading-relaxed font-bold " + (isTelugu ? 'text-sm md:text-lg opacity-80 mt-1 block tracking-normal' : 'text-sm md:text-xl opacity-80')}>{t.bride_parents}</p>
                
                {isTelugu && (
                  <p className="italic pt-4 px-6 max-w-3xl mx-auto text-[#800000] leading-relaxed text-xs md:text-base opacity-90 relative z-10 tracking-normal border-t border-[#D4AF37]/10 mt-4">
                    {t.formal_request}
                  </p>
                )}
              </div>
            </div>

            <div className={"animate-bounce relative z-10 pt-4 md:pt-6"}>
              <ArrowDown size={30} className="mx-auto text-[#D4AF37] md:w-9 md:h-9" />
            </div>
          </div>

          {/* Event Details Grid */}
          <div className="mx-2 md:mx-12 mb-8 grid md:grid-cols-2 gap-px bg-[#D4AF37]/30 border-t border-[#D4AF37]/50 relative z-10 overflow-hidden md:rounded-[2rem] shadow-sm">
            <div className="bg-[#F7E7CE] p-8 md:p-16 flex flex-col items-center text-center space-y-6 md:space-y-10">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#800000] flex items-center justify-center shadow-md border-2 border-[#D4AF37]">
                <JeelakarraBellamIcon size={24} className="text-[#D4AF37] md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#800000] uppercase tracking-tighter">{t.wedding_section}</h3>
              <div className="space-y-2">
                  <p className="text-lg md:text-xl font-bold text-[#800000] tracking-tight">{t.wedding_date}</p>
                  <p className="text-base md:text-lg font-bold text-[#D4AF37]">{t.wedding_time}</p>
              </div>
              
              {/* UPDATED: Dinner Info moved above Venue */}
              <div className="pt-6 border-t border-[#D4AF37]/10 w-full">
                <p className="text-[#800000] font-bold text-sm md:text-base italic">{t.dinner_info}</p>
              </div>

              {/* Venue details below Dinner */}
              <div className="pt-6 border-t border-dashed border-[#D4AF37]/20 w-full space-y-2">
                <p className="text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{t.venue_label}</p>
                <p className="text-xl md:text-2xl font-bold text-[#800000] leading-tight">{t.wedding_venue_name}</p>
                <p className="text-[#5D1212] font-bold text-sm md:text-base leading-relaxed opacity-80">{t.wedding_venue_loc}</p>
              </div>

              <div className="flex flex-col w-full gap-3">
                <a href="https://maps.app.goo.gl/CKaKczCdHJX56og77" target="_blank" rel="noreferrer" className="bg-[#800000] text-[#FFFDF5] py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"><MapPin size={16} /> {t.map_label}</a>
                <a href={weddingCalendar} target="_blank" rel="noreferrer" className="border-2 border-[#800000] text-[#800000] py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm hover:bg-[#800000]/5 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"><Calendar size={16} /> {t.calendar_label}</a>
              </div>
            </div>

            <div className="bg-[#F7E7CE] p-8 md:p-16 flex flex-col items-center text-center space-y-6 md:space-y-10 border-t md:border-t-0 md:border-l border-[#D4AF37]/20">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-md border-2 border-[#800000]">
                <Star size={24} className="text-[#800000] md:w-8 md:h-8" fill="currentColor" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#800000] uppercase tracking-tighter">{t.reception_section}</h3>
              <div className="space-y-2">
                <p className="text-lg md:text-xl font-bold text-[#800000] tracking-tight">{t.reception_date}</p>
                <p className="text-base md:text-lg font-bold text-[#D4AF37]">{t.reception_time}</p>
              </div>
              <div className="pt-6 border-t border-dashed border-[#D4AF37]/20 w-full space-y-2">
                <p className="text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">{t.venue_label}</p>
                <p className="text-xl md:text-2xl font-bold text-[#800000] leading-tight">{t.reception_venue_name}</p>
                <div className="text-[#5D1212] font-bold text-sm md:text-base leading-relaxed opacity-80">
                  <p>{t.reception_addr1}</p>
                  <p>{t.reception_addr2}</p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-3 pt-4 md:pt-12">
                <a href="https://maps.app.goo.gl/8WiFHoJcv8pbY6gJ9" target="_blank" rel="noreferrer" className="bg-[#800000] text-[#FFFDF5] py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"><MapPin size={16} /> {t.map_label}</a>
                <a href={receptionCalendar} target="_blank" rel="noreferrer" className="border-2 border-[#800000] text-[#800000] py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm hover:bg-[#800000]/5 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"><Calendar size={16} /> {t.calendar_label}</a>
              </div>
            </div>
          </div>

          <footer className="mx-0 md:mx-10 mb-0 md:mb-4 p-8 md:p-24 text-center bg-[#FFFDF5] space-y-10 md:space-y-12 relative z-10 md:rounded-b-[1.2rem]">
            <h3 className="text-[#D4AF37] text-[10px] md:text-sm font-black uppercase opacity-90 transition-all duration-300" style={{ letterSpacing: isTelugu ? 'normal' : '1em' }}>{t.invited_by}</h3>
            <div className="space-y-4 md:space-y-6">
               <p className={"font-bold text-[#800000] tracking-tight leading-none " + (isTelugu ? "text-xl md:text-3xl tracking-normal font-sans" : "text-xl md:text-4xl tracking-tight")}>{t.host_name1}</p>
               <p className={"font-bold text-[#800000] tracking-tight leading-none " + (isTelugu ? "text-xl md:text-3xl tracking-normal font-sans" : "text-xl md:text-4xl tracking-tight")}>{t.host_name2}</p>
            </div>
            <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-16 px-6 md:px-10 py-4 rounded-[2rem] md:rounded-[2.5rem] border border-[#D4AF37]/40 bg-white shadow-sm transition-transform hover:scale-[1.01]">
                  <a href="tel:9701663388" className="flex items-center gap-2 md:gap-3 text-[#800000] font-bold text-sm md:text-lg hover:text-[#5D1212] transition-colors"><Phone size={16} /> 97016 63388</a>
                  <div className="hidden md:block h-10 w-px bg-[#D4AF37]/20"></div>
                  <a href="tel:9985402220" className="flex items-center gap-2 md:gap-3 text-[#800000] font-bold text-sm md:text-lg hover:text-[#5D1212] transition-colors"><Phone size={16} /> 99854 02220</a>
            </div>
            <div className="pt-6 md:pt-10">
               <p className="text-[#8B4513] italic text-lg md:text-xl font-bold opacity-90 leading-relaxed border-t border-[#D4AF37]/10 pt-8 md:pt-10 inline-block px-8 md:px-16 relative tracking-normal">
                  <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#D4AF37]"></span>
                  {t.compliments}
               </p>
            </div>
            
            {/* Share Button following Heritage Card Aesthetics */}
            <div className="pt-10 flex justify-center">
              <button 
                onClick={handleShare}
                className="flex items-center gap-3 bg-[#800000] text-[#D4AF37] px-10 py-4 rounded-full font-black shadow-2xl hover:bg-[#D4AF37] hover:text-[#800000] hover:scale-105 transition-all transform active:scale-95 text-xs md:text-sm uppercase tracking-widest border-2 border-[#D4AF37]"
              >
                <Share2 size={20} />
                {t.share_label}
              </button>
            </div>
          </footer>
        </div>
        <div className="mt-10 md:mt-20 text-[#D4AF37]/30 text-xs md:text-sm uppercase tracking-[0.4em] md:tracking-[0.8em] font-black text-center">Chirukuri Family • 2026</div>
      </main>
    </div>
  );
};

export default App;