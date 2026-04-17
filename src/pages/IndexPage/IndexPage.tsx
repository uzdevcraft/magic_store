import { type FC } from "react";

import { Section, Cell, Button } from "@telegram-apps/telegram-ui";
import { Page } from "@/components/Page.tsx";
import { InitDataPage } from "../InitDataPage";

export const IndexPage: FC = () => {
  return (
    <Page back={false}>
      <Section header="Magic Store App">
        <Cell subtitle="let's build something cool">Project Created</Cell>
      </Section>
      <Section header="Magic Store App">
        <InitDataPage />
      </Section>
      <Button mode="filled" size="s">
        Action
      </Button>
    </Page>
  );
};
