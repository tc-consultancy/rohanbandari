import { useEffect, useState } from "react";
import CircularText from "./circular-text";
import { particle01b } from "../../assets";

interface PathData {
  id: string;
  d: string;
}

interface Experience {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  summary: string[];
  containerClassName: string;
  articleClassName: string;
}

const experiences: Experience[] = [
  {
    id: "nail_1",
    title: "Wells",
    company: "Fargo",
    role: "Data Scientist / Generative AI Engineer",
    duration: "May 2024 - Present",
    summary: [
      "Designed GenAI-powered risk and compliance systems using LangChain, RAG, and CrewAI.",
      "Built multi-agent pipelines and fine-tuned GPT-4o and LLaMA 3 for fraud detection and financial modeling.",
      "Reduced document review time by 75% and improved fraud detection by 50%."
    ],
    containerClassName: "w-full flex justify-end",
    articleClassName: "h-[430px] aspect-[9/12] md:aspect-[9/10] relative md:mr-20 -rotate-12",
  },
  {
    id: "nail_2",
    title: "Omega ",
    company: "Healthcare",
    role: "Data Scientist (ML)",
    duration: "Apr 2022 - Jul 2023",
    summary: [
      "Built ML models for fraud detection, cost prediction, and anomaly detection using XGBoost and LightGBM.",
      "Deployed models on AWS SageMaker with explainability through SHAP.",
      "Designed HIPAA-compliant dashboards to track clinical outcomes, reducing fraudulent claims by 60% and boosting process efficiency by 35%."
    ],
    containerClassName: "w-full flex justify-start mt-12 md:-mt-12 relative",
    articleClassName: "h-[430px] aspect-[9/12] md:aspect-[9/10]  rotate-12 md:ml-12",
  },
  {
    id: "nail_3",
    title: "Aditya Birla",
    company: "Retail Ltd.",
    role: "Associate Data Scientist",
    duration: "Jun 2021 - Mar 2022",
    summary: [
      "Developed NLP solutions for sentiment analysis and fake review detection using BERT and ABSA.",
      "Built product recommendation engines and demand forecasting models with LSTM and TFT.",
      "Analyzed over 10M customer transactions, resulting in a 35% increase in inventory efficiency and 18% rise in basket size."
    ],
    containerClassName: "w-full flex justify-end mt-12 relative",
    articleClassName: "h-[430px] mr-0 md:mr-24 -rotate-[8deg]  aspect-[9/12] md:aspect-[9/10] relative!",
  },
];

export default function NailConnectionsDemo() {
  const [paths, setPaths] = useState<PathData[]>([]);

  // Calculate center of element relative to viewport (no scroll offset)
  const center = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  };

  const updatePaths = () => {
    const nail1 = document.getElementById("nail_1");
    const nail2 = document.getElementById("nail_2");
    const nail3 = document.getElementById("nail_3");
    if (!nail1 || !nail2 || !nail3) return;

    const c1 = center(nail1);
    const c2 = center(nail2);
    const c3 = center(nail3);

    const newPaths: PathData[] = [
      {
        id: "path1",
        d: `M${c1.x},${c1.y} C${c1.x},${(c1.y + c2.y) / 2} ${c2.x},${(c1.y + c2.y) / 2} ${c2.x},${c2.y}`,
      },
      {
        id: "path2",
        d: `M${c2.x},${c2.y} C${c2.x},${(c2.y + c3.y) / 2} ${c3.x},${(c2.y + c3.y) / 2} ${c3.x},${c3.y}`,
      },
    ];
    setPaths(newPaths);
  };

  useEffect(() => {
    updatePaths();
    window.addEventListener("resize", updatePaths);
    window.addEventListener("scroll", updatePaths);
    return () => {
      window.removeEventListener("resize", updatePaths);
      window.removeEventListener("scroll", updatePaths);
    };
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto w-full ">
    
        {experiences.map((exp,index) => (
          <div key={exp.id} className={`${exp.containerClassName}`}>
            {
              index === 0 &&(
              <CircularText
              text="MY*WORK*EXPERIENCE*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class text-black/30! absolute! top-16 right-24 "
            />)
            }
            

            <article className={`${exp.articleClassName} bg-white z-10 rounded-[32px] relative shadow-2xl border border-neutral-200`}>
            {
              index === 2 && 
              (
                         <img src={particle01b} alt="particle" className="h-24 w-24 absolute top-0 -left-40 fill-neutral-500!" /> 

              )

            }
              <div
                id={exp.id}
                className="h-6 w-6 rounded-full bg-black absolute  top-4 left-1/2 -translate-x-1/2"
              >
                <span className="h-4 w-4 border-2 rounded-full bg-black border-neutral-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "></span>
              </div>
              <div className=" px-4 py-4 pt-12 flex flex-col h-full">
                <h3 className="font-bold text-2xl">{exp.title} <span className="text-neutral-500">{exp.company}</span></h3>
                <span className="flex mb-1 text-[13px] md:text-sm text-neutral-500 justify-between">
                  <span>{exp.role}</span>
                  <span >{exp.duration}</span>
                </span>
                <div className="bg-neutral-200 p-2 flex-1 h-full w-full rounded-2xl ">
                  <h3 className="font-bold text-lg mt-4">Role Summary</h3>
                  <ul className="list-disc ml-4 text-sm md:text-sm space-y-2 pt-2 text-neutral-600">
                    {exp.summary.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        ))}
      </section>

      <svg
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="black"
            strokeWidth={2}
            fill="none"
            strokeDasharray="8 6"
          />
        ))}
      </svg>
    </>
  );
}


