import { useState } from 'react';

interface Bullet {
  text: string;
  critical?: boolean;
}

interface Entry {
  title: string;
  bullets: Bullet[];
}

interface Section {
  title: string;
  entries: Entry[];
}

interface Props {
  sections: Section[];
  abridged: Section[];
}

export default function ResumeToggle({ sections, abridged }: Props) {
  const [showDetailed, setShowDetailed] = useState(false);

  const renderSections = (list: Section[]) => (
    <>
      {list.map((section) => (
        <div className="mt-4" key={section.title}>
          <h4 className="text-xl dm-serif">{section.title}</h4>
          {section.entries.map((entry) => (
            <div className="mt-2" key={entry.title}>
              <h5 className="poppins font-semibold">{entry.title}</h5>
              {entry.bullets.length > 0 && (
                <ul className="list-disc pl-4">
                  {entry.bullets.map((b, i) => (
                    <li className="poppins" key={i}>
                      {b.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <main className="bg-yellow p-6">
      <h2 className="text-3xl md:text-5xl dm-serif">Resume</h2>
      <p className="poppins mt-2">
        Below you can switch between a short overview and a detailed resume.
      </p>
      <div className="my-4">
        <button
          onClick={() => setShowDetailed((d) => !d)}
          className="border-2 border-black px-4 py-2 bg-white card-shadow"
        >
          {showDetailed ? 'Show abridged resume' : 'Show detailed resume'}
        </button>
      </div>
      {showDetailed ? (
        <section>
          <h3 className="text-2xl dm-serif">Detailed</h3>
          {renderSections(sections)}
        </section>
      ) : (
        <section>
          <h3 className="text-2xl dm-serif">Abridged</h3>
          {renderSections(abridged)}
        </section>
      )}
    </main>
  );
}
