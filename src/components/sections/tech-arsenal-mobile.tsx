import React from 'react';
import { cn } from '../../lib/utils';

// Skills array with your technologies
const skills = [
  'Python', 'SQL',
  'Jupyter Notebook', 'JupyterLab', 'Amazon SageMaker', 'Google Colab', 'VS Code', 'PyCharm',
  'NumPy', 'Pandas',"And More"
  //  'Matplotlib', 'Seaborn', 'SciPy', 'Power BI', 'Tableau', 'Plotly', 'Excel',
  // 'CNNs', 'RNNs', 'LSTM', 'VAEs', 'GANs', 'Attention Mechanisms', 'Self-Attention', 'PyTorch', 'TensorFlow',
  // 'OpenAI LLMs', 'Hugging Face', 'LangChain', 'RAG', 'AutoGen', 'CrewAI', 'LangGraph',
  // 'Chroma', 'Faiss', 'Milvus', 'Pinecone',
  // 'Chain of Thought (CoT)', 'Few-shot Prompting',
  // 'MLflow', 'Kedro', 'Apache Airflow', 'Docker', 'Kubernetes', 'FastAPI',
  // 'AWS (S3, SageMaker)', 'Azure (OpenAI, AKS)', 'Google Cloud Platform (Vertex AI)',
  // 'MongoDB', 'NoSQL', 'Snowflake', 'Git', 'Bitbucket',
  // 'SHAP', 'LIME', 'AUC-ROC',
  // 'Scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'Logistic Regression', 'Autoencoders', 'CatBoost', 'ARIMA', 'SARIMA', 'SARIMAX', 'Prophet', 'TFT',
  // 'NLTK', 'spaCy', 'Gensim', 'Transformers', 'BERT', 'GPT', 'NER', 'Sentiment Analysis', 'OpenAI Embeddings', 'Chatbots', 'Information Extraction'
];

const TechArsenalMobile: React.FC = () => {
  return (
    <div className="relative w-full px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {skills.map((skill, index) => {
          // Calculate row index based on grid columns
          // For responsive design, we'll use a base calculation that works across breakpoints
          const baseCols = 2; // Base columns for mobile
          const rowIndex = Math.floor(index / baseCols);
          const isEvenRow = rowIndex % 2 === 0;
          
          return (
            <SkillCard 
              key={skill} 
              skill={skill} 
              className={isEvenRow ? 'translate-x-4' : '-translate-x-4'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechArsenalMobile;


const SkillCard = ({
  skill,
  className
}: {
  skill: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl py-2 px-3 transition-all duration-300 hover:scale-105",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        className
      )}
    >
      <div className="flex items-center justify-center p-2 bg-neutral-300/40 rounded-3xl min-h-[60px]">
        <span className="text-sm font-semibold text-gray-800 text-center leading-tight">
          {skill}
        </span>
      </div>
    </div>
  );
};