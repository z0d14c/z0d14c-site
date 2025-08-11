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
    <main className="bg-yellow p-6 print:bg-white">
      <div className="hidden print:block mb-4">
        <h1 className="text-xl font-bold">Thomas Augustus Grice</h1>
        <p>Austin, TX</p>
        <p>github.com/z0d14c</p>
        <p>grice.city</p>
      </div>
      <h2 className="text-3xl md:text-5xl dm-serif print:hidden">Resume</h2>
      <div className="my-4 print:hidden">
        <button
          onClick={() => setShowDetailed((d) => !d)}
          className="border-2 border-black px-4 py-2 bg-white card-shadow"
        >
          {showDetailed ? 'Show abridged resume' : 'Show detailed resume'}
        </button>
      </div>
      {showDetailed ? (
        <section>{renderSections(sections)}</section>
      ) : (
        <section>{renderSections(abridged)}</section>
      )}
    </main>
  );
}
