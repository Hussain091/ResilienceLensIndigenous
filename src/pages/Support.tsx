import { Ear, BookOpen, Heart, Megaphone, Users, ExternalLink } from 'lucide-react';

export default function Support() {
  const actions = [
    {
      icon: Ear,
      title: 'Listen to Indigenous artists',
      description:
        'Follow Indigenous leaders, artists, and activists. Share their work and perspectives. Center Indigenous voices in conversations about Indigenous issues.',
      tips: [
        'Follow Indigenous creators on social media',
        'Read books and articles by Indigenous authors',
        'Attend talks and presentations by Indigenous speakers',
      ],
    },
    {
      icon: BookOpen,
      title: 'Educate yourself on Indigenous history and culture',
      description:
        'Learn about the true history of colonization, residential schools, and ongoing issues. Understand the diversity of Indigenous cultures and nations.',
      tips: [
        'Read the Truth and Reconciliation Commission report',
        'Learn whose traditional territory you live on',
        'Study treaty history and Indigenous legal traditions',
      ],
    },
    {
      icon: Heart,
      title: 'Support Indigenous initiatives and organizations',
      description:
        'Contribute time, money, or resources to organizations led by Indigenous Peoples working on issues affecting their communities.',
      tips: [
        'Shop from Indigenous owned businesses',
        'Donate to Indigenous led charities',
        'Support Indigenous artists and cultural workers',
      ],
    },
    {
      icon: Megaphone,
      title: 'Advocate for policy changes that promote equity',
      description:
        'Use your voice and vote to support policies that advance Indigenous rights, reconciliation, and self-determination.',
      tips: [
        'Contact elected officials about Indigenous issues',
        'Support land back movements',
        'Advocate for clean water and adequate housing',
      ],
    },
    {
      icon: Users,
      title: 'Attend cultural events respectfully',
      description:
        'When invited, attend powwows, ceremonies, and cultural events with respect and openness to learning. Follow protocols and ask before taking photos.',
      tips: [
        'Ask permission before taking photos',
        'Respect sacred items and ceremonies',
        'Follow dress codes and participation guidelines',
      ],
    },
  ];

  const resources = [
    {
      name: 'Indigenous Foundations',
      org: 'University of British Columbia',
      url: 'https://indigenousfoundations.arts.ubc.ca/',
      description: 'Comprehensive educational resource on Indigenous issues in Canada',
    },
    {
      name: 'Assembly of First Nations',
      org: 'AFN',
      url: 'https://www.afn.ca/',
      description: 'National advocacy organization representing First Nations in Canada',
    },
    {
      name: 'Métis Nation',
      org: 'Métis National Council',
      url: 'https://www.metisnation.ca/',
      description: 'Represents the Métis Nation and promotes Métis rights and culture',
    },
    {
      name: 'Inuit Tapiriit Kanatami',
      org: 'ITK',
      url: 'https://www.itk.ca/',
      description: 'National representative organization for Inuit in Canada',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-100">
      <div className="relative h-64 bg-gradient-to-r from-emerald-700 to-teal-600">
        <img
          src="https://images.pexels.com/photos/8612983/pexels-photo-8612983.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Community support and connection"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Ways to Be an Ally</h1>
            <p className="text-xl text-emerald-50">
              Everyone can support Indigenous communities in meaningful ways
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <p className="text-xl text-stone-700 leading-relaxed">
            Being an ally means taking action to support Indigenous Peoples so they can find justice,
            equity, and self determination. Here are meaningful ways you can contribute to supporting
            Indigenous resilience.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-amber-900 mb-3">{action.title}</h3>
                    <p className="text-lg text-stone-700 mb-4 leading-relaxed">{action.description}</p>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <p className="font-semibold text-emerald-900 mb-2">How to get started:</p>
                      <ul className="space-y-2">
                        {action.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2 text-stone-700">
                            <span className="text-emerald-600 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 flex items-center gap-3">
            <ExternalLink className="w-8 h-8 text-emerald-600" />
            Suggested Resources & Organizations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-emerald-900 group-hover:text-emerald-700 transition-colors">
                    {resource.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-2" />
                </div>
                <p className="text-sm text-emerald-700 font-medium mb-2">{resource.org}</p>
                <p className="text-stone-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Take Action Today</h3>
          <p className="text-emerald-50 text-lg max-w-3xl mx-auto">
            Supporting Indigenous resilience is an ongoing commitment. First start with something small, meaningful actions and
            continue learning and growing as an ally. Remember that this work is about supporting Indigenous
            leadership and self determination.
          </p>
        </div>
      </div>
    </div>
  );
}
