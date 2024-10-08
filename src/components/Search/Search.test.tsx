import renderer from "react-test-renderer";
import { Search } from "./Search";

describe("Компонент Search", () => {
  it("Успешный рендер компонента Search", () => {
    const setLogin = jest.fn();
    const component = renderer
      .create(<Search setLogin={setLogin}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});