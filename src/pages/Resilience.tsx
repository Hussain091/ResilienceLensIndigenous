import { MessageCircle, Book, Megaphone, Heart } from 'lucide-react';

export default function Resilience() {
  const keyPoints = [
    {
      icon: MessageCircle,
      title: 'Maintaining language and cultural practices',
      description:
        'They preserved their languages by teaching them in schools, using them in everyday community life, and passing them down from elders to younger generations.',
    },
    {
      icon: Book,
      title: 'Passing knowledge through storytelling, ceremonies, and art',
      description:
        'Indigenous people shared traditional knowledge, values, and teachings through oral traditions, cultural events, and artistic expression.',
    },
    {
      icon: Megaphone,
      title: 'Advocating for Indigenous rights and representation',
      description:
        'They fought for recognition, self-determination, and meaningful participation in decisions affecting Indigenous communities.',
    },
    {
      icon: Heart,
      title: 'Healing from historical trauma',
      description:
        'They addressed intergenerational impacts of colonization through community healing initiatives and cultural reclamation.',
    },
  ];

  const resilienceCycle = [
    { step: 'Historical Trauma', description: 'Colonization, residential schools, land loss' },
    { step: 'Adaptation', description: 'Communities find ways to survive and maintain identity' },
    { step: 'Cultural Survival', description: 'Languages, traditions, and knowledge continue to thrive' },
    { step: 'Community Strength', description: 'Collective healing and empowerment' },
  ];

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100">
 
      {/* ── HERO ── */}
      <div className="relative h-80 sm:h-96 bg-gradient-to-r from-orange-800 to-amber-900 overflow-hidden">
        <img
          src="https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/images/print-edition/20170701_AMP001_0.jpg"
          alt="Indigenous art and cultural expression"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        {/* layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 via-amber-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/70 via-transparent to-transparent" />
 
        {/* decorative diagonal stripe */}
        <div className="absolute -right-16 top-0 bottom-0 w-64 bg-white/5 transform skew-x-12" />
        <div className="absolute -right-4 top-0 bottom-0 w-32 bg-white/5 transform skew-x-12" />
 
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-amber-400" />
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              What Is Resilience?
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 leading-tight max-w-2xl">
            Defining Resilience in an Indigenous Context
          </h1>
          {/* pill tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {['Strength', 'Culture', 'Persistence', 'Community', 'Heritage', 'Wisdom'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-amber-100 border border-white/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
 
      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
 
        {/* ── INTRO CARD ── */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* thick left accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-orange-500 to-amber-600" />
          {/* subtle top-right decorative blob */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-100/60 blur-2xl pointer-events-none" />
 
          <div className="pl-8 pr-7 sm:pl-12 sm:pr-10 md:pr-12 py-8 sm:py-10 md:py-12">
            {/* section label */}
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-600 mb-4">
              Overview
            </p>
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed mb-6">
              Resilience for Indigenous People in Canada is the ability to survive and go forward
              despite facing years of colonization, oppression, and systemic barriers. For Indigenous
              People in Canada, resilience means refusing to disappear, holding onto their culture and language
              even when the law said you could not, keeping traditions alive for the next generation and
              choosing your community over and over, even when systems made that really hard,
              Through an anti-discriminatory lens, resilience adds a new perspective. Indigenous
              People are not defined by what happened to them but instead are defined by the fact
              that they kept going forward. Resilience is not a personality trait but a choice
              they made for hundreds of years and colonial pressure could not take that away
              despite how hard they tried. Ways of colonial pressure could be found on the barriers
              tab of this site.
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl px-6 py-5">
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                This shows why resilience is important as it allows Indigenous communities in Canada to preserve their identity 
                and maintain their cultural heritage despite historical and ongoing challenges. 
                This is done through storytelling, education, and cultural practices, resilience ensures that knowledge, traditions, and values are passed down to future generations while strengthening community connections to the land, history, and each other.
              </p>
            </div>
          </div>
        </div>
 
        {/* ── KEY ASPECTS ── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber-600" />
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-600">
              Breaking It Down
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-8">
            Key Aspects of Indigenous Resilience
          </h2>
 
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {keyPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-md p-6 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-stone-100 hover:border-amber-200"
                >
                  {/* hover glow blob */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-amber-100 opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-xl pointer-events-none" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-amber-900 mb-2 leading-snug">
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
            The Cycle of Resilience
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {resilienceCycle.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl p-6 text-center shadow-lg h-full flex flex-col justify-center">
                  <div className="text-amber-50 text-4xl font-bold mb-2">{index + 1}</div>
                  <h3 className="text-xl font-bold text-amber-50 mb-3">{phase.step}</h3>
                  <p className="text-amber-100 text-sm">{phase.description}</p>
                </div>
                {index < resilienceCycle.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 border-t-4 border-r-4 border-amber-600 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-stone-600 italic max-w-3xl mx-auto">
              This ongoing cycle demonstrates how Indigenous communities continuously adapt, survive, and
              strengthen their cultural identity despite historical and ongoing challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
