const cards = [
  {
    title: 'AI-Powered Tools',
    description: 'Unlock your academic potencial with the abilitry to create, learn, and share high quality content with out suite of AI-Powered tools.',
  },
  {
    title: 'Long-Term Retention',
    description: 'Unlock your academic potencial with the abilitry to create, learn, and share high quality content with out suite of AI-Powered tools.',
  },
  {
    title: 'Deep Learning',
    description: 'Unlock your academic potencial with the abilitry to create, learn, and share high quality content with out suite of AI-Powered tools.',
  },
]

export function Features() {
  return (
    <section id="features" className="container py-20 text-center">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col gap-3 w-3/4">
            <h2 className="text-4xl font-semibold">Depp Learning and Long-Term Retention</h2>
            <p className="text-lg text-slate-500 text-justify">
              Unlock your academic potencial with the ability to create, learn,
              and share high quality content with out suite of AI-Powered tools.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, id) => (
            <div key={id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-teal-600">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}