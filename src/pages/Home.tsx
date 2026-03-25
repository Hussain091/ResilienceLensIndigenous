import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const keywords = ['Strength', 'Culture', 'Persistence', 'Community', 'Heritage', 'Wisdom'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100">
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
              Understanding Indigenous Resilience in Canada <br/>
              By: Hussain Khokhawala <br/> 
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
