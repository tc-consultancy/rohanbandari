
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

export default function Cert() {
  return (
    <section id="certifications" className="py-8 bg-neutral-100/80 rounded-3xl sm:py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
       
          <p className=" max-w-2xl mx-auto text-lg md:text-xl text-neutral-600">
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
  );
}
