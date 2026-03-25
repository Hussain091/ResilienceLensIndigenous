import { 
  GraduationCap, 
  AlertCircle, 
  Users, 
  MapPin, 
  Clock,
  Feather,
  School,
  UserX
} from 'lucide-react';
 
export default function Barriers() {
  const challenges = [
    {
      icon: Feather,
      title: 'The Indian Act',
      description:
        'Canadian federal law, which governs matters relating to "Status Indians," Indian bands, and Indian reserves. Banned ceremonies in the year 1876. Gave government control over Indigenous communities. Parts of it are still law today. Set a major barrier for Indigenous communities (Good).',
      stats: undefined,
      number: '01',
    },
    {
      icon: School,
      title: 'Residential Schools',
      description:
        '150,000+ children from 1883 to 1996 taken from families and sent to church-run boarding school system to assimalate them into Euro Canadians. At least 6,000 died. Speaking your own language meant punishment. This was not school. It was erasure. This was one of the biggest barriers placed infront of Indigenous communities (Good).',
      stats: undefined,
      number: '02',
    },
    {
      icon: UserX,
      title: 'The Sixties Scoop',
      description:
        'Thousands of Indigenous kids in the years 1960s to 1980s were removed from homes, adopted into non-Indigenous families. A whole generation grew up disconnected from their culture and identity.',
      stats: undefined,
      number: '03',
    },
    {
      icon: GraduationCap,
      title: 'Underfunded education and health services',
      description:
        'Many Indigenous communities face significant gaps in access to quality education and healthcare compared to non-Indigenous Canadians.',
      stats: 'Indigenous students often attend schools with fewer resources and outdated infrastructure',
      number: '04',
    },
    {
      icon: AlertCircle,
      title: 'Racism and discrimination in daily life',
      description:
        'Indigenous Peoples continue to experience systemic racism in employment, healthcare, justice systems, and public spaces.',
      stats: 'Indigenous people are overrepresented in the criminal justice system and face bias in many institutions',
      number: '05',
    },
    {
      icon: Users,
      title: 'Limited political representation',
      description:
        'Despite being the original inhabitants of this land, Indigenous Peoples often lack meaningful representation in decision-making processes.',
      stats: 'Many policies affecting Indigenous communities are made without proper consultation or consent',
      number: '06',
    },
    {
      icon: MapPin,
      title: 'Loss of land and resources',
      description:
        'Ongoing development projects and treaty violations continue to threaten Indigenous lands, waters, and traditional territories.',
      stats: 'Many communities lack clean drinking water and face environmental degradation on their lands',
      number: '07',
    },
    {
      icon: Clock,
      title: 'Intergenerational trauma from residential schools',
      description:
        'The legacy of residential schools continues to impact Indigenous families and communities through trauma passed down through generations (Good).',
      stats: 'The last residential school closed in 1996, but healing is an ongoing process',
      number: '08',
    },
  ];
 
  const statHighlights = [
    { value: '35–60%', label: 'of the homeless population in Western Canada is Indigenous' },
    { value: '3×', label: 'higher suicide rates in some Indigenous communities vs national average' },
    { value: '150+', label: 'years of colonial policies and systemic inequality behind these challenges' },
  ];
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100">
 
      {/* ── HERO ── */}
      <div className="relative h-72 sm:h-80 bg-gradient-to-r from-stone-700 to-amber-900 overflow-hidden">
        <img
          src="https://www.ictinc.ca/hubfs/Blog/St-Anthonys-Residential-School_e011306856-LAC-934w.jpg"
          alt="Indigenous ceremony and community gathering"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
        <div className="absolute -right-16 top-0 bottom-0 w-64 bg-white/5 transform skew-x-12" />
        <div className="absolute -right-4 top-0 bottom-0 w-32 bg-white/5 transform skew-x-12" />
 
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-amber-400" />
            <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
              Barriers &amp; Challenges
            </p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-3 leading-tight max-w-2xl">
            Understanding the Barriers
          </h1>
          <p className="text-lg text-amber-100 max-w-xl">
            Recognizing systemic inequities helps us appreciate the importance of resilience
          </p>
        </div>
      </div>
 
      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
 
        {/* ── INTRO CARD ── */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-stone-600 to-amber-700" />
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-amber-100/60 blur-2xl pointer-events-none" />
          <div className="pl-8 pr-7 sm:pl-12 sm:pr-10 md:pr-12 py-8 sm:py-10 md:py-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-700 mb-4">
              Overview
            </p>
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed mb-6">
              Resilience shows that the barriers Indigenous people faced were not an accident. They
              were the result of long-term government policies and systems. Even today, Indigenous
              Peoples in Canada face systemic inequities. Understanding these challenges helps us
              appreciate the importance of resilience and the ongoing need for meaningful change and
              reconciliation.
            </p>
 
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {statHighlights.map((s, i) => (
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-700 mb-1">{s.value}</div>
                  <p className="text-sm text-stone-600 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
 
            <div className="bg-stone-50 border border-stone-100 rounded-2xl px-6 py-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-3">A few examples:</p>
              <ul className="space-y-2">
                {[
                  '35% to 60% of the homeless population in Western Canada is Indigenous',
                  'Suicide rates in some Indigenous communities are about 3 times higher than the national average',
                  'These challenges are not personal failures',
                  'They are the result of over 150 years of colonial policies and systemic inequality',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700 text-sm sm:text-base leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
 
        {/* ── CHALLENGE CARDS ── */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber-700" />
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-700">
              Key Barriers
            </p>
          </div>
          <div className="space-y-4">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-md p-6 md:p-8 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 border border-stone-100 hover:border-amber-200 overflow-hidden"
                >
                  <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-amber-100 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-2xl pointer-events-none" />
                  <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-6">
                    <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 flex-shrink-0">
                      <span className="text-4xl sm:text-5xl font-bold text-stone-100 group-hover:text-stone-200 transition-colors leading-none select-none">
                        {challenge.number}
                      </span>
                      <div className="w-12 h-12 bg-gradient-to-br from-stone-600 to-amber-700 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-800 transition-colors">
                        {challenge.title}
                      </h3>
                      <p className="text-sm sm:text-base text-stone-700 leading-relaxed mb-3">
                        {challenge.description}
                      </p>
                      {challenge.stats && (
                        <div className="flex items-start gap-3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3">
                          <span className="text-amber-600 mt-0.5 flex-shrink-0 font-bold">→</span>
                          <p className="text-stone-600 italic text-sm">{challenge.stats}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
 
        {/* ── STRENGTH DESPITE BARRIERS ── */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-orange-800" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 15% 50%, rgba(251,191,36,0.5) 0%, transparent 50%),
                                radial-gradient(circle at 85% 20%, rgba(251,146,60,0.4) 0%, transparent 40%)`,
            }}
          />
          <div className="absolute -right-16 top-0 bottom-0 w-64 bg-white/5 transform skew-x-12" />
          <div className="absolute -right-4 top-0 bottom-0 w-32 bg-white/5 transform skew-x-12" />
 
          <div className="relative z-10 p-8 sm:p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-amber-400" />
                <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase">
                  Reframing the Narrative
                </p>
                <div className="h-px w-8 bg-amber-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-50 mb-6">
                Strength Despite Barriers
              </h2>
              <div className="w-12 h-0.5 bg-amber-500 mx-auto mb-8" />
              <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed mb-5">
                The main story told about Indigenous people in Canada has been that they are always involved in problems such as poverty, addiction, and crime. 
                When that's all people hear, they start to blame Indigenous communities for their own struggles. 
                That narrative is not just wrong, but it also hides who actually caused those problems. Framing Indigenous people as a "problem to be fixed" causes psychological harm to their communities.
                It makes non-Indigenous people feel like nothing needs to change and ignores years of laws designed to break communities apart. 
                This is why an anti-oppressive lens is important, as it allows you to ask different questions. Why do these problems exist? Who created them?. 
                To support Indigenous communities, information can be found on the "How to Support" page. 
              </p>
              
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
}
