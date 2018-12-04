import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import wait from "waait";
import Pagination, { PAGINATION_QUERY } from "../components/Pagination";
import { MockedProvider } from "react-apollo/test-utils";

function makeMocksFor(length) {
  return [
    {
      request: { query: PAGINATION_QUERY, variables: { skip: 0, first: 4 } },
      result: {
        data: {
          itemsConnection: {
            __typename: "aggregate",
            aggregate: {
              count: length,
              __typename: "count"
            }
          }
        }
      }
    }
  ];
}

describe("<Pagination />", () => {
  it("displays a loading message", () => {
    const wrapper = mount(
      <MockedProvider>
        <Pagination page={1} />
      </MockedProvider>
    );
    const pagination = wrapper.find('[data-test="pagination"]');
    expect(wrapper.text()).toContain("Loading...");
  });
});
