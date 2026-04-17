import { Button } from "../Button";
import { Tabbar } from "@/components/Tabbar";

import classes from "./Test.module.scss";

const Test = () => {
  return (
    <main className={classes.main}>
      <h1>Hello Test</h1>

      <Button text="Test" mode="filled" />
      <Button text="Test" mode="bezeled" />
      <Button text="Test" mode="plain" />
      <Button text="Test" mode="gray" />

      <Tabbar />
    </main>
  );
};

export default Test;
