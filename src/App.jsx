import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Phone, ArrowDown, Languages, CheckCircle2, Star } from 'lucide-react';

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

const App = () => {
  // Calendar URLs - Centralized
  const weddingCalendar = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Wedding: Sai Krishna Chaitanya weds Bhavya Sree") + "&dates=20260304T190000Z/20260305T040000Z&location=I.M.A.+Hall,+Satyanarayanapuram,+Gudivada&sf=true&output=xml";
  const receptionCalendar = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent("Reception: Sai Krishna Chaitanya weds Bhavya Sree") + "&dates=20260308T140000Z/20260308T180000Z&location=Sai+Madhura+Banquet+Hall,+Vanasthalipuram,+Hyderabad&sf=true&output=xml";

  const [language, setLanguage] = useState('english');
  const [isVisible, setIsVisible] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [contentFade, setContentFade] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@1,700&family=Lora:ital,wght@1,500&family=Suranna&family=Merriweather:wght@400;700&display=swap');
      
      @keyframes spin-very-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-spin-very-slow {
        animation: spin-very-slow 180s linear infinite;
      }
      /* English Title Font: Cormorant Garamond (Prestigious Italic Serif) */
      .font-display-english { font-family: 'Cormorant Garamond', serif; font-style: italic; font-weight: 700; letter-spacing: 0.01em; }
      /* Script Font for English Names */
      .font-script { font-family: 'Great Vibes', cursive; }
      /* Header Parts Font: Lora */
      .font-header-english { font-family: 'Lora', serif; font-style: italic; }
      /* Stylized Telugu Font for Bride/Groom names */
      .font-telugu-names { font-family: 'Suranna', serif; }
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
      setContentFade(true);
    }, 300);
  };

  const content = {
    english: {
      header_parts: ["Sreerasthu", "Shubhamasthu", "Avighnamasthu"],
      main_title: "Chirukuri's Wedding Invitation",
      intro: "We solicit your gracious presence with family & friends on the auspicious occasion of the marriage of our only son",
      groom_prefix: "Chi.",
      groom_name_only: "Sai Krishna Chaitanya",
      groom_suffix: "",
      with_text: "with",
      bride_prefix: "Chi.La.Sow.",
      bride_name_only: "Bhavya Sree",
      bride_suffix: "",
      bride_parents: "(Daughter of Sri Kodali Nagendra Rao - Smt. Kavitha Kumari, R/o. Gudivada)",
      wedding_section: "Sumuhurtham :",
      wedding_date_card: "Wednesday, 4th March 2026",
      wedding_time_card: "at 02:42 hrs (early Thursday)",
      venue_label: "Venue :",
      venue_name: "I.M.A. Hall",
      venue_loc: "Satyanarayanapuram, Gudivada.",
      dinner_label: "Dinner :",
      dinner_line2: "7:00 p.m. onwards",
      reception_label: "Reception :",
      reception_date: "Sunday, 8th March 2026",
      reception_time: "from 7:30 p.m. onwards",
      reception_venue: "at Sai Madhura Banquet Hall",
      reception_addr1: "3rd Floor, R.S. Brother's Building,",
      reception_addr2: "Panama, Vanasthalipuram, Hyderabad.",
      invited_by: "Invited by",
      host_name1: "Sri Chirukuri Achyuta Ramayya",
      host_name2: "Smt. Satyaveni",
      compliments: "With Best Compliments from Near & Dear.",
      get_directions: "Get Directions",
      add_calendar: "Add to Calendar",
      copied: "Invitation Link Copied!",
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
      groom_suffix: "కు",
      bride_prefix: "చి||ల||సౌ||",
      bride_name_only: "భవ్యశ్రీ",
      bride_suffix: "ని",
      bride_parents: "(గుడివాడ వాస్తవ్యులు శ్రీ కోడాలి నాగేంద్రరావు - శ్రీమతి కవిత కుమారి దంపతుల పుత్రిక)",
      formal_request: "ఇచ్చి వివాహము జరిపించుటకు పెద్దలు నిశ్చయించినారు. కావున తామెల్లరు సకుటుంబ సమేతంగా విచ్చేసి నూతన వధూవరులను ఆశీర్వదించి, భోజన తాంబూలాది సత్కారములు స్వీకరించి మమ్మానందింపజేయ ప్రార్థన.",
      wedding_section: "సుముహూర్తం :",
      wedding_date_card: "04-03-2026 బుధవారం",
      wedding_time_card: "రాత్రి 02:42 గం||లకు (తెల్లవారితే గురువారం)",
      venue_label: "కళ్యాణ వేదిక :",
      venue_name: "ఐ.ఎం.ఎ. హాల్",
      venue_loc: "సత్యనారాయణపురం, గుడివాడ.",
      dinner_label: "విందు :",
      dinner_line2: "రాత్రి 7:00 గం||ల నుండి",
      reception_label: "వివాహ విందు :",
      reception_date: "08-03-2026 ఆదివారం",
      reception_time: "రాత్రి గం|| 7:30 ని||ల నుండి",
      reception_venue: "సాయి మధుర బ్యాంక్వెట్ హాల్",
      reception_addr1: "3వ అంతస్తు, ఆర్.యస్. బ్రదర్స్ బిల్డింగ్,",
      reception_addr2: "పనామా, వనస్థలిపురం, హైదరాబాద్.",
      invited_by: "మీ ఆగమనాభిలాషులు",
      host_name1: "శ్రీ చిరుకూరి అచ్యుత రామయ్య",
      host_name2: "శ్రీమతి సత్యవేణి",
      compliments: "బంధుమిత్రుల అభినందనలతో...",
      get_directions: "మ్యాప్",
      add_calendar: "క్యాలెండర్",
      copied: "లింక్ కాపీ చేయబడింది!",
      toggle_text: "Switch to English"
    }
  };

  const t = content[language];
  const isTelugu = language === 'telugu';

  // TOP DESIGN: Golden Beads and Lotus Drops
  const Thoranam = () => (
    <div className="flex justify-around items-start w-full pointer-events-none opacity-90 mb-4 h-24 overflow-hidden pt-1 relative z-20 px-4">
      {[...Array(14)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-0.5 h-10 bg-[#D4AF37]/40 relative">
             <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-[#FFFDF5] border border-[#D4AF37] rounded-full"></div>
          </div>
          {i % 2 === 0 ? (
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#D4AF37] drop-shadow-sm mt-1">
              <path d="M12 2C10 6 6 10 6 14C6 18 8.68 21 12 21C15.32 21 18 18 18 14C18 10 14 6 12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1"/>
              <circle cx="12" cy="14" r="3" fill="currentColor"/>
            </svg>
          ) : (
            <div className="flex flex-col items-center mt-1">
                <div className="w-3 h-3 bg-[#EAB308] rounded-sm rotate-45 shadow-sm"></div>
                <div className="w-1.5 h-6 bg-[#D4AF37]/20"></div>
                <div className="w-2 h-2 bg-[#F97316] rounded-full"></div>
            </div>
          )}
        </div>
      ))}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
    </div>
  );

  // CORNER DESIGN: Sunburst Diamond Filigree
  const HeritageCorner = ({ className }) => (
    <div className={"absolute w-32 h-32 md:w-44 md:h-44 text-[#D4AF37] pointer-events-none z-50 " + className}>
      <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5 L60 5 M5 5 L5 60" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        <path d="M15 15 L45 15 M15 15 L15 45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="2" y="2" width="6" height="6" fill="currentColor" />
        <path d="M25 25 Q 40 10 55 25 Q 70 40 55 55 Q 40 70 25 55 Q 10 40 25 25 Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="40" cy="40" r="2" fill="currentColor" />
      </svg>
    </div>
  );

  const mainContainerClasses = "p-8 md:p-16 text-center relative z-10 transition-all duration-300 " + (contentFade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2") + (isTelugu ? " space-y-6" : " space-y-10");
  
  // Unified Title Classes with Golden Background for both English and Telugu
  const titleClasses = "text-[#4A0E0E] bg-[#D4AF37] border-2 border-[#4A0E0E]/20 shadow-[0_15px_45px_rgba(212,175,55,0.4)] leading-relaxed px-10 md:px-14 py-4 rounded-full inline-block mx-auto transition-all hover:scale-[1.02] active:scale-100 relative z-10 " + 
    (isTelugu 
      ? "text-xl md:text-2xl tracking-normal py-6 font-bold font-sans" 
      : "text-2xl md:text-4xl lg:text-[2.6rem] tracking-normal font-display-english");

  // Header Parts styling logic
  const headerPartsClasses = "flex justify-between items-center text-[#800000] w-full max-w-2xl mx-auto px-4 mb-2 relative z-10 transition-all " + 
    (isTelugu 
      ? "text-xs md:text-sm uppercase font-black tracking-normal" 
      : "text-sm md:text-lg font-medium font-header-english");

  return (
    <div className={"min-h-[100dvh] bg-[#2D0505] text-[#800000] overflow-x-hidden relative transition-all duration-700 " + (isTelugu ? 'font-sans' : 'font-serif')}>
      
      {/* LANGUAGE TOGGLE BUTTON: Mahogany background, Gold text, Gold border */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[1000]">
        <button 
          onClick={handleLanguageToggle}
          className="px-8 py-3 bg-[#800000] text-[#D4AF37] rounded-full font-black shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:bg-[#D4AF37] hover:text-[#800000] hover:scale-105 transition-all transform active:scale-95 text-sm uppercase tracking-widest flex items-center gap-3 border-2 border-[#D4AF37]"
        >
          <Languages size={20} className="transition-colors" />
          <span>{t.toggle_text}</span>
        </button>
      </div>

      {/* Toast Notification */}
      <div className={"fixed top-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 " + (showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none')}>
        <div className="bg-[#D4AF37] text-[#800000] px-6 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] font-bold flex items-center gap-2 border-2 border-[#800000]/20">
          <CheckCircle2 size={20} />
          <span>Invitation Link Copied!</span>
        </div>
      </div>

      {/* EXTERIOR Decoration */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#2D0505]"></div>
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100' stroke='%23D4AF37' stroke-width='0.5'/%3E%3C/svg%3E")`,
               backgroundSize: '120px 120px'
             }}>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#5D1212_0%,#1A0202_100%)]"></div>
      </div>

      <main className="relative z-10 flex flex-col items-center p-4 md:p-10 pt-28 pb-10">
        <div className={"w-full max-w-5xl bg-[#FFFDF5] shadow-[0_40px_100px_rgba(0,0,0,0.6)] rounded-[2rem] relative overflow-hidden transition-all duration-1000 transform " + (isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0')}>
          
          {/* CONTINUOUS BORDERS */}
          <div className="absolute inset-4 border-[1px] border-[#D4AF37]/30 rounded-[1.8rem] pointer-events-none z-40"></div>
          <div className="absolute inset-6 border-[2px] border-double border-[#D4AF37]/40 rounded-[1.6rem] pointer-events-none z-40"></div>
          
          <HeritageCorner className="top-8 left-8" />
          <HeritageCorner className="top-8 right-8 rotate-90" />
          <HeritageCorner className="bottom-8 left-8 -rotate-90" />
          <HeritageCorner className="bottom-8 right-8 rotate-180" />

          <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0" 
               style={{backgroundImage: `url("https://www.transparenttextures.com/patterns/old-map.png")`}}></div>
          
          <Thoranam />

          <div className={mainContainerClasses}>
            {/* Header Ritualistic Terms */}
            <div className={headerPartsClasses}>
              <span className="flex-1 text-left">{t.header_parts[0]}</span>
              <span className="flex-1 text-center">{t.header_parts[1]}</span>
              <span className="flex-1 text-right">{t.header_parts[2]}</span>
            </div>

            {/* Ganesh Icon */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto z-10">
               <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-3xl opacity-20"></div>
               <div className="relative w-full h-full rounded-full border-2 border-[#D4AF37]/30 bg-white flex items-center justify-center p-5 shadow-sm">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-[#800000]" fill="currentColor">
                   <circle cx="50" cy="50" r="40" fill="#D4AF37" fillOpacity="0.1" />
                   <path d="M35 30 Q50 15 65 30 L65 35 L35 35 Z" fill="#D4AF37" />
                   <path d="M35 35 Q15 35 15 55 Q15 75 40 65" fill="currentColor" />
                   <path d="M65 35 Q85 35 85 55 Q85 75 60 65" fill="currentColor" />
                   <path d="M35 35 L65 35 L65 55 Q65 75 50 85 Q35 75 45 65" fill="currentColor" />
                   <path d="M45 65 Q40 60 42 55" stroke="white" strokeWidth="1" fill="none"/>
                   <path d="M40 45 Q43 42 46 45" stroke="white" strokeWidth="2" fill="none" />
                   <path d="M54 45 Q57 42 60 45" stroke="white" strokeWidth="2" fill="none" />
                   <path d="M50 38 L50 42" stroke="white" strokeWidth="2" />
                   <circle cx="50" cy="25" r="2" fill="#800000" />
                 </svg>
               </div>
            </div>

            <div className="px-4 relative z-10">
              <h1 className={titleClasses}>
                {t.main_title}
              </h1>
            </div>

            {/* Introduction */}
            {isTelugu ? (
              <div className="space-y-4 relative z-10">
                <p className="text-[#800000] font-bold text-lg md:text-xl leading-relaxed border-y border-[#D4AF37]/30 py-5 tracking-normal">
                   {t.host_intro}
                </p>
                <div className="bg-[#800000]/5 p-5 md:p-8 rounded-[2rem] border border-[#D4AF37]/20 shadow-sm">
                   <p className="text-[#800000] text-sm md:text-base leading-loose italic tracking-normal">
                      {t.lagnam_full}
                   </p>
                </div>
              </div>
            ) : (
              <p className="text-xl md:text-2xl lg:text-3xl text-[#800000] italic font-medium max-w-4xl mx-auto leading-relaxed opacity-95 relative z-10 px-8">
                {t.intro}
              </p>
            )}

            <div className={"relative z-10 " + (isTelugu ? "py-4 space-y-6" : "py-4 space-y-8")}>
              <div className="space-y-6">
                {isTelugu && (
                  <span className="text-[#800000] text-xs md:text-sm uppercase font-black opacity-70 block tracking-normal">
                    {t.relation}
                  </span>
                )}
                
                <h2 className={"text-[#800000] transition-colors " + (isTelugu ? 'text-2xl md:text-4xl lg:text-6xl tracking-normal font-bold font-telugu-names' : 'text-2xl md:text-4xl lg:[2.85rem] font-script tracking-tight')}>
                   <div className="flex items-baseline justify-center gap-2">
                     <span className={"opacity-40 font-normal " + (isTelugu ? "text-lg md:text-xl lg:text-3xl font-sans" : "text-xl md:text-2xl lg:text-3xl font-serif")}>{t.groom_prefix}</span>
                     <span className="drop-shadow-sm">{t.groom_name_only}</span>
                     <span className={"opacity-40 font-normal " + (isTelugu ? "text-lg md:text-xl lg:text-3xl font-sans" : "text-xs md:text-sm lg:text-xl font-serif")}>{t.groom_suffix}</span>
                   </div>
                </h2>

                {!isTelugu ? (
                   <div className="flex items-center justify-center gap-6">
                      <div className="h-0.5 bg-[#D4AF37] flex-1 opacity-20"></div>
                      <p className="text-[#D4AF37] font-serif italic text-2xl md:text-3xl lg:text-4xl leading-none">with</p>
                      <div className="h-0.5 bg-[#D4AF37] flex-1 opacity-20"></div>
                   </div>
                ) : (
                  <div className="h-0.5 bg-[linear-gradient(90deg,transparent,#D4AF37,transparent)] w-2/3 mx-auto opacity-30"></div>
                )}
                
                <h2 className={"text-[#800000] transition-colors " + (isTelugu ? 'text-2xl md:text-4xl lg:text-6xl tracking-normal font-bold font-telugu-names' : 'text-2xl md:text-4xl lg:[2.85rem] font-script tracking-tight')}>
                   <div className="flex items-baseline justify-center gap-2">
                     <span className={"opacity-40 font-normal " + (isTelugu ? "text-lg md:text-xl lg:text-3xl font-sans" : "text-xl md:text-2xl lg:text-3xl font-serif")}>{t.bride_prefix}</span>
                     <span className="drop-shadow-sm">{t.bride_name_only}</span>
                     <span className={"opacity-40 font-normal " + (isTelugu ? "text-lg md:text-xl lg:text-3xl font-sans" : "text-xs md:text-sm lg:text-xl font-serif")}>{t.bride_suffix}</span>
                   </div>
                </h2>

                <p className={"text-[#800000] max-w-xl mx-auto px-4 leading-relaxed font-bold " + (isTelugu ? 'text-base md:text-lg opacity-80 mt-2 block tracking-normal' : 'text-lg md:text-xl opacity-80')}>
                   {t.bride_parents}
                </p>
              </div>
            </div>

            {isTelugu && (
              <p className="italic pt-6 px-8 max-w-3xl mx-auto text-[#800000] leading-relaxed text-sm md:text-base opacity-90 relative z-10 tracking-normal">
                {t.formal_request}
              </p>
            )}

            <div className={"animate-bounce relative z-10 " + (isTelugu ? "pt-6" : "pt-8")}>
              <ArrowDown size={36} className="mx-auto text-[#D4AF37]" />
            </div>
          </div>

          {/* Event Details Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-[#D4AF37]/30 border-t border-[#D4AF37]/50 relative z-10">
            <div className="bg-white/95 backdrop-blur-[2px] p-10 md:p-16 flex flex-col items-center text-center space-y-10">
              <div className="w-14 h-14 bg-[#800000] rounded-full flex items-center justify-center text-[#D4AF37] shadow-sm">
                <JeelakarraBellamIcon size={28} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-black text-[#800000] uppercase tracking-tighter">{(t.wedding_section || '').replace(':', '').trim()}</h3>
              <div className="space-y-3">
                  <p className="text-xl font-bold text-[#800000] tracking-tight">{t.wedding_date_card}</p>
                  <p className="text-lg font-bold text-[#D4AF37]">{t.wedding_time_card}</p>
              </div>
              <div className="pt-8 border-t border-dashed border-[#D4AF37]/20 w-full space-y-2">
                <p className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em]">{(t.venue_label || '').replace(':', '').trim()}</p>
                <p className="text-2xl font-bold text-[#800000] leading-tight">{t.venue_name}</p>
                <p className="text-[#5D1212] font-bold leading-relaxed opacity-80">{t.venue_loc}</p>
              </div>
              <div className="bg-[#800000]/5 p-6 rounded-[1.5rem] w-full border border-[#800000]/10">
                 <p className="text-[10px] font-black text-[#800000] uppercase tracking-[0.4em] mb-1">{(t.dinner_label || '').replace(':', '').trim()}</p>
                 <p className="text-[#5D1212] font-black text-xl">{t.dinner_line2}</p>
              </div>
              <div className="flex flex-col w-full gap-4">
                {/* UPDATED: Specific Google Maps Link for IMA Hall */}
                <a href="https://maps.app.goo.gl/CKaKczCdHJX56og77" target="_blank" rel="noreferrer" className="bg-[#800000] text-[#FFFDF5] py-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95"><MapPin size={20} /> {t.get_directions}</a>
                <a href={weddingCalendar} target="_blank" rel="noreferrer" className="border-2 border-[#800000] text-[#800000] py-4 rounded-xl font-bold text-sm hover:bg-[#800000]/5 transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95"><Calendar size={20} /> {t.add_calendar}</a>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-[2px] p-10 md:p-16 flex flex-col items-center text-center space-y-10 border-l border-[#D4AF37]/20">
              <div className="w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#800000] shadow-sm">
                <Star size={28} className="text-[#800000]" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-black text-[#800000] uppercase tracking-tighter">{(t.reception_label || '').replace(':', '').trim()}</h3>
              <div className="space-y-3">
                <p className="text-xl font-bold text-[#800000] tracking-tight">{t.reception_date}</p>
                <p className="text-lg font-bold text-[#D4AF37]">{t.reception_time}</p>
              </div>
              <div className="pt-8 border-t border-dashed border-[#D4AF37]/20 w-full space-y-3">
                <p className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em]">{isTelugu ? 'వేదిక :' : 'Venue :'}</p>
                <p className="text-2xl font-bold text-[#800000] leading-tight">{t.reception_venue}</p>
                <div className="text-[#5D1212] font-bold leading-relaxed opacity-80">
                  <p>{t.reception_addr1}</p>
                  <p>{t.reception_addr2}</p>
                </div>
              </div>
              <div className="flex flex-col w-full gap-4 pt-[6.5rem]">
                <a href="https://maps.app.goo.gl/8WiFHoJcv8pbY6gJ9" target="_blank" rel="noreferrer" className="bg-[#800000] text-[#FFFDF5] py-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95"><MapPin size={20} /> {t.get_directions}</a>
                <a href={receptionCalendar} target="_blank" rel="noreferrer" className="border-2 border-[#800000] text-[#800000] py-4 rounded-xl font-bold text-sm hover:bg-[#800000]/5 transition-all flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95"><Calendar size={20} /> {t.add_calendar}</a>
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="p-10 md:p-24 text-center bg-white space-y-12 relative z-10 border-t border-[#D4AF37]/30">
            <h3 className="text-[#D4AF37] text-xs md:text-sm font-black uppercase opacity-90 transition-all duration-300" style={{ letterSpacing: isTelugu ? 'normal' : '1em' }}>{t.invited_by}</h3>
            <div className="space-y-6">
               <p className={"font-bold text-[#800000] tracking-tight leading-none " + (isTelugu ? "text-2xl md:text-3xl tracking-normal font-sans" : "text-2xl md:text-4xl tracking-tight")}>{t.host_name1}</p>
               <p className={"font-bold text-[#800000] tracking-tight leading-none " + (isTelugu ? "text-2xl md:text-3xl tracking-normal font-sans" : "text-2xl md:text-4xl tracking-tight")}>{t.host_name2}</p>
            </div>
            <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-16 px-10 py-4 rounded-[2.5rem] border border-[#D4AF37]/40 bg-[#FFFDF5] shadow-sm transition-transform hover:scale-[1.01]">
                  <a href="tel:9701663388" className="flex items-center gap-3 text-[#800000] font-bold text-base md:text-lg hover:text-[#5D1212] transition-colors"><Phone size={18} className="text-[#800000]" /> 97016 63388</a>
                  <div className="hidden md:block h-10 w-px bg-[#D4AF37]/20"></div>
                  <a href="tel:9985402220" className="flex items-center gap-3 text-[#800000] font-bold text-base md:text-lg hover:text-[#5D1212] transition-colors"><Phone size={18} className="text-[#800000]" /> 99854 02220</a>
            </div>
            <div className="pt-10">
               <p className="text-[#8B4513] italic text-xl font-bold opacity-90 leading-relaxed border-t border-[#D4AF37]/10 pt-10 inline-block px-16 relative tracking-normal">
                  <span className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#D4AF37]"></span>
                  {t.compliments}
               </p>
            </div>
          </footer>
        </div>
        <div className="mt-20 text-[#D4AF37]/30 text-sm uppercase tracking-[0.8em] font-black">Chirukuri Family • 2026</div>
      </main>
    </div>
  );
};

export default App;