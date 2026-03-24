import { BookOpen, ExternalLink } from 'lucide-react';

export default function Resources() {
  const citations = [
    {
      citation:
        'Indigenous Foundations. "Resilience in Indigenous Communities." University of British Columbia, 2023.',
      url: 'https://indigenousfoundations.arts.ubc.ca/',
      category: 'Educational Resources',
    },
    {
      citation: 'Assembly of First Nations. "First Nations Initiatives." AFN, 2023.',
      url: 'https://www.afn.ca/',
      category: 'Organizations',
    },
    {
      citation: 'Métis Nation. "Cultural Programs." Métis Nation, 2023.',
      url: 'https://www.metisnation.ca/',
      category: 'Organizations',
    },
    {
      citation: 'Inuit Tapiriit Kanatami. "Inuit Programs and Services." ITK, 2023.',
      url: 'https://www.itk.ca/',
      category: 'Organizations',
    },
    {
      citation:
        'Truth and Reconciliation Commission of Canada. "Truth and Reconciliation Commission of Canada: Calls to Action." 2015.',
      url: 'https://www.rcaanc-cirnac.gc.ca/eng/1524494530110/1557511412801',
      category: 'Historical Documentation',
    },
    {
      citation:
        'Royal Commission on Aboriginal Peoples. "Report of the Royal Commission on Aboriginal Peoples." Government of Canada, 1996.',
      url: 'https://www.bac-lac.gc.ca/eng/discover/aboriginal-heritage/royal-commission-aboriginal-peoples/Pages/final-report.aspx',
      category: 'Historical Documentation',
    },
    {
      citation:
        '8 Key Issues for Indigenous Peoples in Canada.',
      url: 'https://www.ictinc.ca/blog/8-key-issues-for-indigenous-peoples-in-canada',
      category: 'Historical Documentation',
    },
    {
      citation:
        'Native Land Digital. "Native Land Digital: Maps." Native Land Digital, 2023.',
      url: 'https://native-land.ca/',
      category: 'Educational Resources',
    },
  ];

  const categories = [...new Set(citations.map((c) => c.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100">
      <div className="relative h-64 bg-gradient-to-r from-stone-800 to-amber-900">
        <div className="absolute inset-0 bg-stone-900 opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-3 flex items-center gap-4">
              <BookOpen className="w-12 h-12" />
              Works Cited
            </h1>
            <p className="text-xl text-amber-100">
              References and resources used in creating this website
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            This page contains all sources cited throughout this website in MLA format. All facts, stories,
            and information presented have been properly documented to ensure accuracy and give credit to the
            original sources.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg">
            <p className="text-stone-700">
              <strong>Note:</strong> Not all citations listed here, others can be found on brainstorm document. 
            </p>
          </div>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-amber-900 mb-6 pb-2 border-b-2 border-amber-600">
              {category}
            </h2>
            <div className="space-y-6">
              {citations
                .filter((c) => c.category === category)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <p className="text-stone-800 leading-relaxed mb-4 font-serif text-lg">
                      {item.citation}
                    </p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="break-all">{item.url}</span>
                    </a>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-amber-50 mb-4">Additional Resources</h2>
          <p className="text-amber-100 leading-relaxed mb-6">
            For further learning, explore the websites and resources listed above. Each
            organization offers valuable insights, educational materials, and opportunities to engage with
            Indigenous issues in meaningful ways.
          </p>
          <div className="bg-amber-800/50 rounded-lg p-4 backdrop-blur-sm">
            <p className="text-amber-50 text-sm">
              <strong>Image Credits:</strong> All images used on this website are from Indigenous sources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
