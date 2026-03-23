import { Languages, Palette, Megaphone, HeartPulse } from 'lucide-react';

export default function Stories() {
  const examples = [
    {
      icon: Languages,
      title: 'Language Revitalization Programs',
      description:
        'Communities across Canada are bringing back Indigenous languages through school programs and apps.',
      example: 'Mi\'kmaw language classes in Nova Scotia',
      details:
        'The Mi\'kmaw language program has successfully integrated traditional language instruction into schools, creating fluent speakers among young people and preserving this vital aspect of cultural identity.',
      image: 'https://images.pexels.com/photos/8612983/pexels-photo-8612983.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-600',
    },
    {
      icon: Palette,
      title: 'Cultural Arts and Ceremonies',
      description:
        'Indigenous artists, dancers, and musicians preserve cultural traditions and educate the public.',
      example: 'Powwows, traditional drumming, and art exhibitions',
      details:
        'Annual powwows bring together Indigenous communities to celebrate through dance, music, and art. These gatherings strengthen cultural connections and share traditions with broader audiences.',
      image: 'https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: Megaphone,
      title: 'Advocacy and Activism',
      description:
        'Indigenous leaders advocate for land rights, environmental protection, and government recognition.',
      example: 'Idle No More movement',
      details:
        'The Idle No More movement emerged as a powerful grassroots initiative advocating for Indigenous sovereignty, environmental protection, and respect for treaty rights, inspiring similar movements worldwide.',
      image: 'https://images.pexels.com/photos/6207798/pexels-photo-6207798.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-stone-600 to-amber-700',
    },
    {
      icon: HeartPulse,
      title: 'Healing and Community Programs',
      description: 'Programs addressing mental health, trauma recovery, and community support.',
      example: 'First Nations Wellness Programs',
      details:
        'Community-led wellness initiatives combine traditional healing practices with contemporary mental health support, addressing intergenerational trauma and promoting holistic wellbeing.',
      image: 'https://images.pexels.com/photos/8612987/pexels-photo-8612987.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-emerald-600 to-teal-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100">
      <div className="relative h-64 bg-gradient-to-r from-amber-900 to-orange-800">
        <img
          src="https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Indigenous community celebration"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-3">
              Real-Life Examples of Indigenous Resilience
            </h1>
            <p className="text-xl text-amber-100">
              Indigenous communities continue to show resilience in education, activism, and cultural
              preservation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {examples.map((example, index) => {
            const Icon = example.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}
              >
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-64 md:h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-20`}
                  ></div>
                </div>

                <div className="md:w-3/5 p-8 md:p-12">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${example.color} mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl font-bold text-amber-900 mb-4">{example.title}</h2>

                  <p className="text-lg text-stone-700 mb-4 leading-relaxed">{example.description}</p>

                  <div className="bg-amber-50 border-l-4 border-amber-600 p-4 mb-4 rounded-r-lg">
                    <p className="text-sm font-semibold text-amber-900 mb-1">Example:</p>
                    <p className="text-amber-800 font-medium">{example.example}</p>
                  </div>

                  <p className="text-stone-600 leading-relaxed">{example.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-amber-50 mb-4">
            These Are Just a Few Examples
          </h3>
          <p className="text-amber-100 text-lg max-w-3xl mx-auto">
            Indigenous communities across Canada demonstrate resilience every day. They do this by using their language, 
            taking care of the environment and political advocacy. These efforts represent the ongoing 
            resilience and determination of Indigenous Peoples.
          </p>
        </div>
      </div>
    </div>
  );
}
