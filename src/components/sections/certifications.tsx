
interface Certification {
  name: string;
  issuer: string;
  platform?: string;
  logoText: string;
  url: string;
}

const certificationsData: Certification[] = [
  {
    name: "AI For Everyone",
    issuer: "DeepLearning.AI",
    platform: "Coursera",
    logoText: "AI",
    url: "#", // Replace with actual credential URL
  },
  {
    name: "COVID19 Data Analysis Using Python",
    issuer: "Coursera",
    logoText: "DA",
    url: "#", // Replace with actual credential URL
  },
  {
    name: "Create Your Own ChatGPT-like Website with Open Source LLMs",
    issuer: "IBM",
    logoText: "IBM",
    url: "https://courses.cognitiveclass.ai/certificates/93ddbe396aac4db6b302471ef658465d#", // Replace with actual credential URL
  },
  {
    name: "Database Programming with SQL",
    issuer: "Oracle",
    logoText: "SQL",
    url: "#", // Replace with actual credential URL
  },
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    logoText: "AZ",
    url: "#", // Replace with actual credential URL
  },
  {
    name: "Programming Essentials in Python",
    issuer: "Cisco",
    logoText: "Py",
    url: "#", // Replace with actual credential URL
  },
];

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <div className="bg-white  rounded-4xl shadow-2xs overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out h-full flex flex-col">
    <div className="p-6 flex-grow">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center h-12 w-12  bg-black rounded-full text-white">
            <span className="font-bold text-lg">{cert.logoText}</span>
          </span>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
          <p className="mt-1 text-sm text-gray-600">
            by <span className="font-semibold">{cert.issuer}</span>
            {cert.platform && cert.platform !== cert.issuer && (
              <> on <span className="font-semibold">{cert.platform}</span></>
            )}
          </p>
        </div>
      </div>
    </div>
    {
        cert.url !== '#' && (
      <a
        href={cert.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm   w-full bg-gray-200 hover:bg-gray-400 px-6 py-3 text-center font-semibold transition-colors duration-200"
      >
        Show Credential &rarr;
      </a>
        )
    }
  </div>
);

interface Publication {
  title: string;
  journal: string;
  description: string;
  url: string;
}

const publicationData: Publication = {
  title: "Question Answering System",
  journal: "Journal of Emerging Technologies and Innovative Research",
  description:
    "Published a paper on Building a QA system that leverages advanced NLP techniques and ALBERT model optimizations (Sentence Order Prediction, Parameter Sharing) to deliver accurate responses to natural language queries. Focused on linguistic analysis, information retrieval, and real-world applications. Highlights skills in model fine-tuning, dataset preparation, and Python-based implementation relevant to GenAI and intelligent data systems.",
  url: "https://www.jetir.org/view?paper=JETIR2304508",
};

const PublicationCard = ({ pub }: { pub: Publication }) => (
  <div className="bg-white rounded-4xl shadow-2xs overflow-hidden h-full flex flex-col">
    <div className="p-6 flex-grow">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="inline-flex items-center justify-center h-12 w-12 bg-black rounded-full text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-gray-900">{pub.title}</h3>
          <p className="mt-1 text-sm text-gray-600">
            Published in <span className="font-semibold">{pub.journal}</span>
          </p>
        </div>
      </div>
      <p className="mt-6 text-base text-neutral-700 leading-relaxed">{pub.description}</p>
    </div>
    {pub.url !== '#' && (
      <a
        href={pub.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm w-full bg-gray-200 hover:bg-gray-400 px-6 py-3 text-center font-semibold transition-colors duration-200"
      >
        Show Publication &rarr;
      </a>
    )}
  </div>
);

export default function Cert() {
  return (
    <>
      <section id="certifications" className="py-8 bg-neutral-100/80 rounded-3xl sm:py-12 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Certifications
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-600">
              My commitment to continuous learning and professional development.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certificationsData.map((cert) => (
              <CertificationCard key={cert.name} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="mt-16 py-8 bg-neutral-100/80 rounded-3xl sm:py-12 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Publications
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-neutral-600">
              My contributions to research and development.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto">
            <PublicationCard pub={publicationData} />
          </div>
        </div>
      </section>
    </>
  );
}
