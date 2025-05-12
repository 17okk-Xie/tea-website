import Link from "next/link";

export default function ProductsPage() {
  // Sample tea products data
  const teaProducts = [
    {
      id: "longjing",
      name: "Longjing Tea",
      category: "Green Tea",
      region: "Hangzhou, Zhejiang",
      description: "Produced in Longjing village of West Lake in Hangzhou. Emerald in color, high in fragrance, mellow in taste, with a flat smooth shape. One of China's top ten famous teas.",
      price: "¥380 - ¥880",
      grading: ["Premium", "Pre-Qingming", "Post-Qingming", "Standard"]
    },
    {
      id: "tieguanyin",
      name: "Tieguanyin",
      category: "Oolong Tea",
      region: "Anxi, Fujian",
      description: "A specialty from Anxi, Fujian. This light fragrant Tieguanyin has a fresh and lasting aroma with a rich, lingering sweet aftertaste. One of China's top ten famous teas.",
      price: "¥260 - ¥780",
      grading: ["Premium", "Grade 1", "Grade 2", "Grade 3"]
    },
    {
      id: "puer",
      name: "Pu'er Tea",
      category: "Dark Tea",
      region: "Pu'er, Yunnan",
      description: "A specialty from Pu'er, Yunnan. It gets better with age, featuring a unique aged aroma and a rich, sweet aftertaste. Available in both raw and ripe varieties.",
      price: "¥120 - ¥6800",
      grading: ["Premium", "Grade 1", "Grade 2", "Grade 3"]
    },
    {
      id: "dahongpao",
      name: "Da Hong Pao",
      category: "Oolong Tea",
      region: "Wuyi Mountain, Fujian",
      description: "A premium variety of Wuyi rock tea, with a mild character, powerful and lasting aroma, rich taste, and a unique rock essence.",
      price: "¥380 - ¥3800",
      grading: ["Premium", "Grade 1", "Grade 2"]
    },
    {
      id: "biluochun",
      name: "Biluochun",
      category: "Green Tea",
      region: "Suzhou, Jiangsu",
      description: "Produced around Taihu Lake in Jiangsu, tightly rolled like spirals, with visible white hairs and rich leaf composition. Fresh aroma and mellow taste.",
      price: "¥260 - ¥680",
      grading: ["Premium", "Pre-Qingming", "Post-Qingming"]
    },
    {
      id: "baihao",
      name: "Silver Needle White Tea",
      category: "White Tea",
      region: "Fuding, Fujian",
      description: "The most premium white tea, made entirely from tea buds, densely covered with white hairs, silver in color. When brewed, the tea is light apricot yellow in color with a fresh taste.",
      price: "¥480 - ¥1200",
      grading: ["Premium", "Grade 1", "Grade 2"]
    }
  ];

  // Group teas by category
  const teaCategories = teaProducts.reduce((acc, tea) => {
    if (!acc[tea.category]) {
      acc[tea.category] = [];
    }
    acc[tea.category].push(tea);
    return acc;
  }, {} as Record<string, typeof teaProducts>);

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-8 text-center">Tea Products</h1>
        
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(teaCategories).map((category) => (
            <button 
              key={category}
              className="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-800 rounded-full transition duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products listing by category */}
        {Object.entries(teaCategories).map(([category, teas]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-green-700 mb-6 border-b border-green-200 pb-2">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teas.map((tea) => (
                <div key={tea.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{tea.name}</h3>
                      <span className="text-green-700 font-medium">{tea.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">Origin: {tea.region}</p>
                    <p className="text-gray-600 mb-4 text-sm">{tea.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tea.grading.map((grade) => (
                        <span key={grade} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                          {grade}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/products/${tea.id}`}
                      className="text-green-700 hover:text-green-800 font-medium text-sm inline-flex items-center"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 