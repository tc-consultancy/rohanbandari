import { rohan, scribble01 } from "../../assets";

export default function About() {
    return (
        <div className='relative'>
            <div className='h-44 w-44 mx-auto rounded-full bg-gray-400 relative'>
                <img src={scribble01} alt="clink" className="absolute -top-12 -right-6 h-16 w-16" />
                <img src={rohan} alt="rohan" className="h-full w-full rounded-full object-contain" />
            </div>

            <div className="space-y-3 max-w-5xl  text-center mt-8 mx-auto">
                <p className="text-3xl font-bold">Data-Driven Solutions & AI Leadership</p>
                <p className="text-[15px] md:text-base font-medium text-neutral-800">I specialize in transforming data into tangible business value, with over three years of experience building and deploying AI/ML solutions across diverse industries. My work spans from optimizing retail operations and enhancing healthcare efficiency to securing financial systems with advanced AI.</p>
                <p className="text-[15px] md:text-base font-medium text-neutral-800">I've consistently focused on delivering measurable impact. I developed recommendation engines and demand forecasting models that boosted inventory accuracy by 35% and designed fraud detection pipelines that cut fraudulent claims by 60%, providing explainable insights to analysts.</p>
                <p className="text-[15px] md:text-base font-medium text-neutral-800">My foundation in this field is built on a strong academic backgrounds</p>
                <section className="flex flex-col md:flex-row gap-12 py-4 items-center justify-center w-full">
                    <div className="h-28 flex-1 w-[95%] md:w-auto border-2 border-neutral-300 rotate-3 shadow-2xs text-start py-6 px-8 rounded-full relative">
                        <div className="bg-black h-[60px] w-[60px] md:h-[72px] md:w-[72px] rounded-full absolute -top-4 -right-4 flex items-center justify-center text-white shadow-lg">
                            <div className="text-center">
                              

                                <div className="text-xl font-bold">8.5</div>
                                <div className="text-[10px] opacity-70 -mt-1">/ 10.0</div>
                            </div>
                        </div>

                        <h4 className="text-lg md:text-xl leading-tight font-semibold">
                        Vidya Jyothi Institute Of Tech.</h4>
                        <p className="text-xs md:text-sm leading-tight text-neutral-600">Bachelor of Technology - BTech</p>
                        <p className="text-xs md:text-sm leading-tight text-neutral-600">2019 - 2023</p>
                    </div>
                    <div className="h-28 flex-1 w-[95%] md:w-auto border-2 border-neutral-300 -rotate-3 shadow-2xs text-start py-6 px-8 rounded-full relative">
                        <div className="bg-black h-[60px] w-[60px] md:h-[72px] md:w-[72px] rounded-full absolute -top-9 md:-top-4 -left-4 md:left-auto md:-right-4 flex items-center justify-center text-white shadow-lg">
                            <div className="text-center">
                            <div className="text-xl font-bold">3.72</div>
                            <div className="text-[10px] opacity-70 -mt-1">/ 4.0</div>
                            </div>
                        </div>
                        <h4 className="text-lg md:text-xl leading-tight font-semibold">University of North Texas.</h4>
                        <p className="text-xs md:text-sm leading-tight text-neutral-600">Master of Science - MS, Computer Science</p>
                        <p className="text-xs md:text-sm leading-tight text-neutral-600">2023 - 2025</p>
                    </div>
                </section>
                <p className="text-[15px] md:text-base font-medium text-neutral-800">My foundation in the field is built on a Master of Science in Computer Science from the University of North Texas, where I specialized in Artificial Intelligence and honed my skills in Python and other key technologies.</p>
                <p className="text-[15px] md:text-base font-medium text-neutral-800">Today, my focus is on Generative AI. I lead projects at Wells Fargo, where I built a compliance system using LLMs, RAG, and multi-agent pipelines. This solution dramatically improved efficiency, reducing audit review time by 75% and increasing fraud detection by 50%. I have hands-on expertise with a range of tools including LangChain, CrewAI, Pinecone, SageMaker, and Azure OpenAI, with a commitment to creating scalable, production-ready, and transparent systems.</p>

            </div>
        </div>
    )
}
