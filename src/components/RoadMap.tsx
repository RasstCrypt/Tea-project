'use client';

const roadmapItems = [
  { percentage: '25%', description: 'First NFT art has been completed! 500 unique NFTs ready for early Q4 2024' },
  { percentage: '50%', description: 'Community growth and development' },
  { percentage: '75%', description: 'Launch of exclusive features' },
  { percentage: '100%', description: 'Full collection release' },
];

export default function RoadMap() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Road Map</h2>
        <div className="max-w-3xl mx-auto">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex items-center mb-8">
              <div className="w-24 text-orange-500 font-bold">{item.percentage}</div>
              <div className="flex-1 bg-gray-800 p-4 rounded-lg">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
