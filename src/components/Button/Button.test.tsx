import * as renderer from "react-test-renderer";
import { Button } from "./Button";

describe("Компонент Button", () => {
  it("Успешный рендер компонента Button", () => {
    const onClick = jest.fn();
    const component = renderer
      .create(<Button title="Следующий" onClick={onClick} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
