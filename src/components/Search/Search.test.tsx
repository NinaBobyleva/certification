import renderer from "react-test-renderer";
import { Search } from "./Search";

describe("Компонент Button", () => {
  it("Успешный рендер Button", () => {
    const setLogin = jest.fn();
    const component = renderer
      .create(<Search setLogin={setLogin}/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});