import { GraduationCap, AlertCircle, Users, MapPin, Clock } from 'lucide-react';

export default function Barriers() {
  const challenges = [
    {
      icon: GraduationCap,
      title: 'Underfunded education and health services',
      description:
        'Many Indigenous communities face significant gaps in access to quality education and healthcare compared to non-Indigenous Canadians.',
      stats: 'Indigenous students often attend schools with fewer resources and outdated infrastructure',
    },
    {
      icon: AlertCircle,
      title: 'Racism and discrimination in daily life',
      description:
        'Indigenous Peoples continue to experience systemic racism in employment, healthcare, justice systems, and public spaces.',
      stats: 'Indigenous people are overrepresented in the criminal justice system and face bias in many institutions',
    },
    {
      icon: Users,
      title: 'Limited political representation',
      description:
        'Despite being the original inhabitants of this land, Indigenous Peoples often lack meaningful representation in decision-making processes.',
      stats: 'Many policies affecting Indigenous communities are made without proper consultation or consent',
    },
    {
      icon: MapPin,
      title: 'Loss of land and resources',
      description:
        'Ongoing development projects and treaty violations continue to threaten Indigenous lands, waters, and traditional territories.',
      stats: 'Many communities lack clean drinking water and face environmental degradation on their lands',
    },
    {
      icon: Clock,
      title: 'Intergenerational trauma from residential schools',
      description:
        'The legacy of residential schools continues to impact Indigenous families and communities through trauma passed down through generations.',
      stats: 'The last residential school closed in 1996, but healing is an ongoing process',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100">
      <div className="relative h-64 bg-gradient-to-r from-stone-700 to-amber-900">
        <div className="absolute inset-0 bg-stone-900 opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-3">
              Understanding the Barriers
            </h1>
            <p className="text-xl text-amber-100">
              Recognizing systemic inequities helps us appreciate the importance of resilience
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-xl text-stone-700 leading-relaxed">
Even today, Indigenous Peoples in Canada face systemic inequities. Understanding these challenges helps us appreciate the importance of 
            resilience and the ongoing need for meaningful change and reconciliation. </p>

<ul className="mt-4 space-y-2 text-lg text-stone-700">
  <li>• 35% to 60% of the homeless population in Western Canada is Indigenous</li>
  <li>• Suicide rates in some Indigenous communities are about 3 times higher than the national average</li>
  <li>• These challenges are not personal failures</li>
  <li>• They are the result of over 150 years of colonial policies and systemic inequality</li>
</ul>
        </div>

        <div className="space-y-8 mb-12">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-amber-700 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-amber-900 mb-3">{challenge.title}</h3>
                    <p className="text-lg text-stone-700 mb-4 leading-relaxed">
                      {challenge.description}
                    </p>
                    <div className="bg-stone-50 border-l-4 border-stone-600 p-4 rounded-r-lg">
                      <p className="text-stone-700 italic">{challenge.stats}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-amber-900 to-orange-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-amber-50 mb-6 text-center">
            Strength Despite Barriers
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-amber-100 text-lg leading-relaxed mb-4">
              It is important to learn about these challenges not to feel bad for Indigenous communities,
              but to understand how much strength it takes to keep their culture, identity, and traditions alive.
              Even with these difficulties, Indigenous communities continue to grow and support each other.
            </p>
            <p className="text-amber-100 text-lg leading-relaxed">
              They show resilience everyday by protecting their languages, cultures,
              and ways of life. This shows strength, determination, and the ability to keep going
              even when facing unfair challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
