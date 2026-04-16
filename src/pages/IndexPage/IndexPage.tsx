import type { FC } from "react";

import { Section, Cell } from "@telegram-apps/telegram-ui";

import { Page } from "@/components/Page.tsx";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <Section header="Magic Store App">
        <Cell subtitle="let's build something cool">Project Created</Cell>
      </Section>
    </Page>
  );
};
