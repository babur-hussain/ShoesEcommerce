import { describe, it, expect, beforeEach } from "vitest";
import { useCartStore } from "@/store/cart";

describe("Cart Store", () => {
  beforeEach(() => {
    useCartStore.setState({ items: [] });
  });

  it("should start with an empty cart", () => {
    const { items } = useCartStore.getState();
    expect(items).toEqual([]);
  });

  it("should add an item to the cart", () => {
    const { addItem } = useCartStore.getState();
    addItem({ id: 1, name: "Nike Air Max 90", price: "130.00", image: null });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0].name).toBe("Nike Air Max 90");
    expect(items[0].quantity).toBe(1);
  });

  it("should increment quantity when adding the same item", () => {
    const { addItem } = useCartStore.getState();
    addItem({ id: 1, name: "Nike Air Max 90", price: "130.00", image: null });
    addItem({ id: 1, name: "Nike Air Max 90", price: "130.00", image: null });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0].quantity).toBe(2);
  });

  it("should remove an item from the cart", () => {
    const { addItem } = useCartStore.getState();
    addItem({ id: 1, name: "Nike Air Max 90", price: "130.00", image: null });

    const { removeItem } = useCartStore.getState();
    removeItem(1);

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });

  it("should clear the cart", () => {
    const { addItem } = useCartStore.getState();
    addItem({ id: 1, name: "Nike Air Max 90", price: "130.00", image: null });
    addItem({ id: 2, name: "Nike Dunk Low", price: "115.00", image: null });

    const { clearCart } = useCartStore.getState();
    clearCart();

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });

  it("should calculate total items", () => {
    const { addItem } = useCartStore.getState();
    addItem({ id: 1, name: "Nike Air Max 90", price: "130.00", image: null });
    addItem({ id: 1, name: "Nike Air Max 90", price: "130.00", image: null });
    addItem({ id: 2, name: "Nike Dunk Low", price: "115.00", image: null });

    const { totalItems } = useCartStore.getState();
    expect(totalItems()).toBe(3);
  });

  it("should calculate total price", () => {
    const { addItem } = useCartStore.getState();
    addItem({ id: 1, name: "Nike Air Max 90", price: "130.00", image: null });
    addItem({ id: 2, name: "Nike Dunk Low", price: "115.00", image: null });

    const { totalPrice } = useCartStore.getState();
    expect(totalPrice()).toBe(245);
  });
});
