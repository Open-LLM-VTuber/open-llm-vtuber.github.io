import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "Open LLM Vtuber",
  tagline: "与你的专属 Live2D AI 虚拟伴侣进行实时语音互动",
  customFields: {
    thirdline: "支持所有主流大语言模型，跨平台运行",
    showcaseImages: ["img/i1.jpg", "img/i2.jpg", "img/i3.jpg", "img/i4.jpg"],
  },
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://open-llm-vtuber.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Open-LLM-VTuber", // Usually your GitHub org/user name.
  projectName: "Open-LLM-VTuber-Docs", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
      "zh-Hans": {
        label: "简体中文",
        direction: "ltr",
        htmlLang: "zh-CN",
        calendar: "gregory",
        path: "zh-Hans",
      },
    },
  },

  themes: ["@docusaurus/theme-mermaid"],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },

  // Add the Dify client module
  clientModules: [
    './src/clientModules/difyIntegration.js',
  ],

  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_DLpdYyLOud1ZW0yXoLTCsaKQRPYCBpkp8kfBOnC7cix",
        appUrl: "https://us.i.posthog.com", // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false, // optional
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/Open-LLM-VTuber/Open-LLM-VTuber-Docs/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/Open_LLM_VTuber_Social.png",
    navbar: {
      title: "Open LLM Vtuber",
      logo: {
        alt: "Open LLM VTuber Logo",
        src: "img/open_llm_vtuber.png",
      },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Documentation",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/t41372/open-llm-vtuber",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "快速上手",
              to: "/docs/category/快速上手",
            },
            {
              label: "详细指南",
              to: "/docs/category/详细指南",
            },
            {
              label: "API 文档",
              to: "/docs/category/API",
            },
          ],
        },
        {
          title: "社区",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/t41372/open-llm-vtuber",
            },
            {
              label: "Discord",
              href: "https://discord.gg/3UDA8YFDXx",
            },
            {
              label: "QQ 群聊",
              href: "https://qm.qq.com/q/Bo63JeEiC4",
            },
            {
              label: "QQ 频道",
              href: "https://pd.qq.com/s/tt54r3bu",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "博客",
              to: "/blog",
            },
            {
              label: "问题反馈",
              href: "https://github.com/t41372/open-llm-vtuber/issues",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open LLM VTuber. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "PB6QVXEO9H",
      apiKey: "7029ae39403dd6e8515c305572489bb5",
      indexName: "llmvtuber",
      contextualSearch: true,
      insights: true,
      searchPagePath: "search",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
