import { Page } from "@shopify/polaris";

const Index = () => (
  <Page
    title="Product Selector"
    primaryAction={{
      content: "Select products",
      onAction: () => alert("Clicked"),
    }}
  />
);

export default Index;
