import renderer from "react-test-renderer";
import { Filter } from "./Filter";

describe("Компонент Button", () => {
  it("Успешный рендер Button", () => {
    const setCurrentPage = jest.fn();
    const component = renderer
      .create(<Filter count={7542} perPage={10} currentPage={1} setCurrentPage={setCurrentPage} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});