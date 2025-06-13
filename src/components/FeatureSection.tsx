// File: /src/components/FeatureSection.tsx
export default function FeatureSection() {
    const features = [
        { title: 'Team Management', description: 'Custom permissions, schedules, and automation tools.' },
        { title: 'Player Development', description: 'Track progress, assessments, and reports.' },
        { title: 'Administrative Tools', description: 'Custom forms, invoices, and payment systems.' },
        { title: 'Technical Highlights', description: 'Robust, scalable, and secure design.' },
    ];

    return (
        <section className="bg-gray-50 flex flex-col items-center w-full py-24 px-0 gap-16">
            <div className="flex flex-col items-start gap-8 w-fit px-8 py-0">
                <h4>Features</h4>
                <h2 className=" font-semibold text-center text-gray-900 ">Overflowing with useful features</h2>
                <p>Sports management has evolved dramatically in the digital age. Organizations that embrace comprehensive platforms like this one gain a competitive advantage both on and off the field.</p>
            </div>
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex w-1280px py-0 px-8 gap-16">
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