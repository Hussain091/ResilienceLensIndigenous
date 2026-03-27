import { ArrowRight, Heart, Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
 
interface HomeProps {
  onNavigate: (page: string) => void;
}
 
const timelineEras = [
  {
    year: '1876',
    era: 'The Indian Act',
    image: 'https://www.ictinc.ca/hubfs/Permit-leave-reserve_1092w.jpg',
    imageAlt: 'Original Indian Act document 1876',
    withoutResilience: {
      label: 'Without Resilience',
      outcome: 'Complete cultural erasure, languages disappear within a generation, ceremonies vanish, communities have no legal standing to fight back. Indigenous identity is forgotten.',
      color: 'from-red-900 to-rose-800',
      icon: '✕',
    },
    withResilience: {
      label: 'With Resilience',
      outcome: 'Communities secretly maintain ceremonies underground. Elders pass language to children in whispers. ',
      color: 'from-amber-800 to-orange-700',
      icon: '↑',
    },
    fact: 'The Indian Act of 1876 banned Indigenous ceremonies, restricted movement, and placed entire Nations under federal control.',
  },
  {
    year: '1883–1996',
    era: 'Residential Schools',
    image: 'https://static01.nyt.com/images/2021/06/28/world/00INDIGENOUS-SCHOOLS1/00INDIGENOUS-SCHOOLS1-superJumbo.jpg?quality=75&auto=webp',
    imageAlt: 'Kamloops Indian Residential School building',
    withoutResilience: {
      label: 'Without Resilience',
      outcome: 'Children lose all connection to family, language, and culture leading to generations grow up not knowing who they are.',
      color: 'from-red-900 to-rose-800',
      icon: '✕',
    },
    withResilience: {
      label: 'With Resilience',
      outcome: 'Survivors speak up and families document what was taken. Some children teach each other their languages in secret.',
      color: 'from-amber-800 to-orange-700',
      icon: '↑',
    },
    fact: 'Over 150,000 children were taken from their families. At least 6,000 died. The last school closed in 1996.',
  },
  {
    year: '1960s–1980s',
    era: 'The Sixties Scoop',
    image: 'https://d3d0lqu00lnqvz.cloudfront.net/media/media/9fee628e-1ce5-4c82-9ebb-d5b2764b09c4.jpg',
    imageAlt: 'Indigenous dancers at the 2010 Olympics Aboriginal Pavilion',
    withoutResilience: {
      label: 'Without Resilience',
      outcome: 'An entire generation grows up without cultural roots, no one receivestThe knowledge of elders and languages reach their final speakers with no successors.',
      color: 'from-red-900 to-rose-800',
      icon: '✕',
    },
    withResilience: {
      label: 'With Resilience',
      outcome: 'Adoptees later search for and reconnect with their Nations and communities create records and archives to preserve what was stolen and legal battles begin.',
      color: 'from-amber-800 to-orange-700',
      icon: '↑',
    },
    fact: 'Thousands of Indigenous children were removed from homes and placed with non Indigenous families, severing cultural ties across a whole generation.',
  },
  
  {
    year: '2012',
    era: 'Idle No More',
    image: 'https://guelphmuseums.ca/wp-content/uploads/2023/01/Idle-No-More-1-e1673399551778-848x300.png',
    imageAlt: 'Idle No More round dance flash mob at West Edmonton Mall',
    withoutResilience: {
      label: 'Without Resilience',
      outcome: 'Bills passing without consultation go unchallenged. Environmental protections on Indigenous land are removed.',
      color: 'from-red-900 to-rose-800',
      icon: '✕',
    },
    withResilience: {
      label: 'With Resilience',
      outcome: 'Four women in Saskatchewan create a global movement. Parliament Hill is flooded with protesters and Idle No More spreads to 30+ countries.',
      color: 'from-amber-800 to-orange-700',
      icon: '↑',
    },
    fact: 'Idle No More became one of the largest Indigenous led protest movements in Canadian history, started by four women responding to legislation that threatened Indigenous sovereignty.',
  },
 
  {
    year: '2025',
    era: 'Today',
    image: 'https://multiculturalkidblogs.com/wp-content/uploads/2014/11/Mikmaq-Quill-Box-button.jpg',
    imageAlt: "Mi'kmaq traditional crafts representing cultural continuity",
    withoutResilience: {
      label: 'Without Resilience',
      outcome: 'Languages are extinct. Cultures are erased. No political representation. No legal victories. No Idle No More. No culture left to pass down. The plan of the colonists would have worked.',
      color: 'from-red-900 to-rose-800',
      icon: '✕',
    },
    withResilience: {
      label: 'With Resilience',
      outcome: '12 Indigenous MPs elected. Mikmaw Language Act passed. Languages being revived from recordings. Communities are healing and are still fighting.',
      color: 'from-amber-800 to-orange-700',
      icon: '↑',
    },
    fact: 'Indigenous communities across Canada are leading in language revitalization, economic sovereignty, and political representation  on their own terms.',
  },
];
 
export default function Home({ onNavigate }: HomeProps) {
  const keywords = ['Strength', 'Culture', 'Persistence', 'Community', 'Heritage', 'Wisdom'];
  const [activeEra, setActiveEra] = useState(0);
  const [activeView, setActiveView] = useState<'with' | 'without'>('with');
 
  const era = timelineEras[activeEra];
  const goNext = () => { setActiveEra((p) => Math.min(p + 1, timelineEras.length - 1)); setActiveView('with'); };
  const goPrev = () => { setActiveEra((p) => Math.max(p - 1, 0)); setActiveView('with'); };
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100">
 
      {/* ── HERO — untouched ── */}
      <div className="relative h-96 bg-gradient-to-r from-amber-900 to-orange-800 overflow-hidden">
        <img
          src="https://worldbank.scene7.com/is/image/worldbankprod/Screenshot-2024-08-08-20181199?wid=780&hei=439&qlt=85,0&resMode=sharp"
          alt="Indigenous ceremony and community gathering"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-50 mb-4 leading-tight">
              Resilience
            </h1>
            <p className="text-2xl md:text-3xl text-amber-100 font-light">
              Understanding Indigenous Resilience in Canada <br />
              By: Hussain Khokhawala <br />
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {keywords.map((word, index) => (
              <span
                key={word}
                className="px-4 py-2 bg-amber-800/60 text-amber-50 rounded-full text-sm font-medium backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
 
        {/* ── INTRO CARD — untouched ── */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
            Resilience: Indigenous Strength in Canada
          </h2>
          <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed">
            <p className="text-xl mb-4">
              Resilience is the process and outcome of successfully adapting to difficult or challenging life experiences, especially through mental, emotional, and behavioral flexibility and adjustment to external and internal demands.
              A number of factors contribute to how well people adapt to adversities, predominant among them the ways in which individuals view and engage with the world (apa 2014).
              It is the ability to "bounce back" from difficult experiences, stress, or failures, making you grow stronger after a setback (American Psychological Association).
            </p>
            <p className="text-lg">
              This website explores the resilience of Indigenous communities with an anti opressive lens, the barriers they face, and how
              we can support their ongoing cultural, social, and political strength.
            </p>
          </div>
        </div>
 
        {/* ── INTERACTIVE TIMELINE — new addition only ── */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="h-1.5 bg-gradient-to-r from-orange-500 to-amber-600" />
          <div className="p-7 sm:p-10 md:p-12">
 
            <div className="text-center mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-2">
                Interactive Feature
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-2">
                What If Resilience Had Not Existed?
              </h2>
              <p className="text-stone-500 text-sm sm:text-base max-w-2xl mx-auto">
                Explore key moments in history and see how Indigenous resilience changed the outcome. Toggle between two paths to understand what was truly at stake.
              </p>
            </div>
 
            {/* Era dot nav */}
            <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
              {timelineEras.map((e, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveEra(i); setActiveView('with'); }}
                  className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-all duration-200 ${
                    i === activeEra ? 'opacity-100' : 'opacity-35 hover:opacity-60'
                  }`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeEra ? 'bg-amber-600' : 'bg-stone-300'}`} />
                  <span className="text-xs text-stone-400 hidden sm:block whitespace-nowrap">{e.year}</span>
                </button>
              ))}
            </div>
 
            {/* Card */}
            <div className="bg-stone-50 rounded-2xl border border-stone-100 overflow-hidden mb-5">
              {/* Photo banner */}
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <img
                  key={era.year}
                  src={era.image}
                  alt={era.imageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-3xl sm:text-4xl font-bold text-amber-200 leading-none block">{era.year}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">{era.era}</h3>
                  </div>
                  {/* Toggle overlay */}
                  <div className="flex-shrink-0 bg-black/30 backdrop-blur-sm rounded-xl p-1 border border-white/20 flex">
                    <button
                      onClick={() => setActiveView('with')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        activeView === 'with' ? 'bg-amber-500 text-white shadow' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      With Resilience
                    </button>
                    <button
                      onClick={() => setActiveView('without')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        activeView === 'without' ? 'bg-red-700 text-white shadow' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      Without Resilience
                    </button>
                  </div>
                </div>
              </div>
 
              {/* Outcome */}
              <div className="p-5 sm:p-6">
                <div
                  className={`rounded-xl p-5 bg-gradient-to-br ${
                    activeView === 'with' ? era.withResilience.color : era.withoutResilience.color
                  } transition-all duration-300 mb-4`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">
                        {activeView === 'with' ? era.withResilience.icon : era.withoutResilience.icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1.5">
                        {activeView === 'with' ? era.withResilience.label : era.withoutResilience.label}
                      </p>
                      <p className="text-white text-sm sm:text-base leading-relaxed">
                        {activeView === 'with' ? era.withResilience.outcome : era.withoutResilience.outcome}
                      </p>
                    </div>
                  </div>
                </div>
 
                <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
                  <span className="text-amber-600 font-bold text-sm flex-shrink-0 whitespace-nowrap">Historical fact:</span>
                  <p className="text-stone-600 text-sm leading-relaxed">{era.fact}</p>
                </div>
              </div>
            </div>
 
            {/* Prev / Next */}
            <div className="flex items-center justify-between">
              <button
                onClick={goPrev}
                disabled={activeEra === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 text-stone-500 hover:text-amber-800 hover:border-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <span className="text-stone-400 text-sm">{activeEra + 1} of {timelineEras.length}</span>
              <button
                onClick={goNext}
                disabled={activeEra === timelineEras.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 text-stone-500 hover:text-amber-800 hover:border-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-medium"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
 
          </div>
        </div>
 
        {/* ── THREE CARDS — untouched ── */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-orange-600">
            <Heart className="w-12 h-12 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-3">Cultural Preservation</h3>
            <p className="text-stone-600">
              Maintaining language, traditions, and ceremonies that have been passed down through
              generations.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-amber-600">
            <Users className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-3">Community Strength</h3>
            <p className="text-stone-600">
              Building connections and supporting one another through shared experiences and collective
              healing.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-stone-600">
            <BookOpen className="w-12 h-12 text-stone-600 mb-4" />
            <h3 className="text-xl font-bold text-amber-900 mb-3">Knowledge Sharing</h3>
            <p className="text-stone-600">
              Passing wisdom through storytelling, art, and education to future generations.
            </p>
          </div>
        </div>
 
        {/* ── CTA BANNER — untouched ── */}
        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-50 mb-4">
            Explore the Stories, Examples, and Ways to Support
          </h3>
          <p className="text-amber-100 text-lg mb-6 max-w-2xl mx-auto">
            Discover how Indigenous communities demonstrate resilience and learn how you can be an ally in
            supporting Indigenous strength.
          </p>
          <button
            onClick={() => onNavigate('resilience')}
            className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-100 transition-all hover:scale-105 shadow-lg"
          >
            Begin Your Journey
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
 
      </div>
    </div>
  );
}
