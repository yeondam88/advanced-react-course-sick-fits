function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe("mocking learning", () => {
  it("mocks a reg function", () => {
    const fetchDogs = jest.fn();
    fetchDogs("snickers");
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith("snickers");
    fetchDogs("snikers");
    expect(fetchDogs).toHaveBeenCalledTimes(2);
  });

  it("can create a person", () => {
    const me = new Person("lloyd", ["pizza", "hamburger"]);
    expect(me.name).toBe("lloyd");
  });

  it("can fetch foods", async () => {
    const me = new Person("lloyd", ["pizza", "hamburger"]);
    // mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(["pizza", "sushi"]);
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toContain("pizza");
  });
});
