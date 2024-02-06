import { render, fireEvent } from "@testing-library/react-native";
import CategoryCard from "./CategoryCard"; // adjust this import to your file structure

describe("CategoryCard", () => {
  const data = {
    id: 1,
    name: "Knitted Jumper",
    detail: "Knitted jumper with a crew neck",
    category: "Oberteile",
    brand: "QS by s.Oliver",
    price: 29.99,
    tags: { new: true, sustainable: true, premium: false },
    colorVariants: [
      {
        shoppingCart: false,
        wishList: false,
        color: {
          variant: "LightGrey",
          group: "Grey",
          value: "#bdbdbd",
        },
        pictures: {
          front: "https://media.soliver.com/i/soliver/2141220.9730_front",
          flat: "https://media.soliver.com/i/soliver/2141220.9730_flat",
          back: "https://media.soliver.com/i/soliver/2141220.9730_back",
          outfit: "https://media.soliver.com/i/soliver/2141220.9730_outfit",
        },
      },
      {
        wishList: false,
        shoppingCart: false,
        color: {
          variant: "LightBrown",
          group: "Brown",
          value: "#a1887f",
        },
        pictures: {
          front: "https://media.soliver.com/i/soliver/2141220.83W0_front",
          flat: "https://media.soliver.com/i/soliver/2141220.83W0_flat",
          back: "https://media.soliver.com/i/soliver/2141220.83W0_back",
          outfit: "https://media.soliver.com/i/soliver/2141220.83W0_outfit",
        },
      },
    ],
  };

  test("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <CategoryCard
        data={data}
        cardSize={100}
        onLikeButtonPress={() => {}}
        onOrderButtonPress={() => {}}
      />
    );
    expect(getByText(data.detail)).toBeTruthy();
    expect(getByText(`${data.price} €`)).toBeTruthy();
    data.colorVariants.forEach((variant, index) => {
      expect(getByTestId(`color_${index}`)).toBeTruthy();
    });
  });

  // test("handles like button press", () => {
  //   const onPress = jest.fn();
  //   const { getByTestId } = render(
  //     <CategoryCard
  //       data={data}
  //       cardSize={100}
  //       onLikeButtonPress={onPress}
  //       onOrderButtonPress={() => {}}
  //     />
  //   );
  //   fireEvent.press(getByTestId("like-button"));
  //   expect(onPress).toHaveBeenCalledWith(data.id);
  // });

  // test("handles order button press", () => {
  //   const onOrderButtonPressMock = jest.fn();
  //   const { getByTestId } = render(
  //     <CategoryCard
  //       data={data}
  //       cardSize={100}
  //       onOrderButtonPress={onOrderButtonPressMock}
  //     />
  //   );
  //   fireEvent.press(getByTestId("order-button"));
  //   expect(onOrderButtonPressMock).toHaveBeenCalledWith(data.id);
  // });

  // test("handles color button press", () => {
  //   const { getByTestId } = render(<CategoryCard data={data} cardSize={100} />);
  //   fireEvent.press(getByTestId("color_0"));
  //   expect(getByTestId("color_0").props.selected).toBe(true);
  // });
});
