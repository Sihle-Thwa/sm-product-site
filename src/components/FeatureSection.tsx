// File: /src/components/FeatureSection.tsx
export default function FeatureSection() {
    const features = [
        { title: 'Team Management', description: 'Custom permissions, schedules, and automation tools.' },
        { title: 'Player Development', description: 'Track progress, assessments, and reports.' },
        { title: 'Administrative Tools', description: 'Custom forms, invoices, and payment systems.' },
        { title: 'Technical Highlights', description: 'Robust, scalable, and secure design.' },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-10">Overflowing with useful features</h2>
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                    {features.map((f) => (
                        <div key={f.title} className="text-center">
                            <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
                            <p className="mt-2 text-gray-600">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}