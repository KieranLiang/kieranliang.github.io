// ============================================================
// Design: Eastern Scholar's Studio Aesthetic
// Color: Parchment white bg, Ink black text, Indigo accent, Gold highlights
// Font: LXGW WenKai (display), DM Serif Display (EN titles), DM Sans + Noto Sans SC (body)
// ============================================================

export interface Education {
  id: string;
  period: string;
  school: string;
  major: string;
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  category: string;
}

export const personalInfo = {
  name: "Kieran Liang",
  nameZh: "Kieran Liang",
  title: "AI Product Manager Intern",
  location: "",
  email: "kierankaiyanliang@gmail.com",
  github: "https://github.com/KieranLiang",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com/KieranL6903",
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/60de7ab0000000002002916d",
  bio: "AI Native Builder，致力于探索如何用AI有效提升生产力\n关注Context Engineering / Coding Agent / AIGC等领域",
  bioEn: "",
  tags: [
    { label: "AI Native Product Manager", icon: "brain" },
    { label: "AI Agent Developer", icon: "code" },
    { label: "AI Researcher", icon: "search" },
  ],
  skills: [
    "产品设计：Axure、Figma、Framer",
    "Vibe Coding：Claude Code、Codex、Cursor、Antigravity",
    "Workflow/Agent平台：Coze、n8n、Dify",
    "编程语言：Python、C/C++、SQL",
    "LLM：Llama-Factory、Llama-Index、RAG、Agent Memory",
    "AIGC：Sora、Flow、Remotion、即梦"
  ],
};

export const educations: Education[] = [
  {
    id: "edu-1",
    period: "2021.09 - 2025.06",
    school: "厦门大学",
    major: "计算机科学与技术 本科",
  },
  {
    id: "edu-2",
    period: "2022.04 - 2024.06",
    school: "厦门大学",
    major: "法学 辅修",
  },
  {
    id: "edu-3",
    period: "2023.09 - 2024.06",
    school: "山东大学",
    major: "计算机科学与技术 一年制境内交换项目",
  },
  {
    id: "edu-4",
    period: "2026.09 - 2027.06",
    school: "香港城市大学",
    major: "计算机科学 硕士",
  },
];

export const experiences: Experience[] = [
  // 实习经历
  {
    id: "intern-1",
    period: "2025.11 - 2026.02",
    role: "AI 产品经理实习生",
    company: "北京矩视智能科技有限公司",
    description: `**产品一：LifeContext**，提供实时建议、资讯与日报总结的开源浏览器插件，https://github.com/memcontext/lifecontext
**· 产品调研：**调研大量Context Engineering产品，梳理MineContext、Remio等竞品功能与市场表现并输出调研报告
**· 产品设计：**发现MVP版本产品定位模糊，主导重新定义产品定位、用户画像与使用场景，推动对50余名用户进行访谈，明确各功能需求并提出2.0版本优化方案；针对原版本界面简陋、功能混杂的问题，提出升级产品整体视觉效果、拆分各模块至独立页面的UI优化方案；设计动态悬浮球，添加陪伴元素，通过与用户建立情感链接以提升留存率；发现核心功能使用路径过深的问题，提出主动式信息刷新和推送机制与标签页展示方案，减少用户触达路径与等待时间
**· 产品实现与测试：**在Google AI Studio上优化前端视觉效果；测试产品功能并对部署时产生的问题进行代码调试
**产品二：MemContext**，多模态Agent Memory框架，https://github.com/memcontext/memcontext
**· 产品调研：**系统调研Mem0等产品，撰写调研报告以详细分析Memory技术在C端、B端与P端各场景中的应用潜力
**· 产品设计：**参与设计多模态Memory框架MemContext，负责提出记忆检索策略与上下文编排结构的优化方案；提出构建All-in-One的记忆中枢方案，在扣子、n8n等Agent平台中接入记忆插件并设计提供记忆服务的MCP与Skill，从而支持用户在跨工具与多人团队场景下使用记忆服务；基于用户实时对话与长期记忆用户画像，设计Agent对话场景下的个性化广告推荐方案，以探索降低ToC Agent产品使用记忆服务成本的商业化可行性；调研Supermemory、Mem0等记忆类产品的云服务模式，设计MemContext的云服务方案的整体业务架构与DashBoard用户界面交互逻辑
**· 产品实现与测试：**利用Vibe Coding工具完成MemContext的聊天界面广告推荐Demo与云端Dashboard的实现；负责测试扣子、n8n等插件，并在Cursor、Claude Code中测试MCP与Skill调用记忆服务的效果，并进行代码调试`,
    tags: ["ToC & ToProsumer", "产品设计", "Context Engineering", "Agent Memory", "Vibe Coding"],
    category: "实习经历",
  },
  {
    id: "intern-2",
    period: "2023.08 - 2023.11",
    role: "产品经理实习生",
    company: "清华大学智能法治研究院",
    description: `**· 需求调研：**参与某市司法局法律援助工作数字化升级项目，对当地法援体系与相关政务平台开展调研，发掘出线下法援工作信息化程度低、缺乏在线咨询平台和档案生成与管理系统等痛点，结合政策、法规、社会意见等撰写平台建设方案
**· 产品设计：**参与设计产品功能点并撰写产品需求文档，负责根据当地政府网站风格设计平台界面并用Axure绘制原型图`,
    tags: ["ToG", "产品设计"],
    category: "实习经历",
  },
  // 项目经历
  {
    id: "proj-1",
    period: "2025.01 - 2025.06",
    role: "本科毕业设计",
    company: "法律领域大模型训练与RAG系统构建",
    description: `**· 数据收集与处理：**使用Python爬虫与OCR技术从网页及PDF文档中提取信息，构建覆盖法律法规、裁判文书、法学教材与论文的100余万条预训练语料库；通过律师网爬取法律咨询数据，收集法考、法硕题库与法律AI竞赛数据，参考评测榜单任务构建30余万条指令微调数据集；利用正则表达式与大模型清洗隐私信息，确保数据的高质量与合规性
**· 增量预训练与指令微调：**基于LLaMA-Factory框架，采用LoRA方法对Qwen2.5-7B-Instruct模型进行增量预训练与指令微调，实现6%的效果提升；利用DeepSpeed优化显存占用，在单机 8×A800 环境下实现数据并行训练
**· RAG：**采用FlashRAG框架挂载法律法规知识库，以bge-large-zh-v1.5为嵌入模型，以法条为基本单元做文本切分；评测多种开源RAG框架（LlamaIndex、 RAGFlow等）以及主流嵌入模型（bge、Conan、gte）在法律任务中的效果
**· 模型评测：**在LexEval对7-14B的主流开源模型进行法律任务评测并选定基座模型；在微调过程中进行消融实验发现增量预训练对指标提升最关键；改进评测代码以支持新一代模型，并实现vLLM加速推理与GPU并行优化以降低评测时间`,
    tags: ["Continual-Pretraining", "Supervised-Finetuning", "RAG", "LLM"],
    category: "项目经历",
  },
];

// Blog posts have been moved to content/posts/*.md
// Import blogPosts from "@/lib/posts" instead of this file
