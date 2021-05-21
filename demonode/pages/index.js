import { Page } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";
import { useState } from "react";
const Index = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const handleResources = (resources) => {
    setOpen(false);
    const idFromResources = resources.selection.map((product) => product.id);
    console.log(idFromResources);
  };
  return (
    <Page
      title="Product Selector"
      primaryAction={{
        content: "Select products",
        onAction: () => setOpen(true),
      }}
    >
      <ResourcePicker
        resourceType="Product"
        open={open}
        onCancel={() => setOpen(false)}
        onSelection={(resources) => handleResources(resources)}
      />
    </Page>
  );
};

export default Index;