{/* <section className="max-w-7xl mx-auto w-full">
        <div className="w-full flex justify-end">
          <article className="h-[430px] aspect-[9/10] mr-20 -rotate-12 bg-white z-10 rounded-[32px] relative shadow-2xl border border-neutral-200">
            <div
              id="nail_1"
              className="h-6 w-6 rounded-full bg-black absolute  top-4 left-1/2 -translate-x-1/2"
            >
              <span className="h-4 w-4 border-2 rounded-full bg-black border-neutral-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "></span>
            </div>
            <div className=" px-4 py-4 pt-12 flex flex-col h-full">
              <h3 className="font-bold text-2xl">Roojh <span className="text-neutral-500">India.</span></h3>
              <span className="flex mb-1 text-sm text-neutral-500 justify-between">

                <span>Full Stack SDE Intern</span>
                <span >{"Aug 2024 - Jan 2025"}</span>
              </span>
              <div className="bg-neutral-200 p-2 flex-1 h-full w-full rounded-2xl ">
              <h3 className="font-bold text-lg mt-4">Role Summary</h3>
                <ul className="list-disc ml-4 text-sm space-y-2 pt-2 text-neutral-600">
                  <li>
                    Worked with AWS services including Amplify, EventBridge, Lambda, EC2, S3, DynamoDB, and AppSync.
                  </li>
                  <li>
                    Built full-stack features handling both frontend development and backend integrations.
                  </li>
                  <li>
                  Engineered a real-time messaging system using AWS AppSync and WebSockets for seamless communication
                  </li>
                </ul>
              </div>
            </div>

          </article>
        </div>
        <div className="w-full flex justify-start -mt-12">
          <article className="relative h-[430px] aspect-[9/10] rotate-12 ml-12 bg-white z-10 rounded-[32px] shadow-2xl border border-neutral-200">
            <div
              id="nail_2"
              className="h-6 w-6 rounded-full bg-black absolute top-4 left-1/2 -translate-x-1/2"
            >
              <span className="h-4 w-4 border-2 rounded-full bg-black border-neutral-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "></span>
            </div>
            <div className=" px-4 py-4 pt-12 flex flex-col h-full">
              <h3 className="font-bold text-2xl">Taste<span className="text-neutral-500">Mate</span></h3>
              <span className="flex mb-1 text-sm text-neutral-500 justify-between">

                <span>Full Stack Developer Intern</span>
                <span >{"Nov 2023 - Apr 2024"}</span>
              </span>
              <div className="bg-neutral-200 p-2 flex-1 h-full w-full rounded-2xl ">
              <h3 className="font-bold text-lg mt-4">Role Summary</h3>
                <ul className="list-disc ml-4 text-sm space-y-2 pt-2 text-neutral-600">
                  <li>
                  Developed a mobile food app with vanilla React Native and Firebase, featuring real-time chat and social media
                  integration</li>
                  <li>
                  Integrated OpenAI’s language models for personalized recipe recommendations based on user preferences.</li>
                  <li>
                  Designed a clean, user-centric UI with favorites, sharing, and in-app messaging to enhance engagement.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        <div className="w-full flex justify-end -mt-12">
          <article className="relative h-[430px] mr-24 -rotate-[8deg] aspect-[9/10] bg-white z-10 rounded-[32px] shadow-2xl border border-neutral-200">
            <div
              id="nail_3"
              className="h-6 w-6 rounded-full bg-black absolute top-4 left-1/2 -translate-x-1/2"
            >
              <span className="h-4 w-4 border-2 rounded-full bg-black border-neutral-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "></span>
            </div>
            <div className=" px-4 py-4 pt-12 flex flex-col h-full">
              <h3 className="font-bold text-2xl">Spill<span className="text-neutral-500">Mate</span></h3>
              <span className="flex mb-1 text-sm text-neutral-500 justify-between">

                <span>Full Stack SDE Intern</span>
                <span >{"May 2024 - Jul 2025"}</span>
              </span>
              <div className="bg-neutral-200 p-3 flex-1 h-full w-full rounded-2xl ">
                <h3 className="font-bold text-lg mt-4">Role Summary</h3>
                <ul className="list-disc ml-4 text-sm space-y-2 pt-2 text-neutral-600">
                  <li>
                  Independently developed a role-based multi-role dashboard from inception to deployment using Tanstack Query,
                  Shadcn, and MongoDB</li>
                  <li>
                  Overcame challenges in implementing complex role-based permissions and data management
                  </li>
                  <li>
                  Designed and implemented the dashboard’s architecture, prioritizing scalability and maintainability
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section> */}
