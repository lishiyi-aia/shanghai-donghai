export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-2",
        "no": "01",
        "title": "需求梳理与项目协同",
        "tagline": "市场需求｜资料准备｜合作跟进｜反馈改进",
        "items": [
          {
            "name": "AI教育产品需求梳理与项目协同",
            "meta": "Needs Research & Project Coordination",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "需求梳理：100+条反馈，识别高校使用诉求",
              "资料支持：30+篇指南、FAQ、教程及案例",
              "项目协同：高校活动、团队准备与合作交接",
              "反馈改进：10条建议，期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-1",
        "no": "02",
        "title": "需求调研与推广支持",
        "tagline": "价格问卷｜推广方案｜宣传资料｜AI复盘",
        "items": [
          {
            "name": "AI资讯产品需求调研与推广支持",
            "meta": "Market Research & Promotion Support",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "前期调研：用户反馈与价格问卷，提炼卖点",
              "推广支持：100+条内容、博主筛选及活动执行",
              "AI辅助：制作运营看板，定位用户流失环节",
              "效果复盘：新增注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品调研与渠道协同",
        "tagline": "前期调研｜英文宣传｜渠道排期｜周度复盘",
        "items": [
          {
            "name": "ZUS Coffee新品调研与渠道协同",
            "meta": "New-Product Research & Channel Coordination",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品调研：用户偏好、社媒反馈与竞品内容",
              "宣传制作：50条Instagram内容与英文文案",
              "渠道配合：线上首发及FamilyMart素材、排期",
              "周度复盘：15+次内容复盘，协同粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-2",
        "no": "01",
        "title": "Needs & Project Coordination",
        "tagline": "Needs · Materials · Partners · Feedback",
        "items": [
          {
            "name": "AI Education: Needs Research & Project Coordination",
            "meta": "Needs Research & Project Coordination",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Needs: 100+ feedback items across university use cases",
              "Materials: 30+ guides, FAQs, tutorials and use cases",
              "Coordination: university events, internal teams and partnership handoff",
              "Review: 10 suggestions; core-feature usage +30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-1",
        "no": "02",
        "title": "Market Research & Promotion",
        "tagline": "Pricing · Planning · Materials · AI Review",
        "items": [
          {
            "name": "AI Information Product: Market Research & Promotion Support",
            "meta": "Market Research & Promotion Support",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Research: feedback and pricing surveys informed product messages",
              "Support: 100+ posts, creator screening and event execution",
              "AI: dashboard creation to identify user journey drop-offs",
              "Review: registrations +50% versus prior week; first-topic rate approx. +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Research & Channel Coordination",
        "tagline": "Research · English Materials · Schedules · Review",
        "items": [
          {
            "name": "ZUS Coffee: New-Product Research & Channel Coordination",
            "meta": "New-Product Research & Channel Coordination",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: audience preferences, social feedback and competitor content",
              "Materials: 50 Instagram posts and English copy",
              "Channels: online launch and FamilyMart assets and schedules",
              "Review: 15+ content reviews; contributed to 11k+ follower growth"
            ]
          }
        ]
      }
    ]
  }
}


export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
