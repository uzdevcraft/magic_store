import { Page } from "@/components/Page";
import { InitDataPage } from "../InitDataPage";
import { Section, Cell, Button } from "@telegram-apps/telegram-ui";

const IndexPage = () => {
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

export default IndexPage;
