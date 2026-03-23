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
      <div className="relative h-64 bg-gradient-to-r from-orange-800 to-amber-900">
        <img
          src="https://images.pexels.com/photos/6207798/pexels-photo-6207798.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Indigenous art and cultural expression"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-50">
            Defining Resilience in an Indigenous Context
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
        <p className="text-xl text-stone-700 leading-relaxed mb-6">
          Resilience for Indigenous Peoples in Canada is the ability to survive and thrive despite centuries of colonization, oppression, and systemic barriers. 
          This is shown through the ways Indigenous communities have preserved their languages, cultures, and traditions, while still adapting and growing in the face of new challenges.
            </p>

<p className="text-lg text-stone-600 leading-relaxed">
  The resilience is not just about overcoming the past, but also about continuing to protect identity, strengthen communities, and pass knowledge to future generations. 
  Through storytelling, education, and cultural practices, Indigenous People maintain their connections to their land, history, and values, showing strength in the face of ongoing challenges (University of British Columbia, 2023).
</p>
        </div>

        <h2 className="text-3xl font-bold text-amber-900 mb-8">Key Aspects of Indigenous Resilience</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {keyPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-amber-900 mb-2">{point.title}</h3>
                    <p className="text-stone-600">{point.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
