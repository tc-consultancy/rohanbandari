import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { a, b,a1, b1, c1, c } from "../../assets";

// const projects = [1, 2, 3, 4, 5];
const projects = [
    {
        title: "Financial Compliance GenAI System",
        shortTitle: "Compliance-GenAI",
        type: "key",
        description: [
            "Built an LLM-powered Retrieval-Augmented Generation (RAG) pipeline using LangChain and CrewAI.",
            "Automated compliance document analysis, reducing manual audit workload by 75%.",
            "Deployed enterprise-ready workflows ensuring security, scalability, and real-time insights."
        ],
        techStack: ["LangChain", "CrewAI", "OpenAI", "Python",'AI/ML'],
        image: [a,a1]
    },
    {
        title: "Insurance Fraud Detection",
        shortTitle: "Fraud-Detection",
        type: "key",
        description: [
            "Developed SHAP-based XGBoost models deployed on AWS SageMaker for fraud detection.",
            "Enabled real-time fraud scoring for healthcare insurance claims with high accuracy.",
            "Integrated explainable AI dashboards for transparent model decisions."
        ],
        techStack: ["XGBoost", "SHAP", "AWS SageMaker", "Python",'AI/ML'],
        image: [b1,b]
    },
    {
        title: "Retail Demand Forecasting",
        shortTitle: "Retail-Forecasting",
        type: "key",
        description: [
            "Designed an LSTM/TFT forecasting system tailored for retail inventory optimization.",
            "Boosted demand prediction accuracy by 35%, reducing overstocking and shortages.",
            "Implemented scalable pipelines for continuous training and real-time forecasting."
        ],
        techStack: ["LSTM", "TFT", "TensorFlow", "Python", "AWS"],
        image: [c,c1]
    }
];


const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
        },
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    // The card to show: hovered if any, else active
    const displayedIndex = hoverIndex !== null ? hoverIndex : activeIndex;

    const scrollToIndex = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className="h-[540px] md:flex relative mt-16 md:mt-24 hidden ">
                {/* Card container */}
                <div className="h-full w-full relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={displayedIndex}
                            className="absolute inset-0 rounded-3xl bg-gradient-to-tr gap-6 flex flex-col   "
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <section className="flex gap-2  relative ">
                                <div className="bg-black/20 -rotate-6  border-2 border-neutral-300 rounded-3xl h-64 w-[420px] overflow-hidden ">
{/* imge1  */}{projects[displayedIndex].image[0] && <img src={projects[displayedIndex].image[0]} alt={projects[displayedIndex].title} className="h-full w-full object-fill" />}
                                </div>
                                <div className="bg-black/20 -rotate-6 overflow-hidden -bottom-[54%] right-[20%] rounded-3xl hidden xl:block h-48 w-[320px] absolute">
                                    {/* imge1  */}{projects[displayedIndex].image[1] && <img src={projects[displayedIndex].image[1]} alt={projects[displayedIndex].title} className="h-full w-full object-fill" />}

                                </div>
                                <div className="mt-16 -ml-4 z-10 ">
                                    <h3 className="text-4xl font-bold">{projects[displayedIndex].title}</h3>
                                    <ul className="list-disc ml-4 mt-4 text-neutral-600 text-base max-w-2xl font-medium">
                                        {
                                            projects[displayedIndex].description.map((desc,idx) => (
                                                <li key={idx}>{desc}</li>
                                            ))
                                        }
                                       </ul>
                                </div>
                            </section>
                                    <div className="mt-4 pl-12 relative p-4 bg-black rounded-3xl py-2 w-fit text-white">
                                        <p className="h-3 w-3 rounded-full bg-amber-300/30 absolute top-1/2 -translate-1/2 left-6"></p>
                                        Main Stack</div>
                            <div>
                                {
                                    projects[displayedIndex]?.techStack[0] && (
                                        <button className="px-4 py-1 bg-black rounded-full text-white rotate-6 shadow-md">{projects[displayedIndex]?.techStack[0]}</button>
                                    )
                                    
                                }
                                {
                                    projects[displayedIndex]?.techStack[1] && (
                                        <button className="px-4 py-1 bg-black rounded-full text-white rotate-[24deg] shadow-md">{projects[displayedIndex]?.techStack[1]}</button>
                                    )
                                    
                                }
                                {
                                    projects[displayedIndex]?.techStack[2] && (
                                        <button className="px-4 py-1 bg-black rounded-full text-white -rotate-[12deg] shadow-md">{projects[displayedIndex]?.techStack[2]}</button>
                                    )
                                    
                                }
                                {
                                    projects[displayedIndex]?.techStack[3] && (
                                        <button className="px-4 py-1 bg-black rounded-full text-white rotate-6 shadow-md">{projects[displayedIndex]?.techStack[3]}</button>
                                    )
                                    
                                }
                                {
                                    projects[displayedIndex]?.techStack[4] && (
                                        <button className="px-4 py-1 bg-black rounded-full text-white -rotate-[22deg] shadow-md">{projects[displayedIndex]?.techStack[4]}</button>
                                    )
                                    
                                }


                               

                            </div>



                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination pills */}
                <div className="p-4 flex flex-col items-center justify-start gap-3 z-10">
                    {projects.map((_, idx) => {
                        const isActive = idx === activeIndex;
                        const isHovered = idx === hoverIndex;

                        return (
                            <div role="button"
                                key={idx}
                                onClick={() => scrollToIndex(idx)}
                                onMouseEnter={() => setHoverIndex(idx)}
                                onMouseLeave={() => setHoverIndex(null)}
                                className={` w-48 lg:w-56 rounded-full flex items-start gap-4 transition-all p-4 duration-300 text-start cursor-pointer
                ${isActive
                                        ? "bg-neutral-200 scale-110"
                                        : isHovered
                                            ? "bg-neutral-200 scale-105"
                                            : "bg-white scale-100"
                                    }
              `}
                            >
                                <div className="h-6 w-6 flex  items-center justify-center rounded-full bg-black text-white">{idx + 1}</div>
                                <p className="font-semibold ">{_.shortTitle}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="space-y-16 mt-16 z-10 relative  md:hidden block">
                {
                    projects.map((_,idx) => (
                        <div key={idx}>
                            <div className="h-40 w-4/5 bg-neutral-200  rounded-2xl -rotate-6 border-2 border-neutral-300 overflow-hidden">
                            {_.image[0] && <img src={_.image[0]} alt={_.title} className="h-full w-full object-cover" />}
                            </div>
                            <div></div>
                            <h2 className="text-xl sm:text-2xl max-w-[270px] w-full  relative ml-auto -mt-24 font-bold  text-end">{_.title}</h2>
                            <div className={cn(_.title.length >= 18 ? "mt-0" : "mt-8", "max-w-2xl ml-2  pl-6 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-[2px] shadow-sm")}>
                                <div
                                    className="h-5 w-5 rounded-full bg-white border border-amber-50 absolute top-4 left-6 -translate-x-1/2"
                                >
                                    <span className="h-2.5 w-2.5 border-2 rounded-full bg-neutral-400 border-neutral-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "></span>
                                </div>
                                <ul className="relative  list-disc ml-4 mt-4 space-y-2.5">
                                    {
                                        _.description.map((desc,idx) => (
                                            <li key={idx}>{desc}</li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    ))
                }

            </div>

        </>
    );
}



{/* <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10">
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-black scale-125" : "bg-neutral-400"
                            }`}
                    />
                ))}
            </div> */}
