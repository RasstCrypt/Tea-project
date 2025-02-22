'use client';

const teamMembers = [
  {
    name: 'Tom Par',
    role: 'Program Manager',
    image: '/1.png'
  },
  {
    name: 'Izzy',
    role: 'Creative Director',
    image: '/2.png'
  },
  {
    name: 'Leo',
    role: 'Marketing Director',
    image: '/3.png'
  }
];

export default function Team() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 mx-auto rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}