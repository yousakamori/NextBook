import {
  Blockquote,
  InlineCode,
  CustomLink,
  Details,
  CustomImage,
  Pre,
  Summary,
  Tab,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Tabs,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Ol,
  Ul,
  Hr,
  P
} from './mdx-components'

export const componentMap = {
  table: Table,
  thead: Thead,
  tbody: Tbody,
  tr: Tr,
  td: Td,
  th: Th,
  a: CustomLink,
  img: CustomImage,
  blockquote: Blockquote,
  code: Pre,
  inlineCode: InlineCode,
  details: Details,
  summary: Summary,
  tabs: Tabs,
  tab: Tab,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  ol: Ol,
  ul: Ul,
  hr: Hr,
  p: P
}
