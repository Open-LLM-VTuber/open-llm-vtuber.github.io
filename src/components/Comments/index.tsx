import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function Comments() {
  const { colorMode } = useColorMode();


  return (
    <Giscus
      id="comments"
      repo="Open-LLM-VTuber/open-llm-vtuber.github.io"
      repoId="R_kgDOMeM4rg"
      category="Page Comments"
      categoryId="DIC_kwDOMeM4rs4Ctub5"
      mapping="pathname"
      strict="0"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="catppuccin_latte"
      lang="en"
      loading="eager"
    />
  );
}