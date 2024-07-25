import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Breadcrumb from "src/navigation/Breadcrumb/Breadcrumb";

const mockBreadcrumb = [
  { id: 1, children: "Home", href: "/" },
  { id: 2, children: "Products", href: "/products" },
  { id: 3, children: "Details" },
];
const mockBreadcrumbCustomClass = [
  { id: 1, children: "Home", href: "/" },
  { id: 2, children: "Products", href: "/products", className: "custom-class" },
  { id: 3, children: "Details" },
];
const mockBreadcrumbsLastHasHref = [
  { id: 1, children: "Home", href: "/" },
  { id: 2, children: "Products", href: "/products" },
  { id: 3, children: "Details", href: "/products/1" },
];
const mockBreadcrumbsOneDisabled = [
  { id: 1, children: "Home", href: "/" },
  { id: 2, children: "Products", href: "/products", isDisabled: true },
  { id: 3, children: "Details", href: "/products/1" },
];
const breadcrumbsLargeNumber = [
  { id: 1, children: "MiaHome", href: "/" },
  { id: 2, children: "Category 1", href: "/" },
  { id: 3, children: "Subcategory 1.1", href: "/" },
  { id: 4, children: "Product A", href: "/" },
  { id: 5, children: "Category 2", href: "/" },
  { id: 6, children: "Subcategory 2.1", href: "/" },
  { id: 7, children: "Product B", href: "" },
];

describe("<Breadcrumb /> component with mock data", () => {
  it("should render correctly with breadcrumb items", () => {
    render(<Breadcrumb items={mockBreadcrumb} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Details")).toBeInTheDocument();
  });

  it("should render correctly with href on the last breadcrumb", () => {
    render(<Breadcrumb items={mockBreadcrumbsLastHasHref} />);
    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("Details")).toHaveAttribute("href", "/products/1");
  });

  it("should render correctly with one disabled breadcrumb", () => {
    render(<Breadcrumb items={mockBreadcrumbsOneDisabled} />);
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Products")).toHaveAttribute(
      "data-disabled",
      "true",
    );
  });

  it("should render correctly with a large number of breadcrumbs", () => {
    render(<Breadcrumb items={breadcrumbsLargeNumber} />);
    expect(screen.getByText("MiaHome")).toBeInTheDocument();
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Subcategory 1.1")).toBeInTheDocument();
    expect(screen.getByText("Product A")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
    expect(screen.getByText("Subcategory 2.1")).toBeInTheDocument();
    expect(screen.getByText("Product B")).toBeInTheDocument();
  });

  it("should apply custom class name on one elem correctly", () => {
    render(<Breadcrumb items={mockBreadcrumbCustomClass} />);
    const breadcrumbLink = screen.getByText("Products");
    expect(breadcrumbLink).toHaveClass("custom-class");
  });

  it("should display a disabled state", () => {
    render(<Breadcrumb isDisabled items={mockBreadcrumb} />);

    const homeLink = screen.getByText("Home");
    expect(homeLink).toHaveAttribute("data-disabled", "true");
    const productsLink = screen.getByText("Products");
    expect(productsLink).toHaveAttribute("data-disabled", "true");
    const detailsLink = screen.getByText("Details");
    expect(detailsLink).toHaveAttribute("data-disabled", "true");
  });
});
