# AI产品经理个人网站

一个简约优雅的AI产品经理个人作品集网站，采用东方文人书房美学设计风格（「素笺」）。

![设计主题](https://img.shields.io/badge/设计主题-东方文人书房美学-indigo)
![技术栈](https://img.shields.io/badge/技术栈-React%20%2B%20TypeScript%20%2B%20Tailwind-blue)

## ✨ 特性

- 🎨 **东方美学设计** - 素笺白、玄墨色、靛青、赤金的配色方案
- 📝 **博客系统** - 支持Markdown格式的博客文章展示
- 🌓 **深色模式** - 自动/手动切换的深色主题
- 📱 **响应式布局** - 完美适配桌面端和移动端
- ⚡ **流畅动画** - Framer Motion驱动的优雅过渡效果
- 🖋️ **霞鹜文楷** - 使用LXGW WenKai中文字体，兼具传统韵味与现代可读性

## 🛠️ 技术栈

- **前端框架**: React 19 + TypeScript 5.6
- **构建工具**: Vite 7
- **样式方案**: Tailwind CSS v4
- **UI组件**: shadcn/ui + Radix UI
- **路由**: wouter
- **动画**: framer-motion
- **后端**: Express.js
- **包管理器**: pnpm

## 📋 环境要求

- Node.js 18+
- pnpm 10+

## 🚀 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

创建 `.env` 文件（可参考以下内容）：

```env
# OAuth 配置（可选）
VITE_OAUTH_PORTAL_URL=https://your-oauth-portal.com
VITE_APP_ID=your-app-id

# 网站分析（可选）
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

### 3. 启动开发服务器

```bash
pnpm dev
```

开发服务器默认在 http://localhost:3000 启动。

## 📦 构建与部署

### 生产构建

```bash
pnpm build
```

构建完成后：
- 前端资源位于 `dist/public/`
- 服务端代码位于 `dist/index.js`

### 启动生产服务器

```bash
pnpm start
```

服务器将在 http://localhost:3000 运行（可通过 `PORT` 环境变量修改）。

## 📁 项目结构

```
├── client/                 # 前端代码
│   ├── src/
│   │   ├── components/     # React组件
│   │   │   └── ui/         # shadcn/ui组件
│   │   ├── pages/          # 页面组件
│   │   ├── hooks/          # 自定义Hooks
│   │   ├── lib/            # 工具函数和数据
│   │   ├── contexts/       # React Context
│   │   ├── App.tsx         # 路由配置
│   │   ├── main.tsx        # 应用入口
│   │   └── index.css       # 全局样式和主题变量
│   ├── index.html
│   └── public/             # 静态资源
├── server/                 # Express服务端
│   └── index.ts            # 服务器入口
├── shared/                 # 客户端和服务端共享代码
│   └── const.ts            # 常量定义
├── patches/                # pnpm补丁
├── vite.config.ts          # Vite配置
├── tailwind.config.ts      # Tailwind配置
└── package.json
```
文本数据存放文件路径：client\src\lib\data.ts

## 📝 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器（带热重载） |
| `pnpm build` | 构建生产版本 |
| `pnpm start` | 启动生产服务器 |
| `pnpm check` | TypeScript类型检查 |
| `pnpm format` | 使用Prettier格式化代码 |

## 🎨 设计系统

### 颜色变量

| 名称 | 色值 | 用途 |
|------|------|------|
| parchment | #F8F6F0 | 页面背景（素笺白） |
| ink | #1C1C1E | 主文字色（玄墨色） |
| ink-light | #7C7C7C | 次要文字（烟灰色） |
| indigo | #2D5A7B | 强调色（靛青） |
| gold | #B8860B | 点缀色（赤金） |

### 字体

- **中文标题**: LXGW WenKai（霞鹜文楷）
- **中文正文**: Noto Sans SC
- **英文标题**: DM Serif Display
- **英文正文**: DM Sans

## 📄 许可证

MIT License
